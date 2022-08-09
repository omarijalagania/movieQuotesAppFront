import { Button, RedButton } from 'components';
import { useDispatch } from 'react-redux';
import React from 'react';
import { isDeleteDialog } from 'state';

const DeleteMovieDialog = () => {
  const dispatch = useDispatch();
  return (
    <div className='flex space-x-10'>
      <RedButton
        onClick={() => dispatch(isDeleteDialog(true))}
        name='Delete Movie?'
      />
      <Button name='Cancel' />
    </div>
  );
};

export default DeleteMovieDialog;
