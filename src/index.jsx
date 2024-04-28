import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Facilities from './pages/facilities';
import Rooms from './pages/rooms';
import Contacts from './pages/contacts';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
   <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/facilities'element={<Facilities/>} />
      <Route path='/rooms'element={<Rooms/>} />
      <Route path='/contacts'element={<Contacts/>} />
    </Routes>
  </BrowserRouter>
    
 </React.StrictMode>
)