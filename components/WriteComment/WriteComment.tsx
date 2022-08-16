import React from 'react';
import { useAddComment } from 'components';

const WriteComment = ({
  item,
}: {
  item: {
    _id: string;
    comments: Array<{
      _id: string;
      userId: string;
      quoteId: string;
      comment: string;
    }>;
    likes: { userId: string }[];
    quoteNameEng: string;
    quoteNameGe: string;
    movieId: string;
    poster: string;
    userId: string;
    user: [
      {
        _id: string;
        userName: string;
        email: string;
        confirmed: boolean;
      }
    ];
  };
}) => {
  const { formik, setFieldId, setReceiverId } = useAddComment();
  return (
    <form onSubmit={formik.handleSubmit} className='flex items-center mt-3'>
      <div className='w-7 h-7 bg-green-400 rounded-full' />
      <input
        onChange={(e) => {
          formik.handleChange(e);
          setFieldId(e.target.id);
          let tag = e.currentTarget.dataset.tag;
          setReceiverId(tag as string);
        }}
        data-tag={item.userId}
        name='comment'
        id={item._id}
        className='bg-lightBlue w-full rounded-md p-2 ml-4'
        type='text'
        placeholder='Write a comment'
      />
    </form>
  );
};

export default WriteComment;
