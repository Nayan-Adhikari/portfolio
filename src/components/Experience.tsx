
import { useState, useEffect, useRef } from 'react';
import { Briefcase, Award, Calendar, MapPin, Trophy, Star } from 'lucide-react';

const Experience = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [  
    {
      title: 'Research Intern on Deep Learning',
      company: 'IIT Kharagpur',
      location: 'Kharagpur, India',
      duration: 'Dec 2024 - Present',
      description: [
        'Worked on a research project on deep learning',
        'Exploring Depthwise Seperable Convolution Neural Network',
        'Implemented a deep learning model'
      ]
    }
  ];

  const achievements = [
    {
      icon: Star,
      title: 'Academic Excellence Award',
      description: 'Scoring highest CGPA 9.3 among all the students',
      year: '2022-2023'
    },
    {
      icon: Trophy,
      title: 'Hackathon Runner-up',
      description: 'Third place in Intra College hackathon',
      year: '2024'
    },
    {
      icon: Trophy,
      title: 'Winner - Inter Departmental Cricket Tournament',
      description: 'Secured 1st place in Inter Departmental Cricket Tournament',
      year: '2024,2025'
    },
    {
      icon: Trophy,
      title: 'Winner - Inter Departmental Football Tournament',
      description: 'Secured 1st place in Inter Departmental Football Tournament',
      year: '2023,2024,2025'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            My professional journey and recognitions that showcase my growth and dedication
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Briefcase className="text-blue-600 dark:text-blue-400 mr-3" size={20} />
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                    </div>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Achievements & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h4>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
