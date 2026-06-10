


import React from 'react'
import {acData} from '../data/ac';
const Ac = () => {
    const firstFiveImages = acData.slice(0,5);
  return (
    <>
        <div className="protitle"></div>
        <h2>Air Conditioners</h2>
        <div className="proSection">
            {firstFiveImages.map((item) =>{
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
export default Ac