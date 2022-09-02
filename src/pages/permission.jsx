import React from 'react';
import Input from '../components/common/input';
import NavBar from '../components/Navbar';
function Permisssion() {
    return (  
        <div>
            <NavBar/>
            <div className='w-8/12 mt-40 min-h-fit border-2 m-auto'>
                <h1 className='text-3xl text-center font-bold'>Permission Form</h1>
            <form method="post"  className='w-11/12 m-auto mt-10 p-2 flex-col flex'>
                    <Input type={"text"} label={"Student Names"} name={"studentName"} placeholder={"Eg: Ganza Hodari..."} className="border-b-2 border-black m-2 focus:border-blue-600 focus:outline-none border-dashed"/>
                    <label htmlFor="reason" className='font-bold text-lg'>Departure Reason:</label><br />
                    <select name="departureReason" id="reason" className='h-14 w-6/12 text-xl bg-white border-black rounded-md border'>
                        <option className='h-12 ' value="FamilyIssue">Family Case</option>
                        <option className='h-12 ' value="MedicalCare">Medical Care</option>
                        <option className='h-12 ' value="DisciplineIssue">Discipline Issue</option>
                    </select>
                    <Input type="date" label="Departure date" name={"departureDate"}/>
                    <Input type="date" label="Expected return date" name={"departureDate"}/>
                    <label htmlFor="reason" className='font-bold text-lg'>Issuer:</label><br />
                    <select name="departureReason" id="reason" className='h-14 text-xl w-6/12 bg-white border-black rounded-md border'>
                        <option className='h-12 ' value="DisciplineIssue">Discipline Prefect</option>
                        <option className='h-12 ' value="MedicalCare">Patron</option>
                        <option className='h-12 ' value="FamilyIssue">Matron</option>
                    </select>
                    <button className='mt-8 bg-blue-800 font-bold rounded-sm text-white w-4/12 m-auto h-12'>SIGN</button>
                </form>
            </div>
        </div>
    );
}

export default Permisssion;