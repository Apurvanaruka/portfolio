import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Enterprice Brainstack',
    description:
      'Enterprice Brainstack is a SAAS product which allow users to build there own AI agent with custom knowledgebase and mcp servers. and provide iframe to other websites',
    image: '/project-ecommerce.jpg',
    tags: ['FastAPI', 'Langchain', 'React', 'Tailwind CSS', 'JWT', 'Framer Motion'],
    github: 'https://github.com/Apurvanaruka',
    demo: 'https://enterprisebrainstack.com/',
    featured: true,
  },
  {
    title: 'The Wall Predictors',
    description:
      'The Wall Predictors is a Porfolio website to show there work and get new clients',
    image: '/project-ecommerce.jpg',
    tags: ['React', 'Tailwind CSS', 'JWT', 'Framer Motion'],
    github: 'https://github.com/Apurvanaruka',
    demo: 'https://thewallpredictors.apurvanaruka.in',
    featured: true,
  },
  {
    title: 'B2B Ecommerce Website',
    description:
      'A comprehensive B2B ecommerce platform with secure JWT authentication, role-based access control, product catalog management, cart and wishlist system, order management, and payment integration. Features an admin panel for managing users, products, orders, and payments.',
    image: '/project-ecommerce.jpg',
    tags: ['React', 'FastAPI', 'Tailwind CSS', 'PostgreSQL', 'JWT', 'Framer Motion'],
    github: 'https://github.com/Apurvanaruka',
    demo: '#',
    featured: true,
  },
  {
    title: 'Cosmos.ai – Satellite Tracker',
    description:
      'Real-time satellite tracking application integrating data from NASA and ESA. Features interactive dashboards showing orbits, positions, and trajectories. Uses AI algorithms to predict solar storms and CMEs, with alerts system for real-time events.',
    image: '/project-cosmos.jpg',
    tags: ['Python', 'TensorFlow', 'React', 'NASA API', 'Data Visualization'],
    github: 'https://github.com/Apurvanaruka',
    demo: '#',
    featured: true,
  },
  {
    title: 'YouTube Clone',
    description:
      'A fully functional YouTube clone with Google OAuth2 authentication, video search and playback using YouTube Data API, video details view, comments, like/dislike functionality, and channel information. Built with Redux Toolkit for state management.',
    image: '/project-youtube.jpg',
    tags: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Google OAuth2', 'YouTube API'],
    github: 'https://github.com/Apurvanaruka',
    demo: '#',
    featured: false,
  },
  {
    title: 'UPI Statement Analyzer',
    description:
      'PDF parser tool that extracts transaction data from UPI bank statements (PhonePe, GPay). Uses OCR and pattern matching to parse sender, receiver, amount, and timestamps from unstructured financial data. Provides interactive dashboards with transaction trends and category-wise spending analysis.',
    image: '/project-upi.jpg',
    tags: ['Python', 'OCR', 'Pandas', 'Data Visualization', 'PDF Parsing'],
    github: 'https://github.com/Apurvanaruka',
    demo: '#',
    featured: false,
  },
  {
    title: 'WhatChat – Chat Analysis',
    description:
      'WhatsApp chat analysis tool that parses group and individual chats to generate detailed analytics. Features graphical visualization of message counts, active users, word clouds, and integrates Gemini API to generate chat summaries and insights.',
    image: '/project-whatchat.jpg',
    tags: ['Python', 'NLP', 'Gemini API', 'Data Visualization', 'Streamlit'],
    github: 'https://github.com/Apurvanaruka',
    demo: '#',
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Project cards animation
      const cards = gridRef.current?.querySelectorAll('.project-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 90%',
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, personal projects, and contributions to the tech community
          </p>
          <div className="mt-4 w-20 h-1 bg-primary rounded-full mx-auto" />
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card group relative ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-full glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Featured
                    </div>
                  )}

                  {/* Hover Actions */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-4 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View Project Link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all"
                  >
                    View Project
                    <ArrowRight size={16} />
                  </a>
                </div>

                {/* Border glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-primary/30 transition-opacity duration-300 pointer-events-none ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Apurvanaruka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full font-medium transition-all duration-300"
          >
            <Github size={18} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
