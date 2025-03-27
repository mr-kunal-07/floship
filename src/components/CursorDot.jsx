import React, { useState, useEffect } from "react";

const CursorDot = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });
            });
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed w-2 h-2 bg-orange-500 rounded-full z-[9999]"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: "translate(-50%, -50%)",
                backdropFilter: "blur(0px)", // Ensures no unwanted transparency
            }}
        />
    );
};

export default CursorDot;
