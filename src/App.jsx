import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar' //এটাকে বলে Relative Path & //default export function/component import
import Card from './components/Card/Card';
// import { Footer } from './components/Navbar/Navbar' //যদি একই folder থেকে ২টা component or function পাঠানো হয় তাহলে import করার পদ্ধতি হল
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function App() {
  const [guns, setGuns] = useState([]); //useState একটা Array Return করে
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false); //Modal State

  //Modal Open
  function openModal() {
    setIsOpen(true);
  }
  // Modal Close
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data))
  }, [])

  const handleAddToCart = (id) => {
    // console.log(id)
    const newGun = guns.find(gun => gun.id === id);
    setCart([...cart, newGun])
  }

  return (
    <>
      <Navbar openModal={openModal} cart={cart}></Navbar>


      <div className='card-container'>
        {guns.map(gun => <Card
          key={gun.id}
          gunData={gun}
          handleAddToCart={handleAddToCart}
        ></Card>)}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} >Close</button>
        <h2> added Cart: {cart.length}</h2>
        {cart.map(gun => <h2>{gun.name}</h2>)}
      </Modal> {/*Modal Component*/}
    </>
  )
}

export default App
