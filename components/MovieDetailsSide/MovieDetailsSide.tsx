import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state';

const MovieDetailsSide = () => {
  const movie = useSelector((state: RootState) => state.quotes.singleMovie);
  console.log(movie);
  return (
    <div className='mt-10 space-y-6 flex flex-col justify-start'>
      <h2 className='text-primaryGold text-3xl'> {movie.movieNameEn}</h2>
      <p className='text-xs w-12 h-6 flex justify-center items-center bg-gray-500'>
        {movie.genre}
      </p>
      <p className='text-xs'>Director: {movie.directorEn}</p>
      <p className='text-xs'>{movie.descriptionEn}</p>
    </div>
  );
};

export default MovieDetailsSide;
