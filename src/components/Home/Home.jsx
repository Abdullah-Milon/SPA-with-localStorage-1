import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';

const Home = ({handelWatchTime}) => {

    /* useState মূলত useEffect এ fetch করা data কে সংরক্ষণের জন্য ।
    এটা লেখার আদর্শ নিয়ম হলো আগে useEffect এ data fetch করে
     ডাটা লোড করে দেখা তারপর সেই ডাটা সংরক্ষণের জন্য useState কে
      useEffect এর উপর declare করা */
    const [movies, setMovies] = useState([])

        useEffect( () => {
            fetch('data.json')
            .then(res => res.json())
            .then(data => setMovies(data))
        },[])

    return (
        <div>
            <div className="movie-container">
                {
                    movies.map(movie => <SingleCard
                    movie = {movie}
                    handelWatchTime = {handelWatchTime}
                    ></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Home;


/* useEffect dependency or changeable useEffect bujnai vlo kore jodio 
milestone-8 conceptualSession-3 a gias vai video 25-30 minite bujyeche 
pore lagle buje nibo tai alert dea rakhlam  */
