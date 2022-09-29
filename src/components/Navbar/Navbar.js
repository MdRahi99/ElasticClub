import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {

    return (
        <div className='navbar-container bg-cyan-800 text-1xl lg:text-3xl md:text-2xl text-slate-300 font-semibold flex justify-center py-8'>
                <div><FontAwesomeIcon icon={faHeartPulse}></FontAwesomeIcon></div>
                <div className='ml-3'><p>Elastic Club</p></div>
        </div>
    );
};

export default Navbar;