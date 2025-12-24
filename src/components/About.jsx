import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
    "Direct communication with the developer",
    "No agency overhead or delays",
    "Focus on shipping, not endless meetings",
    "Tailored tech stack for your specific needs"
];

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">Why Aiflo.pro?</h2>
                        <p className="about-lead">
                            Founded by a solo technologist obsessed with efficiency.
                        </p>
                        <p className="about-desc">
                            I specialize in bridging the gap between "I have an idea" and "It's live."
                            By combining workflow automation with full-stack development, I build systems
                            that not only work but work for you.
                        </p>

                        <ul className="benefits-list">
                            {benefits.map((item, idx) => (
                                <li key={idx} className="benefit-item">
                                    <CheckCircle2 size={20} className="benefit-icon" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="about-visual">
                        <div className="visual-card">
                            <div className="stat-number">10x</div>
                            <div className="stat-label">Faster Deployment</div>
                        </div>
                        <div className="visual-card">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Ownership</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
