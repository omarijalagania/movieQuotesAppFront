import React from 'react';
import { useAddComment, UserDetails } from 'components';
import { SIngleItemProps } from 'types';
import { showAvatarPicture } from 'helpers';

const WriteComment: React.FC<SIngleItemProps> = ({ item }) => {
  const { formik, setFieldId, setReceiverId, t, userDetails } = useAddComment();
  return (
    <form onSubmit={formik.handleSubmit} className='flex items-center mt-4'>
      <img
        className='w-10 h-10 rounded-full object-cover'
        src={showAvatarPicture(userDetails as UserDetails)}
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
        className='bg-lightBlue w-full md:h-[52px] rounded-md !p-2 ml-4'
        type='text'
        placeholder={t('writeComment')}
        value={formik.values.comment}
      />
    </form>
  );
};

export default WriteComment;
