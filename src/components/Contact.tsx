import { Section } from './ui/Section';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <Section id="contact" className="bg-white dark:bg-background-dark">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-primary dark:text-white font-serif">Get in Touch</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Open for opportunities and collaborations</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:del.arnav01@gmail.com" className="bg-gray-50 dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full text-accent mb-6 group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">del.arnav01@gmail.com</p>
            </a>

            <a href="tel:+919953795384" className="bg-gray-50 dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full text-accent mb-6 group-hover:scale-110 transition-transform">
                <Phone size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">+91-9953795384</p>
            </a>
            
             <a href="https://www.linkedin.com/in/arnav-sharma-19980a343/" target="_blank" rel="noopener noreferrer" className="bg-gray-50 dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 group text-center flex flex-col items-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full text-accent mb-6 group-hover:scale-110 transition-transform">
                <Linkedin size={32} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
              <p className="text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors">Connect with me</p>
            </a>
        </div>
        
        <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-50 dark:bg-surface-dark border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400">
                <MapPin size={20} className="text-accent" />
                <span>Base Location: Uttar Pradesh, Ghaziabad</span>
            </div>
        </div>
      </div>
    </Section>
  );
};
