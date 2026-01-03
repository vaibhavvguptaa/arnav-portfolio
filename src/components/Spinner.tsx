const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background dark:bg-background-dark">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-primary dark:border-gray-700 dark:border-t-accent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-200 border-b-primary dark:border-gray-700 dark:border-b-accent rounded-full animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;