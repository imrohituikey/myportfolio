'use client'

import Image from 'next/image'

import { Homepage, About, Skills, Projects, Contact } from './pages'
import { Nav, Customcursor } from './components'


export default function Home() {
  

  return (
    <main className='page'>
      <Customcursor/>
      <Nav/>
      <Homepage />
      <About />
      {/* <Skills />
      <Projects /> */}
      <Contact />
    </main>
  )
}
