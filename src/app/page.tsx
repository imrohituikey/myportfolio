'use client'

import Image from 'next/image'

import { Homepage, About, Skills, Services, Projects, Contact } from './pages'
import { Nav } from './components'


export default function Home() {
  return (
    <main>
      <Nav/>
      <Homepage/>
      <About />
      <Skills />
      <Services/>
      <Projects />
      <Contact />
    </main>
  )
}
