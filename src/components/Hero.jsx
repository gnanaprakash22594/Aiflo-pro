import React, { useState, useEffect } from 'react';
import RadialOrbitalTimeline from './RadialOrbitalTimeline';
import { Eye, Layout, Cpu, Activity, RefreshCw } from 'lucide-react';

const Hero = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineData = [
        {
            id: 1,
            title: "Find Leaks",
            badge: "INSIGHT MODE",
            cardTitle: "Where Effort Gets Wasted",
            content: "Spot manual bottlenecks, broken handoffs, and repetitive work silently draining time and money.",
            coverageLabel: "Leak Visibility",
            coverageValue: "100%",
            icon: Eye,
            relatedIds: [2, 3]
        },
        {
            id: 2,
            title: "Design Flow",
            badge: "SYSTEM DESIGN",
            cardTitle: "Systems, Not Just Tools",
            content: "We map intelligent workflows across sales, ops, and data — built for how you actually work.",
            coverageLabel: "Workflow Clarity",
            coverageValue: "High",
            icon: Layout,
            relatedIds: [3, 4]
        },
        {
            id: 3,
            title: "Automate Work",
            badge: "AUTOPILOT ON",
            cardTitle: "The System Runs Itself",
            content: "Leads routed, tasks triggered, follow-ups sent — without lifting a finger.",
            coverageLabel: "Manual Work Removed",
            coverageValue: "80–90%",
            icon: Cpu,
            relatedIds: [4, 5]
        },
        {
            id: 4,
            title: "Monitor",
            badge: "SMART ALERTS",
            cardTitle: "Alerts, Not Dashboards",
            content: "You’re notified only when action is needed. No constant checking. No noise.",
            coverageLabel: "Signal vs Noise",
            coverageValue: "Optimized",
            icon: Activity,
            relatedIds: [5, 3]
        },
        {
            id: 5,
            title: "Scale & Evolve",
            badge: "CONTINUOUS IMPROVEMENT",
            cardTitle: "Systems That Learn",
            content: "Your automation adapts, improves, and expands as your business grows.",
            coverageLabel: "Future-Ready",
            coverageValue: "Always On",
            icon: RefreshCw,
            relatedIds: [1, 2]
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Calculate progress based on first 400px of scroll
            const progress = Math.min(scrollY / 400, 1);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate scale based on scroll progress (1.0 to 1.15)
    const textScale = 1 + (scrollProgress * 0.15);

    return (
        <section className="relative w-full overflow-hidden px-6 pb-6 pt-4 lg:px-8 lg:pt-6">
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
                {/* Left Content */}
                <div className="flex flex-col gap-8 text-left">
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-accent-magenta animate-pulse"></span>
                        <span className="text-xs font-bold uppercase tracking-wide text-primary">Workflow Automation & MVP Development</span>
                    </div>
                    <h1
                        className="text-5xl font-black leading-[0.95] tracking-tight text-text-main dark:text-white sm:text-6xl lg:text-7xl transition-transform duration-300 ease-out"
                        style={{ transform: `scale(${textScale})`, transformOrigin: 'left center' }}
                    >
                        BUILD INTELLIGENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-magenta to-accent-coral">SYSTEMS</span>. GET YOUR TIME BACK.
                    </h1>
                    <p className="max-w-xl text-lg font-medium leading-relaxed text-gray-600 dark:text-gray-400">
                        We don’t start with tools. We start by understanding your bottlenecks and opportunities, then design and build Practical & Scalable Automations.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 justify-start">
                        <button className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-xl shadow-primary/30 transition-transform hover:-translate-y-0.5 active:translate-y-0">
                            Book a Discovery Call
                        </button>
                        <button className="flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-6 text-base font-bold text-text-main transition-colors hover:border-primary/50 hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white">
                            <span className="material-symbols-outlined text-primary">play_circle</span>
                            See How It Works
                        </button>
                    </div>
                    <div className="flex items-center gap-6 pt-4 text-sm font-semibold text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            <span>Systems First</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            <span>Rapid Deployment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">check_circle</span>
                            <span>ROI Driven</span>
                        </div>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative aspect-square w-full lg:h-[600px] flex items-center justify-center">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 to-accent-amber/20 blur-[100px] rounded-full opacity-60"></div>
                    <div className="w-full h-full">
                        <RadialOrbitalTimeline timelineData={timelineData} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

