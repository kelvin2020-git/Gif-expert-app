// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/gefGifs';
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
 import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
  
//   const [images, setImages] = useState([]);
const { data:images, loading} = useFetchGifs(category);

//   useEffect (()=>{
//       getGifs(category)
//       .then(setImages);
//   }, [category])
 
  
  
    return (
        <>   
         <h3 className=' animate__animated animate__fadeIn'>{category}</h3>
      
      { loading && <p className=' animate__animated animate__flash'>loading</p>}
      
        <div className='card-grid'>
           
           
              {
                images.map( img => 
                 <GifGridItem key={img.id} {...img}/>
                ) 
              }
          
        </div> 
        </>
     
  )
}
