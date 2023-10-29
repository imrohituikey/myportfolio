import Image from 'next/image'
import Nav from './components/Nav';
import Homepage from './pages/Homepage'
import Contact from './pages/Contact'

export default function Home() {
  return (
   <main className='bg-site'>
    <Nav/>
    <Homepage/>
    <Contact/>
   </main>
  )
}
