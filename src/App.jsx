import React from 'react';
import { Header, Layout, HeroSection, ThreePanelDemo } from './components';

function App() {
  return (
    <Layout includeContainer={false}>
      {/* Header Implementation - Phases 2.1 & 2.2 Complete */}
      <Header />

      {/* Hero Section Implementation - Phases 3.1 & 3.2 Complete */}
      <HeroSection />

      {/* Three-Panel Demo Section Implementation - Phase 4.1 */}
      <ThreePanelDemo />

      {/* Development Status - Temporary */}
      <main className="py-8 bg-canvas-cream">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-iron-grey opacity-60">
            Phase 4.1 - Three-Panel Demo Section Structure Complete
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default App;
