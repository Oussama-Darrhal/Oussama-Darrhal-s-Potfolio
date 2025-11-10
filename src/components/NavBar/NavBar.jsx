/* eslint-disable react/no-unescaped-entities */
import { SideBar } from "../NavBar/SideBar/SideBar"
import "./NavBar.scss"
import { motion } from "framer-motion"


const textVariants = {
    initial: {
        y: -100,
    },
    animate: {
        y: 0,
        transition: {
            type:"spring",
            damping:9,
            staggerChildren: 0.4,
        }
    },
}

export const NavBar = () => {
return (
        <div className="navbar">
            {/* SideBar */}
            <SideBar />
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5,type:"spring",damping:10,}}>Oussama D.</motion.span>
                <motion.div className="socials" variants={textVariants} initial="initial" animate="animate">
                    <motion.a variants={textVariants} href="https://www.linkedin.com/in/oussama-darrhal-6344ba250/" target="_blank"><img src="/linkedin.png" alt="" /></motion.a>
                    <motion.a variants={textVariants} href="https://github.com/oussama-darrhal" target="_blank"><img src="/github.png" alt="" /></motion.a>
                </motion.div>
            </div>
        </div>
    )
}
