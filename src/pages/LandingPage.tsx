import React from "react";
import sunset from '../assets/images/sunset1.jpg';
import sea from '../assets/images/sea-waves.jpg';
import fish from '../assets/images/fish-aquerium.jpg';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: "url('/hero-image.jpg')" }}>
        <div className="text-center bg-black bg-opacity-50 p-10 rounded-lg">
          <h1 className="text-5xl font-bold mb-4">Capture Moments, Share Memories</h1>
          <p className="text-lg mb-6">Discover, upload, and showcase your favorite pictures in one place.</p>
          <a href="/dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition">
            Get Started
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Explore Stunning Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src={sunset} alt="Gallery 1" className="rounded-lg shadow-lg hover:scale-105 transition w-full h-64 object-cover" />
            <img src={sea} alt="Gallery 2" className="rounded-lg shadow-lg hover:scale-105 transition w-full h-64 object-cover" />
            <img src={fish} alt="Gallery 3" className="rounded-lg shadow-lg hover:scale-105 transition w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">High-Resolution Images</h3>
              <p className="text-gray-600">Upload and share your photos in stunning quality.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Fast & Secure</h3>
              <p className="text-gray-600">Enjoy a seamless experience with our optimized platform.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
              <p className="text-gray-600">Engage with like-minded photography lovers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-900 text-white mb-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <p className="italic">"This website changed how I share my photography. It's fast and easy!"</p>
              <p className="mt-4 font-semibold">- Alex Johnson</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <p className="italic">"A fantastic platform for showcasing creativity!"</p>
              <p className="mt-4 font-semibold">- Emily Carter</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
