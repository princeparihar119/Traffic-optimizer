import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Landing_page/Home/HomePage';
import AboutPage from './Landing_page/About/AboutPage';
import SupportPage from './Landing_page/Support/SupportPage';
import Dashboard from './Landing_page/Dashboard/dashboard';

/* Footer Component */
import RealTimeTrafficMonitoring from './Landing_page/FooterApp/Real-Time Traffic Monitoring'
import AITrafficManagement from './Landing_page/FooterApp/ai-traffic-management'
import LaneOptimization from './Landing_page/FooterApp/lane-optimization'
import CongestionPrediction from './Landing_page/FooterApp/congestion-prediction'
import TrafficInsightsBlog from './Landing_page/FooterApp/Traffic-Insights-Blog'
import WhitePapers from './Landing_page/FooterApp/WhitePapers'
import CaseStudy from './Landing_page/FooterApp/Case-Studies'
import PressMedia from './Landing_page/FooterApp/press-media'
import Careers from './Landing_page/FooterApp/Careers'
import Sustainability from './Landing_page/FooterApp/Sustainability'
import ContactUs from './Landing_page/FooterApp/ContactUs'


import Navbar from "./Landing_page/Navbar";
import Footer from './Landing_page/Footer';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
    <Route path='/'element={<HomePage />}/>
    <Route path='/about'element={<AboutPage />}/>
    <Route path='/support'element={<SupportPage />}/>
    <Route path='/dashboard'element={<Dashboard />}/>

    {/* Footer Component */}
    <Route path="/real-time-traffic-monitoring" element={<RealTimeTrafficMonitoring />} />
    <Route path="/ai-traffic-management" element={<AITrafficManagement />} />
    <Route path="/lane-optimization" element={<LaneOptimization />} />
    <Route path="/congestion-prediction" element={<CongestionPrediction />} />
    <Route path="/blog" element={<TrafficInsightsBlog />} />
    <Route path="/white-papers" element={<WhitePapers />} />
    <Route path="/case-studies" element={<CaseStudy />} />
    <Route path="/press-media" element={<PressMedia />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/Sustainability" element={<Sustainability />} />
    <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);