//import React, { useEffect } from 'react'
//import { useState } from 'react';
import { GifGridItems } from './GifGridItems';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {


 const {data:images, loading} = useFetchGifs(category);


  return (
    <>
    <h3>{category}</h3>
    {loading ? <p>Data Cargando...</p> : <p>Data Cargada</p>}
   <div className='card-grid'>
      {
       images.map( img =>(
        <GifGridItems 
        key={img.id}
        {...img} 
        />
        ))}
    
        

    </div>
    </>
  )
}

