import React from 'react';
import { useNavigate } from 'react-router';
import ScrollAnimationWrapper from '../Components/ScrollAnimationWrapper';

const Searching = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <ScrollAnimationWrapper>
          <h1 className="text-4xl font-bold text-center text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
               Search Algorithm Visualizer
            </span>
          </h1>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={200}>
          <p className="text-xl text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Visualize how different search algorithms work step by step
          </p>
        </ScrollAnimationWrapper>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          <ScrollAnimationWrapper delay={400}>
            <div 
              onClick={() => navigate('/linear-search')}
              className="bg-gradient-to-br from-blue-700 to-blue-800 p-6 rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Linear Search</h2>
              <p className="text-blue-200">Simple sequential search - O(n) time complexity</p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={600}>
            <div 
              onClick={() => navigate('/binary-search')} 
              className="bg-gradient-to-br from-purple-700 to-purple-800 p-6 rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-2xl"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Binary Search</h2>
              <p className="text-purple-200">Efficient sorted array search - O(log n) time complexity</p>
            </div>
          </ScrollAnimationWrapper>
        </div>

        {/* Responsive Info Section */}
        <ScrollAnimationWrapper delay={800}>
          <div className="bg-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4"> How to Use</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-200">
              <ul className="space-y-2">
                <li>• Select an algorithm to visualize</li>
                <li>• Watch the step-by-step execution</li>
                <li>• Understand time complexity</li>
              </ul>
              <ul className="space-y-2">
                <li>• See code implementations</li>
                <li>• Adjust animation speed</li>
                <li>• Learn through interaction</li>
              </ul>
            </div>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Searching;