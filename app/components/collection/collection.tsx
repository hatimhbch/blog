import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profile from './profile.jpeg'
import './collection.css'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Blog for share Articles of experts in all language programming and science Understanding Java Generics: A Comprehensive Guide',
  description: 'Java Generics, introduced in JDK 5, revolutionized...',
}

function collection() {
  return (
    <div className='hp-collection' >
        <Link href='#' className="hp-listofcollection">
            <div className="hp-leftofarticle">
                <div className="hp-profile"><Image src={profile} alt='' /><p>Hatim Habchaoui</p></div>
                <h1>Understanding Java Generics: A Comprehensive Guide</h1>
                <p className='hp-desc'>Java Generics, introduced in JDK 5, revolutionized...</p>
                <p className="hp-dateandreadtime">Feb 15</p>
            </div>
            <h6 className='hp-cover'></h6>
        </Link>
        <Link href='#' className="hp-listofcollection">
            <div className="hp-leftofarticle">
                <div className="hp-profile"><Image src={profile} alt='' /><p>Hatim Habchaoui</p></div>
                <h1>Understanding Java Generics: A Comprehensive Guide</h1>
                <p className='hp-desc'>Java Generics, introduced in JDK 5, revolutionized...</p>
                <p className="hp-dateandreadtime">Feb 15</p>
            </div>
            <h6 className='hp-cover'></h6>
        </Link>
        <Link href='#' className="hp-listofcollection">
            <div className="hp-leftofarticle">
                <div className="hp-profile"><Image src={profile} alt='' /><p>Hatim Habchaoui</p></div>
                <h1>Understanding Java Generics: A Comprehensive Guide</h1>
                <p className='hp-desc'>Java Generics, introduced in JDK 5, revolutionized...</p>
                <p className="hp-dateandreadtime">Feb 15</p>
            </div>
            <h6 className='hp-cover'></h6>
        </Link>
        <Link href='#' className="hp-listofcollection">
            <div className="hp-leftofarticle">
                <div className="hp-profile"><Image src={profile} alt='' /><p>Hatim Habchaoui</p></div>
                <h1>Understanding Java Generics: A Comprehensive Guide</h1>
                <p className='hp-desc'>Java Generics, introduced in JDK 5, revolutionized...</p>
                <p className="hp-dateandreadtime">Feb 15</p>
            </div>
            <h6 className='hp-cover'></h6>
        </Link>
        <Link href='#' className="hp-listofcollection">
            <div className="hp-leftofarticle">
                <div className="hp-profile"><Image src={profile} alt='' /><p>Hatim Habchaoui</p></div>
                <h1>Understanding Java Generics: A Comprehensive Guide</h1>
                <p className='hp-desc'>Java Generics, introduced in JDK 5, revolutionized...</p>
                <p className="hp-dateandreadtime">Feb 15</p>
            </div>
            <h6 className='hp-cover'></h6>
        </Link>
    </div>
  )
}

export default collection
