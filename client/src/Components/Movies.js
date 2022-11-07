import React, { useContext, useEffect } from 'react';
import MovieItem from './MovieItem';
import { Row } from 'react-bootstrap';
import GithubContext from '../Context/githubApi/githubContext';

const Movies = () => {

  const githubContext = useContext(GithubContext);
  const { movies } = githubContext;

  useEffect(() => {
    githubContext.fetchDada();
    // eslint-disable-next-line
  }, []);

  return (
    <Row xs={1} md={2} className="g-4">
      {movies.map((movie, index) => (
        <MovieItem key={index} movie={movie}/>
      ))}
    </Row>
  )
}

export default Movies;