import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profile from '@/app/(articles)/images/profile.svg'
import './collection.css'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Articles of experts in all language programming and science Understanding Java Generics: A Comprehensive Guide',
  description: 'Java, Python, Html, Css, Javascript, Typescript, Nodejs, Reactjs, Vuejs, Angular, Next.js, Nestjs, Expressjs, Spring, Spring bot, c#, c, c++, .Net, Django',
}
 

function collection() {
  return (
    <div className='hp-collection' >
        <Link href='./Understanding-Java-Generics-A-Comprehensive-Guide' className="hp-listofcollection">
            <div className="hp-leftofarticle">
                <div className="hp-profile"><Image src={profile} alt='' /><p>Hatim Habchaoui</p></div>
                <h1>Understanding Java Generics: A Comprehensive Guide</h1>
                <p className='hp-desc'>Java Generics, introduced in JDK 5, revolutionized...</p>
                <p className="hp-dateandreadtime">Feb 15</p>
            </div>
            <h6 className='hp-cover'></h6>
        </Link>
        <Link href='./Collections-in-Java' className="hp-listofcollection">
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