import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';

// Import components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import IndiaMap from './components/IndiaMap';

// Home Page Component
function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Carousel */}
      <HeroSection />

      {/* Interactive India Map */}
      <IndiaMap />

      {/* Featured States Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Popular Destinations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Rajasthan', 'Kerala', 'Goa', 'Himachal Pradesh', 'Tamil Nadu', 'Maharashtra'].map((state) => (
              <Link 
                key={state} 
                to={`/states/${state.toLowerCase().replace(/\s+/g, '-')}`}
                className="card-dark group cursor-pointer"
              >
                <div className="h-48 bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 
                                flex items-center justify-center text-gray-500">
                    Image Placeholder
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-accent-orange transition-colors">
                  {state}
                </h3>
                <p className="text-gray-400">
                  Discover the wonders of {state}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// State Detail Page Component
function StatePage() {
  const params = window.location.pathname.split('/').pop();
  const stateName = params.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <div className="min-h-screen bg-black">
      <div className="container-custom py-20">
        <Link to="/" className="btn-secondary mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-8 heading-gradient">
          {stateName}
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="card-dark">
              <h2 className="text-3xl font-semibold text-white mb-4">About</h2>
              <p className="text-gray-300 leading-relaxed">
                Welcome to {stateName}! This page will showcase the rich culture, 
                heritage, tourist attractions, and unique features of this beautiful 
                state.
              </p>
            </div>
            
            <div className="card-dark">
              <h2 className="text-3xl font-semibold text-white mb-4">Top Attractions</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-accent-orange mr-2">•</span>
                  Attraction details coming soon
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="card-dark">
              <h3 className="text-2xl font-semibold text-white mb-4">Quick Facts</h3>
              <div className="space-y-3 text-gray-300">
                <p><span className="text-accent-orange font-semibold">Capital:</span> TBD</p>
                <p><span className="text-accent-orange font-semibold">Language:</span> TBD</p>
                <p><span className="text-accent-orange font-semibold">Best Time:</span> TBD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component with Router
function App() {
  return (
    <Router>
      {/* Navigation Header - Now using Navbar component */}
      <Navbar />

      {/* Add padding top to account for fixed nav */}
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/states/:state" element={<StatePage />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container-custom text-center text-gray-400">
          <p>© 2024 Explore India. Discover the Incredible.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;