import { WriteQUoteProps } from 'components';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieFeed, getQuoteHandler } from 'services';
import { onModalClose, RootState } from 'state';
import { QuotePropsItem } from 'types';

const useFeed = () => {
  const [quotes, setQuotes] = useState<WriteQUoteProps[]>([]);
  const [forSearch, setForSearch] = useState<WriteQUoteProps[]>([]);
  const [feedMovies, setFeedMovies] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [openAddQuote, setOpenAddQuote] = useState(false);
  const [getLike, setGetLike] = useState([]);
  const { updateComment, closeModal } = useSelector(
    (state: RootState) => state.quotes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getFeedMovies = async () => {
      const response = await getMovieFeed();
      setFeedMovies(response.data);
    };
    getFeedMovies();
  }, []);

  useEffect(() => {
    try {
      const getAllQuotes = async () => {
        const response = await getQuoteHandler(page, 5);

        if (response.status === 200) {
          dispatch(onModalClose(true));
          setQuotes(response.data);
          setForSearch(response.data);
        }

        if (response.status === 422) {
          dispatch(onModalClose(true));
        }
        dispatch(onModalClose(false));
      };

      getAllQuotes();
    } catch (error) {}
  }, [getLike, updateComment, closeModal, dispatch, page]);

  useEffect(() => {
    if (closeModal) {
      setOpenAddQuote(false);
    }
  }, [closeModal]);

  const handleSearch = (e: {
    currentTarget: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(e.currentTarget.value);
  };

  useEffect(() => {
    if (searchTerm.startsWith('#')) {
      const filteredMovie = forSearch.filter((item) =>
        (item.quoteNameEng || item.quoteNameGe)
          ?.toLowerCase()
          .includes(searchTerm?.substring(1))
      );
      setQuotes(filteredMovie);
    } else if (searchTerm.startsWith('@')) {
      const filteredMovie = feedMovies?.filter((item) =>
        (item.movieNameEn || item.movieNameGe)
          ?.toLowerCase()
          .includes(searchTerm?.substring(1))
      );
      const quoteArr = filteredMovie?.map((item) => item);

      setQuotes(
        [
          ...quoteArr.map((item) => {
            return item.quotes.map((quote: QuotePropsItem) => ({
              ...quote,
              user: item.user,
            }));
          }),
        ].flat()
      );
    }
    if (searchTerm === '') {
      setQuotes(forSearch);
    }
  }, [feedMovies, forSearch, searchTerm]);

  const loadFunc = async () => {
    const response = await getQuoteHandler(page, 5);
    setQuotes([...quotes, ...response.data]);

    if (response.data.length === 0 || response.data.length < 5) {
      setHasMore(false);
    }

    setPage(page + 1);
  };

  return {
    quotes,
    openAddQuote,
    setOpenAddQuote,
    setGetLike,
    forSearch,
    searchTerm,
    setSearchTerm,
    setQuotes,
    handleSearch,
    loadFunc,
    hasMore,
  };
};

export default useFeed;
