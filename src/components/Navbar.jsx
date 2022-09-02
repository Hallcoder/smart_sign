import React from 'react';
import logo from '../assets/images/logo.png';
import Input from './common/input';
import intro from '../assets/images/intro.jpg';
import {MdSearch,MdPersonPin,MdMenu} from 'react-icons/md';
function NavBar({title}) {
    return ( 
        <div className='fixed top-0 z-1 h-[8vh] flex w-full items-center justify-between border-b shadow-md'>
            <div>
           <img src={logo} alt="logo" className='sm:w-8/12 w-8/12  h-16  m-2' />
            </div>
            <div className='text-xl tex-center font-bold hidden sm:flex'>
                <h1>{title}</h1>
            </div>
            <div className='none items-center mr-1 hidden sm:flex'>
                <button className='bg-blue-800 h-12 rounded-md m-1 w-20 text-white font-bold text-xl'>New</button>
                <Input type={'text'} placeholder={'Find a permission...'} name={'searchValue'}/>
                <MdSearch className='text-2xl m-2 w-2/12 text-gray-600 cursor-pointer h-4/6' />
                <MdPersonPin className='text-5xl cursor-pointer'/>
            </div>
            <div className='sm:hidden flex'>
                <MdMenu className='text-3xl'/>
            </div>
        </div>
     );
}

export default NavBar;