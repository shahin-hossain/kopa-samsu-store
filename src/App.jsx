import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar' //এটাকে বলে Relative Path & //default export function/component import
import Card from './components/Card/Card';
// import { Footer } from './components/Navbar/Navbar' //যদি একই folder থেকে ২টা component or function পাঠানো হয় তাহলে import করার পদ্ধতি হল
function App() {
  const [guns, setGuns] = useState([]); //useState একটা Array Return করে
  const [cart, setCart] = useState([]);



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
      <Navbar></Navbar>
      <h2> added Cart: {cart.length}</h2>
      <div className='card-container'>
        {guns.map(gun => <Card
          key={gun.id}
          gunData={gun}
          handleAddToCart={handleAddToCart}
        ></Card>)}
      </div>
    </>
  )
}

export default App
