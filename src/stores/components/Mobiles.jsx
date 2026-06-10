


import React from 'react'
import {mobileData} from '../data/mobiles';

const Mobiles = ({ limit }) => {
    const mobileImages = typeof limit === 'number' ? mobileData.slice(0, limit) : mobileData;

    return (
        <>
            <div className="protitle">
                <h2>Mobiles</h2>
            </div>
            <div className="proSection">
                {mobileImages.map((item) => {
                    return (
                        <div className="imgBox" key={item.id}>
                            <img className="proImage" src={`/${item.image}`} alt={item.product} />
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

export default Mobiles