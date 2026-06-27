import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../client';
import ProjectCard from '../components/ProjectCard';
import { projects as dummyProjects } from '../data/projects'; // Fallback

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = '*[_type == "project"] | order(_createdAt desc)';
    client.fetch(query)
      .then((data) => {
        // If data is empty, use dummyProjects
        if (data.length > 0) {
          // Map sanity data to our component's expected format
          const formatted = data.map(p => ({
            id: p._id,
            title: p.title,
            description: p.description,
            image: p.image ? urlFor(p.image).url() : 'https://placehold.co/600x400/FFD60A/111111?text=No+Image',
            category: p.category || 'Other',
            techStack: p.techStack || [],
            githubUrl: p.githubUrl || '#',
            liveUrl: p.liveUrl || '#'
          }));
          setProjectsData(formatted);
        } else {
          setProjectsData(dummyProjects);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        setProjectsData(dummyProjects);
        setLoading(false);
      });
  }, []);

  const categories = ['All', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 inline-block bg-[var(--color-neo-primary)] text-black px-4 py-2 border-4 border-[var(--border-color)] neo-shadow-sm -rotate-1">
          Featured Projects
        </h2>
        <p className="text-xl font-medium mt-4 max-w-2xl">
          Here are some of the projects I've worked on. Ranging from mobile applications to complex web dashboards.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 font-bold uppercase border-4 border-[var(--border-color)] transition-all ${
              filter === cat 
                ? 'bg-[var(--color-neo-accent)] text-white neo-shadow-active translate-y-[4px] translate-x-[4px]' 
                : 'bg-white text-black dark:bg-[#1A1A1A] dark:text-white neo-shadow-sm hover:neo-shadow-active hover:translate-y-[2px] hover:translate-x-[2px]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default Projects;
