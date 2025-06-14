
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone, Cpu, Palette, Book } from 'lucide-react';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C', 'SQL']
    },
    {
      icon: Book,
      title: 'Core Subjects',
      skills: ['DSA', 'OOPS', 'DBMS','CN']
    },
    {
      icon: Database,
      title: 'Databases & Tools',
      skills: ['MySQL','JDBC', 'Git/GitHub', 'Postman']
    }
  ];

  const additionalSkills = [
    { icon: Globe, name: 'Backend Development', description: 'Spring Boot, Servelet, Hibernate, JSP' },
    { icon: Cpu, name: 'Machine Learning', description: 'TensorFlow, Scikit-learn, ML Algorithms' },
    { icon: Cpu, name: 'Data Analysis', description: 'Pandas, NumPy, Matplotlib, Seaborn, Power BI, Excel' }
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {additionalSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <skill.icon className="text-white" size={28} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{skill.name}</h4>
              <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
