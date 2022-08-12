import React, { useEffect } from 'react';
import { getSingleMovieHandler } from 'services';
import { useTranslate } from 'hooks';
import { RootState, saveSingleMovie } from 'state';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { QuoteMovieDetails, RedButton } from 'components';

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
      if (id !== '') {
        getOneMovie();
      }
    } catch (error) {}
  }, [dispatch, id]);

  return (
    <div className='text-white w-full'>
      <h3>Movie description</h3>
      <div className='mt-3 w-full'>
        <Image
          className='rounded-lg object-cover'
          width={950}
          height={500}
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${movie?.poster}`}
          alt={movie?.movieNameEn}
        />
      </div>
      <div className='flex mt-7 items-center'>
        <p className='border-r-[1px] border-gray-500 px-3'>Quotes (total 7)</p>
        <RedButton className='ml-3' name='Add quote' />
      </div>
      {movie?.quotes?.map((item: any) => (
        <QuoteMovieDetails item={item} key={item._id} />
      ))}
    </div>
  );
};

export default MovieDetails;
