//components are reusable in Webpage  unlike HtMl

import React from 'react'


//you cane give default value props like userName="wanda"
function Card({userName , btnText="Visit Profile"}) {
    console.log("message: ",userName);
    return (
        <div className="relative h-[500px] w-[300px] rounded-3xl m-4">
        <img
          src="src\assets\wallpaperflare.com_wallpaper.jpg"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{userName}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText} →
          </button>
        </div>
      </div>
    )
}

export default Card

/* function Card(props) {
    console.log("userName:" , props.userName);
    return (
        <div className="relative h-[400px] w-[300px] rounded-md ">
        <img
          src="src\assets\wallpaperflare.com_wallpaper.jpg"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">Delba</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile →
          </button>
        </div>
      </div>
    )
}

export default Card */