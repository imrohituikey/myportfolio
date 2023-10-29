import Image from 'next/image'
import Nav from './components/Nav';
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

export default function Home() {
  return (
   <main className='page bg-site bg-cover bg-no-repeat'>
    <Nav/>
    <Homepage/>
    <Skills/>
    <Projects/>
    <Contact/>
   </main>
  )
}
