import React from 'react';
import Hero from '../components/Hero';
import FeaturedContent from '../components/FeaturedContent';
import RecentPosts from '../components/RecentPosts';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedContent />
      <RecentPosts />
    </>
  );
};

export default Home;