
import { User } from "lucide-react";

const About = () => {
  const interests = ["Traveling", "Books-Reading", "Photography", "Singing", "Web Development", "Problem Solving"];
  const languages = [
    { name: "Bengali", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Basic" },
    { name: "Japanese", level: "Basic" }
  ];

  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <User className="text-purple-400" size={20} />
            <span className="text-gray-800 dark:text-white font-medium">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Personal Information
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-8 dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Summary</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="leading-relaxed">
                I am a Computer Science student who enjoys building real-world software and continuously learning new technologies. I am passionate about web development, problem-solving, and creating solutions that can make everyday tasks easier.
              </p>
              <p className="leading-relaxed">
                Through my projects and academic work, I strive to improve both my technical skills and my ability to turn ideas into meaningful applications.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Facts</h4>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-gray-500 dark:text-gray-400">Name:</span>
                  <span className="text-gray-900 dark:text-white">MD. Shakibul Islam Tamim</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-gray-500 dark:text-gray-400">Location:</span>
                  <span className="text-gray-900 dark:text-white">Cumilla, Bangladesh</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-gray-500 dark:text-gray-400">Email:</span>
                  <span className="text-gray-900 dark:text-white">tamim.0825@gmail.com</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                  <span className="text-gray-500 dark:text-gray-400">Phone:</span>
                  <span className="text-gray-900 dark:text-white">01839806691</span>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-500/20 border border-purple-300 dark:border-purple-500/30 rounded-full text-purple-700 dark:text-purple-300 text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Languages</h4>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">{lang.name}</span>
                    <span className="text-purple-600 dark:text-purple-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
