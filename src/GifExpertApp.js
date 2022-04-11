import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   
const [categories, setCategories] = useState(['vegueta']);
// const handleApp = () =>{
//     //agrgar valores aun arreglo
// //setCategories([...categories, 'hunterxhunter']);
// setCategories(cats =>[...cats, 'hunterxhunter']);

// }

return (
      <>
       <h2>GifExpertApp</h2>
       <AddCategory setCategories={setCategories}/>
       <hr/>
       
      <ul>
        {
            categories.map(category =>
             <GifGrid key={category} category={category}/>
            )
        }
      </ul>
      </>
   
  )
}
