import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Phone, Mail, Calendar, Download } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

const infoCards = [
  { icon: MapPin,     label: 'Location',       value: 'Andheri, Mumbai, India' },
  { icon: Phone,      label: 'Phone',           value: '+91 9602119226' },
  { icon: Mail,       label: 'Email',           value: 'apurvanaruka1@gmail.com' },
  { icon: Calendar,   label: 'Date of Birth',   value: 'July 1, 2002' },
];

const stats = [
  { value: '1+',  label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '5+',  label: 'Awards & Honours' },
];

export default function About() {
  const sectionRef    = useRef<HTMLDivElement>(null);
  const headingRef    = useRef<HTMLHeadingElement>(null);
  const cardsRef      = useRef<HTMLDivElement>(null);
  const textRef       = useRef<HTMLDivElement>(null);
  const statsRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading slide-in
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -60, filter: 'blur(6px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      // Info cards stagger
      const cards = cardsRef.current?.querySelectorAll('.info-card');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 30, scale: 0.92 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 85%' } }
        );
      }

      // Text reveal
      gsap.fromTo(textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: textRef.current, start: 'top 85%' } }
      );

      // Stats counter pop
      const statEls = statsRef.current?.querySelectorAll('.stat-item');
      if (statEls) {
        gsap.fromTo(statEls,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.12, ease: 'back.out(2)',
            scrollTrigger: { trigger: statsRef.current, start: 'top 90%' } }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16">
          <h2 ref={headingRef} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-foreground">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info Cards */}
          <div ref={cardsRef} className="grid grid-cols-2 gap-4">
            {infoCards.map((card) => (
              <SpotlightCard
                key={card.label}
                spotlightColor="rgba(168, 85, 247, 0.10)"
                className="info-card group relative p-6 glass rounded-2xl cursor-default"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <card.icon className="text-primary" size={22} />
                  </div>
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">{card.label}</p>
                  <p className="text-foreground font-medium text-sm leading-snug">{card.value}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* About Text */}
          <div ref={textRef} className="space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Production-focused AI/ML Engineer with hands-on experience designing, deploying,
              and monitoring scalable AI systems in <span className="text-foreground font-medium">fintech and enterprise environments</span>.
              Specialising in end-to-end AI pipeline architecture on Linux/AWS infrastructure —
              from on-premise LLM hardware deployment to multi-agent AI platforms serving live
              production traffic.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I've built production eKYC systems (PAN/Aadhaar OCR, face match, liveness detection),
              architected multi-agent AI platforms with MCP & A2A protocols, and fine-tuned LLMs
              using <span className="text-foreground font-medium">LoRA/QLoRA</span> for domain-specific inference with
              observability via Langfuse, Grafana, and Sentry.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently at <span className="text-primary font-medium">Unlock Technologies</span>,
              I deliver compliant, high-availability AI microservices that reduce manual operational
              effort and drive measurable business impact in fintech.
            </p>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="stat-item text-center p-4 glass rounded-xl">
                  <p className="text-3xl font-bold text-gradient">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            {/* View Resume */}
            <div className="pt-2">
              <a
                href="https://docs.google.com/document/d/1uwSpzLlnMB9QCneW5IQ0oRAw3d-z87lJLmjPRer417E/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-muted hover:bg-primary hover:text-white rounded-full font-medium transition-all duration-300 border border-border/50 hover:border-primary"
              >
                <Download size={18} />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
