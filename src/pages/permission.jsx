import React, { useRef, useState } from 'react';
import Input from '../components/common/input';
import NavBar from '../components/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import handleFormSubmission from '../lib/FormSubmission';
import { api, permissionFormSchema, POST } from '../lib/constants';
import swal from 'sweetalert';
import PermissionComponent from '../components/PermissionComponent';
function Permisssion() {
    const navigate = useNavigate();
    const params = useParams();
    const buttonRef = useRef();
    const [formData,setFormData] = useState({
        studentNames:'h',
        departureDate:'12/08/2005',
        departureTime:'06:24 PM',
        returnDate:'12',
        returnTime:'06',
        issuer:'Etieene',
        reason:'family issue',
    })
    const divRef  = useRef();
    const handleSubmit = async(e) => {
    e.preventDefault();
    buttonRef.current.innerHTML = `Loading...`;
    let validate = permissionFormSchema.validate(formData);
    if(validate.error){
        swal(validate.error.details[0].message);
        console.log(validate.error.details);
        return;
    }else{
        let data = await handleFormSubmission(formData,`${api}/permission`,POST);
        if(data.data.status == 200){
         navigate(`/permission?id=${data.data.permission.number}`);
        }
    }
   
    }
    if(params.id){
        return <PermissionComponent />
    }else {
    return (  
        <div>
            <NavBar/>
            <div>
                Info about this permission.
            </div>
            <div ref={divRef} className='w-8/12 mt-24 min-h-fit rounded-md border-blue-500 border-2 m-auto'>
                <h1 className='text-3xl text-center font-bold'>Permission Form</h1>
            <form method="post" onSubmit={(e)=> handleSubmit(e)}  className='sm:w-11/12 w-full  m-auto mt-10 p-2 text-xs flex-col flex'>
                    <Input type={"text"} label={"Student Names"} name={"studentName"} placeholder={"Eg: Ganza Hodari..."} className="border-b-2 border-black m-2 focus:border-blue-600 focus:outline-none border-dashed"/>
                    <div className='flex'>
                        <Input type="date" data-date-format="YYYY MM DD"  label="Departure date" name={"departureDate"}/>
                        <Input type="time" label="Departure time" name={"departureTime"}/>
                    </div>
                    <div className='flex'>
                        <Input type="date" data-date-format="YYYY MM DD"  label="Expected return date" name={"returnDate"}/>
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
                    <button ref={buttonRef} className='mt-8 bg-blue-800 font-bold rounded-sm text-white w-4/12 m-auto h-12'>SIGN</button>
                </form>
            </div>
        </div>
    );
    }
}

export default Permisssion;