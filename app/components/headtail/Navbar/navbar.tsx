"use client"

import { SignedIn, UserButton } from '@clerk/clerk-react'
import { SignedOut, SignInButton } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'
import './navbar.css'
import logo from './images/logo.svg'
import search from './images/search.svg'
import Link from 'next/link'

function navbar() {
  return (
    <div className='nav'>
          <div className="navbar">
            <Link href='./' aria-label="elevenai"><Image className="logo" src={logo} alt='home elevenai' /></Link>
            <ul>
              <li><Link href="./">Articles</Link></li>
              <li><Link href="./help">Help</Link></li>
              <li><Link href="./about">About</Link></li>
            </ul>
            <div className="search">
                <Image src={search} className="imgSearch" alt=''/>
                <input id="search" className="inputSearch" type="text" placeholder="Search"/>
                <p>Ctrl+K</p>
            </div>
            <div className="iconsbar">
               <div className="navclerk">
                 <SignedOut>
                   <SignInButton mode='modal'></SignInButton>
                 </SignedOut>
                 <SignedIn>
                   <UserButton><Link href='/about'></Link></UserButton>
                 </SignedIn>
               </div>
                <button className="icosign"><p>Sign in</p></button>
            </div>
          </div>



      </div>
  )
}

export default navbar