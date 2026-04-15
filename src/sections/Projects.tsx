import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowRight, Zap } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'AI Agent Studio',
    description:
      'Full-stack SaaS platform for building & deploying multi-agent AI systems with MCP servers, Agent-to-Agent (A2A) communication, and custom knowledge base integration via RAG. Features an embeddable chatbot delivered via a single JS snippet. Observability via Langfuse, Grafana, and Sentry.',
    image: '/project-ecommerce.jpg',
    tags: ['FastAPI', 'LangChain', 'LangGraph', 'React', 'Docker', 'AWS', 'Langfuse', 'RAG'],
    github: 'https://github.com/Apurvanaruka',
    demo: 'https://enterprisebrainstack.com/',
    featured: true,
    badge: 'Production',
  },
  {
    title: 'eKYC Verification System',
    description:
      'End-to-end eKYC pipeline for Digikhata vKYC: PAN & Aadhaar OCR using computer vision, real-time face match with confidence scoring, liveness detection against spoofing, and fuzzy name-matching. UIDAI-compliant Aadhaar masking module handling live production traffic.',
    image: '/project-upi.jpg',
    tags: ['Python', 'Computer Vision', 'OCR', 'FastAPI', 'Docker', 'AWS'],
    github: 'https://github.com/Apurvanaruka',
    demo: '#',
    featured: true,
    badge: 'Production',
  },
  {
    title: 'The Wall Predictors',
    description:
      'Portfolio website for a sports prediction firm, showcasing their track record and enabling client acquisition. Built with React and Framer Motion for a modern, animated UI.',
    image: '/project-ecommerce.jpg',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/Apurvanaruka',
    demo: 'https://thewallpredictors.apurvanaruka.in',
    featured: false,
    badge: 'Live',
  },
  {
    title: 'B2B E-Commerce Platform',
    description:
      'Comprehensive B2B platform with JWT authentication, role-based access control, cart/wishlist, order management, and payment integration. Admin panel with real-time notifications and modern UI/UX.',
    image: '/project-ecommerce.jpg',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/Apurvanaruka',
    demo: '#',
    featured: false,
    badge: null,
  },
  {
    title: 'Cosmos.ai – Satellite Tracker',
    description:
      'Real-time satellite tracking integrating NASA & ESA data. Features interactive orbit dashboards and an AI model to predict solar storms and CME events with real-time alert system.',
    image: '/project-cosmos.jpg',
    tags: ['Python', 'TensorFlow', 'React', 'NASA API', 'Data Visualization'],
    github: 'https://github.com/Apurvanaruka',
    demo: '#',
    featured: false,
    badge: null,
  },
  {
    title: 'WhatChat – Chat Analyser',
    description:
      'WhatsApp chat analysis tool generating detailed analytics: message counts, active users, word clouds, and Gemini API-powered chat summaries delivered via a clean Streamlit dashboard.',
    image: '/project-whatchat.jpg',
    tags: ['Python', 'NLP', 'Gemini API', 'Streamlit', 'Data Visualization'],
    github: 'https://github.com/Apurvanaruka',
    demo: '#',
    featured: false,
    badge: null,
  },
];

const badgeColor: Record<string, string> = {
  Production: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  Live: 'bg-primary/20 text-primary border-primary/30',
};

export default function Projects() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const headingRef  = useRef<HTMLDivElement>(null);
  const gridRef     = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      const cards = gridRef.current?.querySelectorAll('.project-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(card,
            { opacity: 0, y: 50, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, delay: index * 0.08,
              ease: 'power3.out',
              scrollTrigger: { trigger: card, start: 'top 92%' } }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Production AI systems, SaaS platforms, and open-source contributions
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full mx-auto" />
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <SpotlightCard
              key={project.title}
              spotlightColor="rgba(168, 85, 247, 0.09)"
              className="project-card group relative glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-full">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-80" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {project.badge && (
                      <span className={`px-2.5 py-1 text-xs font-medium rounded-full border backdrop-blur-sm ${badgeColor[project.badge]}`}>
                        <Zap size={10} className="inline mr-1" />
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Hover actions */}
                  <div className={`absolute inset-0 flex items-center justify-center gap-4 bg-background/75 backdrop-blur-sm transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-muted/60 border border-border/40 rounded-full text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 text-xs bg-muted rounded-full text-muted-foreground">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all duration-200 font-medium"
                  >
                    View Project <ArrowRight size={14} />
                  </a>
                </div>

                {/* Border glow */}
                <div className={`absolute inset-0 rounded-2xl border border-primary/20 transition-opacity duration-300 pointer-events-none ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Apurvanaruka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-muted hover:bg-primary hover:text-white rounded-full font-medium transition-all duration-300 border border-border/50 hover:border-primary"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
