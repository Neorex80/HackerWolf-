import React from 'react';
import Card from './Card';

const RecentPosts = () => {
  const posts = [
    {
      title: 'Latest in Cybersecurity News',
      description: 'Stay updated with the most recent cybersecurity news and trends.',
    },
    {
      title: 'How to Secure Your Web Applications',
      description: 'A step-by-step guide to making sure your web apps are secure from threats.',
    },
    {
      title: 'Breaking Down a Real-World Hack',
      description: 'An in-depth analysis of a real-world hacking incident and what we can learn from it.',
    },
  ];

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} description={post.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;