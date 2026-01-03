import { Section } from './ui/Section';
import { TrendingUp, BarChart3, Activity } from 'lucide-react';

const skillCategories = [
  {
    title: 'Financial Analysis',
    icon: TrendingUp,
    skills: [
      'Financial Statement Analysis',
      'Cash-Flow Analysis',
      'Ratio Analysis',
      'Forecasting',
      'Valuation Modeling'
    ]
  },
  {
    title: 'Data & Analytics',
    icon: BarChart3,
    skills: [
      'Advanced Excel',
      'VBA',
      'Power BI',
      'SQL',
      'Data Visualization'
    ]
  },
  {
    title: 'Risk Management',
    icon: Activity,
    skills: [
      'Credit Risk Assessment',
      'EWS Frameworks',
      'Stress Testing',
      'Risk Modeling',
      'Compliance'
    ]
  }
];

export const Skills = () => {
  return (
    <Section id="skills" className="bg-gray-50 dark:bg-background-dark">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-primary dark:text-white font-serif">Technical Expertise</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Core competencies and toolset</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6" role="list">
        {skillCategories.map((category, index) => (
          <div key={index} role="listitem" className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold text-primary dark:text-white mb-6 font-serif flex items-center gap-3">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              {category.title}
            </h3>
            <div className="flex flex-col gap-3">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="flex items-center justify-between group">
                  <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-primary dark:group-hover:text-white transition-colors">{skill}</span>
                  <div className="w-12 h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity w-[80%]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
