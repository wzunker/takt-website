import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-canvas-cream text-iron-grey font-poppins flex items-center justify-center text-center p-5">
      <div>
        <h1 className="text-5xl font-bold mb-5">
          You have successfully landed on{' '}
          <span className="text-takt-orange">Takt's</span> website
        </h1>
        <p className="text-lg opacity-80 mb-8">
          Welcome to the heartbeat of reliable, efficient, and sustainable manufacturing.
        </p>
        <div className="w-24 h-24 bg-takt-orange rounded-takt flex items-center justify-center mx-auto shadow-md">
          <span className="text-white text-3xl font-bold">δ</span>
        </div>
        <p className="text-sm opacity-60 mt-3">
          Inspired by the Dirac delta function
        </p>
      </div>
    </div>
  );
}

export default App;
