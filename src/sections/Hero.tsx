import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

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
      // Timeline for entrance animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: 'back.out(1.7)' },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          '-=0.4'
        );
    }, heroRef);

    // Particle animation
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx2d = canvas.getContext('2d');
      if (ctx2d) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
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

            ctx2d.beginPath();
            ctx2d.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx2d.fillStyle = 'rgba(56, 189, 248, 0.5)';
            ctx2d.fill();

            // Draw connections
            particles.slice(i + 1).forEach((other) => {
              const dx = particle.x - other.x;
              const dy = particle.y - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 150) {
                ctx2d.beginPath();
                ctx2d.moveTo(particle.x, particle.y);
                ctx2d.lineTo(other.x, other.y);
                ctx2d.strokeStyle = `rgba(56, 189, 248, ${0.2 * (1 - distance / 150)})`;
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
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-primary text-lg mb-4 font-medium">Hello, I'm</p>
            <h1
              ref={nameRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] text-foreground mb-4"
            >
              Apurva <span className="text-gradient">Singh</span>
            </h1>
            <p
              ref={titleRef}
              className="text-xl sm:text-2xl text-muted-foreground mb-6"
            >
              AI/ML Engineer
            </p>
            <p
              ref={descRef}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I build intelligent systems that bridge the gap between complex data
              and human interaction. Specializing in Machine Learning, Deep Learning,
              NLP, and Computer Vision.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScrollToProjects}
                className="magnetic-btn px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View My Projects
                <ArrowDown size={18} />
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="magnetic-btn px-8 py-3 border border-border rounded-full font-medium hover:bg-muted transition-all duration-300"
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
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/apurva-naruka"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:apurvanaruka1@gmail.com"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div
              ref={imageRef}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
              
              {/* Image Container */}
              <div className="relative w-full h-full animate-morph overflow-hidden border-2 border-primary/30">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
}
