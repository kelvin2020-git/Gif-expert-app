import React, { useState } from 'react';
import PropTypes from 'prop-types';
export const AddCategory = ({setCategories}) => {
 const [inputValue, setinputValue] = useState('Hola Mundo')
 const handleinputchange=(e)=>{
     setinputValue(e.target.value);
 }

 const handlesubmit = (e)=>{
     e.preventDefault();
if (inputValue.trim().length>2){
    setCategories(cats =>[inputValue, ...cats, ]);
    setinputValue('');
}
 
 }
    return (
   
    <form onSubmit={handlesubmit}> 
         <input type="text"
    value={inputValue}
    onChange={handleinputchange}
    />
    </form>
            
  )
}
 AddCategory.propTypes={
     setCategories: PropTypes.func.isRequired
 }