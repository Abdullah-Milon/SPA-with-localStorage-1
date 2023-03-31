
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>

      <div className="main row">
        <div className="home-container col-md-8">
          <Home  ></Home>
        </div>
        <div className="side-cart col-md-4 card">
          <SideCart
         
          ></SideCart>
        </div>
      </div>

      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App