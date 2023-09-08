import React from 'react';
import './AddedCart.css'
const AddedCart = (props) => {
    const { img, name, bullet } = props.gun;
    console.log(props.gun)
    return (
        <div className='cart-list'>
            <img className='list-img' src={img} alt="" />
            <div className='list-cart-body'>
                <h2>{name}</h2>
                <h3>{bullet}</h3>
            </div>
        </div>
    );
};

export default AddedCart;