import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container bg-teal-900 text-1xl lg:text-3xl text-slate-300 font-semibold flex justify-around py-8'>
            <div className='flex'>
                <div><FontAwesomeIcon icon={faHeartPulse}></FontAwesomeIcon></div>
                <div className='ml-3'><p>Elastic Club</p></div>
            </div>
            <div><h1>Blog</h1></div>
        </div>
    );
};

export default Navbar;