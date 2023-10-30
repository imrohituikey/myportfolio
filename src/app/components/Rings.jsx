import React from 'react'
import Image from 'next/image'
const Rings = () => {
  return (
    <div>
        <Image src={'/images/ring.png'}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt=''/>
    </div>
  )
}

export default Rings