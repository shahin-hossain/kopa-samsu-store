import React from 'react';
import './Navbar.css';
import { BsCartCheck } from 'react-icons/bs';
const Navbar = ({ openModal, cart }) => {
    return (
        <div className='navbar'>
            <h1>Kopa Samsu Store</h1>
            <div className='cart-counter' onClick={openModal}>
                <BsCartCheck className='icon' color='#ffffff' /> <span className='cart-counter'>{cart.length}</span>{/*Modal Button*/}
            </div>
        </div>
    );
};

export default Navbar;