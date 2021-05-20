import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark text-light">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <div className="container">
                <span className="display-4 mx-auto">
                    Consoles
                    <span class="material-icons material-icons-outlined">videogame_asset</span>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
