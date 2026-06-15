
import { Users } from "lucide-react";

const Extracurricular = () => {
  const activities = [
    {
      role: "Senior Executive",
      organization: "BAIUST Computer Club (9th Panel)"
    },
    {
      role: "Senior Executive",
      organization: "BAIUST Computer Club (10th Panel)"
    },
    {
      role: "Python Django Intern Instructor",
      organization: "BAIUST Computer Club (10th Panel)"
    }
  ];

  return (
    <section id="extracurricular" className="py-16 md:py-20 bg-gray-50 dark:bg-black/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <Users className="text-purple-400" size={20} />
            <span className="text-gray-800 dark:text-white font-medium">Extracurricular</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Clubs & Activities
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            My involvement in student organizations and extracurricular activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm hover:shadow-xl dark:hover:bg-white/15 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{activity.role}</h3>
              <p className="text-purple-600 dark:text-purple-400">{activity.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
