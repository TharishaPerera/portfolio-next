import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import blog1 from "../../public/images/articles/pagination component in reactjs.jpg";
import { motion, useMotionValue } from "framer-motion";

import blogImg from "../../public/images/articles/create modal component in react using react portals.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
    //   onMouseMove={handleMouse}          to disable image on hover
    //   onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline underline-offset-4">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};

const BlogPost = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 sm:pt-3 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedBlog = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark/25 rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-2 -z-10 w-[100%] h-[102%] rounded-3xl bg-dark dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl font-bold my-2 hover:underline underline-offset-4 xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 xs:hidden">{summary}</p>
      <span className="w-ful text-primary font-semibold flex items-end justify-end mt-4 dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const blog = () => {
  return (
    <>
      <Head>
        <title>Blog | Tharisha Perera</title>
        <meta
          name="description"
          content="Tharisha Perera personal portfolio website"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="!text-7xl mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
          />
          <ul className="grid grid-cols-4 gap-16 lg:grid-cols-2 lg:gap-8 md:grid-cols-1 md:gap-y-8">
            {/* <FeaturedBlog
                            img={}
                            title=""
                            time=""
                            summary=""
                            link=""
                        /> */}

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

          <ul>
            {/* <BlogPost
                            title=""
                            date=""
                            link=""
                            img={}
                        /> */}
            <BlogPost
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="January 20, 2023"
              link="/"
              img={blogImg}
            />
            <BlogPost
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="January 20, 2023"
              link="/"
              img={blogImg}
            />
            <BlogPost
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="January 20, 2023"
              link="/"
              img={blogImg}
            />
            <BlogPost
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="January 20, 2023"
              link="/"
              img={blogImg}
            />
            <BlogPost
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="January 20, 2023"
              link="/"
              img={blogImg}
            />
            <BlogPost
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="January 20, 2023"
              link="/"
              img={blogImg}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default blog;
