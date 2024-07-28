import React from "react";

function Loader({ height, width }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div style={{ width: `${height}rem`, height: `${width}rem`}} className={`border-t-8 border-white border-t-orange-500 rounded-full animate-spin`}></div>
    </div>
  );
}

export default Loader;

/*       */

/* 
      <div
        className={`inline-block h-${height} w-${width} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      */
