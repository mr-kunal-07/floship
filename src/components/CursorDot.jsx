import React, { useState, useEffect, useRef } from "react";

/**
 * Performance-Optimized Custom Cursor
 * - Uses Direct DOM manipulation + CSS Variables for zero-lag movement.
 * - React state is only used for the "Hover" toggle.
 * - Hardware acceleration (transform/translate3d) ensures 60fps+ smoothness.
 */
const CursorDot = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Refs to bypass React's render cycle for performance-critical updates
  const dotRef = useRef(null);
  const trailRef = useRef(null);
  const glowRef = useRef(null);
  
  // Persistent tracking without triggering re-renders
  const mousePos = useRef({ x: -100, y: -100 });
  const trailPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Immediate update for the dot (Zero Lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`;
      }

      // Check for interactive elements efficiently
      const target = e.target;
      const isClickable = target.closest('a, button, [role="button"]') || 
                         window.getComputedStyle(target).cursor === 'pointer';
      
      if (isClickable !== isHovering) {
        setIsHovering(!!isClickable);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Optimized Animation Loop for the "Smooth" trail
    let rafId;
    const updateTrail = () => {
      // Adjusted easing: 0.2 is snappier than 0.12 but still looks organic
      trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.2;
      trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.2;

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${trailPos.current.x}px, ${trailPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(updateTrail);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("mouseenter", onMouseEnter);
    rafId = requestAnimationFrame(updateTrail);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible, isHovering]);

  return (
    <div 
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ touchAction: 'none' }}
    >
      {/* Central Core Dot - Uses Translate3d for GPU acceleration */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-orange-500 rounded-full z-[9999] shadow-[0_0_12px_rgba(249,115,22,1)] will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      />
      
      {/* Trailing Outer Ring */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 rounded-full z-[9998] mix-blend-screen transition-[width,height,background-color,border] duration-300 ease-out will-change-transform"
        style={{
          width: isHovering ? '64px' : '32px',
          height: isHovering ? '64px' : '32px',
          backgroundColor: isHovering ? 'rgba(249, 115, 22, 0.15)' : 'rgba(249, 115, 22, 0.05)',
          border: isHovering ? '1px solid rgba(249, 115, 22, 0.6)' : '1px solid rgba(249, 115, 22, 0.2)',
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />

      {/* Atmospheric Glow */}
      <div 
        ref={glowRef}
        className="fixed top-0 left-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] -z-10 will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
      />
    </div>
  );
};

export default CursorDot;