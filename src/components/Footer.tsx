import { Mail, Phone, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-serif text-primary dark:text-white">Arnav Sharma</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Financial Analyst & Credit Risk Professional</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="mailto:del.arnav01@gmail.com" className="text-gray-400 hover:text-accent dark:hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="tel:+919953795384" className="text-gray-400 hover:text-accent dark:hover:text-white transition-colors">
              <Phone size={20} />
            </a>
            <a href="https://www.linkedin.com/in/arnav-sharma-19980a343/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent dark:hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-100 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Arnav Sharma. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
