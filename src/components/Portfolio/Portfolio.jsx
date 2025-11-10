import { useRef, useState } from "react";
import "./Portfolio.scss"
import { motion, useScroll, useSpring } from "framer-motion";
import { projects } from '../../projects';
import { ProjectModal } from './ProjectModal';
import { useLanguage } from "../../hooks/useLanguage";

const Single = ({item}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t } = useLanguage();

    return (
        <motion.section 
            className="portfolio-section"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
        >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <div className="image-wrapper">
                            <img src={item.img} alt={item.title} />
                            <div className="image-overlay"></div>
                        </div>
                    </div>
                    <div className="textContainer">
                        <div className="project-header">
                            <span className="project-emoji">{item.emoji}</span>
                            <h2>{t(item.titleKey)}</h2>
                        </div>
                        <p className="project-description">{t(item.descKey)}</p>
                        
                        <div className="tech-stack-section">
                            <h3 className="tech-stack-title">{t('portfolio.tech_stack')}</h3>
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
                                {t('portfolio.view_case_study')}
                            </motion.button>
                            <motion.button 
                                className="github-button"
                                whileHover={{ 
                                    scale: 1.05,
                                    borderColor: "rgba(255, 165, 0, 0.5)"
                                }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <a href={item.repo} target="_blank" rel="noreferrer">{t('portfolio.github_repo')}</a>
                            </motion.button>
                        </div>
                    </div>
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
    const { t } = useLanguage();

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
                <h1>{t('parallax.projects')}</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {projects.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}
