import { Heart, ArrowUp } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="text-2xl font-bold font-['Space_Grotesk'] text-gradient mb-6"
          >
            Apurva Singh
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-border/50 mb-8" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Apurva Singh
            </p>
            <span className="hidden sm:inline">•</span>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={handleScrollToTop}
            className="mt-8 p-3 glass rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp
              size={20}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
