import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client } from '../client';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultExperiences = [
    {
      id: 1,
      title: "Mobile App Developer Intern",
      organization: "Tech Solutions Inc.",
      period: "Jun 2024 - Present",
      description: "Developing cross-platform mobile applications using Flutter. Collaborating with UI/UX designers to implement pixel-perfect designs.",
      type: "Work"
    },
    {
      id: 2,
      title: "Head of Technology",
      organization: "University Computer Science Club",
      period: "Sep 2023 - May 2024",
      description: "Led a team of 15 students in developing open-source tools for the university. Organized coding bootcamps and hackathons.",
      type: "Organization"
    },
    {
      id: 3,
      title: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      period: "Jan 2023",
      description: "Earned certification demonstrating foundational knowledge of AWS cloud services and security.",
      type: "Certification"
    }
  ];

  useEffect(() => {
    const query = '*[_type == "experience"] | order(order desc, _createdAt desc)';
    client.fetch(query)
      .then((data) => {
        if (data.length > 0) {
          const formatted = data.map(e => ({
            id: e._id,
            title: e.title,
            organization: e.organization,
            period: e.period,
            description: e.description,
            type: e.type || 'Work'
          }));
          setExperiences(formatted);
        } else {
          setExperiences(defaultExperiences);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching experiences:', err);
        setExperiences(defaultExperiences);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4 inline-block bg-[var(--color-neo-accent)] text-white px-6 py-2 border-4 border-[var(--border-color)] neo-shadow-sm rotate-2">
          Experience
        </h2>
      </div>

      <div className="relative border-l-4 border-[var(--border-color)] ml-4 md:ml-8 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute w-8 h-8 bg-[var(--color-neo-primary)] border-4 border-[var(--border-color)] rounded-full -left-[18px] top-0 neo-shadow-sm z-10"></div>
            
            {/* Content Card */}
            <div className="bg-[var(--card-bg)] border-4 border-[var(--border-color)] p-6 neo-shadow hover:neo-shadow-active transition-all group">
              <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold uppercase">{exp.title}</h3>
                  <p className="text-lg font-bold text-[var(--color-neo-secondary)]">{exp.organization}</p>
                </div>
                <span className="bg-black text-white dark:bg-white dark:text-black px-3 py-1 font-bold border-2 border-black dark:border-white text-sm uppercase">
                  {exp.period}
                </span>
              </div>
              
              <p className="font-medium text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
              
              <div className="mt-4 inline-block bg-gray-200 dark:bg-[#333] px-3 py-1 font-bold text-sm border-2 border-[var(--border-color)] uppercase">
                {exp.type}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
