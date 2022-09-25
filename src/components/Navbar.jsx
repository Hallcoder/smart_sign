import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import Input from './common/input';
import algoliasearch from 'algoliasearch';
import {MdSearch,MdPersonPin,MdMenu} from 'react-icons/md';
import axios from 'axios';
import { InstantSearch, SearchBox,Configure ,connectHits} from 'react-instantsearch-dom';
import Search from './search';
function NavBar({title}) {
  const [style,setShowSearch] = useState({
    display:'none'
  });
  const handleShowSearch = () => {
if(style.display == 'none'){
  setShowSearch({display:'flex'});
  return;
}
setShowSearch({display:'none'})
return;
  }
    const searchClient = algoliasearch(import.meta.env.VITE_ALGOLIA_APPID, import.meta.env.VITE_ALGOLIA_ADMINKEY,{
        enablePersonalization:false
    })
    const index = searchClient.initIndex('permissions')
    // useEffect(()=>{
    //   axios.get('https://ocean.com/permissions')
    //        .then((data) =>{
    //         console.log(data)
    //         return index.saveObjects(data, {
    //             autoGenerateObjectIDIfNotExist: true
    //           })
    //        })
    // },[])
    return ( 
        <div className='fixed top-0 z-1 h-[8vh] bg-white flex w-full items-center justify-between border-b shadow-md'>
            <div>
           <img src={logo} alt="logo" className='sm:w-8/12 w-8/12  h-16  m-4' />
            </div>
            <div className='text-xl tex-center font-bold hidden sm:flex'>
                <h1>{title}</h1>
            </div>
            <div className='none items-center mr-1 hidden sm:flex'>
                <button className='bg-blue-800 h-12 rounded-md m-1 w-20 text-white font-bold text-xl'>New</button>
                {/* <Input></Input> */}
            <div className='mt-[23vh] flex flex-col'>
                
               </div>
                <Input onFocus={()=> handleShowSearch()} placeholder={'Search here!'} value={''}></Input>
                <MdPersonPin className='text-5xl cursor-pointer'/>
            </div>
            <div className='sm:hidden flex'>
                <MdMenu className='text-3xl'/>
            </div>
           <div style={style} className='h-screen w-full  items-center justify-center  fixed bg-black bg-opacity-60 top-0 left-0 p-96  shadow-xl shadow-black'>
            <h1>Hello</h1>
           <Search hide={handleShowSearch}/>
           </div>
        </div>
     );
}

export default NavBar;