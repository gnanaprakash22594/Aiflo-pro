import React from 'react';

const Process = () => {
    return (
        <section className="relative overflow-hidden bg-[#1a111e] py-24 text-white" id="method">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 h-full w-full opacity-10" style={{ backgroundImage: 'radial-gradient(#a00fbd 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary animate-[fadeInUp_0.6s_ease-out]">The Process</h2>
                    <h3 className="text-3xl font-black uppercase tracking-tight md:text-5xl animate-[fadeInUp_0.6s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">How We Build</h3>
                </div>
                <div className="relative grid gap-12 md:grid-cols-4">
                    {/* Connecting Line with Infinite Flow Animation */}
                    <div className="absolute top-8 left-0 hidden h-0.5 w-full md:block overflow-visible">
                        <div className="h-full w-full bg-gradient-to-r from-primary via-accent-magenta to-accent-amber animate-[lineFlow_3s_ease-in-out_infinite] bg-[length:200%_100%]"></div>
                    </div>

                    {/* Traveling Node - positioned outside line container to maintain circular shape */}
                    <div className="absolute top-8 left-0 hidden w-full md:block pointer-events-none">
                        <div className="absolute top-0 w-3 h-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,1)] animate-[travelNode_8s_ease-in-out_infinite]"></div>
                    </div>

                    {/* Step 1 - Glows in Purple when node arrives */}
                    <div className="relative flex flex-col items-center text-center group opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s] [animation-fill-mode:forwards]">
                        <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#1a111e] bg-white text-xl font-black text-primary transition-all duration-300 group-hover:scale-110 animate-[badgeGlowPurple_4s_ease-in-out_infinite]">
                            01
                        </div>
                        <h4 className="mt-6 text-lg font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-primary">Discover</h4>
                        <p className="mt-3 text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300">We audit your current workflow to identify bottlenecks and high-value opportunities.</p>
                    </div>

                    {/* Step 2 - Glows in Purple when node arrives */}
                    <div className="relative flex flex-col items-center text-center group opacity-0 animate-[fadeInUp_0.6s_ease-out_0.9s] [animation-fill-mode:forwards]">
                        <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#1a111e] bg-[#2a1d30] text-xl font-black text-white transition-all duration-300 group-hover:bg-primary group-hover:scale-110 animate-[badgeGlowPurple_4s_ease-in-out_infinite]">
                            02
                        </div>
                        <h4 className="mt-6 text-lg font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-primary">Design</h4>
                        <p className="mt-3 text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300">We blueprint the perfect system architecture tailored to your business goals.</p>
                    </div>

                    {/* Step 3 - Glows in Magenta when node arrives */}
                    <div className="relative flex flex-col items-center text-center group opacity-0 animate-[fadeInUp_0.6s_ease-out_1.2s] [animation-fill-mode:forwards]">
                        <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#1a111e] bg-[#2a1d30] text-xl font-black text-white transition-all duration-300 group-hover:bg-accent-magenta group-hover:scale-110 animate-[badgeGlowMagenta_4s_ease-in-out_infinite]">
                            03
                        </div>
                        <h4 className="mt-6 text-lg font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-accent-magenta">Automate</h4>
                        <p className="mt-3 text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300">We build, connect, and deploy your intelligent agents and automation pipelines.</p>
                    </div>

                    {/* Step 4 - Glows in Amber when node arrives */}
                    <div className="relative flex flex-col items-center text-center group opacity-0 animate-[fadeInUp_0.6s_ease-out_1.5s] [animation-fill-mode:forwards]">
                        <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#1a111e] bg-[#2a1d30] text-xl font-black text-white transition-all duration-300 group-hover:bg-accent-amber group-hover:scale-110 animate-[badgeGlowAmber_4s_ease-in-out_infinite]">
                            04
                        </div>
                        <h4 className="mt-6 text-lg font-bold uppercase tracking-wide transition-colors duration-300 group-hover:text-accent-amber">Optimize</h4>
                        <p className="mt-3 text-sm text-gray-400 transition-all duration-300 group-hover:text-gray-300">We refine the system based on real-world data to ensure maximum efficiency.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
