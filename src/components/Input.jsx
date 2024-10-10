import React,{useId} from 'react'

const Input = ({
    label,
    type="text",
    className = '',
    ...props
}) => {
    const id = useId();
  return (
    <>
       <div className='w-full'>
        {
        label && <label 
        className='inline-block mb-2 pl-1 font-semibold' htmlFor={id}>
          {label}
         </label>
         }
        <input 
        type={type}
        className={`px-3 py-2 rounded-full bg-white text-black outline-none border border-gray-200 mb-4 w-full ${className}`}
        {...props}
        id={id}
        />
    </div>
    </>
  )
}

export default Input
