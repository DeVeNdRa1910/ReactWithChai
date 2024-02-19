import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/DeVeNdRa1910')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // } , [])
    //jese hi page load or reload hoga vese hi useEffect call hoga
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src="{data.avatar_url}" alt="git image" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const resp = await fetch('https://api.github.com/users/DeVeNdRa1910')
    return resp.json();
}