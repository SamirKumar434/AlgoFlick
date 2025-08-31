import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from '../src/Components/NavBar'; 
import Home from './pages/Home';
import Searching from './pages/Searching';
import LinearSearch from './pages/LinearSearch';
import BinarySearch from './pages/BinarySearch';
import Stack from './pages/Stack';
import Queue from './pages/Queue';
import Sorting from './pages/Sorting';
import BubbleSort from './pages/BubbleSort'
import SelectionSort from './pages/SelectionSort';
import InsertionSort from './pages/InsertionSort';
import QuickSort from './pages/QuickSort';
import MergeSort from './pages/MergeSort';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Navbar />
        <main className="pt-16 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searching" element={<Searching />} />
            <Route path="/linear-search" element={<LinearSearch />} /> {/* Add this route */}
           <Route path="/binary-search" element={<BinarySearch />} />
           <Route path="/stack" element={<Stack />} />
           <Route path="/queue" element={<Queue />} />
           <Route path="/sorting" element={<Sorting />} />
           <Route path="/bubble-sort" element={<BubbleSort />} />
           <Route path="/selection-sort" element={<SelectionSort />} />
           <Route path="/insertion-sort" element={<InsertionSort />} /> 
           <Route path="/merge-sort" element={<MergeSort />} />
           <Route path="/quick-sort" element={<QuickSort />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);