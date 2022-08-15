import { useFormik } from 'formik';
import { getMovieFormInitialValue, useHeader } from 'components';
import { movieSchema } from 'schema';
import { toast } from 'react-toastify';
import { addMovieHandler, getMovieGenresHandler } from 'services';
import { useTranslate } from 'hooks';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveAddMovie } from 'state';

export const useAddMovie = () => {
  const [file, setFile] = useState<File | null>(null);
  const { userId } = useHeader();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const dispatch = useDispatch();

  const handleChange = (selectedOption: any) => {
    const selectedGenresVal = selectedOption.map(
      (option: { value: string; label: string }) => ({
        genre: option.value,
        label: option.label,
      })
    );
    setSelectedGenres(selectedGenresVal);
  };

  const newGenre = genres.map((genre: { genre: string; label: string }) => ({
    value: genre.genre,
    label: genre.label,
  }));

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await getMovieGenresHandler();
        setGenres(response.data);
      } catch (error) {
        toast.error('Server Error');
      }
    };
    getGenres();
  }, []);

  const { t } = useTranslate();
  const formik = useFormik({
    initialValues: getMovieFormInitialValue(),

    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('movieNameGe', values.movieNameGe);
      formData.append('movieNameEn', values.movieNameEn);
      formData.append('genre', JSON.stringify(selectedGenres));
      formData.append('directorGe', values.directorGe);
      formData.append('directorEn', values.directorEn);
      formData.append('descriptionGe', values.descriptionGe);
      formData.append('descriptionEn', values.descriptionEn);
      formData.append('poster', file as File);
      formData.append('userId', userId);

      try {
        const response = await addMovieHandler(formData as any);
        dispatch(saveAddMovie(response));
        if (response.status === 422) {
          toast.error('Error adding movie');
        }
      } catch (error) {
        toast.error('Server Error');
      }
    },

    validationSchema: movieSchema,
  });

  return { formik, t, setFile, newGenre, handleChange, selectedGenres };
};
