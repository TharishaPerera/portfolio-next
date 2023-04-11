import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import github from "../../public/images/icons/github.svg"
import githubLight from "../../public/images/icons/github-light.svg"
import linkedin from "../../public/images/icons/linkedin.svg"
import linkedinLight from "../../public/images/icons/linkedin-light.svg"
import blogger from "../../public/images/icons/blogger.svg"
import bloggerLight from "../../public/images/icons/blogger-light.svg"
import instagram from "../../public/images/icons/instagram.svg"
import instagramLight from "../../public/images/icons/instagram-light.svg"
import facebook from "../../public/images/icons/facebook.svg"
import facebookLight from "../../public/images/icons/facebook-light.svg"
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const router = useRouter();

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark`}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

            <button className='flex flex-col items-center justify-center w-full hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all ease-out duration-75 h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all ease-out duration-0 h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all ease-out duration-500 h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4' />
                    <CustomLink href="/about" title="About" className='mx-4' />
                    <CustomLink href="/projects" title="Projects" className='mx-4' />
                    <CustomLink href="/blog" title="Blog" className='ml-4' />
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href="https://github.com/TharishaPerera" target={"_blank"} className='w-6 mr-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><Image src={mode === "dark" ? githubLight : github} alt='github' /></motion.a>
                    <motion.a href="https://www.linkedin.com/in/tharisha-perera" target={"_blank"} className='w-6 mr-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><Image src={mode === "dark" ? linkedinLight : linkedin} alt='linkedin' /></motion.a>
                    <motion.a href="/blog" target={"_blank"} className='w-6 mr-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><Image src={mode === "dark" ? bloggerLight : blogger} alt='blog' /></motion.a>
                    <motion.a href="https://www.instagram.com/___t.h.a.r.i.y.a___/" target={"_blank"} className='w-8 mr-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><Image src={mode === "dark" ? instagramLight : instagram} alt='instagram' /></motion.a>
                    <motion.a href="https://www.facebook.com/profile.php?id=100007492698410" target={"_blank"} className='w-6 mr-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><Image src={mode === "dark" ? facebookLight : facebook} alt='facebook' /></motion.a>
                    
                    {/* <motion.a href="/" target={"_blank"} className='w-5 mr-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><GithubIcon /></motion.a>
                    <motion.a href="/" target={"_blank"} className='w-5 mx-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><LinkedInIcon /></motion.a>
                    <motion.a href="/" target={"_blank"} className='w-5 mx-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><TwitterIcon /></motion.a>
                    <motion.a href="/" target={"_blank"} className='w-5 mx-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><PinterestIcon /></motion.a>
                    <motion.a href="/" target={"_blank"} className='w-5 ml-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><DribbbleIcon /></motion.a> */}

                    <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1
                        ${mode === "light" ? "text-dark" : " text-light"}
                        `}
                    >
                        {
                            mode === "dark" ?
                            <SunIcon className={"fill-dark"} />
                            :
                            <MoonIcon className={"fill-dark"} />
                        }
                    </button>

                </nav>
            </div>

            {/* mobile menu */}
            {
                isOpen ?

                <motion.div className='min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-16'
                    initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                    animate={{scale:1, opacity:1, transition:{duration:0.3, ease:'easeInOut'}}}
                >
                    <nav className='flex flex-col items-center justify-center'>
                        <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
                        <CustomMobileLink href="/about" title="About" className='' toggle={handleClick} />
                        <CustomMobileLink href="/projects" title="Projects" className='' toggle={handleClick} />
                        <CustomMobileLink href="/blog" title="Blog" className='' toggle={handleClick} />
                    </nav>

                    <nav className='flex items-center justify-center flex-wrap mt-2'>
                        <motion.a href="https://github.com/TharishaPerera" target={"_blank"} className='w-6 mr-2 sm:mx-1' whileHover={{y:-2}} whileTap={{scale:0.9}}><Image src={mode === "dark" ? github : githubLight} alt='github' /></motion.a>
                        <motion.a href="https://www.linkedin.com/in/tharisha-perera" target={"_blank"} className='w-6 mr-2 sm:mx-1' whileHover={{y:-2}} whileTap={{scale:0.9}}><Image src={mode === "dark" ? linkedin : linkedinLight} alt='linkedin' /></motion.a>
                        <motion.a href="/blog" target={"_blank"} className='w-6 mr-2 sm:mx-1' whileHover={{y:-2}} whileTap={{scale:0.9}}><Image src={mode === "dark" ? blogger : bloggerLight} alt='blog' /></motion.a>
                        <motion.a href="https://www.instagram.com/___t.h.a.r.i.y.a___/" target={"_blank"} className='w-8 mr-2 sm:mx-1' whileHover={{y:-2}} whileTap={{scale:0.9}}><Image src={mode === "dark" ? instagram : instagramLight} alt='instagram' /></motion.a>
                        <motion.a href="https://www.facebook.com/profile.php?id=100007492698410" target={"_blank"} className='w-6 mr-2 sm:mx-1' whileHover={{y:-2}} whileTap={{scale:0.9}}><Image src={mode === "dark" ? facebook : facebookLight} alt='facebook' /></motion.a>
                        
                        {/* <motion.a href="/" target={"_blank"} className='w-5 mr-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><GithubIcon /></motion.a>
                        <motion.a href="/" target={"_blank"} className='w-5 mx-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><LinkedInIcon /></motion.a>
                        <motion.a href="/" target={"_blank"} className='w-5 mx-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><TwitterIcon /></motion.a>
                        <motion.a href="/" target={"_blank"} className='w-5 mx-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><PinterestIcon /></motion.a>
                        <motion.a href="/" target={"_blank"} className='w-5 ml-2' whileHover={{y:-2}} whileTap={{scale:0.9}}><DribbbleIcon /></motion.a> */}

                        <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
                            className={`ml-3 flex items-center justify-center rounded-full p-1 w-8 h-8
                            ${mode === "light" ? "text-light" : " text-dark"}
                            `}
                        >
                            {
                                mode === "dark" ?
                                <SunIcon className={"fill-dark"} />
                                :
                                <MoonIcon className={"fill-dark"} />
                            }
                        </button>

                    </nav>
                </motion.div>

                : null
            }

            {/* <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div> */}
        </header>
    )
}

export default NavBar