import { Section } from './ui/Section';
import { GraduationCap } from 'lucide-react';

const educationItems = [
  {
    degree: 'Bachelor of Commerce (Hons)',
    institution: 'Delhi University',
    period: '2019 - 2022',
    grade: '73.98%',
    achievements: [
      'Rank 1 - Financial Management',
      'Academic Excellence'
    ],
    description: 'Specialized in financial management and accounting principles, with focus on analytical and critical thinking skills.'
  }
];

export const Education = () => {
  return (
    <Section className="bg-white dark:bg-background-dark">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-primary dark:text-white font-serif">Education</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">My academic background and achievements</p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {educationItems.map((edu, index) => (
          <div key={index} className="group relative bg-white dark:bg-surface-dark rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-blue-100 dark:hover:border-blue-900/50 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-primary dark:text-white font-serif">{edu.degree}</h3>
                <div className="flex items-center gap-2 text-accent font-medium mt-1">
                  <GraduationCap size={18} />
                  <span>{edu.institution}</span>
                </div>
              </div>
              <span className="inline-block py-1.5 px-4 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-semibold text-gray-600 dark:text-gray-300 whitespace-nowrap self-start">
                {edu.period}
              </span>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl text-accent">{edu.grade}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Overall Grade</span>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">{edu.description}</p>
            
            {edu.achievements.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {edu.achievements.map((achievement, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300">
                    {achievement}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};
