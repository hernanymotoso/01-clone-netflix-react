import React, { createContext, useCallback, useContext, useState } from 'react';

import { api, apiKey, requestLang } from '../services/api';

export interface IMovieDataDetails {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

interface IMovieList {
  tag: string;
  title: string;
  movies: IMovieDataDetails[];
}

interface TmdbState {
  movieList: IMovieList[];
  getMovies(): void;
}

const TmdbContext = createContext<TmdbState>({} as TmdbState);

const TmdbProvider: React.FC = ({ children }) => {
  const [movieList, setMovieList] = useState<IMovieList[]>([] as IMovieList[]);

  const getMovies = useCallback(async () => {
    const list: IMovieList[] = [
      {
        tag: 'originals',
        title: 'Originais do Netflix',
        movies: await api
          .get(
            `/discover/tv?with_network=213&language=${requestLang}&api_key=${apiKey}`,
          )
          .then((response) => response.data.results),
      },
      {
        tag: 'trending',
        title: 'Recomendados para Você',
        movies: await api
          .get(`/trending/all/week?language=${requestLang}&api_key=${apiKey}`)
          .then((response) => response.data.results),
      },
      {
        tag: 'toprated',
        title: 'Em Alta',
        movies: await api
          .get(`/movie/top_rated?language=${requestLang}&api_key=${apiKey}`)
          .then((response) => response.data.results),
      },
      {
        tag: 'action',
        title: 'Ação',
        movies: await api
          .get(
            `/discover/movie?with_genres=28&language=${requestLang}&api_key=${apiKey}`,
          )
          .then((response) => response.data.results),
      },
      {
        tag: 'comedy',
        title: 'Comédia',
        movies: await api
          .get(
            `/discover/movie?with_genres=35&language=${requestLang}&api_key=${apiKey}`,
          )
          .then((response) => response.data.results),
      },
      {
        tag: 'horror',
        title: 'Terror',
        movies: await api
          .get(
            `/discover/movie?with_genres=27&language=${requestLang}&api_key=${apiKey}`,
          )
          .then((response) => response.data.results),
      },
      {
        tag: 'romance',
        title: 'Romance',
        movies: await api
          .get(
            `/discover/movie?with_genres=10749&language=${requestLang}&api_key=${apiKey}`,
          )
          .then((response) => response.data.results),
      },
      {
        tag: 'documentary',
        title: 'Documentários',
        movies: await api
          .get(
            `/discover/movie?with_genres=99&language=${requestLang}&api_key=${apiKey}`,
          )
          .then((response) => response.data.results),
      },
    ];

    setMovieList(list);
  }, []);

  return (
    <TmdbContext.Provider value={{ getMovies, movieList }}>
      {children}
    </TmdbContext.Provider>
  );
};

function useTmdb(): TmdbState {
  const context = useContext(TmdbContext);

  if (!context) {
    throw new Error('useTmdb must be used within an TmdbProvider');
  }

  return context;
}

export { useTmdb, TmdbProvider };
