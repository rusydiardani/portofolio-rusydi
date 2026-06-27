import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { FaJava, FaReact, FaPhp, FaPython, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiFirebase, SiMysql } from 'react-icons/si';
import { client } from '../client';

const About = () => {
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

  const skills = [
    { name: 'Kotlin', icon: SiKotlin, color: 'hover:bg-[#7F52FF] hover:text-white' },
    { name: 'Java', icon: FaJava, color: 'hover:bg-[#5382A1] hover:text-white' },
    { name: 'React', icon: FaReact, color: 'hover:bg-[#61DAFB] hover:text-black' },
    { name: 'Flutter', icon: SiFlutter, color: 'hover:bg-[#02569B] hover:text-white' },
    { name: 'PHP', icon: FaPhp, color: 'hover:bg-[#777BB4] hover:text-white' },
    { name: 'Python', icon: FaPython, color: 'hover:bg-[#3776AB] hover:text-white' },
    { name: 'Firebase', icon: SiFirebase, color: 'hover:bg-[#FFCA28] hover:text-black' },
    { name: 'MySQL', icon: SiMysql, color: 'hover:bg-[#4479A1] hover:text-white' },
    { name: 'Git', icon: FaGitAlt, color: 'hover:bg-[#F05032] hover:text-white' },
    { name: 'HTML5', icon: FaHtml5, color: 'hover:bg-[#E34F26] hover:text-white' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'hover:bg-[#1572B6] hover:text-white' },
    { name: 'JavaScript', icon: FaJs, color: 'hover:bg-[#F7DF1E] hover:text-black' },
  ];

  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">Loading...</div>;
  }

  const bioText = profile?.bio || "Hello! I'm Rusydi Ardani, a passionate Informatics Engineering student and developer. I specialize in building robust mobile applications and highly interactive web platforms.\n\nWith a strong foundation in both front-end and back-end technologies, I love bringing ideas to life through code. When I'm not coding, I'm exploring the latest advancements in Artificial Intelligence.";
  const degree = profile?.degree || 'Informatics Engineering Degree';
  const university = profile?.university || 'University Name • 2022 - Present';
  const careerGoals = profile?.careerGoals || 'To become a versatile software engineer who bridges the gap between innovative AI solutions and practical, user-friendly mobile/web applications.';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
      {/* Bio Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 border-4 border-[var(--border-color)] bg-[var(--color-neo-primary)] neo-shadow text-black"
        >
          <h2 className="text-4xl font-extrabold uppercase mb-6 border-b-4 border-black pb-2 inline-block">About Me</h2>
          <div className="text-lg font-medium leading-relaxed whitespace-pre-wrap">
            {bioText}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="p-6 border-4 border-[var(--border-color)] bg-white dark:bg-[#1A1A1A] neo-shadow-sm">
            <h3 className="text-2xl font-bold uppercase mb-2">Education</h3>
            <p className="text-xl font-bold text-[var(--color-neo-secondary)]">{degree}</p>
            <p className="font-medium text-gray-600 dark:text-gray-400">{university}</p>
          </div>

          <div className="p-6 border-4 border-[var(--border-color)] bg-[var(--color-neo-accent)] text-white neo-shadow-sm">
            <h3 className="text-2xl font-bold uppercase mb-2">Career Goals</h3>
            <p className="font-medium text-lg whitespace-pre-wrap">
              {careerGoals}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section>
        <div className="inline-block px-6 py-3 mb-8 bg-[var(--color-neo-secondary)] text-white font-extrabold text-3xl uppercase border-4 border-[var(--border-color)] neo-shadow-sm -rotate-2">
          Tech Stack
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <SkillCard name={skill.name} icon={skill.icon} colorClass={skill.color} />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
