import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/login" element={<Login />}/>
          </Routes>
          <ToastContainer 
            position="top-left"
            autoClose={5000}
          />
      </BrowserRouter>
    </>
  );
}

export default App;
