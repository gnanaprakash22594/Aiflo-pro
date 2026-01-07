import React from 'react';

const Services = () => {
    return (
        <section className="py-24" id="services">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 text-left">
                    <div className="max-w-2xl">
                        <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">The Solution</h2>
                        <h3 className="text-3xl font-black uppercase leading-tight tracking-tight text-text-main dark:text-white md:text-5xl">
                            From Chaos to <span className="text-primary">Clockwork</span>
                        </h3>
                    </div>
                    <div className="mb-2">
                        <a className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80" href="#">
                            Explore all services <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Large Item */}
                    <div className="group relative overflow-hidden rounded-2xl bg-gray-900 md:col-span-2 min-h-[300px]">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="relative z-10 flex h-full flex-col justify-end p-8 text-left">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                                <span className="material-symbols-outlined">hub</span>
                            </div>
                            <h4 className="text-2xl font-bold text-white">AI Workflow Integration</h4>
                            <p className="mt-2 text-gray-300 uppercase text-xs font-bold tracking-wider">Embedding intelligence into your daily operations. We build custom agents that handle communication, scheduling, and data processing.</p>
                        </div>
                    </div>
                    {/* Tall Item */}
                    <div className="group relative overflow-hidden rounded-2xl bg-background-light border border-gray-100 dark:bg-white/5 dark:border-white/10 md:row-span-2">
                        <div className="absolute top-0 right-0 h-32 w-32 bg-accent-magenta/10 blur-[50px] rounded-full"></div>
                        <div className="flex h-full flex-col p-8 text-left">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-magenta/10 text-accent-magenta">
                                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                            </div>
                            <h4 className="text-2xl font-bold text-text-main dark:text-white">Rapid MVP Systems</h4>
                            <p className="mt-4 flex-grow text-gray-500 dark:text-gray-400">
                                Prototyping functional systems in days, not months. We validate your internal tools before committing to full-scale engineering.
                            </p>
                            <div className="mt-8 rounded-lg bg-gray-50 p-4 dark:bg-black/20">
                                <div className="flex gap-2 mb-2">
                                    <div className="h-2 w-2 rounded-full bg-red-400"></div>
                                    <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-gray-200 rounded dark:bg-gray-700"></div>
                                    <div className="h-2 w-2/3 bg-gray-200 rounded dark:bg-gray-700"></div>
                                    <div className="h-16 w-full bg-gray-100 rounded border border-dashed border-gray-300 dark:bg-white/5 dark:border-white/10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Standard Item 1 */}
                    <div className="group relative overflow-hidden rounded-2xl bg-background-light border border-gray-100 dark:bg-white/5 dark:border-white/10 min-h-[240px] md:col-span-1 text-left">
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-white/5 dark:to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                        <div className="relative z-10 flex h-full flex-col p-8">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-amber/10 text-accent-amber">
                                <span className="material-symbols-outlined">account_tree</span>
                            </div>
                            <h4 className="text-xl font-bold text-text-main dark:text-white">No-Code Automation</h4>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Connecting your stack (Airtable, Zapier, Webflow) for seamless data flow.</p>
                        </div>
                    </div>
                    {/* Standard Item 2 (Primary Background) */}
                    <div className="group relative overflow-hidden rounded-2xl bg-primary min-h-[240px] md:col-span-1 text-left">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10 flex h-full flex-col justify-between p-8">
                            <div>
                                <h4 className="text-xl font-bold text-white">Custom Architecture</h4>
                                <p className="mt-2 text-sm text-white/80">Tailored blueprints for your unique operational needs.</p>
                            </div>
                            <div className="flex justify-end">
                                <span className="material-symbols-outlined text-4xl text-white/40 rotate-12">architecture</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
