import React from 'react';

export type MovieProp = {
  _id(_id: any);
  setRefreshQuote: React.Dispatch<React.SetStateAction<boolean>>;
  movie: {
    _id: string;
    movieNameEn: string;
    movieNameGe: string;
    genre: [
      {
        _id: string;
        genre: string;
        label: string;
      }
    ];
    directorEn: string;
    directorGe: string;
    descriptionEn: string;
    descriptionGe: string;
    poster: string;
    userId: string;
  };
  setOpenAddQuoteDialog: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SingleMovieProps = {
  _id: any;
  movieNameEn?: string;
  movieNameGe?: string;
  genre?: [{ _id: string; genre: string; label: string }];
  directorEn?: string;
  directorGe?: string;
  descriptionEn?: string;
  descriptionGe?: string;
  poster?: string;
  userId?: string;
};
