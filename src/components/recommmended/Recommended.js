import React from 'react'
import img0 from '../Assets/r0.png';
import img2 from '../Assets/r2.png';

import img6 from '../Assets/r6.png';
import img8 from '../Assets/r9.png';
import img9 from '../Assets/rr1.png';

const Recommended = () => {
    return (
      <>
        <div>
          <h1 className="text-[20px] font-bold p-4">Recommended items</h1>
        </div>

        <div className="flex items-center justify-around flex-wrap">
          <div className="w-[210px] h-[270px] border-[2px] border-gray-200 shadow-sm">
            <img src={img9} alt="" className="w-[140px] m-auto mt-4" />
            <div className="px-4 mt-[40px]">
              <h1 className="font-bold text-[14px] text-[#393839]">$10.30</h1>
              <p className="text-[#403e42] text-[12px]">
                T-shirts with multiple colors, for men
              </p>
            </div>
          </div>
          <div className="w-[210px] h-[270px] border-[2px] border-gray-200 shadow-sm">
            <img src={img8} alt="" className="w-[140px] m-auto mt-4" />
            <div className="px-4 mt-[30px]">
              <h1 className="font-bold text-[14px] text-[#393839]">$10.30</h1>
              <p className="text-[#403e42] text-[12px]">
                T-shirts with multiple colors, for men
              </p>
            </div>
          </div>
          <div className="w-[210px] h-[270px] border-[2px] border-gray-200 shadow-sm">
            <img src={img6} alt="" className="w-[140px] m-auto mt-4" />
            <div className="px-4 mt-[40px]">
              <h1 className="font-bold text-[14px] text-[#393839]">$10.30</h1>
              <p className="text-[#403e42] text-[12px]">
                T-shirts with multiple colors, for men
              </p>
            </div>
          </div>
          <div className="w-[210px] h-[270px] border-[2px] border-gray-200 shadow-sm">
            <img src={img0} alt="" className="w-[140px] m-auto mt-4" />
            <div className="px-4 mt-[40px]">
              <h1 className="font-bold text-[14px] text-[#393839]">$10.30</h1>
              <p className="text-[#403e42] text-[12px]">
                T-shirts with multiple colors, for men
              </p>
            </div>
          </div>
          <div className="w-[210px] h-[270px] border-[2px] border-gray-200 shadow-sm">
            <img src={img2} alt="" className="w-[140px] m-auto mt-4" />
            <div className="px-4 mt-[40px]">
              <h1 className="font-bold text-[14px] text-[#393839]">$10.30</h1>
              <p className="text-[#403e42] text-[12px]">
                T-shirts with multiple colors, for men
              </p>
            </div>
          </div>
         
        </div>
     
      </>
    );
}

export default Recommended