import React, { useRef, useState } from 'react';
import Input from '../components/common/input';
import NavBar from '../components/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import handleFormSubmission from '../lib/FormSubmission';
import { api, permissionFormSchema, POST } from '../lib/constants';
import swal from 'sweetalert';
import PermissionComponent from '../components/PermissionComponent';
import { handleChange } from '../lib/handleChange';
function Permisssion() {
    const navigate = useNavigate();
    const params = useParams();
    const buttonRef = useRef();
    const [formData,setFormData] = useState({
        studentNames:'',
        departureDate:'',
        departureTime:'',
        returnDate:'',
        returnTime:'',
        issuer:'',
        reason:'',
    })
    const divRef  = useRef();
    const handleSubmit = async(e) => {
    e.preventDefault();
    buttonRef.current.innerHTML = `Loading...`;
    let validate = permissionFormSchema.validate(formData);
    if(validate.error){
        swal(validate.error.details[0].message);
        console.log(validate.error.details);
        buttonRef.current.innerHTML = 'SIGN'
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
            <div ref={divRef} className='w-8/12 mt-48 min-h-fit rounded-md border-blue-500 border-2 m-auto'>
                <h1 className='text-3xl text-center font-bold'>Permission Form</h1>
            <form method="post" onSubmit={(e)=> handleSubmit(e)}  className='sm:w-11/12 w-full  m-auto mt-10 p-2 flex-col flex'>
                    <Input type={"text"} value={formData['studentNames']} label={"Student Names"} onChange={(e) => handleChange(e,setFormData,formData)} name={"studentNames"} placeholder={"Eg: Ganza Hodari..."} className="border-b-2 border-black m-2 focus:border-blue-600 focus:outline-none border-dashed"/>
                    <div className='flex'>
                        <Input type="date" value={formData['departureDate']} onChange={(e) => handleChange(e,setFormData,formData)} data-date-format="YYYY MM DD"  label="Departure date" name={"departureDate"}/>
                        <Input type="time" value={formData['departureTime']} onChange={(e) => handleChange(e,setFormData,formData)} label="Departure time" name={"departureTime"}/>
                    </div>
                    <div className='flex'>
                        <Input type="date" value={formData['returnDate']} onChange={(e) => handleChange(e,setFormData,formData)} data-date-format="YYYY MM DD"  label="Expected return date" name={"returnDate"}/>
                        <Input type="time" value={formData['returnTime']} onChange={(e) => handleChange(e,setFormData,formData)} label="Expected return  time" name={"returnTime"}/>
                    </div>
                    <div className='flex w-full'>
                        <div className='w-6/12'>
                            <label htmlFor="issuer" className='font-bold text-lg'>Issuer:</label><br />
                            <select name="issuer" value={formData['issuer']} onChange={(e) => handleChange(e,setFormData,formData)} id="issuer" className='h-14 text-md w-6/12 bg-white focus:outline-none rounded-md border'>
                                <option className='h-12 ' value="prefect">Discipline Prefect</option>
                                <option className='h-12 ' value="patron">Patron</option>
                                <option className='h-12 ' value="matron">Matron</option>
                            </select>
                        </div>
                        <div className='w-6/12'>
                            <label htmlFor="reason" className='font-bold text-md'>Departure Reason:</label><br />
                            <select  value={formData['reason']} onChange={(e) => handleChange(e,setFormData,formData)} name="reason" id="reason" className='h-14 w-6/12 text-md bg-white focus:outline-none rounded-md border'>
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