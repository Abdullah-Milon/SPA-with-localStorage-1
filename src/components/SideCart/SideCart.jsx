import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';


const SideCart = ({ watchTime }) => {

    /*  reloadদেয়ার পর localStorage থেকে এই useEffect টা call করে ডাটাকে লোড করতেছে।
    এই ঝামেলা দূর করার জন্য book now বাটনে ক্লিক করার পর useEffect নিজে নিজেই কল করে 
    */

    const[time, setTime] = useState(watchTime);
    const [breakTime, setBreakTime] = useState(0)

    useEffect(() => {
        // note ৩. এ যাও
        const getWatchTimeFromStorage = localStorage.getItem('watchTime');
        // console.log(getWatchTimeFromStorage)
        setTime(getWatchTimeFromStorage)

        const getBreakTime = localStorage.getItem('breakTime')
        setBreakTime(getBreakTime)
    }, [watchTime]);

    const handleBreakTime = (bt) =>{
        // console.log(bt)
        localStorage.setItem('breakTime', bt)
        setBreakTime(bt)
    }

  const handleComplete =()=>{
     toast("Wow so easy !")
  }

    return (
        <div>
            <h1>My Cart</h1>
            <div className="mt-5 text-center">
                <p>total watchTime</p>
                <input type="text" value={time} disabled />
            </div>
            <h5 className="mt-5">Add break time</h5>
            <button onClick={() => handleBreakTime(10)} className="w-25 btn-circle m-1 btn btn-info">10</button>
            <button onClick={() => handleBreakTime(20)} className="w-25 btn-circle m-1 btn btn-warning">20</button>
            <button onClick={() => handleBreakTime(30)} className="w-25 btn-circle m-1 btn btn-danger">30</button>
            <input type="text" value={breakTime} disabled />
            <button onClick={handleComplete} className="mt-5 btn btn-info w-100">Complete</button>
        </div>
    );
};

export default SideCart;