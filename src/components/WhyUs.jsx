import React from 'react';

const WhyUs = () => {
    return (
        <section className="py-24 bg-white dark:bg-background-dark text-left" id="why-us">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <h3 className="text-3xl font-black uppercase leading-tight tracking-tight text-text-main dark:text-white md:text-4xl">
                            Why Top Founders Choose <span className="text-primary">AIFLO</span>
                        </h3>
                        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                            Most agencies sell you tools. We sell you time. We are a team of systems thinkers who understand that technology is only as good as the workflow it supports.
                        </p>
                        <ul className="mt-8 space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined mt-0.5 text-primary">verified</span>
                                <div>
                                    <strong className="text-text-main dark:text-white">Founder-First Approach.</strong>
                                    <span className="text-gray-500 dark:text-gray-400"> We speak your language—ROI, scalability, and speed.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined mt-0.5 text-primary">verified</span>
                                <div>
                                    <strong className="text-text-main dark:text-white">Tool Agnostic.</strong>
                                    <span className="text-gray-500 dark:text-gray-400"> We use the best stack for YOUR specific needs, not just what's trendy.</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined mt-0.5 text-primary">verified</span>
                                <div>
                                    <strong className="text-text-main dark:text-white">Controlled Maximalism.</strong>
                                    <span className="text-gray-500 dark:text-gray-400"> We build robust, powerful systems that are simple to operate.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-pop opacity-20 blur-xl rounded-full"></div>
                        <div className="relative grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-8">
                                <div className="rounded-2xl bg-gray-50 p-6 shadow-sm dark:bg-white/5">
                                    <h4 className="text-3xl font-black text-text-main dark:text-white">20+</h4>
                                    <p className="text-sm font-medium text-gray-500">Hours Saved / Week</p>
                                </div>
                                <div className="rounded-2xl bg-primary p-6 text-white shadow-lg">
                                    <h4 className="text-3xl font-black">10x</h4>
                                    <p className="text-sm font-medium text-white/80">ROI in 3 Months</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="rounded-2xl bg-gray-900 p-6 text-white shadow-lg">
                                    <h4 className="text-3xl font-black">100%</h4>
                                    <p className="text-sm font-medium text-gray-400">System Uptime</p>
                                </div>
                                <div className="rounded-2xl bg-gray-50 p-6 shadow-sm dark:bg-white/5">
                                    <h4 className="text-3xl font-black text-text-main dark:text-white">Zero</h4>
                                    <p className="text-sm font-medium text-gray-500">Manual Data Entry</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
