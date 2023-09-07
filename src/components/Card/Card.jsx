import React from 'react';
import './Card.css';
import { BsCartCheck } from 'react-icons/bs' //প্রথমে bs দিয়ে শুরু হয়েছে দেখে /bs ব্যবহার করা হয়েছে।
const Card = ({ gunData, handleAddToCart }) => {
    // console.log(gunData)
    const { name, img, bullet, capacity, action, price, id } = gunData;

    return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>
            <h2>{name}</h2>
            <p>Bullet: {bullet}</p>
            <p>Capacity: {capacity}</p>
            <p>Action: {action}</p>

            <div className='add-to-cart'>
                {/* <button><BsCartCheck className='icon' /></button> */}
                <button onClick={() => handleAddToCart(id)}><BsCartCheck size={25} color='#000000' /></button> {/* function এর মধ্যে চাইলে product/full gun কে পাঠানো যাবে।*/}
                <h1>Price: ${price}</h1>
            </div>
        </div>
    );
};

export default Card;