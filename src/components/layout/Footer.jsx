import { Link } from "react-router-dom"

import shop from '@assets/shop.png'

export function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        <div className="flex items-center gap-3">
          <img 
            src={ shop } 
            alt="My App Logo" 
            className="w-10 h-10 object-contain"
          />
          <div>
            <h2 className="text-xl font-bold">Components</h2>
            <p className="text-gray-600 text-sm">Simple e-commerce demo built with React.</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Account</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link to="log-in" className="hover:underline">Login</Link></li>
            <li><Link to="/register" className="hover:underline">Register</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-gray-500">
        © 2026 - { new Date().getFullYear() } Components. All rights reserved.
      </div>
    </footer>
  )
}