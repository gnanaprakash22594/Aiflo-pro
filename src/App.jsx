import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

import SmoothScroll from './components/SmoothScroll';

import { Zap, Eye, Layout, Cpu, Activity, RefreshCw } from 'lucide-react';
import RadialOrbitalTimeline from './components/RadialOrbitalTimeline';

function App() {
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

  return (
    <SmoothScroll>
      <div className="app">
        <Navbar />
        <Hero />
        <RadialOrbitalTimeline timelineData={timelineData} />
        <About />
        <Contact />
      </div>
    </SmoothScroll>
  );
}

export default App;
