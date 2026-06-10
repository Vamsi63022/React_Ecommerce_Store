

import React from 'react'
import {tvData} from '../data/tv';

const Tv = () => {
    const firstFiveImages = tvData.slice(0,5);
  return (
      <>
        <div className="protitle">
            <h2>Television</h2>
        </div>
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

export default Tv;