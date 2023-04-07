import Link from 'next/link'
import React from 'react'
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

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher()

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
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
            {/* <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div> */}
        </header>
    )
}

export default NavBar