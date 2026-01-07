import React from 'react';

const CTA = () => {
    return (
        <section className="relative py-24 px-6 overflow-hidden">
            <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-black px-6 py-20 text-center shadow-2xl sm:px-12 relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary blur-[80px] opacity-60"></div>
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent-magenta blur-[80px] opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
                        Stop Trading Time <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-magenta">For Money</span>
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg text-gray-400">
                        Your competition is already automating. Secure your spot in our quarterly intake and build the system your company deserves.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <button className="h-14 min-w-[200px] rounded-lg bg-white px-8 text-lg font-bold text-black transition-transform hover:scale-105">
                            Book Discovery Call
                        </button>
                        <button className="h-14 min-w-[200px] rounded-lg border border-white/20 px-8 text-lg font-bold text-white transition-colors hover:bg-white/10">
                            View Case Studies
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
