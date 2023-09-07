import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar' //এটাকে বলে Relative Path & //default export function/component import
import { Footer } from './components/Navbar/Navbar' //যদি একই folder থেকে ২টা component or function পাঠানো হয় তাহলে import করার পদ্ধতি হল
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Footer></Footer>
    </>
  )
}

export default App
