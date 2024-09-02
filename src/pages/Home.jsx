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
      {/* You can add more sections later */}
    </>
  );
};

export default Home;