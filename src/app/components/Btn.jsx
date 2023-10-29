import React from 'react'
import {FiDownload} from 'react-icons/fi'

const Btn = ({name}) => {
  return (
    <button className='transition duration-600 ease-in-out link px-12 py-3 rounded-full group flex items-center group'>
        <span>{name}</span>
        {/* <span><FiDownload/></span> */}
    </button>
  )
}

export default Btn