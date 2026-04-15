import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Software Developer (AI/ML)',
    company: 'Unlock Technologies Pvt. Ltd.',
    location: 'Mumbai, India',
    period: 'Jul 2025 – Present',
    type: 'Full-time',
    description: [
      'Designed and deployed an end-to-end eKYC pipeline (PAN/Aadhaar OCR, face match, liveness detection, Aadhaar masking) for Digikhata, accelerating vKYC completion.',
      'Architected AI Agent Studio — a multi-agent AI platform with MCP servers, Agent-to-Agent (A2A) communication, and custom knowledge base integration.',
      'Fine-tuned LLMs using LoRA/QLoRA for AI agent orchestration, RAG pipelines, and domain-specific inference.',
      'Deployed AI microservices on AWS and on-premise Docker containers ensuring fintech privacy & security compliance.',
      'Implemented production-grade observability: Langfuse (LLM tracing), Grafana (infra dashboards), Sentry (error tracking).',
    ],
  },
  {
    title: 'AI Engineer Intern',
    company: 'Raddical Innovation Group',
    location: 'Remote, Finland',
    period: 'Sep 2024 – Mar 2025',
    type: 'Internship',
    description: [
      'Fine-tuned deep learning NLP models (BERT, RoBERTa) for text classification, achieving a 20% accuracy improvement over baseline.',
      'Integrated transformer-based models into production pipelines using Python and Hugging Face Transformers.',
      'Delivered internal training on NLP workflows, data annotation best practices, and model evaluation frameworks.',
      'Collaborated in Agile/Scrum environment with cross-functional teams to ship AI-driven product features.',
    ],
  },
  {
    title: 'Deep Learning & NLP Intern',
    company: 'Skill Oceans',
    location: 'Alwar, Rajasthan',
    period: 'Jun 2024 – Aug 2024',
    type: 'Internship',
    description: [
      'Built and trained neural networks using TensorFlow and PyTorch; developed text preprocessing pipelines (tokenization, stemming, embeddings).',
      'Completed capstone on sentiment analysis using LSTM — achieved 82% validation accuracy.',
      'Implemented text classification and Named Entity Recognition (NER) using NLTK and spaCy.',
    ],
  },
];

export default function Experience() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const headingRef  = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
      );

      if (lineRef.current) {
        gsap.fromTo(lineRef.current,
          { scaleY: 0 },
          { scaleY: 1, duration: 1.5, ease: 'power2.inOut',
            scrollTrigger: { trigger: timelineRef.current, start: 'top 80%', end: 'bottom 20%', scrub: 1 } }
        );
      }

      const cards = timelineRef.current?.querySelectorAll('.experience-card');
      if (cards) {
        cards.forEach((card, index) => {
          const isLeft = index % 2 === 0;
          gsap.fromTo(card,
            { opacity: 0, x: isLeft ? -80 : 80, filter: 'blur(4px)' },
            { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: card, start: 'top 85%' } }
          );
        });
      }

      const nodes = timelineRef.current?.querySelectorAll('.timeline-node');
      if (nodes) {
        nodes.forEach((node, index) => {
          gsap.fromTo(node,
            { scale: 0 },
            { scale: 1, duration: 0.4, delay: index * 0.2, ease: 'back.out(2)',
              scrollTrigger: { trigger: node, start: 'top 85%' } }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-foreground">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Building production AI systems across fintech, enterprise, and research environments
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Center line — Desktop */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 timeline-line origin-top"
            style={{ transform: 'translateX(-50%)' }}
          />
          {/* Mobile line */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-0.5 timeline-line" />

          <div className="space-y-12 lg:space-y-0">
            {experiences.map((exp, index) => (
              <div key={exp.company} className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${index !== 0 ? 'lg:mt-12' : ''}`}>
                {/* Timeline Node */}
                <div
                  className={`timeline-node absolute left-4 lg:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 shadow-[0_0_12px_rgba(168,85,247,0.6)] ${
                    index === 0 ? 'top-0' : 'top-0 lg:top-8'
                  }`}
                  style={{ transform: 'translateX(-50%)' }}
                />

                {/* Card */}
                <div className={`experience-card ml-12 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:col-start-2 lg:pl-12'
                }`}>
                  <SpotlightCard
                    spotlightColor="rgba(168, 85, 247, 0.08)"
                    className="group relative p-6 glass rounded-2xl hover:scale-[1.015] transition-all duration-300"
                  >
                    <div className="relative z-10">
                      {/* Header */}
                      <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="text-primary" size={22} />
                        </div>
                        <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                          <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                          <p className="text-primary font-medium text-sm">{exp.company}</p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className={`flex flex-wrap gap-3 mb-4 text-xs text-muted-foreground ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <span className="flex items-center gap-1"><Calendar size={12} />{exp.period}</span>
                        <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
                        <span className="px-2 py-0.5 bg-primary/10 rounded-full text-primary font-medium">{exp.type}</span>
                      </div>

                      {/* Description */}
                      <ul className={`space-y-1.5 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                            {index % 2 !== 0 && <span className="text-primary mt-1.5 shrink-0">▸</span>}
                            <span>{item}</span>
                            {index % 2 === 0 && <span className="text-primary mt-1.5 shrink-0 lg:hidden">▸</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </SpotlightCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
