import React from 'react';
import { useAddComment, avatarImageUrl } from 'components';
import { ItemProps, SIngleItemProps } from 'types';

const WriteComment: React.FC<SIngleItemProps> = ({ item }) => {
  const { formik, setFieldId, setReceiverId, t } = useAddComment();
  return (
    <form onSubmit={formik.handleSubmit} className='flex items-center mt-4'>
      <img
        className='w-10 h-10 rounded-full'
        src={avatarImageUrl(item as ItemProps)}
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
