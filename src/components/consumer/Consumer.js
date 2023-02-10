import React from "react";

import img1 from "../Assets/z0.png";
import img2 from "../Assets/z1.png";
import img3 from "../Assets/z2.png";
import img4 from "../Assets/z3.png";
import img5 from "../Assets/za1.png";
import img6 from "../Assets/z5.png";
import img7 from "../Assets/z7.png";
import img8 from "../Assets/z9.png";
import img9 from "../Assets/z4.png";

const Consumer = () => {
  return (
    <div className="flex">
      <div className="home w-[25%]">
        <img src={img5} alt="" className="" />
      </div>
      <div className="flex flex-col w-[229px] px-4">
        <div className="flex items-start justify-between py-7 border-[1px] border-gray-200 h-[133px] w-[199px]">
          <div className="p-4 text-[13px]">
            <p className="font-500">Soft chairs</p>
            <p className="text-[9px] font-bold text-gray-400">from</p>
            <p className="text-[9px] font-bold text-gray-400">USD 19</p>
          </div>
          <div>
            <img src={img9} alt="" className="w-[50px]" />
          </div>
        </div>
        <div className="flex items-start justify-between py-7 gap-[20px] border-[1px] border-gray-200 h-[133px] w-[199px]">
          <div className="p-4 text-[13px]">
            <p className="font-500">Soft chairs</p>
            <p className="text-[9px] font-bold text-gray-400">from</p>
            <p className="text-[9px] font-bold text-gray-400">USD 19</p>
          </div>
          <div>
            <img src={img1} alt="" className="w-[50px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[229px] px-4">
        <div className="flex items-start justify-between py-7 border-[1px] border-gray-200 h-[133px] w-[199px]">
          <div className="p-4 text-[13px]">
            <p className="font-500">Soft chairs</p>
            <p className="text-[9px] font-bold text-gray-400">from</p>
            <p className="text-[9px] font-bold text-gray-400">USD 19</p>
          </div>
          <div>
            <img src={img7} alt="" className="w-[50px]" />
          </div>
        </div>
        <div className="flex items-start justify-between py-7 border-[1px] border-gray-200 h-[133px] w-[199px]">
          <div className="p-4 text-[13px]">
            <p className="font-500">Soft chairs</p>
            <p className="text-[9px] font-bold text-gray-400">from</p>
            <p className="text-[9px] font-bold text-gray-400">USD 19</p>
          </div>
          <div>
            <img src={img8} alt="" className="w-[50px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[229px] px-4">
        <div className="flex items-start justify-between py-7 border-[1px] border-gray-200 h-[133px] w-[210px]">
          <div className="p-4 text-[13px]">
            <p className="font-500">Soft chairs</p>
            <p className="text-[9px] font-bold text-gray-400">from</p>
            <p className="text-[9px] font-bold text-gray-400">USD 19</p>
          </div>
          <div>
            <img src={img4} alt="" className="w-[50px]" />
          </div>
        </div>
        <div className="flex items-start justify-between py-7 border-[1px] border-gray-200 h-[133px] w-[210px]">
          <div className="p-4 text-[13px]">
            <p className="font-500">Soft chairs</p>
            <p className="text-[9px] font-bold text-gray-400">from</p>
            <p className="text-[9px] font-bold text-gray-400">USD 19</p>
          </div>
          <div>
            <img src={img6} alt="" className="w-[50px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[229px] px-4">
        <div className="flex items-start justify-between py-7 border-[1px] border-gray-200 h-[133px] w-[210px]">
          <div className="p-4 text-[13px]">
            <p className="font-500">Soft chairs</p>
            <p className="text-[9px] font-bold text-gray-400">from</p>
            <p className="text-[9px] font-bold text-gray-400">USD 19</p>
          </div>
          <div>
            <img src={img2} alt="" className="w-[50px]" />
          </div>
        </div>
        <div className="flex items-start justify-between py-7 border-[1px] border-gray-200 h-[133px] w-[210px]">
          <div className="p-4 text-[13px]">
            <p className="font-500">Soft chairs</p>
            <p className="text-[9px] font-bold text-gray-400">from</p>
            <p className="text-[9px] font-bold text-gray-400">USD 19</p>
          </div>
          <div>
            <img src={img3} alt="" className="w-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consumer;
