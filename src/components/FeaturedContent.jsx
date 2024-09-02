import React from 'react';
import Card from './Card';

const FeaturedContent = () => {
  const featuredItems = [
    {
      title: 'Introduction to Ethical Hacking',
      description: 'Learn the basics of ethical hacking and how to protect yourself online.',
    },
    {
      title: 'Top 10 Cybersecurity Tools',
      description: 'Explore the most powerful tools used by professionals to secure systems.',
    },
    {
      title: 'Understanding Network Security',
      description: 'Deep dive into network security fundamentals and best practices.',
    },
  ];

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;