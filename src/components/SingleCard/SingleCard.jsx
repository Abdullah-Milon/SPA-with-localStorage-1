import React from 'react';

/* const SingleCard = (props) => {
    // console.log(props)
    const {movie} = props;
    console.log(movie) */

// shortcut kore likhle
    const   SingleCard = ({ movie, handelWatchTime }) => {
    // console.log(movie)

    return (
        <div className="movie-card card text-center m-auto w-100">
            <div className="movie-poster w-25 m-auto">
                <img className='w-75' src={movie.poster} alt="" />
            </div>
            <h3>{movie.movieName}</h3>
            <p>{movie.description}</p>
            <div className="time-rating d-flex justify-content-around">
                <p>Watch Time:{movie.watchTime}</p>
                <p>Rating: {movie.imdbRating}</p>
            </div>
            <button onClick={()=>handelWatchTime(movie.watchTime)} className='btn btn-info w-50 m-auto'>Book now</button>
        </div>
    );
};

export default SingleCard;


/* SingleCart.jsx এর book now বাটন থেকে যদি sideCard.jsx কিছু পরিবর্তন 
বা interacitivity করতে চাই তাহলে সরাসরি কিছু করা যাবে না । তাই ক্রমান্বয়ে
 SingleCart.jsx থেকে তার father কম্পনেন্ট home.jsx এ যাবে home.jsx 
 থেকে app.jsx এ যাবে । যেহেতু app.jsx  এর মধ্যে home.jsx ও sideCard.jsx
  রয়েছে সেহেতু app.jsx প্রত্যাশিত command বা condition sideCart.jsx এর মধ্যে ছড়িয়ে দিবে 
 */




