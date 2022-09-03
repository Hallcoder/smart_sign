import React from 'react';
function Input({placeholder,label,name,type,className}) {
    return (  
        <div className='flex w-full text-xs flex-col'>
    {label&& <label htmlFor={name} className='font-bold text-sm'>{label}</label>}        
    <input type={type} name={name} placeholder={placeholder} className={className ? className:'border indent-4 m-2 focus:outline-blue-400 rounded-md h-[5vh]'}/>
        </div>
    );
}

export default Input;