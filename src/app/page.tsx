'use client'

import Image from 'next/image'
import { NextUIProvider } from '@nextui-org/react';

import { Homepage, About, Skills, Services, Projects, Contact } from './pages'
import { Nav } from './components'


export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <Nav />
        <Homepage />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
    </NextUIProvider>
  )
}
