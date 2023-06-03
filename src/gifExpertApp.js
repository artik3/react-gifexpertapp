import React, { useState } from 'react';
import { AddCategoria } from './componente/AddCategoria';
import { GifGrid } from './componente/GifGrid';

export const GifExpertApp = () => {


const [categories, setCategories] = useState(['Dragon Ball']);
/*const Agregar = () =>{
      //setCategories([...categories,'X Mens']);

} */

return (
    <>  
    <h2>GifExpertApp</h2>
    <AddCategoria setCategories={setCategories} />
    <hr /> 
    
    <ol>
        { 
        categories.map( category =>(
        <GifGrid 
        key = {category} 
        category = {category}/>))
        }
    </ol>
    </>
        );
}
