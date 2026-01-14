import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import logoOnScroll from '../assets/logo-onscroll.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled
            ? 'bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-gray-100 dark:border-white/10'
            : 'bg-transparent border-transparent'
            }`}>
            <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <a className="flex items-center gap-3 group min-w-[140px]" href="#">
                    <img src={scrolled ? logoOnScroll : logo} alt="AIFLO.pro" className="h-12 w-auto transition-opacity hover:opacity-80" />
                </a>


                {/* Desktop Menu */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">

                    <a className="text-sm font-medium text-text-main hover:text-primary dark:text-gray-300 dark:hover:text-white" href="#services">Services</a>
                    <a className="text-sm font-medium text-text-main hover:text-primary dark:text-gray-300 dark:hover:text-white" href="#method">Method</a>
                    <a className="text-sm font-medium text-text-main hover:text-primary dark:text-gray-300 dark:hover:text-white" href="#why-us">Why Us</a>
                    <a className="text-sm font-medium text-text-main hover:text-primary dark:text-gray-300 dark:hover:text-white" href="#about">About</a>
                    <a className="text-sm font-medium text-text-main hover:text-primary dark:text-gray-300 dark:hover:text-white" href="/blog">Blog</a>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <button className="hidden h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40 md:flex">
                        Book Discovery
                    </button>
                    <button className="flex items-center justify-center md:hidden">
                        <span className="material-symbols-outlined text-3xl">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

