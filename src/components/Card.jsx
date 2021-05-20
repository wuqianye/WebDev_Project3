import React, { useState } from 'react'
import axios from 'axios'

function Card({ id, selected }) {
    const [item, setItem] = useState([])

    if (selected) {
        axios.get(`http://csc225.mockable.io/consoles/${id}`)
        .then(res => setItem(res.data))

        return (
            <div className="card">
                <img src={item.image} className="card-img-top" alt="image for console" />
                <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <h5 className="card-text">${item.price}</h5>
                    <p className="card-text mb-1">Released in {item.releaseYear}</p>
                    <p className="card-text">Product of {item.country}</p>
                </div>
            </div>
        )
    }
    return <></>
}

export default Card
