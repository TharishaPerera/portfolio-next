import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import blog1 from "../../public/images/articles/pagination component in reactjs.jpg"
import { motion } from 'framer-motion'

const FramerImage = motion(Image)

const FeaturedBlog = ({ img, title, time, summary, link }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark/25 rounded-2xl'>
            <div className='absolute top-0 -right-2 -z-10 w-[100%] h-[102%] rounded-3xl bg-dark' />
            <Link href={link} target='_blank' className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-xl font-bold my-2 hover:underline underline-offset-4'>{title}</h2>
            </Link>
            <p className='text-sm mb-2 '>{summary}</p>
            <span className='w-ful text-primary font-semibold flex items-end justify-end mt-4'>{time}</span>
        </li>
    )
}

const blog = () => {
    return (
        <>
            <Head>
                <title>Blog | Tharisha Perera</title>
                <meta name='description' content='Tharisha Perera personal portfolio website' />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Change The World!" className="!text-7xl mb-16" />
                    <ul className='grid grid-cols-3 gap-16 '>
                        <FeaturedBlog
                            img={blog1}
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            time="09 min read"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
                        9 min read"
                            link="/"
                        />

                        <FeaturedBlog
                            img={blog1}
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            time="09 min read"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
                        9 min read"
                            link="/"
                        />

                        <FeaturedBlog
                            img={blog1}
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            time="09 min read"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
                        9 min read"
                            link="/"
                        />
                    </ul>

                    <AnimatedText text="All Blog Posts" className="!text-4xl my-16" />
                </Layout>
            </main>
        </>
    )
}

export default blog