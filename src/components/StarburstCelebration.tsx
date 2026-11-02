import React, { useEffect, useRef, useState, useCallback } from 'react';

interface StarburstCelebrationProps {
  trigger: boolean;
  scorePercentage?: number;
  isHit?: boolean;
  onComplete?: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  type: 'star' | 'circle' | 'spark';
  rotation: number;
  rotationSpeed: number;
  twinklePhase: number;
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

export const StarburstCelebration: React.FC<StarburstCelebrationProps> = ({
  trigger,
  scorePercentage = 0,
  isHit = false,
  onComplete,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [celebrationText, setCelebrationText] = useState<string>('');

  const runCelebration = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas to full window
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    setVisible(true);

    // Ethereal cosmic color palette: Teal, Pink, Lavender, Gold, Diamond White
    const colors = [
      '#2DD4BF', // Teal 400
      '#5EEAD4', // Teal 300
      '#F472B6', // Pink 400
      '#EC4899', // Pink 500
      '#FDA4AF', // Rose 300
      '#D8B4FE', // Lavender 400
      '#FACC15', // Celestial Gold
      '#FFFFFF', // Diamond White
    ];

    const particles: Particle[] = [];
    const shockwaves: Shockwave[] = [];

    // Helper to spawn a burst at (cx, cy)
    const createBurst = (cx: number, cy: number, particleCount = 45, shockwaveColor = '#2DD4BF') => {
      // Expanding ethereal ring
      shockwaves.push({
        x: cx,
        y: cy,
        radius: 4,
        maxRadius: Math.min(width, height) * 0.18,
        alpha: 0.8,
        color: shockwaveColor,
      });

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        // Natural varied speed distribution with subtle ease
        const speed = Math.random() * 5.5 + 1.2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const types: ('star' | 'circle' | 'spark')[] = ['star', 'circle', 'spark', 'star'];
        const type = types[Math.floor(Math.random() * types.length)];

        particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5, // slight upward float
          size: type === 'star' ? Math.random() * 4 + 2.5 : Math.random() * 3 + 1.5,
          color,
          alpha: 1,
          decay: Math.random() * 0.016 + 0.012, // fades in ~2.5 - 3 seconds
          type,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.12,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    // Staggered burst locations (central burst near target card, followed by 2 flanking bursts)
    const centerX = width * 0.5;
    const centerY = height * 0.38;

    createBurst(centerX, centerY, 55, '#2DD4BF');

    const timeout1 = setTimeout(() => {
      createBurst(centerX - width * 0.18, centerY - height * 0.08, 35, '#F472B6');
    }, 180);

    const timeout2 = setTimeout(() => {
      createBurst(centerX + width * 0.18, centerY - height * 0.05, 35, '#FACC15');
    }, 360);

    let animationFrameId: number;

    const drawStar = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      spikes = 4,
      outerRadius = 4,
      innerRadius = 1.5
    ) => {
      let rot = (Math.PI / 2) * 3;
      const step = Math.PI / spikes;

      context.beginPath();
      context.moveTo(x, y - outerRadius);
      for (let i = 0; i < spikes; i++) {
        context.lineTo(x + Math.cos(rot) * outerRadius, y + Math.sin(rot) * outerRadius);
        rot += step;
        context.lineTo(x + Math.cos(rot) * innerRadius, y + Math.sin(rot) * innerRadius);
        rot += step;
      }
      context.lineTo(x, y - outerRadius);
      context.closePath();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += (sw.maxRadius - sw.radius) * 0.08;
        sw.alpha *= 0.94;

        if (sw.alpha > 0.01) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
          ctx.strokeStyle = sw.color;
          ctx.globalAlpha = sw.alpha * 0.45;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 12;
          ctx.shadowColor = sw.color;
          ctx.stroke();
          ctx.restore();
        } else {
          shockwaves.splice(i, 1);
        }
      }

      // Render particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04; // subtle gravity
        p.vx *= 0.985; // air friction
        p.vy *= 0.985;
        p.alpha -= p.decay;
        p.rotation += p.rotationSpeed;
        p.twinklePhase += 0.15;

        const dynamicAlpha = Math.max(0, p.alpha * (0.8 + 0.2 * Math.sin(p.twinklePhase)));

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = dynamicAlpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;

        if (p.type === 'star') {
          drawStar(ctx, 0, 0, 4, p.size, p.size * 0.35);
          ctx.fill();
        } else if (p.type === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // spark / diamond
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.4);
          ctx.lineTo(p.size * 0.6, 0);
          ctx.lineTo(0, p.size * 1.4);
          ctx.lineTo(-p.size * 0.6, 0);
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      }

      if (particles.length > 0 || shockwaves.length > 0) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
        setVisible(false);
        onComplete?.();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  useEffect(() => {
    if (trigger) {
      if (isHit && scorePercentage >= 80) {
        setCelebrationText(`Double Resonance Hit: ${scorePercentage}% Match & Judge Hit!`);
      } else if (isHit) {
        setCelebrationText('Blind Judge Hit: Target Correctly Identified!');
      } else if (scorePercentage >= 80) {
        setCelebrationText(`High Resonance Match: ${scorePercentage}% Descriptor Overlap!`);
      } else {
        setCelebrationText('Strong Resonance Signal Confirmed!');
      }

      const cleanup = runCelebration();
      return () => {
        cleanup?.();
      };
    }
  }, [trigger, isHit, scorePercentage, runCelebration]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
      
      {/* Subtle celebratory floating pill */}
      {visible && celebrationText && (
        <div className="absolute top-20 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#080914]/90 border border-[#2DD4BF]/60 text-xs font-semibold tracking-wide shadow-[0_0_25px_rgba(45,212,191,0.35)] flex items-center gap-2 backdrop-blur-md animate-in fade-in zoom-in-95 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-ping" />
          <span className="shimmer-teal-pink-text font-display uppercase tracking-wider">
            {celebrationText}
          </span>
          <span className="text-[#F472B6]">✦</span>
        </div>
      )}
    </div>
  );
};
