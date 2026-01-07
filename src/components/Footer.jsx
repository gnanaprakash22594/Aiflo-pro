import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-white pt-20 pb-10 dark:bg-background-dark border-t border-gray-100 dark:border-white/5">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-4">
                    <div className="md:col-span-2 text-left">
                        <a className="flex items-center gap-2 mb-6" href="#">
                            <img src={logo} alt="AIFLO.pro" className="h-10 w-auto" />
                        </a>

                        <p className="max-w-xs text-sm text-gray-500 dark:text-gray-400">
                            Premium automation studio for founders who value their time. We build systems that scale.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">Sitemap</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li><a className="hover:text-primary" href="#">Home</a></li>
                            <li><a className="hover:text-primary" href="#">Services</a></li>
                            <li><a className="hover:text-primary" href="#">Methodology</a></li>
                            <li><a className="hover:text-primary" href="#">Case Studies</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-main dark:text-white">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                            <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
                            <li><a className="hover:text-primary" href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 dark:border-white/5 md:flex-row">
                    <p className="text-xs text-gray-400">© 2026 AIFLO.pro. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a className="text-gray-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-xl">public</span></a>
                        <a className="text-gray-400 hover:text-primary" href="#"><span className="material-symbols-outlined text-xl">mail</span></a>
                    </div>
                </div>
            </div>
            {/* Big Footer Logo */}
            <div className="mt-10 overflow-hidden flex justify-center">
                <img
                    src={logo}
                    alt="AIFLO"
                    className="w-[80%] max-w-[1200px] grayscale opacity-5 dark:opacity-10 select-none pointer-events-none"
                />
            </div>
        </footer>
    );
};

export default Footer;
