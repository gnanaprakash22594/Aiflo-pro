import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (

        <section id="hero" className="hero-section-final">

            {/* 
        Container controls aspect ratio.
        Desktop: 100% width/height.
        Mobile: Force landscape ratio to ensure horizontal FOV includes text.
      */}
            <div className="spline-container">
                <Spline
                    scene="https://prod.spline.design/oN2AZ34pXmzHvRyx/scene.splinecode"
                    onLoad={() => setIsLoading(false)}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>

            {isLoading && (
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    pointerEvents: 'none'
                }}>
                    <div className="loader" style={{ color: 'white', fontFamily: 'sans-serif' }}>
                        Loading 3D Experience...
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
