import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import BannerText from './components/Banner/BannerText';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';

import Blog1 from './pages/blogs/Blog1';
import Blog2 from './pages/blogs/Blog2';
import Blog3 from './pages/blogs/Blog3';
import Blog4 from './pages/blogs/Blog4';

import { UpdateFollower } from 'react-mouse-follower';
import ScrollToTop from './ScrollToTop';

const Home = () => (
  <>
    <UpdateFollower
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 1000,
        followSpeed: 1.6,
      }}
    >
      <Navbar />
      <Hero />
    </UpdateFollower>

    <UpdateFollower
      mouseOptions={{
        backgroundColor: 'black',
        zIndex: 1000,
        followSpeed: 1.6,
      }}
    >
      <Services />
      <Banner />
      <BannerText />
      <Blogs />
      <Footer />
    </UpdateFollower>
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/blog4" element={<Blog4 />} />
      </Routes>
    </Router>
  );
};

export default App;