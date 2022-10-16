import React, { useEffect } from 'react';
import NavBar from '../components/Navbar';
import Option from '../components/common/option';
import { useNavigate } from 'react-router-dom';
function Options() {
    const navigate = useNavigate();
    useEffect(() =>{
        if(!localStorage.getItem('user')) return navigate('/login');
    })
    return ( 
        <div>
            <NavBar title={'Options Page'}/>
            <div className='sm:w-[50%] w-full border border-blue-400 mt-60 min-h-[40vh] rounded-md m-auto'>
                <h1 className='m-auto text-xl text-center'>Choose what you want to do:</h1>
                <div className="flex flex-col mt-20 items-center w-11/12">
                    <Option content={'Sign a permission to a student'} number={'1'} redirectPage={'permission'}/>
                    <Option content={'Sign a discipline issue'} number={'2'} redirectPage={'discipline'}/>
                </div>
            </div>
        </div>
     );
}

export default Options;