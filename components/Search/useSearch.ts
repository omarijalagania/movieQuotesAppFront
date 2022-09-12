import { useSelector, useDispatch } from 'react-redux';
import { changeSearchWidth, RootState } from 'state';

const useSearch = () => {
  const dispatch = useDispatch();
  const growSearch = useSelector((state: RootState) => state.quotes.growSearch);

  const handleClick = () => {
    dispatch(changeSearchWidth(!growSearch));
  };

  const handleClickOutside = () => {
    dispatch(changeSearchWidth(false));
  };
  return {
    handleClick,
    handleClickOutside,
  };
};

export default useSearch;
