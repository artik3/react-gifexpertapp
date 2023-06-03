import { useState } from "react"
import  { useEffect } from 'react'
import { getGift } from '../helpers/getGifs';



export const useFetchGifs =(category) =>{

    
    const [state, setState] = useState({
        data: [],
        loading: true

    });
  

    useEffect( ()=>{

    getGift(category)
    .then( img => {
    setTimeout(() => {
              setState({
            data: img,
            loading: false
                });
}, 1500);
});
  },[category]);

    return state;
}