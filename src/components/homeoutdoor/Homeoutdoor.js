import React from 'react'



import img1 from '../Assets/ii.png'
import img2 from '../Assets/ii0.png'
import img3 from '../Assets/ii1.png'
import img4 from '../Assets/ii2.png'
import img5 from '../Assets/za0.png';
import img6 from '../Assets/ii3.png'
import img7 from '../Assets/ii.png'
import img8 from '../Assets/ii1.png'
import img9 from '../Assets/ii2.png'


const Homeoutdoor = () => {
  return (
    <div className="flex shadow-lg">
      <div className="home w-[280px] h-[257px]">
       <img src ={img5} alt="" className=''/>
      </div>
      <div className="flex flex-col w-[140px]">
        <div className="flex items-start justify-center py-7 gap-[20px] border-[1px] border-gray-400">
          <div className="px-4 text-[13px]">
            <p className="font-bold">Soft chairs</p>
            <span className=''>from 19</span>
          </div>
          <div>
            <img src={img9} alt="" className="w-[100px]" />
          </div>
        </div>
        <div className="flex items-center gap-[20px] py-7 border-[1px] border-gray-400">
          <div className='px-4'>
            <p className="font-bold">Kitchen mixture</p>
            <span>from 190</span>
          </div>
          <div>
            <img src={img1} alt="" className="w-[110px] p-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-start justify-center py-7 gap-[20px] border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Soft chairs</p>
            <span>from 19</span>
          </div>
          <div>
            <img src={img8} alt="" className="w-[100px]" />
          </div>
        </div>
        <div className="flex items-center gap-[20px] py-7 border-[1px] border-gray-400">
          <div className='px-4'>
            <p className="font-bold">Kitchen mixture</p>
            <span>from 190</span>
          </div>
          <div>
            <img src={img2} alt="" className="w-[110px] p-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-start justify-center py-7 gap-[20px] border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Soft chairs</p>
            <span>from 19</span>
          </div>
          <div>
            <img src={img3} alt="" className="w-[100px]" />
          </div>
        </div>
        <div className="flex items-center gap-[20px] py-7 border-[1px] border-gray-400">
          <div className='px-4'>
            <p className="font-bold">Kitchen mixture</p>
            <span>from 190</span>
          </div>
          <div>
            <img src={img4} alt="" className="w-[110px] p-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-start justify-center py-7 gap-[20px] border-[1px] border-gray-400">
          <div className="px-4">
            <p className="font-bold">Soft chairs</p>
            <span>from 19</span>
          </div>
          <div>
            <img src={img6} alt="" className="w-[100px]" />
          </div>
        </div>
        <div className="flex items-center gap-[20px] py-7 border-[1px] border-gray-400">
          <div className='px-4'>
            <p className="font-bold">Kitchen mixture</p>
            <span>from 190</span>
          </div>
          <div>
            <img src={img7} alt="" className="w-[110px] p-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeoutdoor
