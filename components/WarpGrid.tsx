import React, { useEffect, useRef } from 'react';

const WarpGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetX = width / 2;
    let targetY = height / 2;

    const gridSize = 40;
    const points: {x: number, y: number, ox: number, oy: number}[] = [];

    // Initialize grid points
    const initGrid = () => {
        points.length = 0;
        for (let x = 0; x <= width + gridSize; x += gridSize) {
            for (let y = 0; y <= height + gridSize; y += gridSize) {
                points.push({ x, y, ox: x, oy: y });
            }
        }
    };
    initGrid();

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.1;
      targetY += (mouseY - targetY) * 0.1;

      // Update points
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const dx = p.ox - targetX;
        const dy = p.oy - targetY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Warping effect (repulsion/attraction)
        const maxDist = 400;
        const force = Math.max(0, (maxDist - dist) / maxDist);
        const power = 40 * force; // Strength of warp

        p.x = p.ox + (dx / dist) * power;
        p.y = p.oy + (dy / dist) * power;

        // Draw dots
        ctx.fillStyle = '#333333'; // Dark grey dots for dark mode
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw lines - removed for cleaner dark look, just dots
      
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initGrid();
    };

    const handleMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none bg-[#050505]"
    />
  );
};

export default WarpGrid;