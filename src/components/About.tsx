
import { User, GraduationCap, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Nayan Adhikari"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <GraduationCap className="text-white" size={32} />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Passionate Engineering Student
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a final-year engineering student with a deep passion for technology and innovation. 
                My journey in engineering has been driven by curiosity and a desire to create solutions 
                that make a difference in people's lives.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding or studying, you'll find me exploring new technologies, 
                working on personal projects, or collaborating with fellow students on exciting ventures. 
                I believe in the power of continuous learning and pushing boundaries.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Problem Solver</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Love tackling complex challenges with creative solutions</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-purple-600 dark:text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Goal Oriented</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Focused on achieving excellence in every project</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quick Facts</h4>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>📍 Location: India</p>
                <p>🎓 Final Year Engineering Student</p>
                <p>💼 Open to internships and collaborations</p>
                <p>🚀 Always learning and growing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
