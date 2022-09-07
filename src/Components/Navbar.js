import React  from 'react'
import Search from './Search';
import { Link } from 'react-router-dom'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {

    return(
        <nav className="navbar bg-light mb-5">
        <div className="container-fluid">
        <Link to='/' className="navbar-brand" >FILM REVIEWS</Link>
        <Search/>
        <i className='bi bi-person user'></i>
        </div>
        </nav>
    )
}

export default Navbar;