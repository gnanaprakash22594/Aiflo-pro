import React, { useLayoutEffect, useRef } from 'react';
import { Bot, Rocket, Zap, Database, Globe, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: <Bot size={32} />,
        title: "Workflow Automation",
        description: "Eliminate repetitive tasks with intelligent workflows using Make.com, n8n, and Python. Save 20+ hours per week."
    },
    {
        icon: <Rocket size={32} />,
        title: "MVP Development",
        description: "Launch your startup idea in weeks. Full-stack development with React, Node.js, and Supabase focused on speed to market."
    },
    {
        icon: <Database size={32} />,
        title: "AI & Data Solutions",
        description: "Integrate LLMs (OpenAI, Claude) into your business processes. Custom RAG pipelines, chatbots, and data extraction."
    },
    {
        icon: <Globe size={32} />,
        title: "Web Scraping",
        description: "Automated data collection from complex websites. Turn unstructured web data into clean APIs or spreadsheets."
    },
    {
        icon: <Code2 size={32} />,
        title: "Custom Integrations",
        description: "Connect disjointed tools. Stripe to Airtable, HubSpot to Slack, or any custom API connection you need."
    },
    {
        icon: <Zap size={32} />,
        title: "Technical Consulting",
        description: "Fractional CTO services. Strategic architecture advice to ensure your tech stack scales with your business."
    }
];

const Services = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Initial state
            gsap.set(".service-card", { y: 50, opacity: 0 });

            ScrollTrigger.batch(".service-card", {
                onEnter: batch => gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    overwrite: true,
                    duration: 0.8,
                    ease: "power3.out"
                }),
                start: "top 85%", // Trigger slightly earlier
                // Ensure they stay visible even if user scrolls back up quickly (optional, but safer)
                // onLeave: batch => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }) 
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="services-section" id="services" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Services</h2>
                    <p className="section-subtitle">Streamline your business with cutting-edge solutions.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
