import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state';

const MovieDetailsSide = () => {
  const movie = useSelector((state: RootState) => state.quotes.singleMovie);

  const renderGenres = () => {
    return movie?.genre?.map((genre: { genre: string; label: string }) => (
      <p
        key={genre.label + Math.random()}
        className='text-xs w-12 h-6 flex justify-center items-center bg-gray-500'
      >
        {genre.label}
      </p>
    ));
  };

  return (
    <div className='mt-10 space-y-6 flex flex-col justify-start'>
      <h2 className='text-primaryGold text-3xl'> {movie.movieNameEn}</h2>
      <div className='flex space-x-2'>{renderGenres()}</div>
      <p className='text-xs'>Director: {movie.directorEn}</p>
      <p className='text-xs'>{movie.descriptionEn}</p>
    </div>
  );
};

export default MovieDetailsSide;
