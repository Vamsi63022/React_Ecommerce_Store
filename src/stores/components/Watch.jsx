


import React from 'react'
import { watchData } from '../data/watch';

const Watch = ({limit}) => {
    const watchImages = watchData.slice(0,5);
  
  return (
    <>
        <div className="protitle">
            <h2>Watches</h2>
        </div>
        <div className="proSection">
            { watchImages.map((item) =>{
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
export default Watch