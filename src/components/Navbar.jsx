import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[var(--bg-color)] border-b-4 border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold tracking-tighter uppercase p-2 border-2 border-[var(--border-color)] bg-[var(--color-neo-accent)] text-white neo-shadow-sm hover:neo-shadow-active transition-all">
              MyPortfolio.
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-bold uppercase transition-all px-3 py-1 ${
                    isActive 
                      ? 'border-2 border-[var(--border-color)] bg-[var(--color-neo-primary)] text-black neo-shadow-sm' 
                      : 'hover:bg-[var(--color-neo-secondary)] hover:text-white hover:border-2 hover:border-[var(--border-color)]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border-2 border-[var(--border-color)] bg-[var(--color-neo-primary)] text-black neo-shadow-sm"
            >
              {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-[var(--border-color)] bg-[var(--card-bg)] absolute w-full left-0 neo-shadow">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-xl font-bold uppercase block p-3 border-2 border-[var(--border-color)] transition-all ${
                    isActive
                      ? 'bg-[var(--color-neo-primary)] text-black neo-shadow-sm'
                      : 'bg-white text-black dark:bg-[#1A1A1A] dark:text-white hover:neo-shadow-sm'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
