import React, { useContext } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { AppContext } from '../context/AppContext';
import { MdDarkMode } from "react-icons/md";

const Header = () => {

  let { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className={`flex items-center justify-between w-full border-b  fixed top-0  px-4 py-4 z-10 ${theme ? 'bg-dark-background border-slate-700' : 'bg-white border-slate-300'}`}>

      <div className='flex-1 text-center'>
        <h1 className='text-3xl font-bold uppercase  dark:text-dark-text'>Blogs</h1>
      </div>

      <div className='ml-auto'>

        <button onClick={toggleTheme}>
          {
            theme ?
            (<MdDarkMode className='text-2xl cursor-pointer'/>):
            (<MdOutlineDarkMode className='text-2xl cursor-pointer'/>)  
          }
        </button>

      </div>

    </div>
  )
}

export default Header;