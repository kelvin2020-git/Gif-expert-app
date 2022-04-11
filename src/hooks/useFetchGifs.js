// import { useState } from "react"



//  export const useFetchGifs = () => {
  
// const [state, setState] = useState({
//     data: [],
//     loading:true
// })
// setTimeout(()=>{
//     setState({
//         data: [0,1,2,3,4,5],
//         loading: false
//     },22000);
// })
// return state; // data: [], loading: true
// }


import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/gefGifs';
 
export const useFetchGifs = (category) => {
   const [state, setState] = useState({
      data: [],
      loading: true
   });
 
 
     

        useEffect(() => {

            getGifs(category)
     .then(imgs =>{
            setTimeout(()=>{
                setState({
                    data: imgs,
                    loading:false
                             });  
            }, 3000);
       
     })
   }, [category]);
  
   return state;   
} 

