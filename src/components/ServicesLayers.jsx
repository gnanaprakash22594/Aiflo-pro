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
        <div className="w-full h-full min-h-[400px] rounded-3xl relative overflow-hidden bg-[#0c0a1f] border border-white/10 shadow-2xl">
            {/* Glassmorphism Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />

            {/* Center Text Stub indicating placeholder */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="px-6 py-2 rounded-full bg-white/5 border border-white/5 text-white/20 text-sm font-mono tracking-widest">
                    ANIMATION FRAME
                </div>
            </div>
        </div>
    );
};

const ServicesLayers = () => {
    return (
        <section className="services-section-layers py-32 bg-[#0f0b29]">
            <div className="container mx-auto px-6">
                <div className="section-header mb-32 text-center">
                    <h2 className="section-title text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">How We Help</h2>
                    <p className="text-xl text-gray-400">We build intelligent systems that scale your business.</p>
                </div>

                <div className="layers-container flex flex-col gap-32">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            // Index 0 (Row 1): lg:flex-row -> Text Left, Visual Right
                            // Index 1 (Row 2): lg:flex-row-reverse -> Visual Left, Text Right
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Text Side - Placed FIRST in DOM */}
                            <div className="flex-1 text-left">
                                <h3 className="text-3xl font-bold mb-6 text-white">
                                    {service.title}
                                </h3>

                                <div className="mb-8 p-6 rounded-xl bg-blue-900/10 border-l-4 border-blue-500/50 backdrop-blur-sm">
                                    <p className="text-blue-200 text-sm font-mono leading-relaxed">
                                        <span className="text-blue-400 font-bold tracking-wide">TECH:</span> {service.tech}
                                    </p>
                                </div>

                                <p className="text-gray-300 text-lg leading-relaxed font-light">
                                    {service.outcome}
                                </p>
                            </div>

                            {/* Visual Side - Placed SECOND in DOM */}
                            <div className="flex-1 w-full relative">
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
