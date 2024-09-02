import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let nodes = [];
    let mouse = { x: width / 2, y: height / 2 };

    const createNode = (x, y) => ({
      x,
      y,
      vx: Math.random() * 0.5 - 0.25,
      vy: Math.random() * 0.5 - 0.25,
      radius: 3,
      connections: [],
    });

    for (let i = 0; i < 150; i++) {
      nodes.push(createNode(Math.random() * width, Math.random() * height));
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach(node => {
        node.x += node.vx*3;
        node.y += node.vy*3;

        if (node.x > width || node.x < 0) node.vx *= -1;
        if (node.y > height || node.y < 0) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(30, 144, 255, 1)';
        ctx.shadowColor = 'rgba(30, 144, 255, 0.7)';
        ctx.shadowBlur = 10;
        ctx.fill();

        node.connections = [];
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = 'rgba(30, 144, 255, 0.5)';
            ctx.lineWidth = 1;
            ctx.stroke();

            nodes[i].connections.push(j);
            nodes[j].connections.push(i);
          }
        }
      }

      nodes.forEach(node => {
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      requestAnimationFrame(draw);
    };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);


  return (
      <section className="relative bg-gray-900 h-screen flex items-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="hero-title major-mono-display-regular text-5xl font-extrabold text-white mb-6">
            Welcome to HACKERWOLF
          </h2>
          <p className="hero-subtitle major-mono-display-regular text-xl text-gray-400 mb-10">
            Dive deep into hacking and cybersecurity with tutorials, challenges, and more.
          </p>
          <Link
            to="/signup"
            className="hero-button px-8 py-3 bg-green-400 text-black font-bold rounded-full hover:bg-green-500 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    );
  };
  
  export default Hero;