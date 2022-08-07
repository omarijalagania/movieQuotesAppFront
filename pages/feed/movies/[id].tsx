import React, { useEffect } from 'react';
import { getSingleMovieHandler } from 'services';
import { useTranslate } from 'hooks';
import { RootState, saveSingleMovie } from 'state';
import { useDispatch, useSelector } from 'react-redux';
import { backUrl } from 'helpers';
import Image from 'next/image';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { router } = useTranslate();
  const { id } = router.query;
  const movie = useSelector((state: RootState) => state.quotes.singleMovie);
  useEffect(() => {
    try {
      const getOneMovie = async () => {
        const response = await getSingleMovieHandler(id);
        dispatch(saveSingleMovie(response.data));
      };
      getOneMovie();
    } catch (error) {}
  }, [dispatch, id]);

  return (
    <div className='text-white'>
      <h3>Movie description</h3>
      <div className='mt-3 w-full'>
        <Image
          className='rounded-lg object-cover'
          width={600}
          height={500}
          src={`${backUrl}/${movie.poster}`}
          alt={movie.movieNameEn}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
