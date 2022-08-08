import { useFormik } from 'formik';
import { getMovieFormInitialValue, JwDecode } from 'components';
import { movieSchema } from 'schema';
import {
  addMovieHandler,
  getUserHandler,
  getMovieGenresHandler,
} from 'services';
import { useTranslate } from 'hooks';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import jwtDecode from 'jwt-decode';

export const useAddMovie = () => {
  const [file, setFile] = useState<File | null>(null);
  const [userId, setUserId] = useState<string>('');
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const { data: session } = useSession();

  const handleChange = (selectedOption: any) => {
    const selectedGenres = selectedOption.map(
      (option: { value: string; label: string }) => ({
        genre: option.value,
        label: option.label,
      })
    );
    setSelectedGenres(selectedGenres);
  };

  const newGenre = genres.map((genre: { genre: string; label: string }) => ({
    value: genre.genre,
    label: genre.label,
  }));

  useEffect(() => {
    const getUserEmail = async () => {
      if (session?.user.email) {
        const data = {
          email: session?.user.email,
        };
        try {
          const response = await getUserHandler(data);
          setUserId(response.data._id);
        } catch (error) {}
      } else if (session?.user.user.token) {
        const decoded = jwtDecode<JwDecode>(session?.user.user.token);
        const email = decoded.name;
        const data = {
          email: email,
        };
        try {
          const response = await getUserHandler(data);
          setUserId(response.data._id);
        } catch (error) {}
      }
    };
    getUserEmail();
  }, [session]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await getMovieGenresHandler();
        setGenres(response.data);
      } catch (error) {}
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
      formData.append('genre', selectedGenres as any);
      formData.append('directorGe', values.directorGe);
      formData.append('directorEn', values.directorEn);
      formData.append('descriptionGe', values.descriptionGe);
      formData.append('descriptionEn', values.descriptionEn);
      formData.append('poster', file as File);
      formData.append('userId', userId);
      try {
        const response = await addMovieHandler(formData as any);
        console.log(response);
      } catch (error) {
        throw error;
      }
    },

    validationSchema: movieSchema,
  });

  return { formik, t, setFile, newGenre, handleChange, selectedGenres };
};
