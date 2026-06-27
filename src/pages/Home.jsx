import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { client, urlFor } from '../client';

const Home = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "profile"][0]';
    client.fetch(query)
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">Loading...</div>;
  }

  // Fallback data if no profile is set in Sanity yet
  const name = profile?.name || 'Rusydi Ardani';
  const roles = profile?.roles?.join(' • ') || 'Informatics Engineering • Mobile Developer • AI Enthusiast';

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hello Block for Mobile (Visible only on small screens) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:hidden mb-12 text-center"
      >
        <div className="inline-block px-4 py-2 bg-[var(--color-neo-accent)] text-white font-bold border-2 border-[var(--border-color)] neo-shadow-sm rotate-[-2deg]">
          Hello, I'm {name}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* TEXT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8 order-2 lg:order-1 text-center lg:text-left"
        >
          {/* Hello Block for Desktop (Hidden on small screens) */}
          <div className="hidden lg:inline-block px-4 py-2 bg-[var(--color-neo-accent)] text-white font-bold border-2 border-[var(--border-color)] neo-shadow-sm rotate-[-2deg]">
            Hello, I'm {name}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter">
            I build <span className="text-[var(--color-neo-secondary)] underline decoration-8 underline-offset-4 decoration-[var(--color-neo-primary)]">things</span> for the web and mobile.
          </h1>
          
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto lg:mx-0">
            {roles}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <NavLink to="/projects" className="w-full sm:w-auto text-center px-8 py-4 bg-[var(--color-neo-primary)] text-black font-bold text-xl border-4 border-[var(--border-color)] neo-shadow hover:neo-shadow-active transition-all uppercase">
              View Projects
            </NavLink>
            <NavLink to="/contact" className="w-full sm:w-auto text-center px-8 py-4 bg-white text-black dark:bg-[var(--color-neo-dark-card)] dark:text-white font-bold text-xl border-4 border-[var(--border-color)] neo-shadow hover:neo-shadow-active transition-all uppercase">
              Contact Me
            </NavLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-12 lg:mt-0 w-64 sm:w-80 lg:w-full max-w-sm mx-auto lg:max-w-none order-1 lg:order-2"
        >
          <div className="absolute inset-0 bg-[var(--color-neo-primary)] rounded-full translate-x-4 translate-y-4 border-4 border-[var(--border-color)]"></div>
          <div className="relative aspect-square bg-[var(--color-neo-secondary)] rounded-full border-4 border-[var(--border-color)] overflow-hidden flex items-center justify-center">
            {profile?.profileImage ? (
              <img src={urlFor(profile.profileImage).url()} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-[12rem]">👨‍💻</span>
            )}
          </div>
          
          {/* Floating badges */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute top-4 -left-4 md:top-10 md:-left-10 bg-white dark:bg-[#1A1A1A] border-4 border-[var(--border-color)] p-2 md:p-4 font-bold text-base md:text-xl rotate-12 neo-shadow"
          >
            React
          </motion.div>
          
          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute bottom-4 -right-4 md:bottom-10 md:-right-10 bg-[var(--color-neo-accent)] text-white border-4 border-[var(--border-color)] p-2 md:p-4 font-bold text-base md:text-xl -rotate-6 neo-shadow"
          >
            Kotlin
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
