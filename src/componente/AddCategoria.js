import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategoria = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');//'Inserte lo que va a buscar'
    const alCambio = (e) => { 
      setInputValue(e.target.value);
    }
    const entrando = (e) =>{ 
        e.preventDefault();
        if(inputValue.trim().length>2)
        {
        setCategories(cats =>[inputValue,...cats]);
        setInputValue('');
    }
        //cambiar el console y agregar setcategories
        
    }
      return (
    <form onSubmit={entrando}>
        <input type='text' value={inputValue} onChange={alCambio}></input>
    </form>
     
    
  )
}

AddCategoria.propTypes = {setCategories: PropTypes.func.isRequired}
