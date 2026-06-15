
import { FileText } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Adaptive CCTV Compression System Using Dynamic Region of Interest (ROI) Control",
      description:
        "This project aims to develop an Adaptive CCTV Compression System that intelligently adjusts video compression parameters in real-time based on scene dynamics and regions of interest (ROI). The system ensures optimal video quality in important areas while minimizing bandwidth and storage usage."
    }
  ];

  return (
    <section id="publications" className="py-16 md:py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
            <FileText className="text-purple-400" size={20} />
            <span className="text-gray-800 dark:text-white font-medium">Publications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Research & Publications
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            My research work and publications in the field of computer science and technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border border-gray-200 rounded-2xl p-8 dark:bg-white/10 dark:shadow-none dark:border-white/20 dark:backdrop-blur-sm hover:shadow-xl dark:hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <FileText className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{pub.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{pub.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
