import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Skill = ({name, x, y}) => {
	return(
		<motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-5 shadow-dark cursor-pointer absolute"
		whileHover={{scale:1.05}}
		initial={{x:0, y:0}}
		whileInView={{x:x, y:y}}
		transition={{duration: 1.5}}
		viewport={{once: true}}
		>
			{name}
		</motion.div>
	)
}

const Skills = () => {
	return (
		<>
			<AnimatedText text="Skills" className="!font-bold !text-6xl !mt-64 !w-full !text-center" />
			{/* <h2 className="font-bold text-6xl mt-64 w-full text-center">Skills</h2> */}
			<div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
				<motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-5 shadow-dark cursor-pointer" whileHover={{scale:1.05}}>Web</motion.div>
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
