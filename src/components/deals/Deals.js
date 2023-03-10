import React from 'react';
import './deals.css';
import img1 from '../Assets/z0.png';
import img0 from '../Assets/pc1.png';
import img2 from '../Assets/pc2.jpg';
import img3 from '../Assets/pc3.jpg';
import img4 from '../Assets/pc5.jpg';


const Deals = () => {
  return (
    <div data-aos="fade-in" className="w-full flex py-4 font-inter max-sm:h-[140px] ">
    
      <div className="shadow-md max-sm:h-[100px] w-[290px] py-2 leading-5 max-sm:flex max-sm:w-full max-sm:justify-between max-lg:w-[190px] shrink-0 grow-0 max-md:pb-[100px] md:block">
      <div className='max-sm:leading-3 max-xl:leading-4 max-sm:pt-[20px]'>
        <h1 className="text-[22px] font-bold max-sm:text-[16px] ">Deals and offers</h1>
        <br/>
        <p className="text-[17px] max-sm:text-[14px] mb-4">Hygience equipment</p>

      </div>
        <div className="flex gap-3 text-[#fff] leading-4 max-sm:pt-[20px]">
          <div className="h-[30px] w-[30px] rounded-md text-[13px] bg-slate-700 text-center">
            <p>04</p>{" "}
            <p className="text-[7px]  relative bottom-1 text-gray-200">Days</p>
          </div>
          <div className="h-[30px] w-[30px] rounded-md text-[13px] bg-slate-700 text-center">
            <p>23</p>{" "}
            <p className="text-[7px]  relative bottom-1 text-gray-200">Days</p>
          </div>
          <div className="h-[30px] w-[30px] rounded-md text-[13px] bg-slate-700 text-center">
            <p>13</p>{" "}
            <p className="text-[7px]  relative bottom-1 text-gray-200">Days</p>
          </div>
          <div className="h-[30px] w-[30px] rounded-md text-[13px] bg-slate-700 text-center">
            <p>56</p>{" "}
            <p className="text-[7px]  relative bottom-1 text-gray-200">Days</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 px-6 shrink-0 overflow-x-clip">
        <div className="text-center border-gray-200 shadow-lg w-[159px] h-[195px] py-6">
          <img src={img1} alt="" className="w-[90px] m-auto" />
          <p>smart watches</p>
          <button className="w-[40px] m-auto rounded-lg bg-red-100 text-red-600">
            -25%
          </button>
        </div>
        <div className="text-center border-gray-200 shadow-lg w-[159px] h-[195px] py-6">
          <img src={img0} alt="" className="w-[100px] m-auto" />
          <p>smart watches</p>
          <button className="w-[40px] m-auto rounded-lg bg-red-100 text-red-600">
            -25%
          </button>
        </div>
        <div className="text-center border-gray-200 shadow-lg w-[159px] h-[195px] py-6">
          <img src={img3} alt="" className="w-[90px] m-auto" />
          <p>smart watches</p>
          <button className="w-[40px] m-auto rounded-lg bg-red-100 text-red-600">
            -25%
          </button>
        </div>
        <div className="text-center border-gray-200 shadow-lg w-[159px] h-[195px] py-6">
          <img src={img2} alt="" className="w-[100px] m-auto" />
          <p>smart watches</p>
          <button className="w-[40px] m-auto rounded-lg bg-red-100 text-red-600">
            -25%
          </button>
        </div>
        <div className="text-center border-gray-200 shadow-lg w-[159px] h-[195px] py-6">
          <img src={img4} alt="" className="w-[100px] m-auto" />
          <p>smart watches</p>
          <button className="w-[40px] m-auto rounded-lg bg-red-100 text-red-600">
            -25%
          </button>
        </div>
      </div>
    </div>
  );

}

export default Deals
