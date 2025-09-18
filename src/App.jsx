import React from 'react';
import { Layout, Button } from './components';

function App() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        {/* Main Success Message */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-iron-grey mb-4 font-poppins">
            You have successfully landed on{' '}
            <span className="text-takt-orange">Takt's</span> website
          </h1>
          <p className="text-lg md:text-xl text-iron-grey opacity-80 font-poppins font-normal max-w-2xl mx-auto">
            Welcome to the heartbeat of reliable, efficient, and sustainable manufacturing.
          </p>
        </div>

        {/* Takt Logo Placeholder */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-takt-orange rounded-takt flex items-center justify-center mb-4 mx-auto shadow-lg">
            <span className="text-white text-3xl font-bold">δ</span>
          </div>
          <p className="text-sm text-iron-grey opacity-60 font-poppins">
            Inspired by the Dirac delta function
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Button variant="primary" size="large">
            Learn More About Takt
          </Button>
          <Button variant="secondary" size="large">
            Contact Us
          </Button>
        </div>

        {/* Brand Message */}
        <div className="max-w-3xl mx-auto">
          <p className="text-base text-iron-grey opacity-70 font-poppins italic">
            "Takt" comes from takt time—the pace of production needed to meet customer demand. 
            In German, takt also means beat, rhythm, or measure. We aspire to be the heartbeat 
            of reliable, efficient, and sustainable manufacturing.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default App;
