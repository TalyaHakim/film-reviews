import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

import './App.css';
import Home from './Components/Home';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import CommentState from './Context/comments/commentState';

import GithubState from './Context/githubApi/githubState';

const App = () => {
  return (
    <GithubState>
      <CommentState>
      <Router>
      <Navbar sticky='top'/>
      <div> 
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path='/search' element= {<Search/>}/>
          <Route exact path='/movies' element= {<Movies/>}/>
        </Routes>
     </div>
      </Router>
      </CommentState>
    </GithubState>
    
  );
}

export default App;
