import { useRef } from "react";
import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { projects } from '../../projects';

const Single = ({item}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0,1], [-500, 500])

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2 >{item.title}</h2>
                    <p>{item.desc}</p>
                    <div className="buttonContainer">
                    <motion.button whileHover={{opacity: 0.6, transition: { duration: 0.2, ease: "easeOut" },scale: 0.98, filter: blur(10)}}><a href={item.demo} target="_blank" rel="noreferrer">Demo</a></motion.button>
                    <motion.button whileHover={{opacity: 0.6, transition: { duration: 0.2, ease: "easeOut" },scale: 0.98, filter: blur(10)}}>Github Repo</motion.button>
                    </div>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

export const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="Portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {projects.map(item => (
                <Single item={item} key={projects.id} />
            ))}
        </div>
    )
}
