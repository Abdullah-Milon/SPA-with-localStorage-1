
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function App() {
  const [watchTime, setWatchTime] = useState('');
  const handleWatchTime = (time) => {
    // console.log(time)
    const previousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
    if(previousWatchTime){
      console.log(previousWatchTime);
      const sumWitchTime = previousWatchTime + time;
      localStorage.setItem('watchTime',sumWitchTime);
      setWatchTime(sumWitchTime)
    }
    else{
      localStorage.setItem('watchTime', time);
      setWatchTime(time);
    }
  }

  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>

      <div className="main row">
        <div className="home-container col-md-8">
          <Home 
          handleWatchTime = {handleWatchTime}
          ></Home>
        </div>
        <div className="side-cart col-md-4 card">
          <SideCart
            watchTime = {watchTime}
          ></SideCart>
        </div>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App