
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Diana</h1>
      <p className="mb-8">Luxury outerwear for every season.</p>
      <Link to="/products" className="bg-black text-white px-6 py-2 rounded">Shop Now</Link>
    </div>
  );
}
