import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const SideCart = ({watchTime}) => {

    const [time, setTime] = useState(watchTime);
    const [breakTime, setBreakTime] = useState(0)
    useEffect( () =>{
        const getWatchTimeFromStorage = localStorage.getItem('watchTime')
        // console.log(getWatchTimeFromStorage)
            setTime(getWatchTimeFromStorage);

        const getBreakTime = localStorage.getItem('breakTime')
     /*    if(getBreakTime === null){

        }
        else{

        } */
        setBreakTime(getBreakTime);
            
    },[watchTime]);

    const handleBreakTime = (bt) =>{
        // console.log(bt)
        localStorage.setItem('breakTime', bt)
        setBreakTime(bt)
    }

    const handleComplete = () => {
        toast('wow so easy!!!!!')
    }


    return (
        <div className='side-cart'>
            <h1>My Cart</h1>
            <div className="mt-5 text-center">
                <p>total watchTime</p>
                <input type="text" value={time} disabled />
            </div>
            <h5 className="mt-5">Add break time</h5>
            <button onClick={() => handleBreakTime(50)} className="w-25 btn-circle m-1 btn btn-info">10</button>
            <button onClick={() => handleBreakTime(50)} className="w-25 btn-circle m-1 btn btn-warning">20</button>
            <button onClick={() => handleBreakTime(50)} className="w-25 btn-circle m-1 btn btn-danger">30</button>
            <input type="text"  value={breakTime} disabled />
            <button onClick={handleComplete} className="mt-5 btn btn-info w-100">Complete</button>
        </div>
    );
};

export default SideCart;

