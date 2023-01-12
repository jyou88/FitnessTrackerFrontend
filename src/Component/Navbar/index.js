import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Routines'>Routines</NavLink>
            <NavLink to='/MyRoutines'>MyRoutines</NavLink>
            <NavLink to='/Activities'>Activities</NavLink>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </nav>
    );
};
export default Navbar;