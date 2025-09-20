import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-canvas-cream text-iron-grey font-poppins">
      {/* Header Section - Coming Soon */}
      <header className="w-full py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg text-takt-orange font-semibold">Website Update in Progress</p>
        </div>
      </header>

      {/* Main Content Area - Cleared for Development */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-24 h-24 bg-takt-orange rounded-takt flex items-center justify-center mx-auto shadow-md mb-6">
            <span className="text-white text-3xl font-bold">δ</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-takt-orange">Takt</span> Website
          </h1>
          <p className="text-lg opacity-80 mb-4">
            Content update in progress
          </p>
          <p className="text-sm opacity-60">
            New design coming soon
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
