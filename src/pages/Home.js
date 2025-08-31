import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import WhyVisualize from '../Components/WhyVisualize';

const Home = () => {
  const navigate = useNavigate();
  const [array, setArray] = useState([]);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToExplore = () => {
    const element = document.getElementById('explore-algorithms');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const generateArray = () => {
    const newArray = [];
    for (let i = 0; i < 6; i++) {
      newArray.push(Math.floor(Math.random() * 90) + 10);
    }
    setArray(newArray);
    return newArray;
  };

  // Intersection Observer for scroll animations
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

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const initialArray = generateArray();
    const animateSort = async () => {
      let arr = [...initialArray];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            setArray([...arr]);
            await new Promise(resolve => setTimeout(resolve, 800));
          }
        }
      }
      setIsAnimating(false);
    };
    animateSort();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Left Box - Text Content */}
        <div className="w-full lg:w-3/5 p-6 lg:p-12 flex flex-col justify-center text-white relative z-10 animate-on-scroll transition-all duration-1000 transform translate-y-4 opacity-0"
             style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient">
              AlgoFlick: Visualize. Learn. Master DSA.
            </h1>
            
            <p className="text-lg md:text-xl mb-6 lg:mb-8 text-blue-100 leading-relaxed">
              Discover the inner workings of Data Structures and Algorithms through clean, interactive visualizations.
            </p>

            <div className="bg-gray-800 bg-opacity-50 rounded-2xl p-4 lg:p-6 mb-6 lg:mb-8 border border-gray-700 backdrop-blur-sm">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-3 lg:mb-4 text-white">Why AlgoFlick?</h2>
              <p className="text-base lg:text-lg text-blue-100">
                Because understanding how algorithms work shouldn't be a guessing game. 
                See the logic, track the steps, and build intuition through interactive visualization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <button
                onClick={scrollToExplore}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-semibold text-base lg:text-lg shadow-2xl"
              >
                Start Visualizing
              </button>
              
              <button
                onClick={() => navigate('/sorting')}
                className="border-2 border-purple-500 text-purple-300 px-6 py-3 lg:px-8 lg:py-4 rounded-xl hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 font-semibold text-base lg:text-lg"
              >
                Explore Algorithms
              </button>
            </div>
          </div>
        </div>

        {/* Right Box - Sorting Visualization */}
        <div className="w-full lg:w-2/5 p-4 lg:p-8 flex flex-col items-center justify-center relative z-10 animate-on-scroll transition-all duration-1000 transform translate-y-4 opacity-0 delay-300"
             style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
          <div className="w-full h-64 lg:h-[30rem] bg-gray-800 bg-opacity-50 rounded-2xl p-4 lg:p-6 flex flex-col border border-gray-700 backdrop-blur-sm shadow-2xl">
            <h3 className="text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-4 text-center">Live Sorting Demo</h3>
            
            <div className="flex-1 flex items-end justify-center gap-2 lg:gap-4 px-2 lg:px-4">
              {array.map((value, idx) => (
                <div 
                  key={idx}
                  className="relative flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-xl transition-all duration-300 flex items-center justify-center"
                  style={{ height: `${value}%`, minWidth: '30px' }}
                >
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm lg:text-lg">
                    {value}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 lg:mt-6 text-center">
              <p className="text-base lg:text-lg font-medium">
                {isAnimating ? (
                  <span className="text-cyan-400 animate-pulse">Sorting in progress...</span>
                ) : (
                  <span className="text-green-400">Sorted!</span>
                )}
              </p>
            </div>

            <div className="mt-3 lg:mt-4 bg-gray-900 bg-opacity-50 rounded-lg p-2 lg:p-3">
              <p className="text-xs lg:text-sm text-gray-300 text-center">
                Watching algorithms work in real-time helps build deeper understanding
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhyVisualize></WhyVisualize>

      {/* Algorithm Categories Section */}
      <div id="explore-algorithms" className="py-12 lg:py-16 bg-gradient-to-b from-blue-900 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-4 animate-on-scroll transition-all duration-1000 transform translate-y-4 opacity-0"
              style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
            Explore Algorithms
          </h2>
          <p className="text-lg lg:text-xl text-center text-blue-200 mb-8 lg:mb-12 max-w-3xl mx-auto animate-on-scroll transition-all duration-1000 transform translate-y-4 opacity-0 delay-200"
             style={isVisible ? { transform: 'translateY(0)', opacity: 1 } : {}}>
            Dive into different categories of algorithms and data structures with interactive visualizations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
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
                path: '#',
                gradient: 'from-indigo-600 to-purple-500',
                comingSoon: true
              },
              {
                title: 'Sliding Window',
                description: 'Master the sliding window technique for efficient array/string problems.',
                path: '#',
                gradient: 'from-teal-600 to-cyan-500',
                comingSoon: true
              }
            ].map((category, index) => (
              <div 
                key={index}
                onClick={() => !category.comingSoon && navigate(category.path)}
                className={`bg-gradient-to-br ${category.gradient} rounded-2xl p-4 lg:p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl border border-white border-opacity-20 hover:shadow-3xl animate-on-scroll transform translate-y-4 opacity-0 ${
                  category.comingSoon ? 'opacity-80 cursor-not-allowed' : 'cursor-pointer'
                }`}
                style={isVisible ? { 
                  transform: 'translateY(0)', 
                  opacity: category.comingSoon ? 0.8 : 1,
                  transitionDelay: `${index * 100}ms`
                } : {}}
              >
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-2 lg:mb-3 text-center">{category.title}</h3>
                <p className="text-blue-100 text-sm text-center mb-4 lg:mb-6">{category.description}</p>
                
                <div className="text-center">
                  <button className={`px-4 lg:px-6 py-2 rounded-lg font-semibold text-sm lg:text-base ${
                    category.comingSoon 
                      ? 'bg-gray-400 text-gray-800 cursor-not-allowed' 
                      : 'bg-white bg-opacity-90 text-gray-900 hover:bg-opacity-100'
                  }`}
                  disabled={category.comingSoon}
                  >
                    {category.comingSoon ? 'Coming Soon' : 'Visualize'}
                  </button>
                  {category.comingSoon && (
                    <p className="text-xs text-blue-200 mt-2"> Under Development</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;