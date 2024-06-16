import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice';
import { remove } from '../store/cartSlice';

function Cart() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart)

  const addHandler = (item) => {
    dispatch(add(item));
  }

  const removeHandler = (id) => {
    dispatch(remove(id));
  }

  return (
    <div>
      <h2 className='text-center text-5xl font-bold my-7'>ITEMS IN YOUR CART</h2>
      <div>
        {
          items.map(item => {
            let n = 0;
            for (let i = 0; i < items.length; i++) {
              if (items[i].id === item.id) {
                n = n + 1;
              }
            }
            return (
              <div key={item.id} className='w-full flex justify-center'>
                <div className='w-full'>
                  <div className='flex justify-between items-center mx-10 border-b border-black mb-8 pb-4'>
                    <img src={item.image} className=' ml-10 h-28 w-24' alt="" />
                    <div className='w-40'>
                      <h3 >{item.title}</h3>
                    </div>
                    <h3>Quantity: {n}</h3>
                    <div>
                      <button className='text-green-600 mr-3 font-bold' onClick={() => addHandler(item)}>Add</button>
                      <button className='text-red-600 ml-3 font-bold' onClick={() => removeHandler(item.id)}>Remove</button>
                    </div>
                    <h3>Price: ₹{Math.floor(item.price * 80)}</h3>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Cart