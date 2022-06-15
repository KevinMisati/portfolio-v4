import React, { useState } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
            <header>
                <nav>
                <div className="logo-container">
                    <div className="logo">

                        <Link to="/">
                            <h3 className=""><span>&lt;Kevin/&gt;</span></h3>
                        </Link>
                    </div>
                </div>
                <ul className="nav_list">
                    <li  className="nav_item">
                        <Link to="/" className=" link1 nav_link">Home</Link>
                    </li>

                </ul>
                </nav>
            </header>
    )
}

export default Header
