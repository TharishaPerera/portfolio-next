import Image from 'next/image'
import React from 'react'
import logo from "../../public/images/Logo.png"

const TharishaPerera = () => {
  return (
    <div className='fixed left-4 bottom-20 flex items-center justify-center overflow-hidden'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <Image src={logo} alt='Tharisha Perera' className='animate-pulse' />
        </div>
    </div>
  )
}

export default TharishaPerera