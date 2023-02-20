import React from 'react';
import { TbBrandGooglePlay } from 'react-icons/tb';
import { AiFillApple, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiTelegram, SiYoutubemusic } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";
import './footer.css';

function Footer() {
    return (
      <div
        data-aos="fade-in"
        className="flex flex-wrap items-center justify-between min-xl:justify-between min-xxl:justify-between max-lg:justify-between max-xl:justify-between max-2xl:justify-between max-lg:py-8 max-xl:mx-[2rem]"
      >
        <div className="flex flex-col max-md:hidden" >
          <div className="flex items-center gap-2">
            <TbBrandGooglePlay className="bg-[#0d99ff] text-[20px] text-[#fff] rounded-full h-[40px] w-[40px]" />
            <h2 className="text-[#469fdf] text-[30px]">Brand</h2>
          </div>
          <div className="w-[200px] max-lg:hidden">
            <p>
              Best information about the company gies here but noe provident.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 py-4">
              <BsFacebook className="text-[#8a8a8a] text-[25px]" />
              <IoLogoInstagram className="text-[#8a8a8a] text-[25px]" />
              <SiTelegram className="text-[#8a8a8a] text-[25px]" />
              <AiFillTwitterCircle className="text-[#8a8a8a] text-[25px]" />
              <SiYoutubemusic className="text-[#8a8a8a] text-[25px]" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[20px] hover:scale-110 hover_scale">
            <Link to="/about" className="font-bold text-[20px]0">
              About
            </Link>
          </h1>
          <p>About us</p>
          <p>Find store</p>
          <p>
            <Link to="/contact">Categories</Link>
          </p>
          <p>Blog</p>
        </div>
        <div className="max-md:hidden">
          <h1 className="font-bold text-[20px]">Parnership</h1>
          <p>
            <Link to="/" className="hover_scale">
              Home
            </Link>
          </p>
          <p>Find store</p>
          <p>Categories</p>
          <p>Blog</p>
        </div>
        <div className=" max-sm:hidden">
          <h1 className="font-bold text-[20px]">information</h1>
          <p>
            <Link to="/contact" className="hover_scale">
              Mobile
            </Link>
          </p>
          <p>Money Refund</p>
          <p>Shipping</p>
          <p>
            <Link to="/service" className="hover_scale">
              T-Short
            </Link>
          </p>
        </div>
        <div>
          <h1 className="font-bold text-[20px]">For users</h1>
          <p>
            <Link to="/login" className="hover_scale">
              Login
            </Link>
          </p>
          <p>
            <Link to="/register" className="hover_scale">
              Register
            </Link>
          </p>
          <p>
            <Link to="/sidebar" className="hover_scale">
              Settings
            </Link>
          </p>
          <p>
            <Link to="/last" className="hover_scale">
              My orders
            </Link>
          </p>
        </div>
        <div className="max-xl:hidden">
          <h1 className="font-bold text-[20px]">Get app</h1>
          <button className="flex items-center bg-[#000] text-[#fff] px-4 rounded-md gap-2">
            <div>
              <AiFillApple className="text-[30px]" />
            </div>
            <div>
              <p className="text-[10px]">Download on the</p>
              <h1 className="font-700 text-[20px]">App Store</h1>
            </div>
          </button>
          <button className="flex items-center bg-[#000] text-[#fff] px-4 rounded-md gap-2 mt-4">
            <div>
              <IoLogoGooglePlaystore className="text-[30px]" />
            </div>
            <div>
              <p className="text-[10px]">Get it on</p>
              <h1 className="font-700 text-[17px]">Google play</h1>
            </div>
          </button>
        </div>
      </div>
    );
}

export default Footer
