import { Section } from './ui/Section';

export const About = () => {
  return (
    <Section className="bg-white dark:bg-background-dark">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-primary dark:text-white font-serif">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          I am a dedicated Financial Analyst with a strong background in credit risk assessment, cash-flow analysis, and financial forecasting. 
          My expertise lies in developing Early Warning Signal (EWS) frameworks and conducting rigorous stress testing to safeguard organizational assets.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          With a focus on data accuracy and strategic insight, I specialize in translating complex financial data into clear, management-ready reports that drive informed decision-making and operational efficiency.
        </p>
      </div>
    </Section>
  );
};
