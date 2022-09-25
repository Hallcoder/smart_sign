import React from 'react';
import algoliasearch from 'algoliasearch';
import {SearchBox,Configure,InstantSearch,connectHits,connectSearchBox}  from "react-instantsearch-dom"
import { Close } from '@mui/icons-material';
import Input from './common/input';
import { handleChange } from '../lib/handleChange';
import { useState } from 'react';
function Search({hide}) {
    const searchClient = algoliasearch(import.meta.env.VITE_ALGOLIA_APPID, import.meta.env.VITE_ALGOLIA_ADMINKEY,{
        enablePersonalization:false
    })
    const index = searchClient.initIndex('permissions')
    const SearchBox = ({ currentRefinement, refine }) => (
        <input
          type="search"
          value={currentRefinement}
          placeholder='Type in here...'
          className='border indent-4 m-2 w-9/12 text-xl focus:outline-blue-400 rounded-md h-[5vh]'
          onChange={event => refine(event.currentTarget.value)}
        />
      );
    const MySearchBox = connectSearchBox(SearchBox);
    const Hits = ({ hits }) => (
        <ol className='border-2'>
       {
       hits.length !== 0 && hits.map(hit => (
            <div key={hit.objectID} className='border-b border-blue-500 bg-white h-[5vh] cursor-pointer'>
            <p className='text-lg'>{hit.name}</p>
            </div> 
          ))
       }   
       {hits.length == 0 && <p>No results found</p>}
        </ol>
      );      
    const CustomHits = connectHits(Hits);
    return ( 
        <div className='h-[75vh] w-9/12 m-auto border-blue-500 p-1 rounded-md bg-white fixed border bg-opacity-90'>
            <Close className='w-2/12 m-2 h-16 border rounded-full float-right' onClick={() => hide()}/>
            <InstantSearch 
            indexName={index.indexName}
            searchClient={searchClient}
                  >
                <h1 className='w-full'>
                <MySearchBox />
                </h1 >
                <Configure
                  hitsPerPage={4}
                  enablePersonalization={false}
                  distinct
                />
                <CustomHits />
                  </InstantSearch>
        </div>
     );
}

export default Search;