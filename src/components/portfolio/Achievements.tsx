import { Award, X } from "lucide-react";
import { useState } from "react";

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const achievements = [
   {
      title: "IUPC Certification",
      organization: "Baiust Computer Club",
      date: "2023",
      description: "Certified for participating in Baiust Junior IUPC-2023.",
      image:"images/iupc.jpg"
    },
    {
      title: "DevFest AI Hackathon",
      organization: "Google Developer Group-Sonargaon",
      date: "December-11 2023",
      description: "Certified for participating in DevFest AI Hackathon 2023 organized by GDG Sonargaon.",
      image:"images/devfest.jpg"
    },
    {
      title: "Cython Codecraft",
      organization: "bongo DEV",
      date: "December 2024",
      description: "Certified for completing the Data Structure & Algorithm with C++ and Python BOOTCAMP.",
      image:"images/cython.png"
    },
    {
      title: "WEB Development Certification",
      organization: "bongo DEV",
      date: "August 2024",
      description: "Certified for completing the WEB Development BOOTCAMP.",
      image:"images/web.png"
    },
    {
      title: "Mobile App Development (Flutter)",
      organization: "EDGE, ICT Division, Bangladesh",
      date: "17 April 2025",
      description: "Certified for completing Mobile App Development (Android/Flutter/iOS) training conducted by Dept of CSE, CUET from Aug 2024 to Jan 2025.",
      image:"images/edge.jpg"
    },
    {
      title: "Hackathon - CSE FEST 2025",
      organization: "Computer Club, BAIUST",
      date: "5-6 May 2025",
      description: "Participated in 48-hour hackathon as leader of 'Team Hactastick Four' at BAIUST CSE FEST-2025. Certified for creating a sustainable technology solution.",
      image: "images/hackathon1.jpg"
    },
    {
      title: "Hackathon - CSE FALL FEST 2025",
      organization: "Computer Club, BAIUST",
      date: "3-5 November 2025",
      description: "Participated in 48-hour hackathon as leader of 'Team Hactastick Four' at BAIUST CSE FALL FEST-2025.",
      image: "images/hackathon2.jpg"
    },
    {
      title: "Software Internship (PM)",
      organization: "Computer Club, BAIUST",
      date: "July-2025 to December-2025",
      description: "Completed 6-Month Software Engineering Internship Program as Project Manager.",
      image: "images/InternBCC.jpg"
    },
    {
      title: "Best Poster Award Fall 2025",
      organization: "Poster Presentation Committee",
      date: "8 December 2025",
      description: "Best Poster Award in Poster Presentation Competition: Fall 2025 at BAIUST. Poster titled 'Adaptive CCTV Compression System Using Dynamic Region of Interest (ROI) Control'.",
      image: "images/poster.jpg"
    },
    {
      title: "Python-Django Instructor",
      organization: "BAIUST Computer Club",
      date: "2026",
      description: "Python-Django Instructor certification from BAIUST Computer Club.",
      image: "images/instructor.jpg"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-gray-50 dark:bg-black/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <Award className="text-purple-400" size={20} />
            <span className="text-gray-800 dark:text-white font-medium">Achievements</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Certifications & Awards
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Recognitions and certifications I've earned throughout my journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
              <div
                key={index}
                onClick={() => setSelectedAchievement(achievement)}
                className="cursor-pointer group bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm hover:shadow-xl dark:hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
              >
              <div className="relative overflow-hidden">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2">
                    <Award className="text-white" size={20} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-300 transition-colors">
                    {achievement.title}
                  </h3>
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">
                    {achievement.date}
                  </span>
                </div>
                <h4 className="text-purple-600 dark:text-purple-300 font-medium mb-3">{achievement.organization}</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedAchievement && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedAchievement(null)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white dark:bg-slate-800 rounded-2xl max-w-2xl w-full p-6 relative border border-gray-200 dark:border-white/20"
    >

      <button
        onClick={() => setSelectedAchievement(null)}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
      >
        <X size={24} />
      </button>

      <img
        src={selectedAchievement.image}
        alt={selectedAchievement.title}
        className="w-full max-h-[60vh] object-contain rounded-xl mb-4"
      />

      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {selectedAchievement.title}
      </h2>

      <p className="text-purple-600 dark:text-purple-400 mb-2">
        {selectedAchievement.organization} • {selectedAchievement.date}
      </p>

      <p className="text-gray-600 dark:text-gray-300">
        {selectedAchievement.description}
      </p>

    </div>
  </div>
)}
    </section>
  );
};

export default Achievements;
