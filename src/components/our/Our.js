import React from "react";
import { AiOutlineSearch, AiOutlinePropertySafety } from "react-icons/ai";
import img1 from "../Assets/o3.png";
import img2 from "../Assets/o2.png";
import img3 from "../Assets/o1.png";
import img43 from "../Assets/oq1.png";
import img4 from "../Assets/o0.png";

const Our = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold p-4">Our Extra service</h1>
      </div>
     



        <div className="w-full grid grid-cols-4 gap-10 lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-[352px]:grid-cols-1">
          <div className="flex flex-wrap items-center">
            <div className="w-[250px] h-[180px] border-[1px]">
              <img src={img1} alt="" />
              <span>
                <div className="bg-gray-300 w-[50px] h-[50px] rounded-full flex justify-center items-center float-right  relative bottom-[30px] right-[14px]">
                  <AiOutlineSearch />
                </div>
              </span>

              <h1 className="text-[14px] mt-[20px] w-[150px] px-[20px] font-serif">
                source from industry hubs
              </h1>
            </div></div>
          <div className="flex flex-wrap items-center">
            <div className="w-[250px] h-[180px] border-[1px]">
              <img src={img2} alt="" />
              <span>
                <div className="bg-[#DCDCDC] w-[50px] h-[50px] rounded-full flex justify-center items-center float-right  relative bottom-[30px] right-[14px]">
                  <AiOutlinePropertySafety />
                </div>
              </span>

              <p className="text-[14px] mt-[20px] w-[150px] px-[20px] font-serif">
                source from industry hubs
              </p>
            </div></div>
          <div className="flex flex-wrap items-center">
            <div className="w-[250px] h-[180px] border-[1px]">
              <img src={img3} alt="" />
              <span>
                <div className="bg-[#DCDCDC] w-[50px] h-[50px] rounded-full flex justify-center items-center float-right  relative bottom-[30px] right-[14px]">
                  <AiOutlinePropertySafety />
                </div>
              </span>

              <p className="text-[14px] mt-[20px] w-[150px] px-[20px] font-serif">
                source from industry hubs
              </p>
            </div></div>
          <div className="flex flex-wrap items-center">
            <div className="w-[250px] h-[180px] border-[1px]">
              <img src={img4} alt="" />
              <span>
                <div className="bg-[#DCDCDC] w-[50px] h-[50px] rounded-full flex justify-center items-center float-right  relative bottom-[30px] right-[14px]">
                  <AiOutlinePropertySafety />
                </div>
              </span>

              <p className="text-[14px] mt-[20px] w-[150px] px-[20px] font-serif">
                source from industry hubs
              </p>
            </div></div>
        </div>
 
    </div>
  );
};

export default Our;
