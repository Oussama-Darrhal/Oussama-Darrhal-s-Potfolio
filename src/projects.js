
export const projects = [
    {
        id: 1,
        title: "LMS Platform",
        emoji: "🎓",
        img: "/people.gif",
        desc: "A solo-built e-learning platform with multi-user roles, secure video streaming, progress tracking, and on-demand PDF certificate generation.",
        techStack: ["Laravel", "React", "MySQL", "Video Streaming", "PDF Generation"],
        caseStudy: {
            // Business Case (for Recruiters)
            businessCase: {
                problem: "Educational institutions and businesses needed a modern e-learning solution that could securely deliver courses, track student progress, and issue certificates—but existing platforms were either too expensive, lacked key features, or didn't provide the level of control needed.",
                solution: "I built a comprehensive Learning Management System from the ground up, designing a platform that enables seamless course delivery, real-time progress tracking, and automated certificate generation—all while maintaining enterprise-grade security for video content.",
                result: "The platform successfully delivers secure, scalable e-learning experiences with automated workflows that reduce administrative overhead. Students can access protected content seamlessly, and institutions can issue certificates on-demand, creating a complete educational ecosystem."
            },
            // Technical Deep Dive (for Techs)
            technicalDeepDive: {
                myRole: "Solo Full-Stack Architect",
                technicalChallenges: [
                    "Implementing secure video streaming without third-party services",
                    "Building a scalable multi-tenant architecture",
                    "Creating an intuitive user experience for diverse user roles",
                    "Designing a robust certificate generation system"
                ],
                coreFeatures: [
                    "Multi-user role system (Admin, Instructor, Student)",
                    "Secure video streaming with DRM protection",
                    "Real-time progress tracking and analytics",
                    "On-demand PDF certificate generation",
                    "Course management and content organization",
                    "Payment integration for course purchases"
                ],
                techStack: ["Laravel", "React", "MySQL", "Video Streaming", "PDF Generation"]
            }
        },
        repo: "https://github.com",
    },
    {
        id: 2,
        title: "Traccar Revamp",
        emoji: "🌍",
        img: "/planets.png",
        desc: "A professional freelance project. Led the frontend (React) revamp of a real-time GPS fleet tracker, achieving -47% page load time via lazy loading and smart rendering.",
        techStack: ["React", "JavaScript", "Performance Optimization", "Lazy Loading", "Real-time Updates"],
        caseStudy: {
            // Business Case (for Recruiters)
            businessCase: {
                problem: "The company's existing GPS fleet tracking system was slow and hard to use. Fleet managers struggled with long page load times and a clunky interface, making it difficult to monitor vehicles in real-time and manage operations efficiently.",
                solution: "I led the frontend revamp, building a modern, high-performance interface using React. I implemented advanced optimization techniques including lazy loading and smart rendering strategies that maintained real-time functionality while dramatically improving speed.",
                result: "This achieved a 47% reduction in page load time, making the product far more usable for enterprise clients. Fleet managers can now monitor their vehicles instantly, leading to better operational efficiency and improved user satisfaction."
            },
            // Technical Deep Dive (for Techs)
            technicalDeepDive: {
                myRole: "Lead Frontend Developer",
                technicalChallenges: [
                    "Reducing page load time by 47% without sacrificing real-time updates",
                    "Implementing lazy loading without breaking real-time map updates",
                    "Maintaining backward compatibility with existing API",
                    "Optimizing map rendering for large fleets with hundreds of vehicles"
                ],
                coreFeatures: [
                    "Real-time GPS tracking with live map updates",
                    "Fleet management dashboard",
                    "Route history and analytics",
                    "Geofencing and alerts",
                    "Device management interface",
                    "Performance-optimized rendering"
                ],
                techStack: ["React", "JavaScript", "Performance Optimization", "Lazy Loading", "Real-time Updates"]
            }
        },
        repo: "https://github.com",
    },
    {
        id: 3,
        title: "BOS (SaaS)",
        emoji: "💼",
        img: "/stars.png",
        desc: "A high-ambition SaaS platform with complex multi-tenancy (global scopes), a microservice structure (Laravel + Python FastAPI), and Docker containerization.",
        techStack: ["Laravel", "Python FastAPI", "Docker", "Microservices", "Multi-tenancy", "PostgreSQL"],
        caseStudy: {
            // Business Case (for Recruiters)
            businessCase: {
                problem: "The business needed a scalable SaaS platform that could serve multiple enterprise clients simultaneously, each with their own isolated data and custom configurations. Existing solutions couldn't handle the complexity of multi-tenant architecture at scale.",
                solution: "I architected and built a high-performance SaaS platform using a microservices approach, implementing complex multi-tenancy with global scopes. The system is fully containerized with Docker, ensuring each client's data remains completely isolated while sharing infrastructure efficiently.",
                result: "The platform provides a scalable foundation for enterprise growth, with secure multi-tenant isolation that allows the business to onboard new clients seamlessly. The modern architecture supports rapid feature development and can scale to serve hundreds of enterprise customers."
            },
            // Technical Deep Dive (for Techs)
            technicalDeepDive: {
                myRole: "Solo Full-Stack Architect",
                technicalChallenges: [
                    "Implementing secure multi-tenancy with global scopes",
                    "Coordinating microservices communication between Laravel and Python FastAPI",
                    "Managing Docker orchestration and deployment pipelines",
                    "Ensuring data isolation and security across tenants",
                    "Building scalable infrastructure from the ground up"
                ],
                coreFeatures: [
                    "Multi-tenant architecture with global scopes",
                    "Microservice-based architecture (Laravel + Python FastAPI)",
                    "Docker containerization for all services",
                    "RESTful API design",
                    "Database isolation per tenant",
                    "Scalable infrastructure design"
                ],
                techStack: ["Laravel", "Python FastAPI", "Docker", "Microservices", "Multi-tenancy", "PostgreSQL"]
            }
        },
        repo: "https://github.com",
    },
];

