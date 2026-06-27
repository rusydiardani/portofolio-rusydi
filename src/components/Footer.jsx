const Footer = () => {
  return (
    <footer className="border-t-4 border-[var(--border-color)] bg-[var(--card-bg)] py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold tracking-tighter uppercase px-3 py-1 border-2 border-[var(--border-color)] bg-[var(--color-neo-accent)] text-white neo-shadow-sm">
          MyPortfolio.
        </div>
        
        <p className="font-bold text-sm md:text-base text-center md:text-left">
          © {new Date().getFullYear()} Rusydi Ardani. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/rusydiardani" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 border-2 border-[var(--border-color)] bg-[var(--color-neo-secondary)] text-white font-bold text-sm uppercase hover:neo-shadow-active neo-shadow-sm transition-all">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/rusydiardani" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 border-2 border-[var(--border-color)] bg-[var(--color-neo-primary)] text-black font-bold text-sm uppercase hover:neo-shadow-active neo-shadow-sm transition-all">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
