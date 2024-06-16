import React from 'react'
import Products from '../components/Products'

function Home() {
  return (
    <div>
        <h2 className='text-center text-5xl font-bold my-7'>WELCOME TO THE REDUX TOOLKIT STORE</h2>
        <section>
            <Products />
        </section>
    </div>
  )
}

export default Home