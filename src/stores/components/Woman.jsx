import React from 'react';
import {womanData} from '../data/woman';


const woman = ({ limit } )=>{
const womanImages = womanData.slice(0,5);



return(
        <>
         <div className="protitle">
            <h2>Women's Fashion</h2>
        </div>
        <div className="proSection">
            {womanImages.map((item) =>{
                return(
                    <div className ="imgBox" key ={item.id}>
                        <a href="/woman"><img className="proImage" src={`/${item.image}`} alt={item.model || "product"} /></a>
        
                         </div>
                )
            })}
        </div>
    
    </>
  )
}  


export default woman;