import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

import './App.css';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import CommentState from './Context/comments/commentState';
import GithubState from './Context/githubApi/githubState';
import AuthState from './Context/auth/authState';

const App = () => {
  return (
    <AuthState>
    <GithubState>
      <CommentState>
      <Router>
      <Navbar/>
      <div> 
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path='/search' element= {<Search/>}/>
          <Route exact path='/movies' element= {<Movies/>}/>
          <Route exact path='/login' element= {<Login/>}/>
          <Route exact path='/register' element= {<Register/>}/>
        </Routes>
     </div>
      </Router>
    </CommentState>
    </GithubState>
    </AuthState>
  );
}

export default App;
