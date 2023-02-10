import React from 'react';
import './deals.css';
import img1 from '../Assets/z0.png';
import img0 from '../Assets/pc1.png';
import img2 from '../Assets/pc2.jpg';
import img3 from '../Assets/pc3.jpg';
import img4 from '../Assets/pc5.jpg';


const Deals = () => {
  return (
    <div className="flex py-4">
      <div className="px-4 shadow-lg w-[250px] py-6">
        <h1 className="text-[17px] font-bold">Deals and offers</h1>
        <p className='text-[10px]'>Hygience equipment</p>
        <div className="flex gap-3 text-[#fff]">
          <div className="h-[30px] w-[30px] rounded-md text-[13px] bg-slate-700 text-center">
           <p>04</p> <p className="text-[7px]  relative bottom-1 text-gray-200">Days</p>
          </div>
          <div className="h-[30px] w-[30px] rounded-md text-[13px] bg-slate-700 text-center">
           <p>23</p> <p className="text-[7px]  relative bottom-1 text-gray-200">Days</p>
          </div>
          <div className="h-[30px] w-[30px] rounded-md text-[13px] bg-slate-700 text-center">
           <p>13</p> <p className="text-[7px]  relative bottom-1 text-gray-200">Days</p>
          </div>
          <div className="h-[30px] w-[30px] rounded-md text-[13px] bg-slate-700 text-center">
           <p>56</p> <p className="text-[7px]  relative bottom-1 text-gray-200">Days</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-center border-gray-200 shadow-lg w-[139px] h-[195px] py-6">
          <img src={img1} alt="" className="w-[100px] m-auto" />
          <p>smart watches</p>
          <button className='w-[40px] m-auto rounded-lg bg-red-100 text-red-600'>-25%</button>
        </div>
        <div className="text-center border-gray-200 shadow-lg w-[139px] h-[195px] py-6">
          <img src={img0} alt="" className="w-[100px] m-auto" />
          <p>smart watches</p>
          <button className='w-[40px] m-auto rounded-lg bg-red-100 text-red-600'>-25%</button>
        </div>
        <div className="text-center border-gray-200 shadow-lg w-[139px] h-[195px] py-6">
          <img src={img3} alt="" className="w-[100px] m-auto" />
          <p>smart watches</p>
          <button className='w-[40px] m-auto rounded-lg bg-red-100 text-red-600'>-25%</button>
        </div>
        <div className="text-center border-gray-200 shadow-lg w-[139px] h-[195px] py-6">
          <img src={img2} alt="" className="w-[100px] m-auto" />
          <p>smart watches</p>
          <button className='w-[40px] m-auto rounded-lg bg-red-100 text-red-600'>-25%</button>
        </div>
        <div className="text-center border-gray-200 shadow-lg w-[139px] h-[195px] py-6">
          <img src={img4} alt="" className="w-[100px] m-auto" />
          <p>smart watches</p>
          <button className='w-[40px] m-auto rounded-lg bg-red-100 text-red-600'>-25%</button>
        </div>
      </div>
     
    </div>

  );

}

export default Deals
