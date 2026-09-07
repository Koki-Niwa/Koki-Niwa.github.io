import React, { useEffect, useRef } from 'react';

/**
 * 水墨风鼠标跟随动态背景
 * - 白底 + 固定淡墨装饰
 * - 鼠标移动时生成墨滴扩散效果
 * - 事件监听在 window 上，避免被内容层拦截
 */
export default function InkBackground() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let width = 0;
    let height = 0;
    const dpr = window.devicePixelRatio || 1;

    // 墨滴数组
    const drops = [];
    // 鼠标轨迹点
    const trail = [];
    const maxTrail = 10;

    // 固定背景装饰（大淡墨圆）
    const decorations = [
      { x: 0.15, y: 0.3, r: 180, opacity: 0.04 },
      { x: 0.85, y: 0.2, r: 220, opacity: 0.035 },
      { x: 0.7, y: 0.8, r: 160, opacity: 0.045 },
      { x: 0.3, y: 0.75, r: 140, opacity: 0.03 },
      { x: 0.5, y: 0.5, r: 300, opacity: 0.02 },
    ];

    function resize() {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, width * dpr);
      canvas.height = Math.max(1, height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawDecorations() {
      decorations.forEach((d) => {
        const x = d.x * width;
        const y = d.y * height;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, d.r);
        gradient.addColorStop(0, `rgba(28, 28, 28, ${d.opacity})`);
        gradient.addColorStop(0.6, `rgba(28, 28, 28, ${d.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(28, 28, 28, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, d.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawTrail() {
      if (trail.length < 2) return;
      for (let i = 1; i < trail.length; i++) {
        const p = trail[i];
        const prev = trail[i - 1];
        const alpha = (i / trail.length) * 0.12;
        ctx.strokeStyle = `rgba(28, 28, 28, ${alpha})`;
        ctx.lineWidth = (i / trail.length) * 5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }
    }

    function drawDrops() {
      for (let i = drops.length - 1; i >= 0; i--) {
        const d = drops[i];
        d.radius += d.speed;
        d.opacity -= d.fade;

        if (d.opacity <= 0 || d.radius > d.maxRadius) {
          drops.splice(i, 1);
          continue;
        }

        const gradient = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.radius);
        gradient.addColorStop(0, `rgba(28, 28, 28, ${d.opacity * 0.6})`);
        gradient.addColorStop(0.4, `rgba(28, 28, 28, ${d.opacity * 0.3})`);
        gradient.addColorStop(0.8, `rgba(28, 28, 28, ${d.opacity * 0.1})`);
        gradient.addColorStop(1, 'rgba(28, 28, 28, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = `rgba(28, 28, 28, ${d.opacity * 0.2})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius * 0.85, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      drawDecorations();
      drawTrail();
      drawDrops();
      animationId = requestAnimationFrame(animate);
    }

    function addDrop(x, y, size = 1) {
      drops.push({
        x,
        y,
        radius: 2,
        maxRadius: 40 + Math.random() * 60 * size,
        opacity: 0.22 + Math.random() * 0.12,
        speed: 0.7 + Math.random() * 0.5,
        fade: 0.0035 + Math.random() * 0.0025,
      });
      if (drops.length > 50) drops.shift();
    }

    // 判断鼠标是否在 Hero 区域内
    function isInHero(clientX, clientY) {
      const rect = container.getBoundingClientRect();
      return (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      );
    }

    function getCanvasPos(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: clientX - rect.left,
        y: clientY - rect.top,
      };
    }

    let lastDropTime = 0;
    function handleMouseMove(e) {
      if (!isInHero(e.clientX, e.clientY)) {
        // 鼠标离开 Hero 区域，立即清空轨迹，避免残留划痕
        if (trail.length > 0) trail.length = 0;
        return;
      }

      const { x, y } = getCanvasPos(e.clientX, e.clientY);

      trail.push({ x, y });
      if (trail.length > maxTrail) trail.shift();

      const now = Date.now();
      if (now - lastDropTime > 35) {
        addDrop(x, y, 0.7);
        lastDropTime = now;
      }
    }

    function handleClick(e) {
      if (!isInHero(e.clientX, e.clientY)) return;

      const { x, y } = getCanvasPos(e.clientX, e.clientY);
      addDrop(x, y, 2);
      addDrop(x + (Math.random() - 0.5) * 30, y + (Math.random() - 0.5) * 30, 1.2);
      addDrop(x + (Math.random() - 0.5) * 40, y + (Math.random() - 0.5) * 40, 0.8);
    }

    function handleMouseLeave() {
      // 延迟清空轨迹，让墨迹自然消散
      setTimeout(() => {
        trail.length = 0;
      }, 500);
    }

    resize();
    animate();

    // 事件监听加到 window 上，避免被内容层拦截
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}
