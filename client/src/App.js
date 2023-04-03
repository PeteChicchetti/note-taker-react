import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Auth from './utils/auth';

/// IMPORT COMPONENTS ///
import ProtectRoute from './components/ProtectRoute';

import NavBar from './components/NavBar/NavBar';
import MobileMenu from './components/MobileMenu/MobileMenu';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Notes from './components/Notes/Notes';

import './reset.css';
import './App.css';

import './components/Signup/Signup.css';
import './components/Notes/Notes.css';
import './components/Login/Login.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

/// SET CONTEXT ///
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

/// SET UP CLIENT ///
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <MobileMenu isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle} />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />

          <Route
            path='notes/:userId'
            element={Auth.loggedIn() ? <Notes /> : <ProtectRoute />}
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
