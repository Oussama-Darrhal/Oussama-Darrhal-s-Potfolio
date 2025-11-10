import { useRef, useState } from "react";
import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { projects } from '../../projects';
import { ProjectModal } from './ProjectModal';

const Single = ({item}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0,1], [-500, 500])

    return (
        <motion.section 
            className="portfolio-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="container">
                <div className="wrapper">
                    <motion.div 
                        className="imageContainer" 
                        ref={ref}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="image-wrapper">
                            <img src={item.img} alt={item.title} />
                            <div className="image-overlay"></div>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="textContainer"
                        // style={{y}}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    >
                        <div className="project-header">
                            <span className="project-emoji">{item.emoji}</span>
                            <h2>{item.title}</h2>
                        </div>
                        <p className="project-description">{item.desc}</p>
                        
                        <div className="tech-stack-section">
                            <h3 className="tech-stack-title">Tech Stack</h3>
                            <div className="tech-stack-tags">
                                {item.techStack.map((tech, index) => (
                                    <span key={index} className="tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="buttonContainer">
                            <motion.button 
                                className="case-study-button"
                                onClick={() => setIsModalOpen(true)}
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 8px 24px rgba(255, 165, 0, 0.3)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View Case Study
                            </motion.button>
                            <motion.button 
                                className="github-button"
                                whileHover={{ 
                                    scale: 1.05,
                                    borderColor: "rgba(255, 165, 0, 0.5)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <a href={item.repo} target="_blank" rel="noreferrer">Github Repo</a>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <ProjectModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                project={item}
            />
        </motion.section>
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
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}
