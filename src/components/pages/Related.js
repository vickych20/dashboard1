import React from 'react';
import img1 from "../Assets/mk.jpg";
import img2 from "../Assets/mm1.png";
import img3 from "../Assets/m0.png";
import img4 from "../Assets/m1.png";
import img5 from "../Assets/m2.png";
import img6 from "../Assets/m7.png";

const Related = () => {
  return (
    <div className="mx-[3rem]">
      <h1 className="font-bold text-[25px] py-4">Related Product</h1>
      <div className="flex items-center gap-4 justify-evenly flex-wrap">
        <div>
          <img src={img1} alt="" className="w-[300px]" />
          <p>Apple watch series space gray</p>
          <p className="text-[#8b8888]">
            $7.00- <span className="text-[14px]">$99.50</span>{" "}
          </p>
        </div>
        <div>
          <img src={img2} alt="" />
          <p>Apple watch series space gray</p>
          <p className="text-[#8b8888]">
            $7.00- <span className="text-[14px]">$99.50</span>{" "}
          </p>
        </div>
        <div>
          <img src={img3} alt="" />
          <p>Apple watch series space gray</p>
          <p className="text-[#8b8888]">
            $7.00- <span className="text-[14px]">$99.50</span>{" "}
          </p>
        </div>
        <div>
          <img src={img4} alt="" />
          <p>Apple watch series space gray</p>
          <p className="text-[#8b8888]">
            $7.00- <span className="text-[14px]">$99.50</span>{" "}
          </p>
        </div>
        <div>
          <img src={img5} alt="" />
          <p>Apple watch series space gray</p>
          <p className="text-[#8b8888]">
            $7.00- <span className="text-[14px]">$99.50</span>{" "}
          </p>
        </div>
        <div>
          <img src={img6} alt="" />
          <p>Apple watch series space gray</p>
          <p className="text-[#8b8888]">
            $7.00- <span className="text-[14px]">$99.50</span>{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between h-24 px-10 py-4 mt-8 m-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 max-[500px]:hidden">
        <div>
          <h1 className="font-bold text-[26px] text-[#fff] max-md:text-[18px]">
            Super discount on more then 100 USD
          </h1>
          <p className="text-[#fff] max-sm:hidden">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            ullam.
          </p>
        </div>
        <div>
          <button className="bg-yellow-600 text-[#fff] float-left-[300px] rounded-md p-1 shrink-0 grow-0 w-[120px]">
            show now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Related
