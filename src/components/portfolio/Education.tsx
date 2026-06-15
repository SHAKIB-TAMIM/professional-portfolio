
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Bangladesh Army University of Science & Technology",
      year: "2022 - 2026",
      //description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
      grade: "GPA: 3.86/4.0"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Cumilla Victoria Government College", 
      year: "2018-2020",
      description: "Specialized in Mathematics and Science.",
      grade: "Grade: Golden A+"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Cumilla Zilla School", 
      year: "2013-2018",
      description: "Specialized in Mathematics and Science.",
      grade: "Grade: Golden A+"
    },
    /*{
      degree: "Certification Course",
      institution: "Online Platform",
      year: "2023",
      description: "Advanced Full Stack Web Development certification covering modern frameworks and best practices.",
      grade: "Score: 95%"
    }
      */
  ];

  return (
    <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-black/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <GraduationCap className="text-purple-400" size={20} />
            <span className="text-gray-800 dark:text-white font-medium">Education</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Academic Journey
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            My educational background and continuous learning journey in technology and development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  
                  <div className="flex-1 bg-white shadow-lg border border-gray-200 rounded-2xl p-6 dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm hover:shadow-xl dark:hover:bg-white/15 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.degree}</h3>
                      <span className="text-gray-500 dark:text-purple-300 font-medium">{item.year}</span>
                    </div>
                    <h4 className="text-lg text-purple-600 dark:text-purple-400 mb-3">{item.institution}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">{item.description}</p>
                    <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-500/20 border border-green-300 dark:border-green-500/30 rounded-full text-green-700 dark:text-green-300 text-sm">
                      {item.grade}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
