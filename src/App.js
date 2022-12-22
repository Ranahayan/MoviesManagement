import logo from './logo.svg';
import React from 'react';
import './App.css';
import Train from './Movies/Movie';
import { Router,Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './common/navbar/Navbar';
import Customer from './common/customer/Customer';
import Rental from './common/rental/Rental';
import NotFound from './common/notfound/Notfound';
import MovieForm from './common/MovieForm/MovieForm';
import Login from './common/login/login ';
import Register from './common/register/register';
import NewMovieForm from './common/newMovieForm/newMovieForm';

function App() {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/movies' element={<Train />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/rentals" element={<Rental/>} />
          <Route path="/" element={<Navigate to='/movies' />} />
          <Route path="*" element={<Navigate to='/not_found' replace={true} />} />
          <Route path="/not_found" element={<NotFound />} />
          <Route path="/movies/:movie" element={<MovieForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/movie/new" element={<NewMovieForm />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
