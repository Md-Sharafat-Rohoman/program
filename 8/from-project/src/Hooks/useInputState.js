import { useState } from "react"

const useInputState = (defaultValue = null)=>{
    const[value,setValue] =useState(defaultValue);

    const handleChange = e =>{
        setValue(e.target.value)
        e.preventDefault();


    }
    return[value,handleChange];
}

export default useInputState