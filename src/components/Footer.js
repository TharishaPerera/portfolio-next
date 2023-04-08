import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import { LinkArrow } from './Icons'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid font-medium dark:text-light dark:border-light/30 sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col-reverse lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
                Build With
                <span className='px-1'>Next.JS</span>&nbsp;by&nbsp;
                {/* &nbsp;<span className='px-1'>&#9825;</span>&nbsp;by&nbsp; */}
                <Link href="/" className='underline underline-offset-4'>Tharisha Perera</Link>
            </div>
            <Link href="mailto:tharishaperera@gmail.com" target='_blank' className='flex underline underline-offset-4'>
                Say Hello
                
            </Link>
        </Layout>
    </footer>
  )
}

export default Footer