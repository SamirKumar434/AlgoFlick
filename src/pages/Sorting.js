import React from 'react';
import { useNavigate } from 'react-router';
import ScrollAnimationWrapper from '../Components/ScrollAnimationWrapper';

const Sorting = () => {
  const navigate = useNavigate();
  
  const algorithms = [
    {
      title: 'Bubble Sort',
      description: 'Watch elements bubble up to their correct positions through repeated comparisons and swaps.',
      path: '/bubble-sort',
      color: 'from-blue-700 via-blue-600 to-cyan-500',
      complexity: 'O(n²)'
    },
    {
      title: 'Selection Sort',
      description: 'Observe how the algorithm repeatedly finds the minimum element and places it at the beginning.',
      path: '/selection-sort',
      color: 'from-green-700 via-green-600 to-emerald-500',
      complexity: 'O(n²)'
    },
    {
      title: 'Insertion Sort',
      description: 'See how elements are inserted into their correct positions one by one, building the sorted array incrementally.',
      path: '/insertion-sort', 
      color: 'from-purple-700 via-purple-600 to-pink-500',
      complexity: 'O(n²)'
    },
    {
      title: 'Merge Sort',
      description: 'Watch the divide and conquer approach that splits, sorts, and merges subarrays efficiently.',
      path: '/merge-sort',
      color: 'from-indigo-700 via-indigo-600 to-purple-500',
      complexity: 'O(n log n)'
    },
    {
      title: 'Quick Sort',
      description: 'See how pivot elements are chosen and arrays are partitioned for efficient sorting.',
      path: '/quick-sort',
      color: 'from-orange-700 via-orange-600 to-red-500',
      complexity: 'O(n log n)'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Sorting Algorithms
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Visualize how different sorting algorithms organize data. See the step-by-step process 
            and understand their time complexities through interactive animations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {algorithms.map((algorithm, index) => (
                       <ScrollAnimationWrapper 
              key={index} 
              delay={index * 100} // Stagger the animation. Each card delays 100ms more than the previous.
              className="h-full" // Ensure the wrapper takes the full height of the grid cell
            >

            <div 
              key={index}
              onClick={() => navigate(algorithm.path)}
              className={`bg-gradient-to-br ${algorithm.color} rounded-2xl p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl border border-gray-600 hover:border-white hover:shadow-3xl`}
            >
              <h3 className="text-xl font-bold text-white mb-3 text-center font-mono">
                {algorithm.title}
              </h3>
              <p className="text-gray-100 text-center mb-4 leading-tight text-sm">
                {algorithm.description}
              </p>
              
              <div className="text-center">
                <div className="bg-black bg-opacity-30 rounded-lg py-2 px-4 mb-3">
                  <span className="text-white font-mono text-sm">Time: {algorithm.complexity}</span>
                </div>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-100 transition-all font-semibold text-sm shadow-md">
                  Visualize
                </button>
              </div>
            </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sorting;
