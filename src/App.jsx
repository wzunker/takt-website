import React from 'react';
import { Header, Layout } from './components';

function App() {
  return (
    <Layout includeContainer={false}>
      {/* Header Implementation - Phase 2.1 */}
      <Header />

      {/* Main Content Area - Development in Progress */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-24 h-24 bg-takt-orange rounded-takt flex items-center justify-center mx-auto shadow-md mb-6">
            <span className="text-white text-3xl font-bold">δ</span>
          </div>
          <h1 className="text-3xl font-bold mb-4">
            <span className="text-takt-orange">Takt</span> Website
          </h1>
          <p className="text-lg opacity-80 mb-4">
            Header component now active
          </p>
          <p className="text-sm opacity-60">
            Phase 2.1 - Logo Integration Complete
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default App;
