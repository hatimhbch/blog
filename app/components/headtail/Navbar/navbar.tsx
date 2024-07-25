import React from 'react'
import Image from 'next/image'
import './navbar.css'
import logo from './images/logo.svg'
import search from './images/search.svg'

function navbar() {
  return (
    <div className="navbar">
            <Image className="logo" src={logo} alt='' />
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Spaces</a></li>
              <li><a href="#">Languages</a></li>
            </ul>
            <div className="search">
                <button className="imgSearch"><Image src={search} alt=''/></button>
                <input id="search" className="inputSearch" type="text" placeholder="Search what want you learn?"/>
                <p>Ctrl+K</p>
            </div>
            <div className="iconsbar">
                <button className="icosign"><p>Sign up</p></button>
                <button className="icoLog"><p>Login</p></button>
            </div>
          </div>
  )
}

export default navbar