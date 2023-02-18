import React from 'react'
import './navbar.css';
import { TbBrandGooglePlay } from 'react-icons/tb'
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdPeople } from "react-icons/io";
import { BiMessageDetail, BiChevronDown } from "react-icons/bi";
import { GiEternalLove } from "react-icons/gi";
import { FiMenu } from 'react-icons/fi';


const Navbar = () => {
  return (
    <div className="max-w-[1200px] m-auto max-xl:mx-[2rem]">
      <div className="flex justify-between items-center md:py-1 h-[85px] max-2xl:justify-between  min-sm:justify-between max-md:m-2 max-md:h-[50px]">
        <div className="flex items-center gap-2">
        <FiMenu className='max-md:block hidden'/>
          <TbBrandGooglePlay className="bg-[#0d99ff] text-[20px] text-[#fff] rounded-full h-[50px] w-[50px] max-sm:text-[10px] max-sm:tetx-[17px]" />
          <h2 className="text-[#469fdf] text-[30px] font-bold max-sm:text-[20px]">Brand</h2>
        </div>
        <div className="max-md:hidden flex items-center gap-2 border-[1px] border-[#0d99ff] rounded-md max-lg:hidden">
          <input
            type="search"
            placeholder="Search"
            className="w-[300px] outline-none px-2"
          />
          <AiOutlineSearch/>
          <div className="w-[1px] h-[30px] bg-[#0d99ff]"></div>
          <select name="cars" id="cars" className="outline-none max-md:hidden">
            <option value="all category">All category</option>
            <option value="saab">solution</option>
            <option value="opel">products</option>
            <option value="audi">cloths</option>
          </select>
          <div className="bg-[#0d99ff] text-[#fff] py-1 overflow-hidden px-4">
            <p>Search</p>
          </div>
        </div>
        <div className="flex items-center gap-8 text-[17px] text-[#8e9bb1]">
          <p>
            <IoMdPeople className="text-[23px] text-[#b8c2d3]" /> profile
          </p>
          <p className="max-md:hidden">
            <BiMessageDetail className="text-[23px] text-[#aeb9c7]" />
            Message
          </p>
          <p className="max-md:hidden w-full">
            <GiEternalLove className="text-[23px] text-[#a0aec1]" />
            orders
          </p>
          <p>
            <AiOutlineShoppingCart className="text-[23px] text-[#95a3b8]" />

           card

           
            
          </p>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-400 border-b-[1px] max-md:border-none">
      
        <div className="flex justify-between items-center py-4 max-2xl:justify-between">
          <div className="flex items-center gap-4 max-md:hidden shrink-0">
            <FiMenu  className='max-xl:hidden'/>
            <p>All category</p>
            <p>Hot offers</p>
            <p>gift boxes</p>
            <p>projects</p>
            <p>menu items</p>
            <p>help</p>
            <BiChevronDown />
          </div>
         
          <div className="flex items-center gap-4 max-md:hidden">
            <select name="cars" id="cars">
              <option value="volvo">English,USD</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select name="cars" id="cars">
              <option value="volvo">Ship to</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
      <div className='max-md:block hidden gap-[20px] items-center border-[1px] border-gray-300 p-2 w-full bg-gray-100 m-2 py-2 max-[360]:py-1 rounded-md max-sm:'>
      <div className='flex items-center gap-[30px] px-[20px]'>
      <AiOutlineSearch className='text-[30px] max-[400px]:text-[40px] w-[100px] shrink-0 grow-0 mr-[4rem]'/>
      <input type="text" placeholder='Search' className='outline-none bg-transparent px-5'></input>

      </div>

      </div>
        </div>
        <div className='hidden max-md:block shrink-0 grow-0'>
        <div className='flex items-center gap-1 text-[#22a3ff] text-[23px] overflow-x-scroll overflow-visible'>

       
        <p className='shrink-0 bg-gray-100 mx-2 p-1 px-8 py-3 rounded-md '>All category</p>
            <p className='shrink-0 bg-gray-100 mx-5 p-1 px-8 py-2 rounded-md'>Hot offers</p>
            <p className='shrink-0 bg-gray-100 mx-5 p-1 px-8 py-2 rounded-md'>gift boxes</p>
            <p className='shrink-0 bg-gray-100 mx-5 p-1 px-8 py-2 rounded-md'>projects</p>
            <p className='shrink-0 bg-gray-100 mx-5 p-1 px-8 py-2 rounded-md'>menu items</p>
            <p className='shrink-0 bg-gray-100 mx-5 p-1 px-8 py-2 rounded-md'>help</p>
            </div>

        </div>
      </div>

    </div>
  );
}

export default Navbar
