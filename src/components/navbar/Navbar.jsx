import React from 'react'
import './Navbar.css'
import collegelogo from '../../images/collegelogo.png'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-home">Que<br/>GEN</div>
            <div className="n-logo"><img src={collegelogo}/></div>
        </div>
    )
}

export default Navbar