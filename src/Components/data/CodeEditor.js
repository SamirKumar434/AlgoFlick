import React from 'react';
import { codeSnippets } from './codesnippet';

const CodeEditor = ({ algorithm, language, setLanguage }) => {
  const languages = ['c', 'cpp', 'java', 'python', 'javascript'];
  
  return (
    <div className="bg-gray-800 rounded-lg p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white"> Code Implementation</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-3 py-1 bg-gray-700 text-white rounded border border-gray-600"
        >
          {languages.map(lang => (
            <option key={lang} value={lang}>{lang.toUpperCase()}</option>
          ))}
        </select>
      </div>
      
      <div className="bg-gray-900 rounded p-4 font-mono text-sm">
        <pre className="text-green-400 overflow-x-auto">
          {codeSnippets[algorithm][language]}
        </pre>
      </div>
      
      <div className="mt-4 text-blue-300 text-sm">
        <p> Time Complexity: {algorithm === 'linear' ? 'O(n)' : 'O(log n)'}</p>
        <p> Space Complexity: O(1)</p>
      </div>
    </div>
  );
};

export default CodeEditor;