import { Button } from './ui/Button';
import { Download, ExternalLink } from 'lucide-react';

interface ResumeProps {
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

export const Resume = ({ setIsMobileMenuOpen }: ResumeProps = {}) => {
  const handleDownload = () => {
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = '/arnav-sharma-cv-resume.pdf';
    link.download = 'arnav-sharma-cv-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close mobile menu if provided
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleView = () => {
    // Open resume in new tab
    window.open('/arnav-sharma-cv-resume.pdf', '_blank');
    
    // Close mobile menu if provided
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button 
        size="lg" 
        className="h-12 px-6 text-base" 
        onClick={handleDownload}
        aria-label="Download resume as PDF"
      >
        <Download className="mr-2 h-5 w-5" />
        Download Resume
      </Button>
      <Button 
        variant="outline" 
        size="lg" 
        className="h-12 px-6 text-base border-gray-300 dark:border-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 hover:text-accent"
        onClick={handleView}
        aria-label="View resume in browser"
      >
        <ExternalLink className="mr-2 h-5 w-5" />
        View Resume
      </Button>
    </div>
  );
};