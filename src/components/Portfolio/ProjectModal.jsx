import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./ProjectModal.scss";
import { useLanguage } from "../../hooks/useLanguage";

export const ProjectModal = ({ isOpen, onClose, project }) => {
    const modalContentRef = useRef(null);
    const modalContainerRef = useRef(null);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { t } = useLanguage();

    // TODO: Replace this with project.images when ready
    const placeholderImages = project.images;

    const slides = placeholderImages.map(src => ({ src: src }));

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
                                        {t(project.titleKey)}
                                    </h2>
                                </div>

                                <div className="modal-body">
                                    <div className="modal-sections">
                                        {/* Section 1: Business Case (for Recruiters) */}
                                        <section className="modal-section business-case-section">
                                            <h3>{t('projectModal.project_summary')}</h3>
                                            <div className="business-case-content">
                                                <div className="business-case-item">
                                                    <h4 className="business-case-label">{t('projectModal.problem')}</h4>
                                                    <p>{t(project.caseStudy.businessCase.problemKey)}</p>
                                                </div>
                                                <div className="business-case-item">
                                                    <h4 className="business-case-label">{t('projectModal.solution')}</h4>
                                                    <p>{t(project.caseStudy.businessCase.solutionKey)}</p>
                                                </div>
                                                <div className="business-case-item">
                                                    <h4 className="business-case-label">{t('projectModal.result')}</h4>
                                                    <p>{t(project.caseStudy.businessCase.resultKey)}</p>
                                                </div>
                                            </div>
                                        </section>

                                        {/* Section 2: Technical Deep Dive (for Techs) */}
                                        <section className="modal-section technical-deep-dive-section">
                                            <h3>{t('projectModal.technical_breakdown')}</h3>
                                            <div className="technical-content">
                                                <div className="technical-subsection">
                                                    <h4 className="technical-label">{t('projectModal.my_role')}</h4>
                                                    <p className="technical-role">{t(project.caseStudy.technicalDeepDive.myRoleKey)}</p>
                                                </div>

                                                <div className="technical-subsection">
                                                    <h4 className="technical-label">{t('projectModal.key_technical_challenges')}</h4>
                                                    <ul className="modal-list">
                                                        {project.caseStudy.technicalDeepDive.technicalChallengesKeys.map((challengeKey, index) => (
                                                            <li key={index}>
                                                                <span className="list-bullet">▹</span>
                                                                {t(challengeKey)}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="technical-subsection">
                                                    <h4 className="technical-label">{t('projectModal.core_features')}</h4>
                                                    <ul className="modal-list">
                                                        {project.caseStudy.technicalDeepDive.coreFeaturesKeys.map((featureKey, index) => (
                                                            <li key={index}>
                                                                <span className="list-bullet">▹</span>
                                                                {t(featureKey)}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="technical-subsection">
                                                    <h4 className="technical-label">{t('projectModal.tech_stack')}</h4>
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
                                            <h3>{t('projectModal.project_screenshots')}</h3>
                                            <div className="screenshot-gallery">
                                                {placeholderImages.map((src, index) => (
                                                    <img 
                                                        key={index}
                                                        src={src} 
                                                        alt={`Project screenshot ${index + 1}`}
                                                        className="gallery-image"
                                                        onClick={() => {
                                                            setSelectedIndex(index);
                                                            setIsLightboxOpen(true);
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <Lightbox
                        open={isLightboxOpen}
                        close={() => setIsLightboxOpen(false)}
                        slides={slides}
                        index={selectedIndex}
                    />
                </>
            )}
        </AnimatePresence>
    );
};

