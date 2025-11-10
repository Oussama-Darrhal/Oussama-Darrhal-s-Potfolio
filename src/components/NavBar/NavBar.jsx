/* eslint-disable react/no-unescaped-entities */
import { SideBar } from "../NavBar/SideBar/SideBar"
import "./NavBar.scss"
import { motion } from "framer-motion"
import { useLanguage } from "../../hooks/useLanguage"


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
    const { lang, setLang, t } = useLanguage();
    const toggleLanguage = () => {
        const newLang = lang === 'en' ? 'fr' : 'en';
        setLang(newLang);
    };
return (
        <div className="navbar">
            {/* SideBar */}
            <SideBar />
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5,type:"spring",damping:10,}}>Oussama D.</motion.span>
                <motion.div className="socials" variants={textVariants} initial="initial" animate="animate">
                    <motion.a variants={textVariants} href="https://www.linkedin.com/in/oussama-darrhal-6344ba250/" target="_blank"><img src="/linkedin.png" alt="" /></motion.a>
                    <motion.a variants={textVariants} href="https://github.com/oussama-darrhal" target="_blank"><img src="/github.png" alt="" /></motion.a>
                    <motion.button variants={textVariants} onClick={toggleLanguage} className="language-toggle">
                        {t('navbar.toggle')}
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}
