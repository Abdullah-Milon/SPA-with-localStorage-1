import React from 'react';

const SingleCard = () => {

    return (
        <div className="movie-card card text-center m-auto w-100">
            <div className="movie-poster w-25 m-auto">
                <img className='w-75' src="https://c8.alamy.com/comp/C2WJYB/the-dark-knight-poster-display-at-the-arclight-theater-los-angeles-C2WJYB.jpg"/>
            </div>
            <h3></h3>
            <p></p>
            <div className="time-rating d-flex justify-content-around">
                <p>Watch Time:</p>
                <p>Rating: </p>
            </div>
            <button className='btn btn-info w-50 m-auto'>Book now</button>
        </div>
    );
};

export default SingleCard;






