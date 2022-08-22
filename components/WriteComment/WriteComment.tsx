import React from 'react';
import { useAddComment } from 'components';
import { SIngleItemProps } from 'types';

const WriteComment: React.FC<SIngleItemProps> = ({ item }) => {
  const { formik, setFieldId, setReceiverId, t, userDetails } = useAddComment();
  return (
    <form onSubmit={formik.handleSubmit} className='flex items-center mt-3'>
      <img
        className='w-10 h-10 rounded-full'
        src={
          userDetails?.image
            ? userDetails?.image
            : process.env.NEXT_PUBLIC_RANDOM_AVATAR
        }
        alt='avatar'
      />
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
        placeholder={t('writeComment')}
      />
    </form>
  );
};

export default WriteComment;
