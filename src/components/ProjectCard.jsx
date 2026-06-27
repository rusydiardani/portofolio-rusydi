import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <div className="border-4 border-[var(--border-color)] bg-[var(--card-bg)] flex flex-col h-full neo-shadow hover:neo-shadow-active transition-all group">
      <div className="border-b-4 border-[var(--border-color)] overflow-hidden relative h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-[var(--color-neo-primary)] text-black font-bold px-2 py-1 border-2 border-[var(--border-color)] text-xs uppercase">
          {project.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold uppercase mb-2">{project.title}</h3>
        <p className="font-medium flex-grow mb-6 text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="bg-gray-100 dark:bg-[#333] px-2 py-1 text-sm font-bold border-2 border-[var(--border-color)]">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-auto">
          <a 
            href={project.githubUrl} 
            className="flex items-center justify-center gap-2 bg-black text-white dark:bg-white dark:text-black py-2 font-bold uppercase border-2 border-black dark:border-white hover:bg-[var(--color-neo-accent)] hover:text-white hover:border-[var(--border-color)] transition-all"
          >
            <FiGithub /> GitHub
          </a>
          <a 
            href={project.liveUrl} 
            className="flex items-center justify-center gap-2 bg-[var(--color-neo-secondary)] text-white py-2 font-bold uppercase border-2 border-[var(--border-color)] hover:bg-[var(--color-neo-primary)] hover:text-black transition-all"
          >
            <FiExternalLink /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
