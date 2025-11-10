import "./Hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 10,
            type: "spring",
            damping: 10,
            staggerChildren: 0.3,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 30,
        }
    },
}

const scrollByAmount = () => {
    window.scrollBy({ top: 200, behavior: 'smooth' });
};

export const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" whileInView="animate">
                    <motion.h2 variants={textVariants}>Oussama DARRHAL</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Web Developer.</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <a href="#Portfolio" className="first-button"><motion.button variants={textVariants}>See Latest Work</motion.button></a>
                        <a href="#Contact" className="second-button"><motion.button variants={textVariants}>Contact Me</motion.button></a>
                    </motion.div>
                    <motion.img style={{ cursor: "pointer" }} onClick={scrollByAmount} variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                PHP Laravel VueJS React JavaScript
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}
