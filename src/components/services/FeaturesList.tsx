import { LayoutDashboard, FileText, Zap, Clock } from 'lucide-react';
import { ReactNode } from 'react';

interface Feature {
  icon: ReactNode;
  text: string;
}

const FeaturesList: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <LayoutDashboard className="w-6 h-6 text-pink-500" />,
      text: "Build a dashboard in <2 minutes, refresh on demand.",
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-500" />,
      text: "Wow your stakeholders with beautiful, interactive reports.",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      text: "Powered by AI for increased productivity.",
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      text: "Cut time spent creating reports by 80%.",
    },
  ];

  return (
    <div className="w-full py-8 mt-20 border-y border-dotted border-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col border-l border-dotted border-gray-300 group"
            >
              <div className="mb-4 p-3 rounded-full bg-gray-100 flex w-[40px] h-[40px]">
                {feature.icon}
              </div>
              <p className="text-sm text-gray-700 p-3">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
