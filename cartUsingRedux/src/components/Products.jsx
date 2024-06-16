import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProduct } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

function Products() {

    const dispatch = useDispatch();



    const {data: products, status} = useSelector(state => state.product)

    useEffect(()=>{
        dispatch(fetchProduct());
            /*          
                const fetchProducts = async () => {
                    const resp = await fetch('https://fakestoreapi.com/products');
                    const data = await resp.json();
                    //console.log(data);
                    setProducts(data);
                }
                fetchProducts(); 
            */
    }, [])

    const handleAdd = (product) => {
        // add that product in store 
        dispatch(add(product))
    } 

    if(status === STATUSES.LOADING){
        return <><h2>Loading.......</h2></>
    }

    if(status === STATUSES.ERROR){
        return <>
            <h1>Something went wrong!</h1>
        </>
    }

  return (
    <div className='flex justify-center'>
        <div className='flex flex-wrap gap-10 mx-auto justify-center'>
            {
                products.map(item => (
                    <div key={item.id} className='p-5 border border-black w-1/5 rounded-lg shadow-xl'>
                        <div className='flex justify-center'>
                            <img src={item.image} className='h-60 justify-center' alt="" />
                        </div>
                        <div className='flex justify-center'>
                            <h2 className='text-center'>{item.title}</h2>
                        </div>
                        <div className='flex justify-center'>
                            <h4>Price: ₹ {Math.floor(item.price*80)}/-</h4>
                        </div>
                        <div className='flex justify-center'>
                            <button onClick={()=>{handleAdd(item)}} className='bottom-3 w-full border border-gray-600 bg-zinc-800 text-white px-10 py-1 rounded-md ' >Add To Cart</button>
                        </div>
                       
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products