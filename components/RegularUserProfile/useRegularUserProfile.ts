import { useState, useRef, useEffect } from 'react';
import { useFormik, FieldArray, FormikProvider } from 'formik';
import {
  getRegularUserFormInitialValue,
  getRegularUserFullFormInitialValue,
  InputArrayProps,
  useHeader,
} from 'components';
import { userProfileSchema } from 'schema';
import { useTranslate } from 'hooks';
import {
  makeEmailPrimaryHandler,
  removeUserEMailHandler,
  updateRegularUserHandler,
} from 'services';
import { toast } from 'react-toastify';
import { useSession, signOut } from 'next-auth/react';

const useRegularUserProfile = () => {
  const [inputsArray, setInputsArray] = useState([] as InputArrayProps[]);
  const [file, setFile] = useState(null as File | null);
  const hiddenFileInput = useRef(null);
  const [editUsername, setEditUsername] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [isOpenInputModal, setIsOpenInputModal] = useState(false);
  const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);
  const [isChangeNameDialogOpen, setIsChangeNameDialogOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [openEmailModal, setOpenEmailModal] = useState(false);
  const [makeChanges, setMakeChanges] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [newName, setNewName] = useState('');
  const { userDetails, router } = useHeader();
  const { data: session } = useSession();
  const { t } = useTranslate();

  let token: string | undefined = '';

  if (userDetails?.provider !== 'google') {
    token = session?.user?.user?.token;
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues:
      getRegularUserFullFormInitialValue(userDetails as any) ||
      getRegularUserFormInitialValue(),

    onSubmit: async (values) => {
      localStorage.setItem(
        'secondaryEmails',
        JSON.stringify(values.secondaryEmails)
      );

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
      formData.append('token', token as string);
      try {
        const response = await updateRegularUserHandler(
          formData,
          userDetails?._id as string
        );
        if (response.status === 200) {
          toast.success(t('updated'));
          setUpdateStatus(true);
        }
      } catch (error) {
        toast.error(t('error'));
        setUpdateStatus(false);
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

  const primaryEmail = async (email: string) => {
    const data = {
      primaryEmail: userDetails?.email,
      secondaryEmail: email,
    };
    try {
      const response = await makeEmailPrimaryHandler(
        data,
        userDetails?._id as string
      );
      if (response.status === 200) {
        signOut();
        router.push('/');
      }
    } catch (error) {
      toast.error(t('error'));
    }
  };

  useEffect(() => {
    if (file !== null) {
      setIsEditable(true);
      setIsOpenUploadModal(true);
    }
  }, [file]);

  useEffect(() => {
    if (updateStatus) {
      setMakeChanges(false);
      setOpenEmailModal(false);
    }
  }, [updateStatus]);

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
    primaryEmail,
    newName,
    setNewName,
    isOpenInputModal,
    setIsOpenInputModal,
    isOpenUploadModal,
    setIsOpenUploadModal,
    isChangeNameDialogOpen,
    setIsChangeNameDialogOpen,
    isConfirmDialogOpen,
    setIsConfirmDialogOpen,
    isEditable,
    setIsEditable,
    router,
    openEmailModal,
    setOpenEmailModal,
    makeChanges,
    setMakeChanges,
    changePasswordModal,
    setChangePasswordModal,
  };
};

export default useRegularUserProfile;
