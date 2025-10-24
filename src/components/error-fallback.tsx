'use client';

interface ErrorFallbackProps {
  error?: Error;
  componentName?: string;
  onReset?: () => void;
}

export function ErrorFallback({ error, componentName, onReset }: ErrorFallbackProps) {
  return (
    <div className="p-6 text-center bg-red-50 border border-red-200 rounded-lg m-4">
      <h3 className="text-lg font-semibold text-red-800 mb-2">
        {componentName ? `${componentName} Failed to Load` : 'Something went wrong'}
      </h3>
      {error && <p className="text-red-600 mb-2 text-sm">{error.message}</p>}
      <p className="text-red-600 mb-4 text-sm">
        Please try refreshing the page or contact support if the problem continues.
      </p>
      <button
        onClick={onReset}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
      >
        Try again
      </button>
    </div>
  );
}
