import { useFormik } from 'formik';
import { getRegularUserFormInitialValue, InputArrayProps } from 'components';
import { userProfileSchema } from 'schema';
import { useHeader } from 'components';
import { useTranslate } from 'hooks';
import { useState, useRef } from 'react';

const useRegularUserProfile = () => {
  const [inputsArray, setInputsArray] = useState([] as InputArrayProps[]);
  const [file, setFile] = useState(null as File | null);
  const hiddenFileInput = useRef(null);

  console.log(inputsArray);
  const { userDetails } = useHeader();
  const { t } = useTranslate();

  const addInput = () => {
    setInputsArray((s) => {
      return [
        ...s,
        {
          secondary: true,
          isVerified: false,
          secondaryEmail: '',
          id: s.length + 1,
        },
      ];
    });
  };

  const handleChangeInputs = (e: {
    preventDefault: () => void;
    target: { id: any; value: string };
  }) => {
    e.preventDefault();

    const index = e.target.id;
    setInputsArray((s) => {
      const newArr = s.slice();
      newArr[index].secondaryEmail = e.target.value;

      return newArr;
    });
  };

  const removeEmail = (e: any) => {
    e.preventDefault();

    const index = e.target.id;
    setInputsArray((s: any) => {
      const newArr = s.slice();
      newArr.splice(index, 1);

      return newArr;
    });
  };

  const formik = useFormik({
    initialValues: getRegularUserFormInitialValue(),
    onSubmit: async (values) => {
      const data = {
        userName: values.userName,
        email: values.email,
        password: values.password,
        secondaryEmail: inputsArray,
      };
      try {
        //call
      } catch (error) {
        //catch errors
      }
    },

    validationSchema: userProfileSchema,
  });

  return {
    formik,
    userDetails,
    t,
    inputsArray,
    setInputsArray,
    handleChangeInputs,
    addInput,
    removeEmail,
    setFile,
    file,
    hiddenFileInput,
  };
};

export default useRegularUserProfile;
