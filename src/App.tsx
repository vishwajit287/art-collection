import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content (expands to push footer down) */}
        <div className="flex-grow">
          <AppRoutes />
        </div>

        {/* Sticky Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
