import logoMark from '../assets/logo-onscroll.png';

const Services = () => {
    return (
        <section className="pt-8 pb-24" id="services">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-left">
                    <div className="max-w-2xl">
                        <h3 className="text-4xl font-black uppercase leading-tight tracking-tight text-text-main dark:text-white md:text-6xl flex flex-wrap items-center gap-3">
                            From Chaos to <span className="text-primary inline-flex items-center gap-4">Clockwork <img src={logoMark} alt="Aiflo" className="h-[68px] w-auto md:h-[108px] mt-[3px]" /></span>
                        </h3>
                        <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                            Stop wasting hours on manual work. We engineer high-performance systems that automate complexity, reduce overhead, and deliver tangible ROI within weeks.
                        </p>
                    </div>
                    <div className="mb-2">
                        <a className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80" href="#">
                            Explore all services <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div className="group relative overflow-hidden rounded-2xl bg-gray-900 md:col-span-2 min-h-[300px]">
                        <div className="absolute inset-0 bg-background-dark/80"></div>

                        {/* Workflow Animation Layer */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-0 right-0 h-64 w-64 bg-primary/10 blur-[100px] rounded-full"></div>
                            <div className="absolute bottom-0 left-0 h-40 w-40 bg-accent-magenta/10 blur-[80px] rounded-full"></div>

                            <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 800 400">
                                {/* Flow Beams - Data Paths */}
                                <path d="M50 80 L350 80 L350 180" stroke="url(#gradient-primary)" strokeWidth="3" fill="none" className="animate-beam" />
                                <path d="M50 320 L450 320 L450 220" stroke="url(#gradient-magenta)" strokeWidth="2.5" fill="none" className="animate-beam" style={{ animationDelay: '-1s' }} />
                                <path d="M750 80 L450 80 L450 180" stroke="url(#gradient-primary)" strokeWidth="3" fill="none" className="animate-beam" style={{ animationDelay: '-2s' }} />
                                <path d="M750 320 L350 320 L350 220" stroke="url(#gradient-magenta)" strokeWidth="2.5" fill="none" className="animate-beam" style={{ animationDelay: '-0.5s' }} />

                                {/* Central Hub Connecting Lines */}
                                <path d="M350 180 L400 200" stroke="#a00fbd" strokeWidth="2" strokeDasharray="2 4" opacity="0.7" className="animate-pulse" />
                                <path d="M450 180 L400 200" stroke="#a00fbd" strokeWidth="2" strokeDasharray="2 4" opacity="0.7" className="animate-pulse" />
                                <path d="M450 220 L400 200" stroke="#e91e63" strokeWidth="2" strokeDasharray="2 4" opacity="0.7" className="animate-pulse" />
                                <path d="M350 220 L400 200" stroke="#e91e63" strokeWidth="2" strokeDasharray="2 4" opacity="0.7" className="animate-pulse" />

                                {/* Hub Nodes - Larger and More Visible */}
                                <circle cx="350" cy="180" r="7" fill="#a00fbd" className="animate-node-pulse-slow" />
                                <circle cx="450" cy="180" r="7" fill="#a00fbd" className="animate-node-pulse-slow" style={{ animationDelay: '-1.5s' }} />
                                <circle cx="450" cy="220" r="7" fill="#e91e63" className="animate-node-pulse-slow" style={{ animationDelay: '-0.8s' }} />
                                <circle cx="350" cy="220" r="7" fill="#e91e63" className="animate-node-pulse-slow" style={{ animationDelay: '-2.5s' }} />

                                {/* Core Processing Unit - Central Hub */}
                                <rect x="380" y="185" width="40" height="30" rx="6" fill="#1a1a1a" stroke="#a00fbd" strokeWidth="2.5" className="animate-pulse" />
                                <circle cx="400" cy="200" r="4" fill="#fff" className="animate-pulse shadow-[0_0_15px_#fff]" />
                                <text x="400" y="203" fontSize="8" fill="#a00fbd" textAnchor="middle" fontFamily="monospace" fontWeight="bold">HUB</text>

                                <defs>
                                    <linearGradient id="gradient-primary" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#a00fbd" stopOpacity="0.2" />
                                        <stop offset="50%" stopColor="#a00fbd" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#a00fbd" stopOpacity="0.2" />
                                    </linearGradient>
                                    <linearGradient id="gradient-magenta" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#e91e63" stopOpacity="0.2" />
                                        <stop offset="50%" stopColor="#e91e63" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#e91e63" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="relative z-10 flex h-full flex-col justify-end p-8 text-left">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                                <span className="material-symbols-outlined">hub</span>
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4">Intelligent Workflow Automation</h4>
                            <div className="space-y-4">
                                <p className="text-sm leading-relaxed text-white/90">
                                    Stop being the human bridge between your tools. We build autonomous systems that sync data, handle approvals, and trigger actions across your stack.
                                </p>
                                <p className="text-sm leading-relaxed text-white/90">
                                    We connect siloed platforms like HubSpot, Airtable, and Stripe into a unified engine that runs without human intervention.
                                </p>
                                <div className="pt-3">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 border border-white/10">
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(160,15,189,0.8)]"></span>
                                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">ROI: 20+ HOURS RECOVERED / WEEK</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Tall Item - Enhanced */}
                    <div className="group relative overflow-hidden rounded-2xl bg-background-light dark:bg-white/5 md:row-span-2 card-depth-hover transition-all duration-500">
                        <div className="absolute top-0 right-0 h-64 w-64 bg-accent-magenta/5 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-accent-magenta/10 transition-colors"></div>
                        <div className="absolute bottom-0 left-0 h-40 w-40 bg-primary/5 blur-[60px] rounded-full -ml-16 -mb-16 group-hover:bg-primary/10 transition-colors"></div>

                        <div className="flex h-full flex-col p-8 text-left relative z-10">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-magenta/10 text-accent-magenta shadow-inner transition-transform group-hover:scale-110 group-hover:rotate-6">
                                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                            </div>

                            <h4 className="text-2xl font-bold text-text-main dark:text-white mb-4">Rapid MVP Systems</h4>
                            <div className="space-y-4">
                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
                                    Validate market fit 10x faster. Functional systems built in days, saving $50k+ in potential engineering debt.
                                </p>
                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
                                    Built for real users, not pitch decks. Each MVP includes the core infrastructure needed to launch, observe behavior, and iterate safely — without locking you into premature technical complexity.
                                </p>
                                <div className="pt-3">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-white/5 px-3 py-1 border border-gray-200 dark:border-white/10">
                                        <span className="h-1.5 w-1.5 rounded-full bg-accent-magenta animate-pulse shadow-[0_0_8px_rgba(160,15,189,0.6)]"></span>
                                        <span className="text-[10px] font-bold text-gray-700 dark:text-white uppercase tracking-wider">TIMELINE: DAYS NOT MONTHS</span>
                                    </div>
                                    <p className="mt-4 text-lg font-bold text-text-main dark:text-white leading-tight">
                                        From wireframes to deployment — we handle every aspect of your MVP development with expert precision
                                    </p>
                                </div>
                            </div>

                            {/* Dynamic Animation Area - Rebuilt for Space and Impact */}
                            <div className="mt-auto pt-8">
                                <div className="relative h-64 w-full rounded-2xl glass-morphism overflow-hidden group-hover:border-primary/40 transition-all duration-500">
                                    {/* Grid Background */}
                                    <div className="absolute inset-0 bg-[radial-gradient(rgba(160,15,189,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                                    {/* Connection Lines (SVG) */}
                                    <svg className="absolute inset-0 h-full w-full opacity-20">
                                        <path d="M40 80 L160 80" stroke="rgba(160,15,189,0.5)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                                        <path d="M160 80 L160 180" stroke="rgba(160,15,189,0.5)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                                        <path d="M160 180 L40 180" stroke="rgba(160,15,189,0.5)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                                        <path d="M40 180 L40 80" stroke="rgba(160,15,189,0.5)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                                    </svg>

                                    {/* Floating Modules */}
                                    {/* Module 1: UI/Frontend */}
                                    <div className="absolute left-4 top-12 h-16 w-16 animate-float-slow opacity-0 animate-[block-appear_0.6s_ease-out_forwards_0.2s]">
                                        <div className="h-full w-full rounded-xl bg-white/5 border border-white/10 flex flex-col p-2 gap-1.5 glass-morphism">
                                            <div className="h-1.5 w-full rounded-sm bg-primary/40"></div>
                                            <div className="h-1.5 w-2/3 rounded-sm bg-white/10"></div>
                                            <div className="mt-auto flex gap-1">
                                                <div className="h-4 w-4 rounded-sm bg-white/5 border border-white/10"></div>
                                                <div className="h-4 w-4 rounded-sm bg-white/10"></div>
                                            </div>
                                        </div>
                                        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-primary animate-node-pulse"></div>
                                    </div>

                                    {/* Module 2: Logic/API */}
                                    <div className="absolute right-8 top-8 h-20 w-32 animate-float-delayed opacity-0 animate-[block-appear_0.6s_ease-out_forwards_0.5s]">
                                        <div className="h-full w-full rounded-xl bg-white/5 border border-white/10 p-3 glass-morphism flex flex-col justify-center gap-2">
                                            <div className="h-1.5 w-full rounded bg-primary/20"></div>
                                            <div className="h-1.5 w-2/3 rounded bg-white/10"></div>
                                            <div className="h-1.5 w-3/4 rounded bg-primary/30"></div>
                                        </div>
                                    </div>

                                    {/* Module 3: Database */}
                                    <div className="absolute left-8 bottom-8 h-12 w-32 animate-float-delayed opacity-0 animate-[block-appear_0.6s_ease-out_forwards_0.8s]">
                                        <div className="h-full w-full rounded-xl bg-white/5 border border-white/10 flex items-center p-3 gap-3 glass-morphism">
                                            <span className="material-symbols-outlined text-primary/60 text-xl">database</span>
                                            <div className="flex-1 space-y-1.5">
                                                <div className="h-1 w-full rounded bg-primary/20 overflow-hidden">
                                                    <div className="h-full bg-primary w-1/2 animate-[shimmer_2s_infinite]"></div>
                                                </div>
                                                <div className="h-1 w-2/3 rounded bg-white/10"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Code Generation Canvas V2 - Simplified */}
                                    <div className="code-canvas-v2 opacity-40">
                                        <div className="animate-code-reveal font-mono text-[8px] text-primary" style={{ animationDelay: '0.2s' }}>system.initialize({'{'}</div>
                                        <div className="animate-code-reveal font-mono text-[8px] text-white/60 pl-4" style={{ animationDelay: '0.4s' }}>environment: 'production',</div>
                                        <div className="animate-code-reveal font-mono text-[8px] text-white/60 pl-4" style={{ animationDelay: '0.6s' }}>version: '2.4.0',</div>
                                        <div className="animate-code-reveal font-mono text-[8px] text-white/60 pl-4" style={{ animationDelay: '0.8s' }}>cluster: 'auto-scale'</div>
                                        <div className="animate-code-reveal font-mono text-[8px] text-primary" style={{ animationDelay: '1.0s' }}>{'}'});</div>
                                        <div className="animate-code-reveal font-mono text-[8px] text-accent-magenta" style={{ animationDelay: '1.2s' }}>await db.sync();</div>
                                        <div className="animate-code-reveal font-mono text-[8px] text-primary" style={{ animationDelay: '1.4s' }}>engine.start({'{'}</div>
                                        <div className="animate-code-reveal font-mono text-[8px] text-white/60 pl-4" style={{ animationDelay: '1.6s' }}>vector_search: true,</div>
                                        <div className="animate-code-reveal font-mono text-[8px] text-white/60 pl-4" style={{ animationDelay: '1.8s' }}>memory: 'active'</div>
                                        <div className="animate-code-reveal font-mono text-[8px] text-primary" style={{ animationDelay: '2.0s' }}>{'}'});</div>
                                        <div className="animate-code-reveal font-mono text-[8px] text-accent-magenta" style={{ animationDelay: '2.2s' }}>system.status: "BUILD_READY"</div>
                                    </div>

                                    {/* Central Status Node */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 animate-pulse z-10">
                                        <div className="h-full w-full rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center relative">
                                            <div className="absolute inset-0 rounded-full border border-primary/40 scale-110 opacity-30 animate-ping"></div>
                                            <div className="h-16 w-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center glass-morphism">
                                                <span className="material-symbols-outlined text-white text-2xl animate-spin" style={{ animationDuration: '3s' }}>sync</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Overlay Deployment Bar */}
                                    <div className="absolute left-4 right-4 bottom-4 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center glass-morphism overflow-hidden px-4">
                                        <div className="absolute inset-0 bg-primary/20 -translate-x-full animate-[shimmer_3s_infinite]"></div>
                                        <div className="flex items-center gap-3 relative z-10 w-full">
                                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Deploying System...</span>
                                            <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-primary w-3/4 animate-[line-draw_3s_infinite]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Standard Item 1 - Upgraded to Custom AI Agents */}
                    <div className="group relative overflow-hidden rounded-2xl bg-background-light dark:bg-white/5 min-h-[350px] md:col-span-1 text-left card-depth-hover transition-all duration-500">
                        <div className="absolute top-0 left-0 h-40 w-40 bg-accent-amber/5 blur-[60px] rounded-full -ml-16 -mt-16 group-hover:bg-accent-amber/10 transition-colors"></div>

                        <div className="relative z-10 flex h-full flex-col p-8">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-amber/10 text-accent-amber transition-transform group-hover:scale-110">
                                <span className="material-symbols-outlined text-2xl">smart_toy</span>
                            </div>
                            <h4 className="text-xl font-bold text-text-main dark:text-white mb-4">Custom AI Agents</h4>
                            <div className="space-y-4">
                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
                                    Automate 70% of routine inquiries. Deploy intelligent agents that qualify leads and process data 24/7.
                                </p>
                                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
                                    Agents that research companies and qualifying leads in your CRM while your team focuses on high-value strategy.
                                </p>
                                <div className="pt-3">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-white/5 px-3 py-1 border border-gray-200 dark:border-white/10">
                                        <span className="h-1.5 w-1.5 rounded-full bg-accent-amber animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
                                        <span className="text-[10px] font-bold text-gray-700 dark:text-white uppercase tracking-wider">CAPACITY: +400% GROWTH</span>
                                    </div>
                                </div>
                            </div>

                            {/* Agent Animation Area */}
                            <div className="mt-auto">
                                <div className="rounded-xl glass-morphism p-3 overflow-hidden">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-start opacity-0 animate-[block-appear_0.5s_ease-out_forwards_0.2s]">
                                            <div className="max-w-[80%] rounded-lg bg-white/5 border border-white/10 px-2 py-1 text-[10px] font-medium text-white/50">Lead qualified: $50k+ pipeline</div>
                                        </div>
                                        <div className="flex justify-end opacity-0 animate-[block-appear_0.5s_ease-out_forwards_0.4s]">
                                            <div className="max-w-[80%] rounded-lg bg-primary/20 border border-primary/30 px-2 py-1 text-[10px] font-bold text-primary">Executing follow-up sequence...</div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-accent-amber animate-line-draw w-0"></div>
                                            </div>
                                            <span className="text-[8px] font-mono text-accent-amber animate-pulse">AGENT_ACTIVE</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Standard Item 2 - Cross-Functional Mastery */}
                    <div className="group relative overflow-hidden rounded-2xl bg-primary min-h-[350px] md:col-span-1 text-left card-depth-hover transition-all duration-500">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10 flex h-full flex-col p-8">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white shadow-sm transition-transform group-hover:scale-110">
                                <span className="material-symbols-outlined text-2xl">psychology</span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">Cross-Functional Mastery</h4>
                            <div className="space-y-4">
                                <p className="text-sm leading-relaxed text-white/90">
                                    I've been on every side of the work — code, sales, marketing, and design. That's why I don't automate tasks. <span className="font-bold text-white underline decoration-white/30 underline-offset-4">I fix systems.</span>
                                </p>
                                <p className="text-sm leading-relaxed text-white/90 text-left">
                                    I design AI-powered workflows around real behavior, not ideal processes — where work stalls, context gets lost, and effort leaks.
                                </p>
                                <div className="pt-3">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 border border-white/10">
                                        <span className="h-1.5 w-1.5 rounded-full bg-accent-amber animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]"></span>
                                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">ROI: 10-15 HRS/PERSON/WEEK</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Services;
