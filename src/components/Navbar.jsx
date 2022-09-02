import React from 'react';
import logo from '../assets/images/logo.png';
import Input from './common/input';
function NavBar() {
    return ( 
        <div className='fixed top-0 z-1 flex w-full justify-between'>
            <div>
        <img src={logo} alt="logo" className='w-16 h-14' />
            </div>
            <div className='flex items-center mr-1'>
                <button className='bg-blue-800 h-12 rounded-md m-1 w-20 text-white font-bold text-xl'>New</button>
                <Input type={'text'} placeholder={'Find a permission...'} name={'searchValue'}/>
            </div>
        </div>
     );
}

export default NavBar;