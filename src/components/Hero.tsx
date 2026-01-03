import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Resume } from './Resume';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background dark:bg-background-dark">
      {/* Background decoration - Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '32px 32px' }}
           aria-hidden="true">
      </div>
      
      {/* Abstract Financial Shapes */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium text-secondary dark:text-gray-300 tracking-wide uppercase">Available for Consulting</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8 text-primary dark:text-white tracking-tight" aria-label="Precision in Credit Risk & Finance">
            Precision in <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent dark:from-white dark:to-accent">Credit Risk & Finance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            I translate complex market data into actionable risk frameworks and strategic financial models.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="h-14 px-8 text-lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Resume />
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-8 opacity-80">
            <div role="listitem">
              <div className="text-3xl font-bold text-primary dark:text-white font-serif" aria-label="Years of experience">1+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Years Exp.</div>
            </div>
            <div role="listitem">
              <div className="text-3xl font-bold text-primary dark:text-white font-serif" aria-label="Number of projects">50+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Projects</div>
            </div>
            <div role="listitem">
              <div className="text-3xl font-bold text-primary dark:text-white font-serif" aria-label="Amount of risk analyzed">10M+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">Risk Analyzed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
