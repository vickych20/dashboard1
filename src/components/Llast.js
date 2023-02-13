import React from "react";
import { BiChevronDown } from "react-icons/bi";
import img1 from "./Assets/s1.png";
import img2 from "./Assets/mm1.png";
import img3 from "./Assets/s2.png";
import img4 from "./Assets/m1.png";
import img5 from "./Assets/s4.png";
import img6 from "./Assets/m7.png";
import ktm from './Assets/s0.png';
import ktm1 from './Assets/s1.png';
import ktm2 from './Assets/s2.png';
import ktm3 from './Assets/s4.png';
import {RiCustomerServiceLine} from 'react-icons/ri';
import {GrSecure} from 'react-icons/gr';
import { GiFreedomDove } from 'react-icons/gi';
import {SiGooglecardboard} from  'react-icons/si'

const Llast = () => {
  return (
    <div className="font-sans">
      <h1 className="font-bold text-[26px]">My cart (3)</h1>
      <div className="flex flex-wrap items-start justify-center gap-4">
        <div className="w-[70%]">
          <div className="flex justify-between">
            <div className="flex items-start gap-3 font-sans">
              <img src={img6} alt="" className="w-[100px]" />
              <div>
                <p> T-shirts with multiple colors, for men and lady</p>
                <p className="text-[#858484]">
                  Size:medium,Color:blue,Material:plastic
                </p>
                <p className="text-[#858484]">Seller:Artel Market</p>
                <div className="py-4">
                  <button className="font-bold px-4 py-1 rounded-lg border-[1px] border-gray-400 text-[#ff2121] outline-none bg-[#ffffff] ml-4 text-[13px]">
                    Remove
                  </button>
                  <button className="font-bold px-4 py-1 rounded-lg border-[1px] border-gray-400 text-[13px] text-[#0e1aff] outline-none bg-[#ffffff] ml-4">
                    save for later
                  </button>
                </div>
              </div>
            </div>

            <div className="max-md:hidden">
              <p className="font-bold">$76.99</p>
              <button className="border-[1px] border-gray-300 flex gap-4 px-4 mt-2 mr-[3rem] items-center">
                Qty:9{" "}
                <span>
                  <BiChevronDown className="text-[15px]" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-start gap-3">
              <img src={img4} alt="" className="w-[100px]" />
              <div>
                <p> T-shirts with multiple colors, for men and lady</p>
                <p className="text-[#858484]">
                  Size:medium,Color:blue,Material:plastic
                </p>
                <p className="text-[#858484]">Seller:Artel Market</p>
                <div className="py-4">
                  <button className="font-bold px-4 py-1 rounded-lg border-[1px] border-gray-400 text-[#ff2121] outline-none bg-[#ffffff] ml-4 text-[13px]">
                    Remove
                  </button>
                  <button className="font-bold px-4 py-1 rounded-lg border-[1px] border-gray-400 text-[13px] text-[#0e1aff] outline-none bg-[#ffffff] ml-4">
                    save for later
                  </button>
                </div>
              </div>
            </div>

            <div className="max-md:hidden">
              <p className="font-bold">$76.99</p>
              <button className="border-[1px] border-gray-300 flex gap-4 mr-[3rem] items-center px-4 mt-2">
                Qty:9{" "}
                <span>
                  <BiChevronDown className="text-[15px]" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-start gap-3">
              <img src={img2} alt="" className="w-[100px]" />
              <div>
                <p> T-shirts with multiple colors, for men and lady</p>
                <p className="text-[#858484]">
                  Size:medium,Color:blue,Material:plastic
                </p>
                <p className="text-[#858484]">Seller:Artel Market</p>
                <div className="py-4">
                  <button className="font-bold px-4 py-1 rounded-lg border-[1px] border-gray-400 text-[#ff2121] outline-none bg-[#ffffff] ml-4 text-[13px]">
                    Remove
                  </button>
                  <button className="font-bold px-4 py-1 rounded-lg border-[1px] border-gray-400 text-[13px] text-[#0e1aff] outline-none bg-[#ffffff] ml-4">
                    save for later
                  </button>
                </div>
              </div>
            </div>

            <div className="max-md:hidden">
              <p className="font-bold">$76.99</p>
              <button className="border-[1px] border-gray-300 flex gap-4 px-2 mr-[3rem] items-center px-4 mt-2">
                Qty:9{" "}
                <span>
                  <BiChevronDown className="text-[15px]" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[20%] max-md:hidden">
          <div className="border-[1px] border-gray-300 p-4 shadow-lg">
            <h1>Have a coupon ?</h1>
            <div>
              <button className="border-[1px] border-gray-300">
                Add coupon
              </button>
              <button className="border-[1px] border-gray-300">Apply</button>
            </div>
          </div>
          <div className="border-[1px] border-gray-300 p-4 mt-4 shadow-lg">
            <div className="flex items-center justify-between">
              <p>Subtotal:</p>
              <p>$1403.97</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Discount:</p>
              <p className="text-[#FF0000]">- $1403.97</p>
            </div>
            <div className="flex items-center justify-between">
              <p>prize:</p>
              <p className="text-[#0000FF]">+ $1403.97</p>
            </div>
            <div className="flex items-center justify-between py-4 font-bold">
              <p>Total:</p>
              <p className="text-[#0000FF]">+ $1403.97</p>
            </div>
            <div className="border-[1px] border-gray-300 p-3 bg-[#19eb39] text-center rounded-md">
              <button>checkout</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full px-[17px] py-[15px]">
            <GrSecure className="text-[#fff]" />
          </div>
          <div>
            <h1 className="font-bold text-[20px]">secure payments</h1>
            <p>have you ever finally just</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full px-[17px] py-[15px]">
            <RiCustomerServiceLine className="text-[#fff]" />
          </div>
          <div>
            <h1 className="font-bold text-[20px]">customer support</h1>
            <p>have you ever finally just</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full px-[17px] py-[15px]">
            <GiFreedomDove className="text-[#fff]" />
          </div>
          <div>
            <h1 className="font-bold text-[20px]">free delivery</h1>
            <p>have you ever finally just</p>
          </div>
        </div>
      </div>
      <div>
        <h1>saved for later</h1>
        <div className="flex flex-wrap items-center justify-around">
          <div className="w-[180px] h-[260px] border-[1px] border-gray-200 shadow-sm">
            <div className="">
              <img src={ktm3} alt="" className="w-[164px] m-auto" />
            </div>
            <div className="px-[10px]">
              <p className="font-bold">$99.50</p>
              <p className="text-gray-500">
                GoPro HERO 6 4K action camera-Black
              </p>
              <button className="flex border-[1px] border-gray-200 items-center gap-2 p-1 text-[#343bc5] text-[10px]">
                <SiGooglecardboard />
                <p>move to card</p>
              </button>
            </div>
          </div>
          <div className="w-[180px] h-[260px] border-[1px] border-gray-200 shadow-sm">
            <div className="">
              <img src={img1} alt="" className="w-[147px] m-auto" />
            </div>
            <div className="px-[10px]">
              <p className="font-bold">$99.50</p>
              <p className="text-gray-500">
                GoPro HERO 6 4K action camera-Black
              </p>
              <button className="flex border-[1px] border-gray-200 items-center gap-2 p-1 text-[#343bc5] text-[10px]">
                <SiGooglecardboard />
                <p>move to card</p>
              </button>
            </div>
          </div>
          <div className="w-[180px] h-[260px] border-[1px] border-gray-200 shadow-sm">
            <div className="">
              <img src={ktm2} alt="" className="w-[164px] m-auto" />
            </div>
            <div className="px-[10px]">
              <p className="font-bold">$99.50</p>
              <p className="text-gray-500">
                GoPro HERO 6 4K action camera-Black
              </p>
              <button className="flex border-[1px] border-gray-200 items-center gap-2 p-1 text-[#343bc5] text-[10px]">
                <SiGooglecardboard />
                <p>move to card</p>
              </button>
            </div>
          </div>
          <div className="w-[180px] h-[260px] border-[1px] border-gray-200 shadow-sm">
            <div className="m-4">
              <img src={ktm} alt="" className="w-[117px] m-auto" />
            </div>
            <div className="px-[10px]">
              <p className="font-bold">$99.50</p>
              <p className="text-gray-500">
                GoPro HERO 6 4K action camera-Black
              </p>
              <button className="flex border-[1px] border-gray-200 items-center gap-2 p-1 text-[#343bc5] text-[10px]">
                <SiGooglecardboard />
                <p>move to card</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between h-24 px-10 py-4 mt-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
        <div>
          <h1 className="font-bold text-[26px] text-[#fff]">
            Super discount on more then 100 USD
          </h1>
          <p className="text-[#fff]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            ullam.
          </p>
        </div>
        <div>
          <button className="bg-yellow-600 text-[#fff] float-left-[300px] rounded-md p-1">
            show now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Llast;
