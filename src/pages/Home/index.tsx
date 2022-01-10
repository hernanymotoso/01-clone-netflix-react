import React, { useEffect, useState } from 'react';
import CategoryMovies from '../../components/CategoryMovies';
import { useTmdb, IMovieDataDetails } from '../../hooks/tmdb';
import FeaturedMovie from '../../components/FeaturedMovie';

const Home: React.FC = () => {
  const { getMovies, movieList } = useTmdb();
  const [featuredMovie, setFeaturedMovie] = useState<IMovieDataDetails>(
    {} as IMovieDataDetails,
  );

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  useEffect(() => {
    if (movieList.length > 0) {
      const originals = movieList.filter((movie) => movie.tag === 'originals');
      const chooseRandom = Math.floor(
        Math.random() * originals[0].movies.length - 1,
      );

      const chooseMovie = originals[0].movies[chooseRandom];
      setFeaturedMovie(chooseMovie);
    }
  }, [movieList]);

  return (
    <div>
      {featuredMovie.id && <FeaturedMovie movie={featuredMovie} />}

      {movieList.length > 0 &&
        movieList.map((item) => (
          <CategoryMovies title={item.title} movies={item.movies} />
        ))}
    </div>
  );
};
export default Home;
