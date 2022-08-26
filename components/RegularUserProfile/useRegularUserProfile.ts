import { useState, useRef } from 'react';
import { useFormik, FieldArray, FormikProvider } from 'formik';
import {
  getRegularUserFormInitialValue,
  getRegularUserFullFormInitialValue,
  InputArrayProps,
} from 'components';
import { userProfileSchema } from 'schema';
import { useHeader } from 'components';
import { useTranslate } from 'hooks';
import { removeUserEMailHandler, updateRegularUserHandler } from 'services';
import { toast } from 'react-toastify';

const useRegularUserProfile = () => {
  const [inputsArray, setInputsArray] = useState([] as InputArrayProps[]);
  const [file, setFile] = useState(null as File | null);
  const hiddenFileInput = useRef(null);
  const [editUsername, setEditUsername] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const { userDetails } = useHeader();
  const { t } = useTranslate();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues:
      getRegularUserFullFormInitialValue(userDetails as any) ||
      getRegularUserFormInitialValue(),

    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('userName', values.userName as string);
      formData.append('email', values.email as string);
      formData.append('poster', file as File);
      formData.append(
        'secondaryEmails',
        JSON.stringify(
          values.secondaryEmails as Array<{
            secondary: boolean;
            isVerified: boolean;
            secondaryEmail: string;
          }>
        )
      );
      formData.append('password', values.password as string);
      formData.append('oldPassword', values.oldPassword as string);
      try {
        const response = await updateRegularUserHandler(
          formData,
          userDetails?._id as string
        );
        if (response.status === 200) {
          toast.success(t('updated'));
        }
      } catch (error) {
        toast.error(t('error'));
      }
    },

    validationSchema: userProfileSchema,
  });

  const removeUserEmail = async (email: string) => {
    const data = {
      email: email,
    };
    try {
      const response = await removeUserEMailHandler(
        data,
        userDetails?._id as string
      );
      if (response.status === 200) {
        toast.success(t('emailRemoved'));
      }
    } catch (error) {
      toast.error(t('error'));
    }
  };

  return {
    formik,
    userDetails,
    t,
    inputsArray,
    setInputsArray,
    setFile,
    file,
    hiddenFileInput,
    FieldArray,
    FormikProvider,
    editUsername,
    setEditUsername,
    editPassword,
    setEditPassword,
    removeUserEmail,
  };
};

export default useRegularUserProfile;
