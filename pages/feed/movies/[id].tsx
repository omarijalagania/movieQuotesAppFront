import React, { useEffect, useState } from 'react';
import { getSingleMovieHandler } from 'services';
import { useTranslate } from 'hooks';
import { RootState, saveSingleMovie } from 'state';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import {
  AddQuoteFromMovie,
  Modal,
  QuoteMovieDetails,
  RedButton,
} from 'components';
import { QuoteProps } from 'types';

const MovieDetails: React.FC = () => {
  const dispatch = useDispatch();
  const { router } = useTranslate();
  const { id } = router.query;
  const [openAddQuoteDialog, setOpenAddQuoteDialog] = useState(false);
  const movie = useSelector((state: RootState) => state.quotes.singleMovie);
  const closeModal = useSelector((state: RootState) => state.quotes.closeModal);
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
  }, [dispatch, id, closeModal]);

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
      {openAddQuoteDialog && (
        <Modal open={openAddQuoteDialog} setOpen={setOpenAddQuoteDialog}>
          <AddQuoteFromMovie
            movie={movie}
            _id={function () {
              throw new Error('Function not implemented.');
            }}
          />
        </Modal>
      )}
      <div className='flex mt-7 items-center'>
        <p className='border-r-[1px] border-gray-500 px-3'>Quotes (total 7)</p>
        <RedButton
          onClick={() => setOpenAddQuoteDialog(true)}
          className='ml-3'
          name='Add quote'
        />
      </div>
      {movie?.quotes?.map((item: QuoteProps) => (
        <QuoteMovieDetails item={item} key={item._id} />
      ))}
    </div>
  );
};

export default MovieDetails;
