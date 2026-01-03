import { Section } from './ui/Section';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Credit Risk Analyst',
    company: 'Nexensus',
    period: 'Feb 2024 – Present',
    details: [
      'Executed financial statement and cash-flow analysis to evaluate company performance, liquidity, and leverage.',
      'Built and monitored Early Warning Signal (EWS) frameworks using financial ratios and forward-looking indicators.',
      'Identified early signs of financial stress including margin compression and liquidity deterioration.',
      'Performed scenario and stress testing to assess downside impact on cash flows and earnings.',
      'Conducted industry and peer benchmarking.',
      'Generated management-ready insights through structured reports and dashboards.'
    ]
  },
  {
    role: 'Financial Analyst',
    company: 'SLA Consultants India Pvt. Ltd.',
    period: 'Jul 2024 – Dec 2024',
    details: [
      'Engineered KPI dashboards monitoring 25+ metrics, improving reporting accuracy by 20%.',
      'Designed real-time compliance dashboards reducing incident response time by 40%.',
      'Delivered insights using Excel, SQL, and Power BI.'
    ]
  }
];

export const Experience = () => {
  return (
    <Section id="experience" className="bg-gray-50 dark:bg-background-dark">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-primary dark:text-white font-serif">Professional Experience</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">My career journey in finance</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8" role="list">
        {experiences.map((exp, index) => (
          <div key={index} role="listitem" className="group relative bg-white dark:bg-surface-dark rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-blue-100 dark:hover:border-blue-900/50 shadow-sm hover:shadow-lg transition-all duration-300">
             {/* Connector Line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-8 bottom-0 top-[calc(100%-2rem)] w-px bg-gray-200 dark:bg-gray-700 -z-10 h-16 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors" />
            )}

            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-primary dark:text-white font-serif">{exp.role}</h3>
                <div className="flex items-center gap-2 text-accent font-medium mt-1">
                  <Briefcase size={18} />
                  <span>{exp.company}</span>
                </div>
              </div>
              <span className="inline-block py-1.5 px-4 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-semibold text-gray-600 dark:text-gray-300 whitespace-nowrap self-start">
                {exp.period}
              </span>
            </div>
            
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-6">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0 opacity-60" />
                  <span className="text-sm leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
