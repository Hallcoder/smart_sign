import React from 'react';
import logo from '../assets/images/logo.png';
import Input from './common/input';
import intro from '../assets/images/intro.jpg';
import {MdSearch,MdPersonPin} from 'react-icons/md';
function NavBar({title}) {
    return ( 
        <div className='fixed top-0 z-1 flex w-full items-center justify-between border-b shadow-md'>
            <div>
           <img src={logo} alt="logo" className='w-16 h-14 m-2' />
            </div>
            <div className='text-xl font-bold'>
                {title}
            </div>
            <div className='flex items-center mr-1'>
                <button className='bg-blue-800 h-12 rounded-md m-1 w-20 text-white font-bold text-xl'>New</button>
                <Input type={'text'} placeholder={'Find a permission...'} name={'searchValue'}/>
                <MdSearch className='text-2xl m-2 w-2/12 text-gray-600 cursor-pointer h-4/6' />
                <MdPersonPin className='text-5xl cursor-pointer'/>
            </div>
        </div>
     );
}

export default NavBar;