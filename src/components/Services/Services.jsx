import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

export const Services = () => {
    const ref = useRef();

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
                <p>
                    I Translate Complex Technical Challenges<br />
                    Into Elegant, Efficient Solutions.
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <motion.img
                        whileHover={{
                            opacity: 0.8,
                            transition: { duration: 0.2, ease: "easeOut" },
                            scale: 0.98,
                        }}
                        src="/peoplee.gif"
                        alt=""
                    />
                    <motion.h1>
                        <motion.b whileInView={{ color: "orange" }}>Clean </motion.b>Code.
                    </motion.h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileInView={{ color: "orange" }}>Solid </motion.b>Architecture.
                    </h1>
                    <motion.button
                        style={{ cursor: "default" }}
                        whileHover={{
                            opacity: 0.8,
                            transition: { duration: 0.2, ease: "easeOut" },
                            scale: 0.98,
                        }}
                    >
                        THE PILLARS
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
                        <h2>🏛️ Backend & API Engineering</h2>
                    </div>
                    <ul className="pillarList">
                        <li>
                            <span className="pillarLabel">Laravel & PHP:</span> Building
                            scalable, secure, and maintainable server-side applications.
                        </li>
                        <li>
                            <span className="pillarLabel">RESTful API Design:</span> Crafting
                            clean, efficient, and well-documented APIs.
                        </li>
                        <li>
                            <span className="pillarLabel">Database Architecture (MySQL):</span>{" "}
                            Data modeling, query optimization, and schema design.
                        </li>
                        <li>
                            <span className="pillarLabel">Containerization (Docker):</span>{" "}
                            Ensuring consistent development and deployment environments.
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
                        <h2>💻 Frontend & Interface Development</h2>
                    </div>
                    <ul className="pillarList">
                        <li>
                            <span className="pillarLabel">React.js & Next.js:</span> Developing
                            dynamic, high-performance UIs (SPA & SSR).
                        </li>
                        <li>
                            <span className="pillarLabel">JavaScript (ES6+) & TypeScript:</span>{" "}
                            Asynchronous programming and modern, type-safe code.
                        </li>
                        <li>
                            <span className="pillarLabel">Responsive UI/UX Design:</span>{" "}
                            Implementing pixel-perfect, accessible designs.
                        </li>
                        <li>
                            <span className="pillarLabel">Efficient Workflow:</span> Optimized
                            development environment using Vim/Neovim.
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
                        <h2>🧬 Architecture & Methodology</h2>
                    </div>
                    <ul className="pillarList">
                        <li>
                            <span className="pillarLabel">SOLID Principles:</span> Writing
                            decoupled, maintainable, and testable object-oriented code.
                        </li>
                        <li>
                            <span className="pillarLabel">Test-Driven Development (TDD):</span>{" "}
                            Building reliable applications with comprehensive coverage.
                        </li>
                        <li>
                            <span className="pillarLabel">System Design:</span> Architecting
                            solutions using Monolithic and Microservice patterns.
                        </li>
                        <li>
                            <span className="pillarLabel">Version Control:</span> Advanced Git
                            workflows for team collaboration.
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
