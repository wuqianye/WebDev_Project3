import loading from '../img/loading.gif'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListElement from './ListElement'

function List() {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('http://csc225.mockable.io/consoles')
        .then(res => setList(res.data))
    }, [])

    if (list.length === 0) {
        return (
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <img className="w-25" src={loading} alt="loading" />
            </div>
        )
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">(Click to See More Details)</h2>
            <div className="row">
                {list.map(i => {
                    return <ListElement id={i.id} name={i.name} />
                })}
            </div>
            
        </div>
    )
}

export default List
