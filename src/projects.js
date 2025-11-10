export const projects = [
    {
        id: 1,
        title: "Traccar Project Revamp",
        emoji: "🌍",
        img: "TRACCAR-MAIN.png", // Main image
        images: [ // Gallery images for the lightbox
            "TRACCAR-MAIN.png",
            "FLOATING-CARD.png",
            "THE-GRAPH.png",
            "GRAPH-2.png",
            "EXPAND-TRIP.png",
        ],
        desc: "Led the frontend revamp for a SaaS GPS platform, achieving -47% page load time, +40% interaction speed, and a significant increase in user retention.",
        techStack: ["React", "JavaScript", "Performance Optimization", "Lazy Loading", "UI/UX Refactor"],
        caseStudy: {
            // Business Case (for Recruiters)
            businessCase: {
                problem: "An industrial SaaS platform for security data was suffering from severe performance issues. Page load times of 3.6s and a clunky UI made it difficult for clients to make fast, terrain-based decisions.",
                solution: "I led a complete frontend refactor, implementing lazy loading and optimized resource management. I redesigned critical UI components (like the sidebar and interactive graphs) to be over 40% faster during user interactions.",
                result: "The platform's page load time was reduced from 3.6s to 1.9s (-47%), interaction speed increased by 40%, and user retention improved by 18%. Proactive optimization and targeted testing also led to a 30% reduction in reported bugs."
            },
            // Technical Deep Dive (for Techs)
            technicalDeepDive: {
                myRole: "Lead Frontend Developer (Freelance)",
                technicalChallenges: [
                    "Achieving a -47% load time reduction in an existing enterprise codebase.",
                    "Refactoring critical UI components (navbar, sidebar, graphs) for +40% speed.",
                    "Implementing lazy loading & optimized asset management without disrupting real-time data flow.",
                    "Optimizing data visualizations for rapid decision-making by field teams."
                ],
                coreFeatures: [
                    "Lazy loading & optimized asset management",
                    "High-speed interactive data graphs",
                    "Redesigned dynamic navigation and sidebar",
                    "Proactive code optimization and targeted testing",
                    "Improved UI for enterprise-level usability"
                ],
                techStack: ["React", "JavaScript (ES6+)", "Performance", "Lazy Loading", "UI/UX", "Data Visualization"]
            }
        },
        repo: "https://github.com",
    },
    {
        id: 2,
        title: "BOS (Business OS)",
        emoji: "💼",
        img: "LMS-MAIN.png", // Main image
        images: [
            "STUDENT-DASHBOARD.jpg",
            "CERTIFICATE.png",
            "COURSE-STUDYING.jpg",
            "LMS-MAIN.png",
            "COURSES-PAGE.jpg",
            "LMS-LOGIN.jpg",
            "LMS-REGISTER.jpg",
            "COURSE-PAGE.jpg",
            "TEACHER-DASHBOARD.png"
        ],
        desc: "A high-ambition SaaS platform with complex multi-tenancy and microservice architecture. This project is currently in active development.",
        techStack: ["Laravel", "Python (FastAPI)", "React.js", "Docker", "Microservices", "Multi-tenancy"],
        caseStudy: {
            // Business Case (for Recruiters)
            businessCase: {
                problem: "Small to Medium Enterprises (SMEs) use multiple disconnected tools. They need a single, centralized platform to manage users, inventory, and customer feedback, and get AI-driven insights to make strategic decisions.",
                solution: "I am building a centralized 'Business OS' from scratch. It features a secure multi-tenant architecture to keep all client data strictly isolated. A separate microservice (using Python FastAPI) is being developed to handle AI-driven analysis of customer complaints and reviews.",
                result: "The platform's core architecture is complete, providing strict data isolation for tenants and a scalable foundation. The user/role management module is functional, with the AI analysis and inventory modules in active development."
            },
            // Technical Deep Dive (for Techs)
            technicalDeepDive: {
                myRole: "Solo Full-Stack Architect",
                technicalChallenges: [
                    "Designing a secure, multi-tenant architecture with strict data isolation (tenant_id).",
                    "Architecting a hybrid monolith/microservice system (Laravel + Python FastAPI).",
                    "Containerizing all services for reproducible development (Docker).",
                    "Implementing a dynamic role/permission system that controls the UI."
                ],
                coreFeatures: [
                    "Secure multi-tenant architecture (strict data isolation)",
                    "User, role, and permission management",
                    "Dynamic UI rendering based on user rights",
                    "External AI microservice (FastAPI) for data analysis",
                    "Base modules for Customer Complaints and Reviews",
                    "Inventory & Reporting modules (in-development)"
                ],
                techStack: ["Laravel", "Python (FastAPI)", "React.js", "MySQL", "Docker", "Microservices", "Multi-tenancy", "TailwindCSS"]
            }
        },
        repo: "https://github.com",
    },
    {
        id: 3,
        title: "LMS Platform",
        emoji: "🎓",
        img: "LMS-MAIN.png", // Main image
        images: [
            "LMS-MAIN.png",
            "LMS-REGISTER.png",
            "LMS-LOGIN.png",
            "COURSES-PAGE.png",
            "COURSE-PAGE.png",
            "TEACHER-DASHBOARD.png",
            "STUDENT-DASHBOARD.png",
            "COURSE-STUDYING.png",
            "CERTIFICATE.png",
        ],
        desc: "A solo-built e-learning platform with adaptive video streaming, multi-user dashboards, and automated PDF certificate generation.",
        techStack: ["Laravel", "React.js", "MySQL", "TailwindCSS", "API REST", "Video Streaming"],
        caseStudy: {
            // Business Case (for Recruiters)
            businessCase: {
                problem: "Schools and training centers need an intuitive platform to deliver digital courses, track student progress, and issue certificates. Off-the-shelf solutions are often inflexible, expensive, or lack key features.",
                solution: "I built a full-stack LMS from scratch, focusing on a seamless user experience. It features an adaptive video player (for low-bandwidth areas), multi-user dashboards to reduce administrative work, and an automated system for generating custom PDF certificates.",
                result: "The platform provides a smooth, reliable learning experience. Instructors can track student progress in real-time to intervene when needed, and automated certification saves significant administrative time."
            },
            // Technical Deep Dive (for Techs)
            technicalDeepDive: {
                myRole: "Solo Full-Stack Architect",
                technicalChallenges: [
                    "Building an adaptive video player that adjusts quality based on connection speed.",
                    "Designing a multi-user dashboard (teacher/student) with distinct permissions.",
                    "Automating a secure PDF certificate generation system with custom logos/signatures.",
                    "Architecting a system for real-time student progress tracking."
                ],
                coreFeatures: [
                    "Adaptive quality video streaming",
                    "Multi-user dashboards (Teacher & Student roles)",
                    "Automated on-demand PDF certificate generation",
                    "Real-time progress statistics and tracking",
                    "Intuitive course & student management"
                ],
                techStack: ["Laravel", "React.js", "MySQL", "TailwindCSS", "API REST", "Github"]
            }
        },
        repo: "https://github.com",
    }
];