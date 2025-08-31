import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const AlgoCategories = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  
  const categories = [
    {
      title: 'Searching',
      description: 'Explore how algorithms find elements in datasets efficiently.',
      path: '/searching',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'Sorting',
      description: 'Visualize how data gets organized through various sorting techniques.',
      path: '/sorting',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      title: 'Stack',
      description: 'Understand LIFO principle with interactive stack operations.',
      path: '/stack',
      gradient: 'from-green-600 to-emerald-500'
    },
    {
      title: 'Queue',
      description: 'Learn FIFO concept with real-time queue visualizations.',
      path: '/queue',
      gradient: 'from-orange-600 to-red-500'
    },
    {
      title: 'Linked List',
      description: 'Visualize node connections and operations in linked data structures.',
      path: '/linked-list',
      gradient: 'from-indigo-600 to-purple-500',
      comingSoon: true
    },
    {
      title: 'Sliding Window',
      description: 'Master the sliding window technique for efficient array/string problems.',
      path: '/sliding-window',
      gradient: 'from-teal-600 to-cyan-500',
      comingSoon: true
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.algo-categories-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleVisualizeClick = (path, comingSoon) => {
    if (!comingSoon) {
      navigate(path);
    }
  };

  return (
    <section className="algo-categories-section py-16 bg-gradient-to-b from-blue-900 to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-4 transition-all duration-1000 transform translate-y-4 opacity-0"
            style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
          Explore Algorithms
        </h2>
        <p className="text-lg lg:text-xl text-center text-blue-200 mb-8 lg:mb-12 max-w-3xl mx-auto transition-all duration-1000 transform translate-y-4 opacity-0 delay-200"
           style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
          Dive into different categories of algorithms and data structures with interactive visualizations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              onClick={() => handleVisualizeClick(category.path, category.comingSoon)}
              className={`bg-gradient-to-br ${category.gradient} rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl border border-white border-opacity-20 hover:shadow-3xl transform translate-y-4 opacity-0 ${
                category.comingSoon ? 'opacity-80 cursor-not-allowed' : 'cursor-pointer'
              }`}
              style={isVisible ? { 
                transform: 'translateY(0)', 
                opacity: category.comingSoon ? 0.8 : 1,
                transitionDelay: `${index * 100}ms`
              } : {}}
            >
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {category.title}
              </h3>
              <p className="text-blue-100 text-center mb-6 leading-relaxed">
                {category.description}
              </p>
              
              {/* Visualize Button */}
              <div className="text-center">
                <button
                  className={`px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 ${
                    category.comingSoon 
                      ? 'bg-gray-500 cursor-not-allowed' 
                      : 'bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm'
                  }`}
                  disabled={category.comingSoon}
                >
                  {category.comingSoon ? 'Coming Soon' : 'Visualize'}
                </button>
                
                {category.comingSoon && (
                  <p className="text-xs text-blue-200 mt-2">🚧 Under Development</p>
                )}
              </div>

              {/* Decorative element */}
              <div className="mt-4 w-16 h-1 bg-white bg-opacity-30 rounded-full mx-auto"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center transition-all duration-1000 transform translate-y-4 opacity-0"
             style={isVisible ? { transform: 'translateY(0)', opacity: 1, transitionDelay: '600ms' } : {}}>
          <p className="text-blue-200 mb-4">Ready to dive deeper into algorithms?</p>
          <button
            onClick={() => navigate('/sorting')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg"
          >
            Start Learning Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlgoCategories;