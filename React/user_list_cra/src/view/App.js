import React from 'react';
import './App.css';
import { Header } from './partials/Header'
import { Footer } from './partials/Footer'
import { Main } from './partials/Main'
import { fetchData } from '../services/userService'
import { users } from '../constants/users'

const ourUsers = fetchData(users);

function App(props) {
  return (
    <>
      <Header />
      <Main users={ourUsers} />
      <Footer />
    </>
  )
}

export default App;
