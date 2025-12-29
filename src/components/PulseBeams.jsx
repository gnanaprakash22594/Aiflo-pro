import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./PulseBeams.css";

export const PulseBeams = ({
    children,
    className = "",
    background,
    beams,
    width = 858,
    height = 434,
    baseColor = "#1e293b", // slate-800
    accentColor = "#475569", // slate-600
    gradientColors = {
        start: "#18CCFC",
        middle: "#6344F5",
        end: "#AE48FF"
    },
}) => {
    return (
        <div className={`pb-container ${className}`}>
            {background}
            <div className="pb-content">{children}</div>
            <div className="pb-svg-wrapper">
                <SVGs
                    beams={beams}
                    width={width}
                    height={height}
                    baseColor={baseColor}
                    accentColor={accentColor}
                    gradientColors={gradientColors}
                />
            </div>
        </div>
    );
};

const SVGs = ({ beams, width, height, baseColor, accentColor, gradientColors }) => {
    const gradientsRef = useRef([]);

    useEffect(() => {
        // Clear any previous animations
        gradientsRef.current.forEach((grad) => {
            if (grad && grad._gsapAnimation) {
                grad._gsapAnimation.kill();
            }
        });

        beams.forEach((beam, index) => {
            const gradientElement = gradientsRef.current[index];
            if (!gradientElement) return;

            const { initial, animate, transition } = beam.gradientConfig;

            // Set initial state
            gsap.set(gradientElement, {
                attr: { ...initial } // GSAP attr plugin handles SVG attributes
            });

            // Create animation
            const anim = gsap.to(gradientElement, {
                attr: { ...animate },
                duration: transition?.duration || 2,
                repeat: transition?.repeat === Infinity ? -1 : (transition?.repeat || 0),
                ease: transition?.ease || "linear",
                delay: transition?.delay || 0,
                repeatDelay: transition?.repeatDelay || 0,
                yoyo: transition?.repeatType === "reverse" // Simulate frame-motion reverse repeat
            });

            gradientElement._gsapAnimation = anim;
        });

        return () => {
            // Cleanup
            gradientsRef.current.forEach((grad) => {
                if (grad && grad._gsapAnimation) {
                    grad._gsapAnimation.kill();
                }
            });
        };
    }, [beams]);

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="pb-svg"
        >
            {beams.map((beam, index) => (
                <React.Fragment key={index}>
                    {/* Base Path (Background Line) */}
                    <path
                        d={beam.path}
                        stroke={baseColor}
                        strokeWidth="1"
                        fill="none"
                    />

                    {/* Animated Gradient Path */}
                    <path
                        d={beam.path}
                        stroke={`url(#grad-${index})`}
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                    />

                    {/* Connection Points */}
                    {beam.connectionPoints?.map((point, pointIndex) => (
                        <circle
                            key={`${index}-${pointIndex}`}
                            cx={point.cx}
                            cy={point.cy}
                            r={point.r}
                            fill={baseColor}
                            stroke={accentColor}
                        />
                    ))}
                </React.Fragment>
            ))}

            <defs>
                {beams.map((beam, index) => (
                    <linearGradient
                        key={index}
                        id={`grad-${index}`}
                        gradientUnits="userSpaceOnUse"
                        ref={(el) => (gradientsRef.current[index] = el)}
                    >
                        <stop offset="0%" stopColor={gradientColors.start} stopOpacity="0" />
                        <stop offset="20%" stopColor={gradientColors.start} stopOpacity="1" />
                        <stop offset="50%" stopColor={gradientColors.middle} stopOpacity="1" />
                        <stop offset="100%" stopColor={gradientColors.end} stopOpacity="0" />
                    </linearGradient>
                ))}
            </defs>
        </svg>
    );
};
