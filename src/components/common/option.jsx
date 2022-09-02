import React from 'react';
import {MdNavigateNext} from 'react-icons/md';
import { Navigate, useNavigate } from 'react-router-dom';
function Option({number,content,redirectPage}) {
    const navigate = useNavigate();
    return ( 
        <div onClick={() => navigate(`/${redirectPage}`)} className='flex w-10/12 cursor-pointer'>
            <div className='rounded-full  text-3xl h-14 w-1/12 flex justify-center items-center text-center bg-blue-700 m-auto text-white font-bold'>
              {number}
            </div>
            <div className='flex border  hover:bg-blue-100  h-12 rounded-md m-2 indent-4 justify-between items-center w-full border-blue-700'>
                <p>{content}</p>
                <MdNavigateNext className='text-4xl text-blue-600' />
            </div>
        </div>
     );
}

export default Option;