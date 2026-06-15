
import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "Tailwind CSS", level: 80 },
        { name: "JavaScript", level: 65 },
        { name: "Bootstrap", level: 70 },
        { name: "React", level: 50 },
        { name: "Next.js", level: 40 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Python-Django", level: 75 },
        { name: "Django REST Framework", level: 65 },
        { name: "Node.js", level: 40 },
        { name: "MySQL", level: 65 },
        { name: "SQLite", level: 60 }
      ]
    },
    {
      title: "Technical Tools",
      skills: [
        { name: "Git", level: 70 },
        { name: "GitHub", level: 70 },
        { name: "Docker", level: 30 },
        { name: "Slack", level: 65 },
        { name: "MySQL Workbench", level: 55 },
        { name: "AI Tools", level: 60 }
      ]
    },
    {
      title: "Deployment",
      skills: [
        { name: "Netlify", level: 40},
        { name: "Vercel", level: 60 },
        { name: "Render", level: 40 },
        { name: "Heroku", level: 40 },
        { name: "PythonAnywhere", level: 80 },
        { name: "GitHub Pages", level: 80 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <span className="text-purple-400">🚀</span>
            <span className="text-gray-800 dark:text-white font-medium">Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm hover:shadow-xl dark:hover:bg-white/15 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                      <span className="text-purple-600 dark:text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
