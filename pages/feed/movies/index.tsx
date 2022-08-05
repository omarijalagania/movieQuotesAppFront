import React, { useState } from 'react';
import Image from 'next/image';
import { ChatIcon } from '@heroicons/react/outline';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { AddMovie, Modal, RedButton } from 'components';
const Movies = () => {
  const [openAddMovieModal, setOpenAddMovieModal] = useState(false);
  return (
    <>
      <div className='flex justify-between text-white mb-5'>
        <p>My list of movies (Total 25)</p>
        <div className='flex items-center'>
          <p>Search</p>
          <RedButton
            onClick={() => setOpenAddMovieModal(true)}
            className='ml-3'
            name='Add movie'
          />
        </div>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        <div>
          <Image width={450} height={350} src='/assets/movie.png' alt='movie' />
          <p className='text-white mt-3 text-xl'>Loki Mobius (2021)</p>
          <div className='flex items-center mt-4'>
            <div className='text-white'>10</div>
            <ChatIcon className='w-8 h-8 text-white ml-3' />
          </div>
        </div>
        <div>
          <Image width={450} height={350} src='/assets/movie.png' alt='movie' />
          <p className='text-white mt-3 text-xl'>Loki Mobius (2021)</p>
          <div className='flex items-center mt-4'>
            <div className='text-white'>10</div>
            <ChatIcon className='w-8 h-8 text-white ml-3' />
          </div>
        </div>
        <div>
          <Image width={450} height={350} src='/assets/movie.png' alt='movie' />
          <p className='text-white mt-3 text-xl'>Loki Mobius (2021)</p>
          <div className='flex items-center mt-4'>
            <div className='text-white'>10</div>
            <ChatIcon className='w-8 h-8 text-white ml-3' />
          </div>
        </div>
      </div>
      {openAddMovieModal && (
        <Modal open={openAddMovieModal} setOpen={setOpenAddMovieModal}>
          <AddMovie />
        </Modal>
      )}
    </>
  );
};

export default Movies;

export async function getStaticProps(context: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? 'en', ['common'])),
    },
  };
}
