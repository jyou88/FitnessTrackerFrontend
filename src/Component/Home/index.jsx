import React from 'react';
import './style.css'
import Login from "../Login";
import Navbar from "../Navbar";

const Home = () => {
    return <>
        <div>
            <Navbar />
            <Login />
        </div>
    </>;
};

export default Home;