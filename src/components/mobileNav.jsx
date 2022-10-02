import React from 'react';
import { useNavigate } from 'react-router-dom';
function MobileNav({show}) {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    }
    return ( 
        <div className='right-0 top-16 w-[15vw] border absolute'>
            <div className="flex flex-col h-full  w-full">
                <div className="h-12 hover:bg-gray-200 cursor-pointer flex flex-row justify-around items-center ">
                  <p className="w-9/12" onClick={show}>Search</p>
                </div>
                <div className="h-12 hover:bg-gray-200 cursor-pointer flex flex-row justify-around items-center ">
                  <p className="w-9/12" onClick={() => navigate('/options')}>New</p>
                </div>
                <div className="h-12 hover:bg-gray-200 border-b cursor-pointer flex flex-row justify-around items-center ">
                  <p className="w-9/12" onClick={logout}>Log out</p>
                </div>
              </div>
        </div>
     );
}

export default MobileNav;