import React  from 'react'
import Search from './Search';
import { Link } from 'react-router-dom'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {

    return(
        <nav className="navbar bg-light mb-5 sticky-top">
        <div className="container-fluid">
        <Link to='/' className="navbar-brand" >FILM REVIEWS</Link>
        <Search/>
        <ul className='navbar-nav mr-auto' style={{'display': 'inline-block'}}>
            <li className='nav-item active'>
                <Link to='/register' className="nav-link">Register</Link> 
            </li>
            <li className='nav-item active'>
                <Link to='/login' className="nav-link" >Login</Link>
            </li>
        </ul>
        </div>
        </nav>
    )
}

export default Navbar;