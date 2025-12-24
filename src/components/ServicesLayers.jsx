import React from 'react';

const services = [
    {
        id: 1,
        title: "Intelligent Reasoning & Logic Systems",
        tech: "Advanced LLMs (Claude/GPT), Prompt Engineering, Custom Fine-Tuning",
        outcome: "We build the \"Executive Brain\" of your business. We transform complex intent into executable logic, automating strategy, coding, and planning.",
    },
    {
        id: 2,
        title: "Autonomous Agent & Orchestration Engines",
        tech: "n8n, Make, CrewAI, LangChain",
        outcome: "Deploy a \"Digital Workforce.\" We architect self-correcting agent loops that handle sales, support, and ops pipelines end-to-end without supervision.",
    },
    {
        id: 3,
        title: "Context-Aware Memory & Knowledge Hubs",
        tech: "RAG, Vector Databases (Pinecone/Chroma)",
        outcome: "Your \"Company Brain.\" We link AI to your private files (Notion, Airtable, PDFs) to create an hallucination-free intelligence hub that knows your business truth.",
    },
    {
        id: 4,
        title: "Multi-Modal Creation & Insight Layers",
        tech: "Voice AI, Avatars (HeyGen), Video Gen (Runway), AI Analytics",
        outcome: "Automated Growth. We turn raw data into insights and blog posts into professional video/voice content instantly, scaling your output 10x.",
    }
];

const VisualBlock = () => {
    return (
        <div className="visual-block-container">
            <div className="visual-stub-text">
                ANIMATION FRAME
            </div>
        </div>
    );
};

const ServicesLayers = () => {
    return (
        <section className="services-layers-section">
            <div className="container">
                <div className="services-header">
                    <h2 className="section-title">How We Help</h2>
                    <p className="section-subtitle">We build intelligent systems that scale your business.</p>
                </div>

                <div className="services-list">
                    {services.map((service, index) => (
                        <div key={service.id} className="service-row">
                            {/* Text Side */}
                            <div className="service-text-col">
                                <h3 className="service-heading text-gradient">
                                    {service.title}
                                </h3>

                                <div className="tech-badge">
                                    <span className="tech-label">TECH:</span> {service.tech}
                                </div>

                                <p className="service-outcome">
                                    {service.outcome}
                                </p>
                            </div>

                            {/* Visual Side */}
                            <div className="service-visual-col">
                                <VisualBlock />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesLayers;
