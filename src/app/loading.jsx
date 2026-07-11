// app/loading.js
import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="flex flex-col items-center gap-6">
        {/* Three bouncing dots */}
        <div className="flex gap-3">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        </div>
        <p className="text-gray-700 font-medium">Loading content...</p>
      </div>
    </div>
  );
};

export default Loading;