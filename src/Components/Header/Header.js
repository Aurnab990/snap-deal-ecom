import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            
            <img src='https://penji.co/wp-content/uploads/2019/06/snapdeal-ecommerce-logo.jpg' alt='site-logo'></img>
            <div className='nav-items'>
                <a href='/shop'>Shop</a>
                <a href='/orders'>Orders</a>
                <a href='/inventory'>Inventory</a>
                <a href='/about'>About</a>
            </div>
        
        </nav>
    );
};

export default Header;