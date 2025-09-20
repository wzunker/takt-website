import React from 'react';
import { Header, Layout, HeroSection } from './components';

function App() {
  return (
    <Layout includeContainer={false}>
      {/* Header Implementation - Phases 2.1 & 2.2 Complete */}
      <Header />

      {/* Hero Section Implementation - Phase 3.1 */}
      <HeroSection />

      {/* Development Status - Temporary */}
      <main className="py-8 bg-canvas-cream">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-iron-grey opacity-60">
            Phase 3.1 - Hero Section Content Implementation Complete
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default App;
