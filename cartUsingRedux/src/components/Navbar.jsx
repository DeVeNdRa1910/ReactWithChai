import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {

  const items = useSelector((state)=> state.cart);
  console.log(items);
  const numberOfItemsInCart = items.length;

  return (
    <div className='flex justify-between align-middle static top-0 text-xl opacity-90  py-3 bg-zinc-700 text-white'> 
        <span className='ml-10'>Redux Store</span>
        <div className='mr-10 flex flex-wrap gap-2'>
            <Link to={'/'} >Home</Link>
            <Link to={'/cart'} >Cart</Link>
            <span className= 'align-middle bg-stone-900 py-1 px-5 rounded-lg ml-5'>Cart-Items: {numberOfItemsInCart}</span>
        </div>
    </div>
  )
}

export default Navbar