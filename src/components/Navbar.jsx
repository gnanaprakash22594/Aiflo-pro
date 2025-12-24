import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo">Aiflo.pro</a>

                <div className="nav-links">
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#contact" className="nav-cta">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
