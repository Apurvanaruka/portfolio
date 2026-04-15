/**
 * TechTicker - React Bits style infinite scrolling marquee
 * Shows the tech stack as a continuous scrolling ticker strip.
 */

const techStack = [
  'Python', 'PyTorch', 'TensorFlow', 'LangChain', 'LangGraph',
  'LlamaIndex', 'vLLM', 'Hugging Face', 'LoRA / QLoRA', 'RAG',
  'AI Agents', 'MCP', 'Docker', 'AWS', 'FastAPI', 'React',
  'Qdrant', 'Pinecone', 'Grafana', 'Langfuse', 'Kubernetes',
  'MLflow', 'Diffusers', 'Sentry', 'CI/CD', 'PostgreSQL',
];

interface TechTickerProps {
  className?: string;
}

export default function TechTicker({ className = '' }: TechTickerProps) {
  // Double the list so the loop is seamless
  const doubled = [...techStack, ...techStack];

  return (
    <div className={`tech-ticker-wrapper overflow-hidden py-4 ${className}`}>
      <div className="tech-ticker-track flex gap-6 w-max">
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="tech-ticker-item flex-shrink-0 px-4 py-1.5 glass rounded-full text-sm text-muted-foreground border border-border/40 whitespace-nowrap hover:text-primary hover:border-primary/40 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
