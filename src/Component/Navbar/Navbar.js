import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { createContext, useState } from 'react';

export const LoginContext = createContext();

const Navbar = () => {
    const [loggedIn] = useState(localStorage.access ? true : false);
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/Routines'>Routines</NavLink>
            <NavLink to='/MyRoutines'>MyRoutines</NavLink>
            <NavLink to='/Activities'>Activities</NavLink>
            {loggedIn ?
                <NavLink to={'/logout'}
                >
                    Logout
                </NavLink>
                :
                <NavLink to={'/login'}
                >
                    Login
                </NavLink>}
            <NavLink to='/register'>Register</NavLink>
        </nav >
    );
};
export default Navbar;

