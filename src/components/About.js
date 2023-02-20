import React from "react";
import { AiOutlineRight, AiFillStar } from "react-icons/ai";
import "./about.css";
import { RiArrowRightUpFill } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import Mcard from "./pages/Mcard";
import "aos/dist/aos.css";


const About = () => {
  return (
    <div className="overflow-x-hidden leading-8 about">
      <div
        className="flex items-start justify-start gap-4 text-[#a3a2a2] py-4 max-sm:hidden"
        data-aos="zoom-in-left"
      >
        <div className="flex items-center gap-2">
          <p>Home</p>
          <AiOutlineRight className="text-[12px]" />
        </div>
        <div className="flex items-center gap-2">
          <p>Clothing</p>
          <AiOutlineRight className="text-[12px]" />
        </div>
        <div className="flex items-center gap-2">
          <p>Men's wear</p>
          <AiOutlineRight className="text-[12px]" />
        </div>
        <div>
          <p>Summer Clothing</p>
        </div>
      </div>
      <div className="flex items-start gap-4">
        <div className="shadow-md cate max-lg:hidden" data-aos="zoom-in-right">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-[18px]">Category</h1>

            <AiOutlineRight />
          </div>
          <p className="text-gray-400">Mobile accessory</p>
          <p className="text-gray-400">Electronics</p>
          <p className="text-gray-400">smartphones</p>
          <p className="text-gray-400">modern tech</p>
          <p className="text-gray-400">See all</p>
          <div>
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-[18px]">Brands</h1>

              <AiOutlineRight />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p className="text-gray-400">Samsung</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p className="text-gray-400">lenovo</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p className="text-gray-400">pocco</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p className="text-gray-400">Mobile</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p className="text-gray-400">Apple</p>
              </div>
            </div>
            <p className="text-gray-400">See all</p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h1 className="font-bold text-[18px]">Features</h1>

              <AiOutlineRight />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p className="text-gray-400">Metallic</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p className="text-gray-400">plastic cover</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p className="text-gray-400">8GB Ram</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p className="text-gray-400">Super power</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
              <div>
                <p className="text-gray-400">Apple</p>
              </div>
            </div>
            <p className="text-gray-400">See all</p>
          </div>
          <div>
            <div>
              <div className="flex items-center justify-between">
                <p className="font-bold text-[18px]">price range</p>
                <AiOutlineRight />
              </div>
              <input type="range" name="" id="" />
              <div className="flex items-center justify-evenly">
                <div>
                  <p>Min</p>
                  <button className="border-[1px] border-gray-300 px-[30px]">
                    0
                  </button>
                </div>
                <div>
                  <p>Max</p>
                  <button className="border-[1px] border-gray-300 px-[10px]">
                    999999
                  </button>
                </div>
              </div>
              <button className="border-[1px] border-gray-300 px-[10px]">
                Apply now
              </button>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-[18px]">Features</h1>

                <AiOutlineRight />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300 rounded-full"></div>
                <div>
                  <p className="text-gray-400">Metallic</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300 rounded-full"></div>
                <div>
                  <p className="text-gray-400">plastic cover</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300 rounded-full"></div>
                <div className="text-gray-400">
                  <p className="text-gray-400">8GB Ram</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300 rounded-full"></div>
                <div>
                  <p className="text-gray-400">Super power</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300 rounded-full"></div>
                <div>
                  <p className="text-gray-400">Apple</p>
                </div>
              </div>
              <p className="text-gray-400">See all</p>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-[18px]">Ratings</h1>

                <AiOutlineRight />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
                <div>
                  <p className="flex gap-2">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
                <div>
                  <p className="flex gap-2">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
                <div>
                  <p className="flex gap-2">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
                <div>
                  <p className="flex gap-2">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[14px] h-[14px] border-[1px] border-gray-300"></div>
                <div>
                  <p className="flex gap-2">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </p>
                </div>
              </div>
              <p className="text-gray-400">See all</p>
            </div>
          </div>
        </div>
        <div className="right min-md:w-full" data-aos="zoom-out">
          <div className="flex justify-between items-center border-[1px] border-gray-300 p-2 max-md:hidden">
            <div>
              <h1>
                12,911 items in{" "}
                <span className="font-bold text-[15px]">mobile accessory</span>
              </h1>
            </div>
            <div className="flex justify-center items-center gap-8 mr-[2rem]">
              <RiArrowRightUpFill />
              <p>verified only</p>
              <div className="flex items-center border-[1px] border-gray-300 w-[100px] justify-between">
                <div>
                  <h1>Features</h1>
                </div>
                <div>
                  <AiOutlineRight />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MdOutlineDashboardCustomize />
                <HiMenu />
              </div>
            </div>
          </div>
          <Mcard />
        </div>
      </div>
    </div>
  );
};

export default About;
