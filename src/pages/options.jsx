import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import NavBar from '../components/Navbar';
function Options() {
    return ( 
        <div>
            <NavBar title={'Options Page'}/>
            <div className='w-6/12 border border-blue-400 mt-60 h-[40vh] rounded-md m-auto'>
                <h1 className='m-auto text-xl text-center'>Choose what you want to do:</h1>
            </div>
        </div>
     );
}

export default Options;