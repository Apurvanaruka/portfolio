import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Calendar, Download } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const infoCards = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mumbai, India',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(+91) 9602119226',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'apurvanaruka1@gmail.com',
  },
  {
    icon: Calendar,
    label: 'Date of Birth',
    value: 'July 1, 2002',
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.querySelectorAll('.info-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30, rotateY: -15 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Text animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardElement: HTMLDivElement) => {
    const rect = cardElement.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16">
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-foreground"
          >
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info Cards Grid */}
          <div ref={cardsRef} className="grid grid-cols-2 gap-4">
            {infoCards.map((card) => (
              <div
                key={card.label}
                className="info-card group relative p-6 glass rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                  transition: 'transform 0.1s ease-out',
                }}
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="text-primary" size={24} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{card.label}</p>
                  <p className="text-foreground font-medium">{card.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* About Text */}
          <div ref={textRef} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              B.Tech graduate and AI/ML Engineer with 1 year of hands-on experience in the fintech domain.
              I specialize in building intelligent, scalable systems using Python, machine learning,
              and artificial intelligence to solve real-world problems with measurable impact.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in AI/ML began during my undergraduate studies and evolved into real-world
              production experience. I’ve worked across natural language processing and computer vision,
              designing models that learn, adapt, and integrate seamlessly into business workflows.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working as a Software Developer at Unlock Technologies, I focus on AI-driven
              fintech solutions including eKYC systems, AI agent orchestration, and secure application
              deployment. I have strong hands-on experience with AWS services for building, deploying,
              and scaling ML-powered applications in production environments.
            </p>


            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">1+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">3+</p>
                <p className="text-sm text-muted-foreground mt-1">Awards Won</p>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="pt-6">
              <button
                onClick={() => {
                  // Create a simple resume PDF download
                  const link = document.createElement('a');
                  link.href = '/aimlengineer.pdf';
                  link.download = 'Apurva_Singh_Resume.pdf';
                  link.click();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full font-medium transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
