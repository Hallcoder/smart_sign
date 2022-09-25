import React from 'react';
function Input({placeholder,label,name,type,onFocus,value,format,onBlur,onChange,className}) {
    return (  
        <div className='flex w-full text-md flex-col'>
    {label&& <label htmlFor={name} className='font-bold'>{label}</label>}        
    <input type={type} name={name} onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} onChange={onChange} value={value} format={format ? format:''} className={className ? className:'border indent-4 m-2 focus:outline-blue-400 rounded-md h-[5vh]'}/>
        </div>
    );
}

export default Input;