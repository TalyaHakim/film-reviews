import React, { useState, useContext } from 'react';
import GithubContext from '../Context/githubApi/githubContext';

const Search = () => {

  const githubContext = useContext(GithubContext);

  const [text, setText] = useState('') 

  const onClick = e => {
    e.preventDefault();
    githubContext.searchMovie(text);
    setText('')
    console.log(text);
  }

  const onChange = e => {
    setText(e.target.value);
  }
  
    return(
       <div>
        <form className="d-flex" onSubmit={onClick}>
        <input className="form-control me-3" placeholder="Search" value={text} onChange={onChange}/>
      </form>
    </div> 
    )
    
}

export default Search;