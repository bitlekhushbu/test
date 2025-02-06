import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageSpeedInsights from './components/PageSpeedInsights';
import ReportPage from './components/ReportPage';
import Header from './components/Header';
import GreenPanel from './components/GreenPanel';
import Content from './components/Content';
import WorkContent from './components/WorkContent';
import FaqSection from './components/FaqSection';
import GetBadge from './components/GetBadge';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PageSpeedInsights />} />
          <Route path="/report/:uniqueId" element={<ReportPage />} />
        </Routes>
        <Content />
        <GreenPanel />
        <WorkContent />
        <FaqSection />
        <GetBadge />
        <Services />
        <ContactForm />
        <Footer />
        
      </Router>
    </div>
  );
};

export default App;
