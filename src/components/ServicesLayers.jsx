import React, { useLayoutEffect, useRef } from 'react';
import { BrainCircuit, Bot, Database, Sparkles, Terminal, Cpu, Network, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: 1,
        title: "Intelligent Reasoning & Logic Systems",
        tech: "Advanced LLMs (Claude/GPT), Prompt Engineering, Custom Fine-Tuning",
        outcome: "We build the \"Executive Brain\" of your business. We transform complex intent into executable logic, automating strategy, coding, and planning.",
        icon: <BrainCircuit size={48} className="text-purple-400" />,
        visualType: "code"
    },
    {
        id: 2,
        title: "Autonomous Agent & Orchestration Engines",
        tech: "n8n, Make, CrewAI, LangChain",
        outcome: "Deploy a \"Digital Workforce.\" We architect self-correcting agent loops that handle sales, support, and ops pipelines end-to-end without supervision.",
        icon: <Bot size={48} className="text-blue-400" />,
        visualType: "network"
    },
    {
        id: 3,
        title: "Context-Aware Memory & Knowledge Hubs",
        tech: "RAG, Vector Databases (Pinecone/Chroma)",
        outcome: "Your \"Company Brain.\" We link AI to your private files (Notion, Airtable, PDFs) to create an hallucination-free intelligence hub that knows your business truth.",
        icon: <Database size={48} className="text-emerald-400" />,
        visualType: "storage"
    },
    {
        id: 4,
        title: "Multi-Modal Creation & Insight Layers",
        tech: "Voice AI, Avatars (HeyGen), Video Gen (Runway), AI Analytics",
        outcome: "Automated Growth. We turn raw data into insights and blog posts into professional video/voice content instantly, scaling your output 10x.",
        icon: <Sparkles size={48} className="text-pink-400" />,
        visualType: "media"
    }
];

const VisualBlock = ({ type, icon }) => {
    // A component to render different "vibe" visuals
    return (
        <div className="visual-block-inner">
            {/* Glassmorphism Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10 backdrop-blur-sm" />

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                {type === 'code' && (
                    <div className="glass-code-window w-full">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="space-y-2 font-mono text-xs text-blue-200/80">
                            <div className="flex"><span className="text-purple-400 mr-2">const</span> <span className="text-yellow-200">logic</span> = <span className="text-blue-300">await</span> <span className="text-green-300">LLM.infer</span>(intent);</div>
                            <div className="pl-4 text-gray-400">// Transforming strategy to execution</div>
                            <div className="flex"><span className="text-purple-400 mr-2">return</span> <span className="text-yellow-200">logic.execute</span>();</div>
                        </div>
                        {/* Centered Large Icon overlay */}
                        <div className="absolute right-4 bottom-4 opacity-20 rotate-12 transform scale-150 text-white">
                            {icon}
                        </div>
                    </div>
                )}

                {type === 'network' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full border border-blue-500/20 animate-pulse-slow" />
                            <div className="absolute w-48 h-48 rounded-full border border-purple-500/10 animate-pulse-slower" />
                        </div>
                        <div className="relative z-10 p-6 bg-black/20 rounded-xl border border-white/10 backdrop-blur-md">
                            {icon}
                        </div>
                        {/* Connecting Nodes */}
                        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full glow-sm" />
                        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full glow-sm" />
                    </div>
                )}

                {type === 'storage' && (
                    <div className="glass-stack w-2/3 flex flex-col gap-2 transform rotate-x-12 perspective-1000">
                        <div className="h-12 w-full bg-emerald-900/20 border border-emerald-500/30 rounded-lg backdrop-blur-sm flex items-center px-4">
                            <div className="w-full h-1 bg-emerald-500/20 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-emerald-500/50" />
                            </div>
                        </div>
                        <div className="h-12 w-full bg-emerald-900/20 border border-emerald-500/30 rounded-lg backdrop-blur-sm flex items-center px-4 translate-x-2">
                            <div className="w-full h-1 bg-emerald-500/20 rounded-full overflow-hidden">
                                <div className="h-full w-4/5 bg-emerald-500/50" />
                            </div>
                        </div>
                        <div className="absolute -right-8 -bottom-8 opacity-30 text-emerald-300">
                            <Database size={80} />
                        </div>
                    </div>
                )}

                {type === 'media' && (
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute w-full h-32 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-transparent blur-xl" />
                        <div className="relative z-10 flex gap-4">
                            <div className="w-16 h-24 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md flex items-end p-2">
                                <div className="w-full h-1/2 bg-gradient-to-t from-pink-500/20 to-transparent rounded" />
                            </div>
                            <div className="w-16 h-24 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md flex items-end p-2 transform -translate-y-4">
                                <div className="w-full h-3/4 bg-gradient-to-t from-purple-500/20 to-transparent rounded" />
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white mix-blend-overlay opacity-50">
                            {icon}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const ServicesLayers = () => {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const rows = gsap.utils.toArray('.service-layer-row');

            rows.forEach((row, i) => {
                // Text Animation
                gsap.from(row.querySelector('.layer-text'), {
                    scrollTrigger: {
                        trigger: row,
                        start: "top 75%",
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                });

                // Visual Animation (Slide in from side)
                const isEven = i % 2 === 0;
                gsap.from(row.querySelector('.layer-visual'), {
                    scrollTrigger: {
                        trigger: row,
                        start: "top 75%",
                    },
                    x: isEven ? -50 : 50,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    delay: 0.2
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="services-section-layers py-32" ref={sectionRef}>
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
                            {/* Visual Side */}
                            <div className="layer-visual flex-1 w-full h-[400px] relative group">
                                <VisualBlock type={service.visualType} icon={service.icon} />
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
