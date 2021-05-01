import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <a className="navbar-brand" href="/">Map 3-D</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/saved">collection</a>
                    </li>
                    </ul>
                </div>
        </nav>
    )
}
