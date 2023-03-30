import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  /* প্রথমে  handelWatchTime কে empty parameter পাঠিয়েছে 
  পরে props or time হিসেবে গ্রহণ করেছি 
 */

  // const handelWatchTime = () =>{
  //   console.log('dui diner sadona')
  // }

  const [watchTime, setWatchTime] = useState('')

  const handelWatchTime = (time  /*props*/) => {
    // console.log(props)

    // local storage
    const perviousWatchTime = JSON.parse(localStorage.getItem('watchTime'));
    if (perviousWatchTime) {
      // console.log(perviousWatchTime);
      const sum = perviousWatchTime + time;
      // console.log(sum)
      localStorage.setItem('watchTime', sum);
      setWatchTime(sum);
    }
    else {
      localStorage.setItem('watchTime', time);
      setWatchTime(time)
    }
  };


  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>

      <div className="main row">
        <div className="home-container col-md-8">
          <Home handelWatchTime={handelWatchTime} ></Home>
        </div>
        <div className="side-cart col-md-4 card">
          <SideCart
          watchTime = {watchTime}
          ></SideCart>
        </div>
      </div>

      <Contact></Contact>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App


/* book now  বাটন আছে singleCart.jsx এ তো এখানে
App.jsx দাদা 
Home.jsx ও SideCart.jsx হচ্ছে App.jsx এর ছেলে অর্থাৎ Home.jsx ও SideCart.jsx পরস্পর ভাই 
singleCart.jsx হচ্ছে   App.jsx এর নাতি অর্থাৎ Home.jsx ও SideCart.jsx এর ছেলে বা ভাতিজা
singleCart.jsx চাইলে চাচা SideCart.jsx এর সাথে সরাসরি যোগাযোগ করতে পারবে না 
তাই দাদা  App.jsx এর মাধ্যমে যোগাযোগ করতে হবে।
তাহলে App.jsx পর্যন্ত যেতে হলে  বাবা Home.jsx এর প্রয়োজন
যাইহোক Home.jsx অবশেষ এ App.jsx পর্যন্ত পৌঁছালো
এখন App.jsx যেহেতু দাদা মানুষ তার পাওয়ার অবশ্যই বেশি 
App.jsx চাইলে তার ছেলে থেকে নাতিপুতি সবাইকে command করতে পারে
তো এখানে book now বাটনের কমান্ড singleCart.jsx দিবে 
তারপর book now  বাটন এ ক্লিক করলে SideCart.jsx এ নির্দেশনা অনুযায়ী পরিবর্তন হবে 
*/