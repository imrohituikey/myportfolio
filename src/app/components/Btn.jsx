import React from 'react'
import {FiDownload} from 'react-icons/fi'

const Btn = ({name}) => {
  return (
    <button className='bg-[#F75023] px-12 py-3 rounded-full group'>
        {name}
        {/* <span className=''><FiDownload/></span> */}
    </button>
  )
}

export default Btn