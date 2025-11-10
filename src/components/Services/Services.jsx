import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../../hooks/useLanguage";

export const Services = () => {
    const ref = useRef();
    const { t } = useLanguage();

    const isInView = useInView(ref, { margin: "-100px" });

    const variants = {
        initial: {
            x: -500,
            y: 100,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            y: 0,
            transition: {
                stiffness: 15,
                damping: 5,
                staggerChildren: 0.4,
                type: "spring",
                ease: "easeOut",
            },
        },
    };

    const pillarContainerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    };

    const pillarItemVariants = {
        initial: { y: 20, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    return (
        <motion.div
            className="services"
            variants={variants}
            whileInView="animate"
            ref={ref}
            animate={isInView && "animate"}
        >
            <motion.div className="textContainer " variants={variants}>
                <p>{t('services.title')}</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    {/* <motion.img
                        whileHover={{
                            opacity: 0.8,
                            transition: { duration: 0.2, ease: "easeOut" },
                            scale: 0.98,
                        }}
                        src="/peoplee.gif"
                        alt=""
                    /> */}
                    <motion.h1>
                        <motion.b whileInView={{ color: "orange" }}>{t('services.clean_bold')}</motion.b>{t('services.clean_tail')}
                    </motion.h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileInView={{ color: "orange" }}>{t('services.solid_bold')}</motion.b>{t('services.solid_tail')}
                    </h1>
                    <motion.button
                        style={{ cursor: "default" }}
                        whileHover={{
                            opacity: 0.8,
                            transition: { duration: 0.2, ease: "easeOut" },
                            scale: 0.98,
                        }}
                    >
                        {t('services.pillars_button')}
                        {/* arrow down svg */}
                        <motion.svg
                            className="scrollArrow"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            animate={{
                                y: [0, 8, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <g id="Complete">
                                <g id="arrow-down">
                                    <g>
                                        <polyline
                                            data-name="Right"
                                            fill="none"
                                            id="Right-2"
                                            points="7 16.4 12 21.5 17 16.4"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                        <line
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            x1="12"
                                            x2="12"
                                            y1="2.5"
                                            y2="19.2"
                                        />
                                    </g>
                                </g>
                            </g>
                        </motion.svg>
                    </motion.button>
                </div>
            </motion.div>
            <motion.div
                className="pillarsContainer"
                variants={pillarContainerVariants}
                initial="initial"
                whileInView="animate"
                style={{ WebkitOverflowScrolling: "touch" }}
            >
                <motion.div
                    className="pillar"
                    variants={pillarItemVariants}
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3, ease: "easeOut" },
                    }}
                >
                    <div className="pillarHeader">
                        <h2>🏛️ {t('pillars.backend_title')}</h2>
                    </div>
                    <ul className="pillarList">
                        <li>
                            <span className="pillarLabel">Laravel & PHP:</span> Building
                            {` ${t('pillars.backend_p1')}`}
                        </li>
                        <li>
                            <span className="pillarLabel">RESTful API Design:</span> Crafting
                            {` ${t('pillars.backend_p2')}`}
                        </li>
                        <li>
                            <span className="pillarLabel">Database Architecture (MySQL):</span>{" "}
                            {t('pillars.backend_p3')}
                        </li>
                        <li>
                            <span className="pillarLabel">Containerization (Docker):</span>{" "}
                            {t('pillars.backend_p4')}
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    className="pillar"
                    variants={pillarItemVariants}
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3, ease: "easeOut" },
                    }}
                >
                    <div className="pillarHeader">
                        <h2>💻 {t('pillars.frontend_title')}</h2>
                    </div>
                    <ul className="pillarList">
                        <li>
                            <span className="pillarLabel">React.js & Next.js:</span> Developing
                            {` ${t('pillars.frontend_p1')}`}
                        </li>
                        <li>
                            <span className="pillarLabel">JavaScript (ES6+) & TypeScript:</span>{" "}
                            {t('pillars.frontend_p2')}
                        </li>
                        <li>
                            <span className="pillarLabel">Responsive UI/UX Design:</span>{" "}
                            {t('pillars.frontend_p3')}
                        </li>
                        <li>
                            <span className="pillarLabel">Efficient Workflow:</span> Optimized
                            {` ${t('pillars.frontend_p4')}`}
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    className="pillar"
                    variants={pillarItemVariants}
                    whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3, ease: "easeOut" },
                    }}
                >
                    <div className="pillarHeader">
                        <h2>🧬 {t('pillars.arch_title')}</h2>
                    </div>
                    <ul className="pillarList">
                        <li>
                            <span className="pillarLabel">SOLID Principles:</span> Writing
                            {` ${t('pillars.arch_p1')}`}
                        </li>
                        <li>
                            <span className="pillarLabel">Test-Driven Development (TDD):</span>{" "}
                            {t('pillars.arch_p2')}
                        </li>
                        <li>
                            <span className="pillarLabel">System Design:</span> Architecting
                            {t('pillars.arch_p3')}
                        </li>
                        <li>
                            <span className="pillarLabel">Version Control:</span> Advanced Git
                            {` ${t('pillars.arch_p4')}`}
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
