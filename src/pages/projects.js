import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark/25 bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light/30 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-2 -z-10 w-[100%] h-[102%] rounded-3xl bg-dark dark:bg-light sm:-right-1 lg:h-[101%] sm:h-[101%]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark border border-solid hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light/50 duration-500 sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-ful flex flex-col items-center justify-center rounded-2xl border border-solid border-dark/25 bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light/30 xs:p-4">
      <div className="absolute top-0 -right-2 -z-10 w-[100%] h-[102%] rounded-3xl bg-dark dark:bg-light sm:-right-1 lg:h-[101%] sm:h-[101%] sm:rounded-2xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-1 px-3 text-lg font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark border border-solid hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light/50 duration-500 md:text-base"
          >
            View
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Tharisha Perera</title>
        <meta
          name="description"
          content="Tharisha Perera personal portfolio website"
        />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="!text-7xl mb-24 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid grid-cols-12 gap-12 justify-center xl:gap-8 lg:gap-6 sm:gap-4 sm:gap-y-8">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                link="/"
                github="/"
                type="Featured Project"
                img={project1}
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="React Portfolio Website"
                link="/"
                github="/"
                type="Project"
                img={project1}
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="React Portfolio Website"
                link="/"
                github="/"
                type="Project"
                img={project1}
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="React Portfolio Website"
                link="/"
                github="/"
                type="Project"
                img={project1}
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="React Portfolio Website"
                link="/"
                github="/"
                type="Project"
                img={project1}
              />
            </div>
            <div className="col-span-4 sm:col-span-12">
              <Project
                title="React Portfolio Website"
                link="/"
                github="/"
                type="Project"
                img={project1}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                link="/"
                github="/"
                type="Featured Project"
                img={project1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
