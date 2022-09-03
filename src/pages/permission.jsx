import React from 'react';
import Input from '../components/common/input';
import NavBar from '../components/Navbar';
import swal from 'sweetalert';
function Permisssion() {
    const handleChange = (e) => {
        e.preventDefault();
        swal('Are you sure you want to sign this permission to Ganza Hodari?');
    }
    return (  
        <div>
            <NavBar/>
            <div className='w-8/12 mt-24 min-h-fit rounded-md border-blue-500 border-2 m-auto'>
                <h1 className='text-3xl text-center font-bold'>Permission Form</h1>
            <form method="post" onSubmit={(e)=> handleChange(e)}  className='w-11/12 m-auto mt-10 p-2 text-xs flex-col flex'>
                    <Input type={"text"} label={"Student Names"} name={"studentName"} placeholder={"Eg: Ganza Hodari..."} className="border-b-2 border-black m-2 focus:border-blue-600 focus:outline-none border-dashed"/>
                    <div className='flex'>
                        <Input type="date" label="Departure date" name={"departureDate"}/>
                        <Input type="time" label="Departure time" name={"departureTime"}/>
                    </div>
                    <div className='flex'>
                        <Input type="date" label="Expected return date" name={"returnDate"}/>
                        <Input type="time" label="Expected return  time" name={"returnTime"}/>
                    </div>
                    <div className='flex w-full'>
                        <div className='w-6/12'>
                            <label htmlFor="reason" className='font-bold text-lg'>Issuer:</label><br />
                            <select name="departureReason" id="reason" className='h-14 text-sm w-6/12 bg-white focus:outline-none rounded-md border'>
                                <option className='h-12 ' value="DisciplineIssue">Discipline Prefect</option>
                                <option className='h-12 ' value="MedicalCare">Patron</option>
                                <option className='h-12 ' value="FamilyIssue">Matron</option>
                            </select>
                        </div>
                        <div className='w-6/12'>
                            <label htmlFor="reason" className='font-bold text-sm'>Departure Reason:</label><br />
                                                <select name="departureReason" id="reason" className='h-14 w-6/12 text-sm bg-white focus:outline-none rounded-md border'>
                            <option className='h-12 ' value="FamilyIssue">Family Case</option>
                            <option className='h-12 ' value="MedicalCare">Medical Care</option>
                            <option className='h-12 ' value="DisciplineIssue">Discipline Issue</option>
                                                </select>
                        </div>
                    </div>
                    <button className='mt-8 bg-blue-800 font-bold rounded-sm text-white w-4/12 m-auto h-12'>SIGN</button>
                </form>
            </div>
        </div>
    );
}

export default Permisssion;