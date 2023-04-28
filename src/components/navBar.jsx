import React from 'react'
import './navBar.css'
import edyodaLogo from '../img/logo.png';

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="left">
                <img src={edyodaLogo} className='logo' alt='logo' />
                <a className="explore" href="#">Explore Categories</a>
            </div>

            <div className="right">
                <p className="info">EdYoda is free learning and knoledge <br/> sharing platform for techies</p>
                <a href="#" className="goto">Go To Main Website</a>
            </div>
        </nav>


    )
}