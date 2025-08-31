import React, { useState, useEffect } from 'react';

const WhyVisualize = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const cards = [
    {
      title: 'Build Intuition',
      description: 'Visualizations help you internalize how algorithms work, not just memorize steps. See patterns and understand the "why" behind each operation.'
    },
    {
      title: 'See Hidden Patterns',
      description: 'Watch how data structures transform step-by-step. Spot inefficiencies and optimize your understanding of time/space complexity.'
    },
    {
      title: 'Faster Learning',
      description: 'Research shows visual learning improves retention by 400%. Understand complex concepts in minutes instead of hours.'
    },
    {
      title: 'Debug Effectively',
      description: 'Visual tracing helps identify where algorithms go wrong. Perfect for interview preparation and real-world problem solving.'
    },
    {
      title: 'Spark Creativity',
      description: 'Seeing multiple approaches visually inspires innovative solutions and helps you think beyond textbook implementations.'
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

    const element = document.querySelector('.why-visualize-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-visualize-section py-16 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-4 transition-all duration-1000 transform translate-y-4 opacity-0"
            style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
          Why Visualize Algorithms?
        </h2>
        <p className="text-lg lg:text-xl text-center text-blue-200 mb-8 lg:mb-12 max-w-3xl mx-auto transition-all duration-1000 transform translate-y-4 opacity-0 delay-200"
           style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
          Traditional learning leaves gaps. Visualization bridges them by making abstract concepts tangible and interactive.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-800 to-blue-800 rounded-2xl p-6 shadow-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300 hover:scale-105 transform translate-y-4 opacity-0"
              style={isVisible ? { 
                transform: 'translateY(0)', 
                opacity: 1,
                transitionDelay: `${index * 100}ms`
              } : {}}
            >
              <h3 className="text-xl font-semibold text-white mb-4 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                {card.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">{card.description}</p>
              
              {/* Decorative element instead of icon */}
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gray-800 bg-opacity-50 rounded-2xl p-8 border border-gray-700 transition-all duration-1000 transform translate-y-4 opacity-0"
             style={isVisible ? { transform: 'translateY(0)', opacity: 1, transitionDelay: '600ms' } : {}}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">400%</div>
              <p className="text-blue-200">Higher Retention Rate</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">70%</div>
              <p className="text-blue-200">Faster Understanding</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">90%</div>
              <p className="text-blue-200">Better Problem Solving</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVisualize;