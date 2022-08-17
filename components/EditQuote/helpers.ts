export const getEditQuoteFormInitialValue = (currentQuotes: any) => {
  let quoteNameEng = currentQuotes[0]?.quoteNameEng;
  let quoteNameGe = currentQuotes[0]?.quoteNameGe;
  let poster = currentQuotes[0]?.poster;
  let userId = currentQuotes[0]?.userId;
  let movieId = currentQuotes[0]?.movieId;

  return {
    poster,
    userId,
    quoteNameEng,
    quoteNameGe,
    movieId,
  };
};
