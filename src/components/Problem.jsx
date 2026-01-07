import React from 'react';

const Problem = () => {
    return (
        <section className="bg-gray-50 py-24 dark:bg-white/5" id="problem">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-16 md:max-w-2xl text-left">
                    <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">The Friction</h2>
                    <h3 className="text-3xl font-black uppercase leading-tight tracking-tight text-text-main dark:text-white md:text-5xl">
                        The Founder's Bottleneck
                    </h3>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
                        You didn't start a company to drown in manual grunt work. Identify the friction points slowing you down.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Card 1 */}
                    <div className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:bg-[#1f1022] dark:border dark:border-white/5">
                        <div className="absolute top-0 left-0 h-1 w-full bg-gray-200 transition-colors group-hover:bg-accent-magenta"></div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 text-text-main group-hover:bg-accent-magenta/10 group-hover:text-accent-magenta transition-colors dark:bg-white/5 dark:text-white">
                            <span className="material-symbols-outlined text-3xl">schedule</span>
                        </div>
                        <div className="text-left">
                            <h4 className="mb-2 text-xl font-bold text-text-main dark:text-white">Time Loss</h4>
                            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                Hours wasted on repetitive tasks that a machine could do instantly. Your hourly rate is too high for data entry.
                            </p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:bg-[#1f1022] dark:border dark:border-white/5">
                        <div className="absolute top-0 left-0 h-1 w-full bg-gray-200 transition-colors group-hover:bg-accent-amber"></div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 text-text-main group-hover:bg-accent-amber/10 group-hover:text-accent-amber transition-colors dark:bg-white/5 dark:text-white">
                            <span className="material-symbols-outlined text-3xl">extension_off</span>
                        </div>
                        <div className="text-left">
                            <h4 className="mb-2 text-xl font-bold text-text-main dark:text-white">Fragmented Tools</h4>
                            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                Disparate apps that don't talk to each other, creating data silos and forcing you to be the copy-paste bridge.
                            </p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="group relative flex flex-col gap-4 overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:bg-[#1f1022] dark:border dark:border-white/5">
                        <div className="absolute top-0 left-0 h-1 w-full bg-gray-200 transition-colors group-hover:bg-accent-coral"></div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 text-text-main group-hover:bg-accent-coral/10 group-hover:text-accent-coral transition-colors dark:bg-white/5 dark:text-white">
                            <span className="material-symbols-outlined text-3xl">pan_tool</span>
                        </div>
                        <div className="text-left">
                            <h4 className="mb-2 text-xl font-bold text-text-main dark:text-white">Manual Friction</h4>
                            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                Human error and fatigue creeping into critical operational workflows. Systems don't get tired; people do.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
