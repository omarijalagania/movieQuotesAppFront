import { useFormik } from 'formik';
import {
  getGoogleFormInitialValue,
  useHeader,
  getGoogleEmptyFormInitialValue,
  UserProps,
} from 'components';
import { googleSchema } from 'schema';
import { useTranslate } from 'hooks';
import { useState, useRef, useEffect } from 'react';
import { updateGoogleUserHandler } from 'services';
import { toast } from 'react-toastify';

const useGoogleProfile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [isOpenInputModal, setIsOpenInputModal] = useState(false);
  const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);
  const [isChangeNameDialogOpen, setIsChangeNameDialogOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [isSubmit, setIsSubmit] = useState<null | string>(null);
  const [file, setFile] = useState(null as File | null);
  const hiddenFileInput = useRef(null);
  const { userDetails } = useHeader();
  const { t, router } = useTranslate();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues:
      getGoogleFormInitialValue(userDetails as UserProps) ||
      getGoogleEmptyFormInitialValue(),

    onSubmit: async (values) => {
      console.log(values);
      const formData = new FormData();
      formData.append('userName', values.userName);
      formData.append('poster', file as File);

      try {
        const response = await updateGoogleUserHandler(
          formData as FormData,
          userDetails?._id as string
        );

        if (response.status === 200) {
          setIsEditable(false);
          toast.success(t('updated'));
        }
      } catch (error) {
        toast.error(t('error'));
      }
    },

    validationSchema: googleSchema,
  });

  useEffect(() => {
    if (file !== null) {
      setIsEditable(true);
      setIsOpenUploadModal(true);
    }
  }, [file]);

  useEffect(() => {
    if (isConfirmDialogOpen) {
      setIsSubmit('confirm');
      setIsChangeNameDialogOpen(false);
      setIsConfirmDialogOpen(true);
    }
  }, [isConfirmDialogOpen, setIsChangeNameDialogOpen]);

  return {
    userDetails,
    t,
    formik,
    isEditable,
    setIsEditable,
    file,
    setFile,
    router,
    hiddenFileInput,
    isOpenInputModal,
    setIsOpenInputModal,
    isChangeNameDialogOpen,
    setIsChangeNameDialogOpen,
    isConfirmDialogOpen,
    setIsConfirmDialogOpen,
    isSubmit,
    setIsSubmit,
    newName,
    setNewName,
    isOpenUploadModal,
    setIsOpenUploadModal,
  };
};

export default useGoogleProfile;
