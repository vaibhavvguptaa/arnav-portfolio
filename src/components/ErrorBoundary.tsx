import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} />;
    }

    return this.props.children;
  }
}

const DefaultErrorFallback: React.FC<{ error?: Error }> = ({ error }) => (
  <div className="min-h-screen flex items-center justify-center bg-background dark:bg-background-dark px-4 py-12">
    <div className="max-w-md w-full text-center">
      <div className="text-6xl font-bold text-red-500 mb-4">:(</div>
      <h1 className="text-3xl font-bold text-primary dark:text-white mb-4 font-serif">Something went wrong</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        {error?.message || 'An unexpected error occurred. Please try refreshing the page.'}
      </p>
      <button 
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-gray-800 transition-colors"
        onClick={() => window.location.reload()}
      >
        Refresh Page
      </button>
    </div>
  </div>
);

export default ErrorBoundary;