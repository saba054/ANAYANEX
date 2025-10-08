'use client';
import { useState } from 'react';

export default function FooterSection() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="pb-4 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-[var(--foreground)] mb-6">
            We are Committed To Businesses
          </h2>
          <p className="text-[var(--foreground)] text-md mb-8 max-w-3xl mx-auto opacity-80">
            At ANAYANEX IT Solutions, we are dedicated to delivering innovative technology solutions tailored to meet the unique needs of businesses like yours.
          </p>
          {/* Email Subscription */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="flex-1 px-6 py-4 bg-transparent border border-[var(--foreground)]/20 rounded-lg text-[var(--foreground)] placeholder:text-[var(--foreground)] placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] focus:border-transparent backdrop-blur-sm"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 hover:opacity-80"
            >
              <span>Subscribe ↗</span>
            </button>
          </form>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/assets/images/1.png" 
                alt="AnayaNex Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold text-[var(--foreground)]">ANAYANEX</span>
            </div>
            <p className="text-[var(--foreground)] leading-relaxed opacity-80">
              At ANAYANEX IT Solutions, we are dedicated to delivering innovative technology solutions tailored to meet the unique needs of businesses like yours.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-transparent border border-[var(--foreground)]/20 rounded-lg flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-transparent border border-[var(--foreground)]/20 rounded-lg flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-transparent border border-[var(--foreground)]/20 rounded-lg flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-transparent border border-[var(--foreground)]/20 rounded-lg flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Service We Offer */}
          <div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">Service We Offer</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors duration-300">Cloud Computing Solution</a></li>
              <li><a href="#" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors duration-300">Cybersecurity & Compliance</a></li>
              <li><a href="#" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors duration-300">Software Development</a></li>
              <li><a href="#" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors duration-300">IT Consulting & Support</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">Useful Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors duration-300">Our Services</a></li>
              <li><a href="#" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors duration-300">Blog & News</a></li>
              <li><a href="#" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors duration-300">Project</a></li>
              <li><a href="#" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[var(--foreground)] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--background)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[var(--foreground)]/80">0500 292 333</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[var(--foreground)] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--background)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[var(--foreground)]/80">01 5668 8547</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[var(--foreground)] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--background)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[var(--foreground)]/80">admin@anayanex.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[var(--foreground)] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--background)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <span className="text-[var(--foreground)]/80">www.anayanex.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[var(--foreground)]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[var(--foreground)]/60 text-sm">
              Copyright ©2024 ANAYANEX All Rights Reserved
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] text-sm transition-colors duration-300">Terms & Conditions</a>
              <span className="text-[var(--foreground)]/40">|</span>
              <a href="#" className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] text-sm transition-colors duration-300">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="fixed bottom-8 right-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-[var(--foreground)] rounded-full flex items-center justify-center text-[var(--background)] shadow-lg transition-all duration-300 hover:opacity-80 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}