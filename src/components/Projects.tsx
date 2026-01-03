import { Section } from './ui/Section';
import { FileText, TrendingUp, CheckCircle } from 'lucide-react';

export const Projects = () => {
  return (
    <Section id="projects" className="bg-white dark:bg-background-dark">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-primary dark:text-white font-serif">Featured Project</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">In-depth Financial Analysis Case Study</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow duration-300">
          {/* Header */}
          <div className="bg-primary text-white p-8 md:p-10 border-b-4 border-accent">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded text-sm font-medium tracking-wide">
                <FileText className="h-4 w-4" />
                <span>EQUITY RESEARCH CASE STUDY</span>
              </div>
              <span className="text-white/60 text-sm font-mono">ID: NTPC-2024-FA</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">NTPC Limited: Financial Health Assessment</h3>
            <p className="text-lg text-gray-300 max-w-3xl font-light">
              Comprehensive valuation and liquidity analysis of India’s largest power utility, leveraging 3-year historical statements to forecast leverage sustainability.
            </p>
          </div>

          <div className="p-8 md:p-10 grid md:grid-cols-12 gap-10">
            {/* Left Column: Analysis */}
            <div className="md:col-span-7 space-y-8">
              <div>
                <h4 className="text-lg font-bold text-primary dark:text-white mb-4 flex items-center gap-2 uppercase tracking-wide text-sm border-b border-gray-100 dark:border-gray-700 pb-2">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  Methodology
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  Reconstructed financial narratives using Income Statements and Balance Sheets to identify core profitability drivers. Applied ratio analysis to stress-test liquidity under various coal pricing scenarios.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Ratio Analysis', 'Trend Forecasting', 'Peer Benchmarking'].map(tag => (
                    <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs font-semibold">{tag}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-primary dark:text-white mb-4 flex items-center gap-2 uppercase tracking-wide text-sm border-b border-gray-100 dark:border-gray-700 pb-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Key Findings
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">Identified <strong className="text-gray-900 dark:text-white">15% margin expansion</strong> opportunity via cost structure optimization.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">Validated debt sustainability with <strong className="text-gray-900 dark:text-white">Interest Coverage Ratio &gt; 4.5x</strong>.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Visual Summary */}
            <div className="md:col-span-5 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
               <h5 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase">Analysis Output</h5>
               
               <div className="space-y-4">
                 <div className="bg-white dark:bg-surface-dark p-4 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Profitability Score</div>
                    <div className="flex items-end gap-2">
                      <div className="text-2xl font-bold text-primary dark:text-white">A-</div>
                      <div className="text-xs text-green-600 font-medium mb-1">Stable</div>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-2">
                      <div className="bg-primary dark:bg-accent w-[85%] h-full rounded-full" />
                    </div>
                 </div>

                 <div className="bg-white dark:bg-surface-dark p-4 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Liquidity Ratio</div>
                    <div className="flex items-end gap-2">
                      <div className="text-2xl font-bold text-primary dark:text-white">1.8x</div>
                      <div className="text-xs text-gray-400 font-medium mb-1">vs 1.5x Industry</div>
                    </div>
                 </div>

                 <div className="bg-white dark:bg-surface-dark p-4 rounded shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Leverage Risk</div>
                    <div className="flex items-end gap-2">
                      <div className="text-2xl font-bold text-orange-500">Moderate</div>
                    </div>
                     <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-2">
                      <div className="bg-orange-500 w-[60%] h-full rounded-full" />
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
