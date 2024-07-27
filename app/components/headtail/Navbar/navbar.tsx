import React from 'react'
import Image from 'next/image'
import './navbar.css'
import logo from './images/logo.svg'
import search from './images/search.svg'
import Link from 'next/link'

function navbar() {
  return (
    <div className="navbar">
            <Link href='./' aria-label="elevenai"><Image className="logo" src={logo} alt='home elevenai' /></Link>
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Spaces</a></li>
              <li><a href="#">Languages</a></li>
            </ul>
            <div className="search">
                <Image src={search} className="imgSearch" alt=''/>
                <input id="search" className="inputSearch" type="text" placeholder="Search"/>
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