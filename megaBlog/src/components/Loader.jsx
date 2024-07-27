import React from "react";

function Loader({ height, width }) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={`inline-block h-${height} w-${width} animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
    
  );
}

export default Loader;


/*       <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-full w-full border-t-4 border-b-4 border-t-blue-500 border-b-purple-500"></div>
      </div> */