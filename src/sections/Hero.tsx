import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Aurora from '../components/Aurora';
import TechTicker from '../components/TechTicker';
import Typewriter from '../components/Typewriter';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.75, rotate: -6 },
          { opacity: 1, scale: 1, rotate: 0, duration: 1.1, ease: 'back.out(1.5)' },
          '-=0.7'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.5'
        );
    }, heroRef);

    /* ── Particle animation (white/subtle, no blue) ── */
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx2d = canvas.getContext('2d');
      if (ctx2d) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: {
          x: number;
          y: number;
          vx: number;
          vy: number;
          size: number;
          opacity: number;
        }[] = [];

        const particleCount = 55;
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.4 + 0.1,
          });
        }

        let animationId: number;

        const animate = () => {
          ctx2d.clearRect(0, 0, canvas.width, canvas.height);

          particles.forEach((particle, i) => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

            /* White dots */
            ctx2d.beginPath();
            ctx2d.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx2d.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            ctx2d.fill();

            /* Subtle white connection lines */
            particles.slice(i + 1).forEach((other) => {
              const dx = particle.x - other.x;
              const dy = particle.y - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 130) {
                ctx2d.beginPath();
                ctx2d.moveTo(particle.x, particle.y);
                ctx2d.lineTo(other.x, other.y);
                ctx2d.strokeStyle = `rgba(255, 255, 255, ${0.06 * (1 - distance / 130)})`;
                ctx2d.lineWidth = 0.5;
                ctx2d.stroke();
              }
            });
          });

          animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
          cancelAnimationFrame(animationId);
          window.removeEventListener('resize', handleResize);
          ctx.revert();
        };
      }
    }

    return () => ctx.revert();
  }, []);

  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* React Bits — Aurora Background */}
      <Aurora />

      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.5 }}
      />

      {/* Dark radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_hsl(0,0%,4%)_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-primary text-lg mb-4 font-medium tracking-widest uppercase text-sm">
              Hello, I'm
            </p>
            <h1
              ref={nameRef}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-['Space_Grotesk'] text-foreground mb-4 leading-tight flex flex-wrap"
            >
              <Typewriter text="Apurva " speed={100} delay={400} cursor={false} />
              <span className="text-gradient">
                <Typewriter text="Singh" speed={120} delay={1200} />
              </span>
            </h1>
            <p
              ref={titleRef}
              className="text-base sm:text-lg text-muted-foreground mb-6 font-light tracking-wide"
            >
              AI/ML Engineer &nbsp;·&nbsp; Generative AI &nbsp;·&nbsp; LLM Fine-Tuning &nbsp;·&nbsp; MLOps
            </p>
            <p
              ref={descRef}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Production-focused AI/ML Engineer building scalable AI systems in fintech.
              Specialising in end-to-end LLM pipelines, multi-agent AI platforms, eKYC
              computer vision, and MLOps on AWS/Docker infrastructure.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                id="hero-cta-projects"
                onClick={handleScrollToProjects}
                className="magnetic-btn px-8 py-3.5 bg-primary text-white rounded-full font-medium hover:shadow-xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View My Projects
                <ArrowDown size={18} />
              </button>
              <a
                id="hero-cta-contact"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="magnetic-btn px-8 py-3.5 border border-border rounded-full font-medium hover:bg-muted hover:border-primary/40 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              <a
                href="https://github.com/Apurvanaruka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 hover:text-primary border border-border/50 hover:border-primary/40 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/apurva-naruka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 hover:text-primary border border-border/50 hover:border-primary/40 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:apurvanaruka1@gmail.com"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 hover:text-primary border border-border/50 hover:border-primary/40 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content — Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div ref={imageRef} className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Violet glow ring */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />

              {/* Image container */}
              <div className="relative w-full h-full animate-morph overflow-hidden border-2 border-primary/20">
                <img
                  src="/profile.webp"
                  alt="Apurva Singh - AI/ML Engineer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 glass rounded-full text-sm font-medium animate-float">
                <span className="text-primary">Python</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-4 py-2 glass rounded-full text-sm font-medium animate-float"
                style={{ animationDelay: '1s' }}
              >
                <span className="text-primary">TensorFlow</span>
              </div>
              <div
                className="absolute top-1/2 -right-8 px-4 py-2 glass rounded-full text-sm font-medium animate-float"
                style={{ animationDelay: '2s' }}
              >
                <span className="text-primary">PyTorch</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TechTicker — scrolling tech stack */}
      <div className="absolute bottom-20 left-0 right-0">
        <TechTicker />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown className="text-muted-foreground" size={22} />
      </div>
    </section>
  );
}
