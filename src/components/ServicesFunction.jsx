import React, { useLayoutEffect, useRef } from 'react';
import { TrendingUp, Cog, BrainCircuit, Rocket, BookOpen, UserCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: <TrendingUp size={32} />,
        title: "Revenue & Growth Automation",
        description: "Automate outbound signals, lead enrichment, and CRM hygiene to scale revenue without headcount."
    },
    {
        icon: <Cog size={32} />,
        title: "Operations & Internal Workflow",
        description: "Connect disjointed tools into unified pipelines. Eliminate manual data entry and reduce operational drag."
    },
    {
        icon: <BrainCircuit size={32} />,
        title: "AI Decision & Intelligence",
        description: "Implement RAG and LLM agents to synthesize complex data for faster, high-confidence decision making."
    },
    {
        icon: <Rocket size={32} />,
        title: "MVPs & Experiments",
        description: "Rapidly prototype and validate technical products. Go from concept to deployment in weeks, not months."
    },
    {
        icon: <BookOpen size={32} />,
        title: "Knowledge & Enablement",
        description: "Centralize institutional knowledge. Build internal AI bots that answer questions and onboard team members instantly."
    },
    {
        icon: <UserCheck size={32} />,
        title: "Technical Advisory",
        description: "Senior guidance on architecture, buy-vs-build decisions, and scaling roadmaps for non-technical founders."
    }
];

const ServicesFunction = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".service-card-func", { y: 50, opacity: 0 });

            ScrollTrigger.batch(".service-card-func", {
                onEnter: batch => gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    overwrite: true,
                    duration: 0.8,
                    ease: "power3.out"
                }),
                start: "top 85%",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="services-section" id="services-function" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Services by Business Function</h2>
                    <p className="section-subtitle">Targeted interventions for high-leverage outcomes.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card service-card-func">
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

export default ServicesFunction;
