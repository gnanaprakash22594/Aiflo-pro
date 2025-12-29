import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';

import SmoothScroll from './components/SmoothScroll';

import { Zap, Star, Rocket, CheckCircle } from 'lucide-react';
import RadialOrbitalTimeline from './components/RadialOrbitalTimeline';

function App() {
  const timelineData = [
    {
      id: 1,
      title: "Project Initiation",
      date: "2024-01-15",
      content: "Initial project kickoff and requirement gathering phase.",
      category: "Planning",
      icon: Rocket,
      relatedIds: [2, 3],
      status: "completed",
      energy: 85
    },
    {
      id: 2,
      title: "Design Phase",
      date: "2024-02-01",
      content: "Creating high-fidelity mockups and design systems.",
      category: "Design",
      icon: Star,
      relatedIds: [1, 4],
      status: "completed",
      energy: 90
    },
    {
      id: 3,
      title: "Core Development",
      date: "2024-02-20",
      content: "Building the core infrastructure and backend services.",
      category: "Development",
      icon: Zap,
      relatedIds: [1, 4, 5],
      status: "in-progress",
      energy: 75
    },
    {
      id: 4,
      title: "Frontend Implementation",
      date: "2024-03-10",
      content: "Implementing the user interface and connecting to APIs.",
      category: "Development",
      icon: Zap,
      relatedIds: [2, 3, 5],
      status: "pending",
      energy: 60
    },
    {
      id: 5,
      title: "Testing & QA",
      date: "2024-03-25",
      content: "Comprehensive testing and quality assurance cycles.",
      category: "Testing",
      icon: CheckCircle,
      relatedIds: [3, 4],
      status: "pending",
      energy: 40
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
