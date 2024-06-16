import React from "react";

function ProductDetail() {
  return (
    <div className="mx-10 mb-10">
      <div className=" py-5 flex justify-between items-center">
        {/* text  */}
        <h1 className=" text-xl text-gray-600 font-bold">All Product</h1>
        {/* Add Product Button  */}
        <Link to={"/addproduct"}>
          <button className="px-5 py-2  bg-gray-300 hover:bg-gray-800 hover:text-white border border-black rounded-lg">
            Add Product
          </button>
        </Link>
        <button className="px-5 py-2 rounded-lg">
          Add Product
        </button>
      </div>
      {/* table  */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border border-collapse sm:border-separate border-black text-gray-800">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-black text-slate-700 bg-slate-100 font-bold fontPara"
              >
                S.No.
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-black text-slate-700 bg-slate-100"
              >
                Location Name
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-black text-slate-700 bg-slate-100"
              >
                Action
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-black text-slate-700 bg-slate-100"
              >
                Action
              </th>
            </tr>
            <tr className="text-gray-700">
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-slate-500 "></td>
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-slate-500 first-letter:uppercase ">
                {"name"}
              </td>
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-slate-500 text-green-500 cursor-pointer "></td>
              <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-black stroke-slate-500 text-slate-500 text-red-500 cursor-pointer "></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductDetail;
