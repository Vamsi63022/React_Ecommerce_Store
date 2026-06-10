
import React from 'react';
import { menData } from '../data/men';


const Men = ({ limit } ) =>{
   const menImages = menData.slice(0,5);
    return(
        <>
        <div className="protitle"></div>
        <h2>Men's Fashion</h2>
        <div className="proSection">
            {menImages.map((item) =>{
                return(
                    <div className="imgBox" key={item.id}>
                        <img className="proImage" src={item.image} alt={item.product} />
                        {/* <p>{item.type}</p>
                        <p>{item.brand}</p>
                        <p>{item.model}</p>
                        <p>${item.price}</p> */}
                    </div>
                )
            })}
        </div>
    
    </>
  )
}



export default Men;