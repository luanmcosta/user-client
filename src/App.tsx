import React, { useContext, useEffect, useState } from 'react';
import {UserContext, UserContextType } from './contexts/UserContext';
import {Route, Routes} from 'react-router-dom'

import api from './api'
import Navbar from './components/Navbar';

import 'bootstrap'
import './theme.min.css';
import './App.css'
import Home from './pages/Home';
import NewUserModalForm from './components/NewUserFormModal';
import EditUserModalForm from './components/EditUserFormModal';

function App() {

  const {loadUsers} = useContext(UserContext) as UserContextType;

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <main className="container">

      <Navbar />  
      <NewUserModalForm />
      <EditUserModalForm />

      <Home />

    </main>     
  );
}

export default App;
