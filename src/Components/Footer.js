import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-8 border-t border-blue-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">&lt;/AlgoFlick&gt;</h3>
            <p className="text-blue-200">
              Visualize Data Structures and Algorithms to build better understanding and intuition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-cyan-300 transition">Home</a></li>
              <li><a href="#" className="text-blue-200 hover:text-cyan-300 transition">Searching</a></li>
              <li><a href="#" className="text-blue-200 hover:text-cyan-300 transition">Sorting</a></li>
              <li><a href="#" className="text-blue-200 hover:text-cyan-300 transition">Stack</a></li>
              <li><a href="#" className="text-blue-200 hover:text-cyan-300 transition">Queue</a></li>
            </ul>
          </div>

          {/* Contact/Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-2 text-blue-200">
              <p> Email: hello@algoflick.com</p>
              <p> GitHub: github.com/algoflick</p>
              <p> Made with React & Tailwind</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-300">
          <p>&copy; 2024 AlgoFlick. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;