import React from 'react';
import Input from '../components/common/input';
import NavBar from '../components/Navbar';
function Discipline() {
    const labelClassName = 'font-bold text-lg';
    return ( 
        <div>
        <NavBar/>
        <div className='w-8/12 mt-36 min-h-fit border-2 m-auto'>
            <h1 className='text-3xl text-center font-bold'>Discipline Signing Form</h1>
        <form method="post"  className='w-11/12 m-auto mt-10 p-2 flex-col flex'>
                <Input type={"text"} label={"Student Names"} name={"studentName"} placeholder={"Eg: Ganza Hodari..."} className="border-b-2 border-black m-2 focus:border-blue-600 focus:outline-none border-dashed"/>
                <Input type="date" label="Signing date" name={"departureDate"}/>
                <label htmlFor="reason" className={labelClassName}>Case Type:</label><br />
                <select name="departureReason" id="reason" className='h-14 text-xl w-6/12 bg-white border-black rounded-md border'>
                    <option className='h-12 ' value="Initiative">Initiative</option>
                    <option className='h-12 ' value="Advice">Advice</option>
                    <option className='h-12 ' value="Fault">Fault</option>
                </select>
                <label htmlFor="message" className={labelClassName}>Message:</label>
                <textarea name="message" id="message" className='border border-black m-2 w-7/12  h-40 focus:outline-blue-500 indent-2 resize-none' ></textarea>
                <label htmlFor="reason" className={labelClassName}>Issuer:</label><br />
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

export default Discipline;