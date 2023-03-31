import React from 'react';

const SingleCard = ({movie, handleWatchTime}) => {

    return (
        <div className="movie-card card text-center m-auto w-100">
            <div className="movie-poster w-25 m-auto">
                <img className='w-75' src={movie.poster}/>
            </div>
            <h3>{movie.movieName}</h3>
            <p>{movie.description}</p>
            <div className="time-rating d-flex justify-content-around">
                <p>Watch Time: {movie.watchTime}</p>
                <p>Rating: {movie.imdbRating}</p>
            </div>
            <button onClick={()=>handleWatchTime(movie.watchTime)} className='btn btn-info w-50 m-auto'>Book now</button>
        </div>
    );
};

export default SingleCard;






