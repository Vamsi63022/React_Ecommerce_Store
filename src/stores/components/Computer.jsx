

import React from 'react'
import {computerData} from'../data/computers';

const Computer = () => {
    const firstFiveImages = computerData.slice(0,5);
  return (
    <div>
      <h2>Computers</h2>
      <div className="proSection">
        {firstFiveImages.map((item) => (
          <div className="imgBox" key={item.id}>
            <a href="/computers"><img className="proImage" src={item.image} alt={item.product} /></a>
            {/* <p>{item.type}</p>
            <p>{item.brand}</p>
            <p>{item.model}</p>
            <p>${item.price}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Computer