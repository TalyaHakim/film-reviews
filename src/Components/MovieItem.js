import React from 'react';
import propTypes from 'prop-types';
import Comments from './Comments';

const MovieItem = ({movie}) => {

  const img = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mt-3">
          <div className="card">
            <div className="card-horizontal">
      <div className="img-square-wrapper">
      {movie.poster_path ? <img src={`${img}/${movie.poster_path}`} alt='movieImg' className="card-img-left"/> : null} 
      </div>
      <div className='card-body'>
      <h4 className='card-title'>
        {movie.title}
      </h4>
      <p className='card-text'>
        {movie.overview}
      </p>
      <div className='iconsMvItem'>
      <i className="bi bi-star fa-lg starsIcon"></i>
      <i className="bi bi-star-fill starsIcon fa-6x"></i>
      <i className="bi bi-star-half starsIcon fa-6x"></i> 
      </div>
      <Comments movieId={movie.id}/>
      </div> 
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

MovieItem.propTypes = {
    movie: propTypes.object.isRequired
}

export default MovieItem;