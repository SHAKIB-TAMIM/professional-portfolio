
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Python Django Instructor",
      organization: "BAIUST Computer Club (BCC)",
      period: "March 2026 to Present",
      points: [
        "Serve as an Instructor for the BAIUST Computer Club, leading the \"Python Basic Workshop\" to build foundational programming skills students need before transitioning into Django training.",
        "Benchmark and prepare a cohort of 19 students across multiple academic terms, ensuring they master core prerequisite concepts required for the ongoing Django Internship Program.",
        "Design and facilitate targeted coding sessions that directly bridge basic Python syntax with web development frameworks and advanced learning modules."
      ]
    },
    {
      role: "Project Manager Intern",
      organization: "BAIUST Computer Club (BCC)",
      period: "Jul 2025 to Dec 2025",
      points: [
        "Led a software development team of 5 members under the BCC internship program.",
        "Managed Git workflows, feature planning, and delivery timelines."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-gray-50 dark:bg-black/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <Briefcase className="text-purple-400" size={20} />
            <span className="text-gray-800 dark:text-white font-medium">Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions in the field of software development and education.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-4 md:gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Briefcase className="text-white" size={24} />
                  </div>

                  <div className="flex-1 bg-white shadow-lg border border-gray-200 rounded-2xl p-6 dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm hover:shadow-xl dark:hover:bg-white/15 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                      <span className="text-gray-500 dark:text-purple-300 font-medium">{exp.period}</span>
                    </div>
                    <h4 className="text-lg text-purple-600 dark:text-purple-400 mb-4">{exp.organization}</h4>
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                          <span className="text-purple-500 dark:text-purple-400 mt-1.5 flex-shrink-0">•</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
