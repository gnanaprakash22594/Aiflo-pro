import React, { useLayoutEffect, useRef } from 'react';
import { Server, Building2, Briefcase, ShoppingCart, Laptop } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const industries = [
    {
        icon: <Server size={32} />,
        title: "SaaS & Tech Startups",
        description: "Accelerate product velocity by offloading successful non-core automation and internal tooling."
    },
    {
        icon: <Building2 size={32} />,
        title: "Agencies & Service Businesses",
        description: "Productize your delivery. Automate client reporting, onboarding, and project setup."
    },
    {
        icon: <Briefcase size={32} />,
        title: "B2B Consulting",
        description: "Scale your expertise. Build assets that deliver value while you sleep, moving beyond hourly billing."
    },
    {
        icon: <ShoppingCart size={32} />,
        title: "E-commerce (Selective)",
        description: "Optimize backend logistics and inventory triggers. (Focused on high-value workflow automation, not frontend themes)."
    },
    {
        icon: <Laptop size={32} />,
        title: "Solo Founders",
        description: "Act as your fractional CTO and engineering team. Scale your output to rival larger teams."
    }
];

const ServicesIndustry = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".service-card-ind", { y: 50, opacity: 0 });

            ScrollTrigger.batch(".service-card-ind", {
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
        <section className="services-section" id="services-industry" ref={sectionRef}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Services by Industry</h2>
                    <p className="section-subtitle">Tailored solutions for specific business models.</p>
                </div>

                <div className="services-grid">
                    {industries.map((service, index) => (
                        <div key={index} className="service-card service-card-ind">
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

export default ServicesIndustry;
