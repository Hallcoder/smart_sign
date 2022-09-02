import React from 'react';
function Input({placeholder,label,name,type}) {
    return (  
        <div className='flex flex-col'>
    {label&& <label htmlFor={name} className='font-bold text-xl'>{label}</label>}        
    <input type={type} name={name} placeholder={placeholder} className='border indent-4 focus:outline-blue-400 rounded-md h-[5vh]'/>
        </div>
    );
}

export default Input;