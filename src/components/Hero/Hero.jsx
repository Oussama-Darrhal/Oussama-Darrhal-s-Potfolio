import "./Hero.scss"
import { motion } from "framer-motion"
import { useLanguage } from "../../hooks/useLanguage"

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
    const { t } = useLanguage();
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" whileInView="animate">
                    <motion.h2 variants={textVariants}>{t('hero.name')}</motion.h2>
                    <motion.h1 variants={textVariants}>{t('hero.title')}</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <a href="#Portfolio" className="first-button"><motion.button variants={textVariants}>{t('hero.see_work')}</motion.button></a>
                        <a href="#Contact" className="second-button"><motion.button variants={textVariants}>{t('hero.contact_me')}</motion.button></a>
                    </motion.div>
                    <motion.img style={{ cursor: "pointer" }} onClick={scrollByAmount} variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                {t('hero.marquee')}
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}
