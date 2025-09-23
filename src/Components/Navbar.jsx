import React from 'react'
import './Navbar.css'
import logo from  '../Assets/logo.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className='nav-logo'><img src={logo} alt="" /></div>
        <ul>
            <li> <Link style={{textDecoration:'none'}}   to ="/">Home</Link> </li>
            <li> <Link style={{textDecoration:'none'}} to= "/patients">Patients</Link></li>
            <li><Link  style={{textDecoration:'none'}} to= "/about">About</Link> </li>

        </ul>
      
    </div>
  )
}

export default Navbar
