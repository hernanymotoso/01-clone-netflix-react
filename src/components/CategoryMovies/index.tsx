import React from 'react';

import {
  Container,
  CategoryMoviesArea,
  CategoryMoviesContent,
  Movie,
} from './styles';

import { IMovieDataDetails } from '../../hooks/tmdb';

interface CategoryMoviesData {
  title: string;
  movies: IMovieDataDetails[];
}

const CategoryMovies: React.FC<CategoryMoviesData> = ({ title, movies }) => {
  console.log();

  return (
    <Container>
      <h2>{title}</h2>
      <CategoryMoviesArea>
        <CategoryMoviesContent>
          {movies.length > 0 &&
            movies.map((movie) => (
              <Movie key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.name}
                />
              </Movie>
            ))}
        </CategoryMoviesContent>
      </CategoryMoviesArea>
    </Container>
  );
};

export default CategoryMovies;
