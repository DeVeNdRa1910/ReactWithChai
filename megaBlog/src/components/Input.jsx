import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full flex gap-10 items-center justify-between'>
            {label && <label 
            className='flex items-center w-[20%] text-2xl font-bold mb-1 pl-1 ' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            
            type={type}
            className={`px-3 w-[80%] py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input