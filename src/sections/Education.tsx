import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Trophy, Medal, Star, BadgeCheck, Lightbulb } from 'lucide-react';
import SpotlightCard from '../components/SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: 'B.Tech — Artificial Intelligence & Data Science',
    field: 'Artificial Intelligence & Data Science',
    institution: 'Modern Institute of Technology and Research Center, Alwar (Rajasthan)',
    period: '2021 – Jun 2025',
    grade: 'CGPA: 8.6 / 10',
    icon: GraduationCap,
  },
  {
    degree: 'Senior Secondary (Class XII) — PCM',
    field: 'Physics, Chemistry, Mathematics',
    institution: 'Gyandeep Sr. Sec. School, Alwar (RBSE)',
    period: '2020 – Jun 2021',
    grade: 'Percentage: 95.20%',
    icon: GraduationCap,
  },
];

const certifications = [
  { title: 'Claude with Amazon Bedrock', issuer: 'Anthropic', year: '2026', ViewUrl: null },
  { title: 'Introduction to Agentic AI', issuer: 'Anthropic', year: '2026', ViewUrl: 'https://View.skilljar.com/c/u5o25rrton4u' },
  { title: 'Model Context Protocol: Advanced', issuer: 'Anthropic', year: '2026', ViewUrl: 'https://View.skilljar.com/c/jfscp6ddukjk' },
  { title: 'Deep Learning & NLP', issuer: 'Skill Ocean', year: '2024', ViewUrl: null },
  { title: 'Introduction to R', issuer: 'Great Learning', year: '2022', ViewUrl: null },
];

const achievements = [
  {
    title: 'Smart India Hackathon 2024',
    description: 'National Finalist — presented an AI-based solution to the Ministry of Education; ranked in top 3% nationally.',
    icon: Trophy,
    color: '#fbbf24',
  },
  {
    title: 'IDE Bootcamp Phase II',
    description: '1st Place — led a team project on LLM integration and won 1st prize in a national innovation challenge (Jun 2024).',
    icon: Medal,
    color: '#ec4899',
  },
  {
    title: 'Smart India Hackathon 2023',
    description: 'National Finalist — top 5% nationwide with an AI-driven project.',
    icon: Award,
    color: '#a855f7',
  },
  {
    title: 'Innovation Design & Entrepreneurship',
    description: 'Phase 2 Winner — recognized for problem-solving, ideation, and business thinking in a competitive national environment (2024).',
    icon: Lightbulb,
    color: '#34d399',
  },
  {
    title: 'MITRC Internal Project Showcase',
    description: 'Presented the Cosmos AI project (satellite data analysis); recognized for innovative application of ML to space data.',
    icon: Star,
    color: '#f472b6',
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      const eduCards = educationRef.current?.querySelectorAll('.education-card');
      if (eduCards) {
        eduCards.forEach((card, i) => {
          gsap.fromTo(card,
            { opacity: 0, x: -50 },
            {
              opacity: 1, x: 0, duration: 0.6, delay: i * 0.15, ease: 'power3.out',
              scrollTrigger: { trigger: card, start: 'top 85%' }
            }
          );
        });
      }

      const certCards = certsRef.current?.querySelectorAll('.cert-card');
      if (certCards) {
        gsap.fromTo(certCards,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.07, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: certsRef.current, start: 'top 88%' }
          }
        );
      }

      const achCards = achievementsRef.current?.querySelectorAll('.achievement-card');
      if (achCards) {
        achCards.forEach((card, i) => {
          gsap.fromTo(card,
            { opacity: 0, y: 30, rotateX: 12 },
            {
              opacity: 1, y: 0, rotateX: 0, duration: 0.55, delay: i * 0.09, ease: 'power3.out',
              scrollTrigger: { trigger: card, start: 'top 90%' }
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/4 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-foreground">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background, certifications, and recognition along the journey
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary to-pink-500 rounded-full mx-auto" />
        </div>

        {/* Education + Certifications row */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">

          {/* Education */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
              <GraduationCap className="text-primary" size={24} /> Education
            </h3>
            <div ref={educationRef} className="space-y-5">
              {education.map((edu) => (
                <SpotlightCard
                  key={edu.degree}
                  spotlightColor="rgba(168, 85, 247, 0.08)"
                  className="education-card group relative p-6 glass rounded-2xl hover:scale-[1.015] transition-all duration-300"
                >
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <edu.icon className="text-primary" size={26} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-foreground leading-snug">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                      <div className="flex items-center gap-3 mt-2.5 text-xs">
                        <span className="text-muted-foreground">{edu.period}</span>
                        <span className="px-2.5 py-0.5 bg-primary/10 rounded-full text-primary font-medium">{edu.grade}</span>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
              <BadgeCheck className="text-primary" size={24} /> Certifications
            </h3>
            <div ref={certsRef} className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="cert-card flex items-center justify-between p-4 glass rounded-xl hover:scale-[1.015] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 group-hover:shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-shadow" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">{cert.title}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {cert.ViewUrl && (
                      <a
                        href={cert.ViewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-200 whitespace-nowrap"
                        title="View certificate"
                      >
                        View ↗
                      </a>
                    )}
                    <span className="text-xs text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="glow-line mb-14" />

        {/* Achievements */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Trophy className="text-primary" size={24} /> Achievements & Activities
          </h3>
          <div ref={achievementsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievements.map((ach) => (
              <SpotlightCard
                key={ach.title}
                spotlightColor={`${ach.color}18`}
                className="achievement-card group relative p-5 glass rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative z-10">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${ach.color}18` }}
                  >
                    <ach.icon size={22} style={{ color: ach.color }} />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1.5">{ach.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{ach.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
