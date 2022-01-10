import React from 'react';

import { Container } from './styles';

import { IMovieDataDetails } from '../../hooks/tmdb';

interface FeaturedMovieData {
  movie: IMovieDataDetails;
}

const FeaturedMovie: React.FC<FeaturedMovieData> = ({ movie }) => {
  console.log();

  return (
    <Container>
      <h1>Featured Movie</h1>
      <p>{movie.name}</p>
    </Container>
  );
};
export default FeaturedMovie;
