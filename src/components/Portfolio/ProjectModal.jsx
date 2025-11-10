import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import "./ProjectModal.scss";

export const ProjectModal = ({ isOpen, onClose, project }) => {
    const modalContentRef = useRef(null);
    const modalContainerRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        // The "bouncer" function - checks if the event came from inside the modal
        const handleWheelEvent = (e) => {
            const target = e.target;
            const modalContainer = modalContainerRef.current;

            if (!modalContainer) return;

            // Check if the target is inside the modal container
            if (!modalContainer.contains(target)) {
                // Event came from outside the modal - block it!
                e.preventDefault();
                e.stopPropagation();
            }
            // If event came from inside, let it proceed normally
        };

        const handleTouchMoveEvent = (e) => {
            const target = e.target;
            const modalContainer = modalContainerRef.current;

            if (!modalContainer) return;

            // Check if the target is inside the modal container
            if (!modalContainer.contains(target)) {
                // Event came from outside the modal - block it!
                e.preventDefault();
                e.stopPropagation();
            }
            // If event came from inside, let it proceed normally
        };

        // Prevent body scrolling by blocking scroll events on document
        const handleScrollEvent = (e) => {
            const target = e.target;
            const modalContainer = modalContainerRef.current;

            if (!modalContainer) return;

            // If scrolling the document/body and target is outside modal, prevent it
            if ((target === document || target === document.body || target === document.documentElement) ||
                !modalContainer.contains(target)) {
                e.preventDefault();
                e.stopPropagation();
            }
        };

        // Add event listeners to the window (the "bouncer" watches the whole club)
        window.addEventListener('wheel', handleWheelEvent, { passive: false });
        window.addEventListener('touchmove', handleTouchMoveEvent, { passive: false });
        document.addEventListener('scroll', handleScrollEvent, { passive: false, capture: true });

        // Also prevent body scroll by setting overflow (but we'll do it via JS to avoid CSS)
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        // Cleanup: remove the bouncer when modal closes
        return () => {
            window.removeEventListener('wheel', handleWheelEvent);
            window.removeEventListener('touchmove', handleTouchMoveEvent);
            document.removeEventListener('scroll', handleScrollEvent, { capture: true });
            document.body.style.overflow = originalOverflow;
        };
    }, [isOpen]);

    if (!project || !project.caseStudy || !project.caseStudy.businessCase || !project.caseStudy.technicalDeepDive) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <div className="modal-wrapper" ref={modalContainerRef}>
                        <motion.div
                            className="modal-container"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <button className="modal-close" onClick={onClose}>
                                ✕
                            </button>

                            <div className="modal-content" ref={modalContentRef}>
                                <div className="modal-header">
                                    <h2>
                                        <span className="modal-emoji">{project.emoji}</span>
                                        {project.title}
                                    </h2>
                                </div>

                                <div className="modal-body">
                                    <div className="modal-sections">
                                        {/* Section 1: Business Case (for Recruiters) */}
                                        <section className="modal-section business-case-section">
                                            <h3>Project Summary</h3>
                                            <div className="business-case-content">
                                                <div className="business-case-item">
                                                    <h4 className="business-case-label">Problem</h4>
                                                    <p>{project.caseStudy.businessCase.problem}</p>
                                                </div>
                                                <div className="business-case-item">
                                                    <h4 className="business-case-label">Solution</h4>
                                                    <p>{project.caseStudy.businessCase.solution}</p>
                                                </div>
                                                <div className="business-case-item">
                                                    <h4 className="business-case-label">Result</h4>
                                                    <p>{project.caseStudy.businessCase.result}</p>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Section 2: Technical Deep Dive (for Techs) */}
                                        <section className="modal-section technical-deep-dive-section">
                                            <h3>Technical Breakdown</h3>
                                            <div className="technical-content">
                                                <div className="technical-subsection">
                                                    <h4 className="technical-label">My Role</h4>
                                                    <p className="technical-role">{project.caseStudy.technicalDeepDive.myRole}</p>
                                                </div>

                                                <div className="technical-subsection">
                                                    <h4 className="technical-label">Key Technical Challenges</h4>
                                                    <ul className="modal-list">
                                                        {project.caseStudy.technicalDeepDive.technicalChallenges.map((challenge, index) => (
                                                            <li key={index}>
                                                                <span className="list-bullet">▹</span>
                                                                {challenge}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="technical-subsection">
                                                    <h4 className="technical-label">Core Features</h4>
                                                    <ul className="modal-list">
                                                        {project.caseStudy.technicalDeepDive.coreFeatures.map((feature, index) => (
                                                            <li key={index}>
                                                                <span className="list-bullet">▹</span>
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="technical-subsection">
                                                    <h4 className="technical-label">Tech Stack</h4>
                                                    <div className="tech-stack-pills">
                                                        {project.caseStudy.technicalDeepDive.techStack.map((tech, index) => (
                                                            <span key={index} className="tech-pill">
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Section 3: Project Screenshots */}
                                        <section className="modal-section screenshots-section">
                                            <h3>Project Screenshots</h3>
                                            <div className="screenshots-gallery">
                                                <div className="screenshot-placeholder">
                                                    <span className="placeholder-text">Screenshot 1</span>
                                                </div>
                                                <div className="screenshot-placeholder">
                                                    <span className="placeholder-text">Screenshot 2</span>
                                                </div>
                                                <div className="screenshot-placeholder">
                                                    <span className="placeholder-text">Screenshot 3</span>
                                                </div>
                                                <div className="screenshot-placeholder">
                                                    <span className="placeholder-text">Screenshot 4</span>
                                                </div>
                                                <div className="screenshot-placeholder">
                                                    <span className="placeholder-text">Screenshot 5</span>
                                                </div>
                                                <div className="screenshot-placeholder">
                                                    <span className="placeholder-text">Screenshot 6</span>
                                                </div>  
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

