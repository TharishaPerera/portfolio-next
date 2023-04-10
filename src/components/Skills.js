import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Skill = ({name, x, y}) => {
	return(
		<motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-5 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-2 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
		whileHover={{scale:1.05}}
		initial={{x:0, y:0}}
		whileInView={{x:x, y:y, transition:{duration: 1.5}}}
		viewport={{once: true}}
		>
			{name}
		</motion.div>
	)
}

const Skills = () => {
	return (
		<>
			<AnimatedText text="Skills" className="!font-bold !text-6xl !mt-64 !w-full !text-center md:!text-5xl md:mt-32" />
			{/* <h2 className="font-bold text-6xl mt-64 w-full text-center">Skills</h2> */}
			<div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:bg-circularDarkLg md:bg-circularLightMd md:bg-circularDarkMd sm:bg-circularLightSm sm:bg-circularDarkSm">
				<motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-5 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg-p-6 md:p-4 xs:text-xs xs:p-2" whileHover={{scale:1.05}}>Web</motion.div>
				<Skill name="HTML" x="-20vw" y="2vw" />
				<Skill name="CSS" x="-5vw" y="-10vw" />
				<Skill name="JavaScript" x="20vw" y="6vw" />
				<Skill name="ReactJS" x="0vw" y="12vw" />
				<Skill name="NextJS" x="-18vw" y="-14vw" />
				<Skill name="GatsbyJS" x="15vw" y="-12vw" />
				<Skill name="Web Design" x="34vw" y="-5vw" />
				<Skill name="Figma" x="0vw" y="-21vw" />
				<Skill name="FireBase" x="-24vw" y="19vw" />
				<Skill name="Tailwind CSS" x="18vw" y="18vw" />
			</div>
		</>
	);
};

export default Skills;
