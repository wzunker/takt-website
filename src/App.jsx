import React from 'react';
import { Header, Layout, HeroSection, ThreePanelDemo, CallToAction, TeamFundersSection } from './components';

function App() {
  return (
    <Layout includeContainer={false}>
      {/* Header Implementation - Phases 2.1 & 2.2 Complete */}
      <Header />

      {/* Hero Section Implementation - Phases 3.1 & 3.2 Complete */}
      <HeroSection />

      {/* Three-Panel Demo Section Implementation - Phases 4.1-4.11 Complete */}
      <ThreePanelDemo />

      {/* Call to Action Section Implementation - Phase 5.1 */}
      <CallToAction />

      {/* Team and Funders Section Implementation - Phase 5.2 */}
      <TeamFundersSection />
    </Layout>
  );
}

export default App;
