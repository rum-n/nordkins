import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';
// import logo from './../../assets/logo.png';

const Nav = () => {
    
    return (
        <header>
            <NavLink to='/'>
                <div className='logo'>
                    <h1>Nordkins</h1>
                    {/* <img src={logo} alt="Artpage logo"/> */}
                </div>
            </NavLink>
            <nav>
                <ul className='menu'>
                    <li><NavLink className='main-blue' to='/shop'><button>Buy art</button></NavLink></li>
                </ul>
            </nav>         
        </header>
    )
};

export default Nav;