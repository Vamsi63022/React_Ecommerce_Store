

import React from 'react'
import { furnitureData } from '../data/furniture';

const Furniture = ({limit}) => {
    const furnitureImages = furnitureData.slice(0,5);
  return (
    <>
        <div className="protitle">
            <h2>Furniture</h2>
        </div>
        <div className="proSection">
            {furnitureImages.map((item) =>{
                return(
                    <div className="imgBox" key={item.id}>
                       <a href="/furniture"> <img className="proImage" src={item.image} alt={item.product} /></a>
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
  

export default Furniture