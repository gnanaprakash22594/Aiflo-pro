import React from 'react';
import { BrainCircuit, Bot, Database, Sparkles } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Intelligent Reasoning & Logic Systems",
        tech: "Advanced LLMs (Claude/GPT), Prompt Engineering, Custom Fine-Tuning",
        outcome: "We build the \"Executive Brain\" of your business. We transform complex intent into executable logic, automating strategy, coding, and planning.",
        icon: <BrainCircuit size={48} className="text-purple-400" />
    },
    {
        id: 2,
        title: "Autonomous Agent & Orchestration Engines",
        tech: "n8n, Make, CrewAI, LangChain",
        outcome: "Deploy a \"Digital Workforce.\" We architect self-correcting agent loops that handle sales, support, and ops pipelines end-to-end without supervision.",
        icon: <Bot size={48} className="text-blue-400" />
    },
    {
        id: 3,
        title: "Context-Aware Memory & Knowledge Hubs",
        tech: "RAG, Vector Databases (Pinecone/Chroma)",
        outcome: "Your \"Company Brain.\" We link AI to your private files (Notion, Airtable, PDFs) to create an hallucination-free intelligence hub that knows your business truth.",
        icon: <Database size={48} className="text-emerald-400" />
    },
    {
        id: 4,
        title: "Multi-Modal Creation & Insight Layers",
        tech: "Voice AI, Avatars (HeyGen), Video Gen (Runway), AI Analytics",
        outcome: "Automated Growth. We turn raw data into insights and blog posts into professional video/voice content instantly, scaling your output 10x.",
        icon: <Sparkles size={48} className="text-pink-400" />
    }
];

const VisualBlock = () => {
    // Empty placeholder for future animations
    return (
        <div className="visual-block-inner">
            {/* Glassmorphism Background only */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* Blank content as requested */}
            </div>
        </div>
    );
};

const ServicesLayers = () => {
    return (
        <section className="services-section-layers py-32">
            <div className="container">
                <div className="section-header mb-24">
                    <h2 className="section-title text-5xl mb-6">Mastery Levels</h2>
                    <p className="section-subtitle">A comprehensive framework for AI maturity.</p>
                </div>

                <div className="layers-container flex flex-col gap-32">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`service-layer-row flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Visual Side (Placeholder) */}
                            <div className="layer-visual flex-1 w-full h-[400px] relative">
                                <VisualBlock />
                            </div>

                            {/* Text Side */}
                            <div className="layer-text flex-1 text-left">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-white">
                                        {service.icon}
                                    </div>
                                    <span className="text-sm font-mono text-purple-300/80 tracking-wider">0{service.id}</span>
                                </div>

                                <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                    {service.title}
                                </h3>

                                <div className="mb-6 p-4 rounded-lg bg-blue-900/10 border-l-2 border-blue-500/50">
                                    <p className="text-blue-200/80 text-sm font-mono">
                                        <span className="text-blue-400 font-bold">TECH:</span> {service.tech}
                                    </p>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed">
                                    {service.outcome}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesLayers;
