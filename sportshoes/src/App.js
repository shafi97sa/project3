
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './Components/AdminPage';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <>
    
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/login/admin" element={<AdminPage/>}/>
  </Routes>
   </>   
  );
}

export default App;
