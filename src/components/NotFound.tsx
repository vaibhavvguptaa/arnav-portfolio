import { Button } from './ui/Button';
import { Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark:bg-background-dark px-4 py-12">
      <div className="max-w-md w-full text-center">
        <div className="text-9xl font-bold text-primary dark:text-gray-800 mb-4">404</div>
        <h1 className="text-3xl font-bold text-primary dark:text-white mb-4 font-serif">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button className="h-12 px-6" onClick={() => window.location.href = '/'}>
          <Home className="mr-2 h-5 w-5" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};