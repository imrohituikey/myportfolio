'use client'

import Image from 'next/image'

import { Homepage, About, Skills, Projects, Contact } from './pages'
import Nav from './components/Nav';

export default function Home() {
  return (
    <main className='page'>
        <Nav />
        <Homepage />
        {/* <About/>
    <Skills/>
    <Projects/> */}
        <Contact />
    </main>
  )
}
