import React, { useState } from 'react'
import Card from './Card'

function ListElement({ id, name }) {
    const [selected, setSelected] = useState(false)

    return (
        <div className="col-md-6 mb-2" onFocus={e => e.target.style.order=999}>
            <button
                className="btn btn-outline-dark w-100"
                onFocus={() => setSelected(true)}
                onBlur={() => setSelected(false)}
            >
                {name}
            </button>
            <Card id={id} selected={selected} />
        </div>
    )
}

export default ListElement
