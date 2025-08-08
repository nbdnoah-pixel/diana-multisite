
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../products';

export default function Products() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {products.map(p => (
        <div key={p.id} className="border p-4 rounded shadow">
          <img src={p.image} alt={p.name} className="w-full h-64 object-cover mb-4" />
          <h2 className="text-lg font-semibold">{p.name}</h2>
          <p className="mb-2">${p.price}</p>
          <Link to={`/product/${p.id}`} className="bg-black text-white px-4 py-2 rounded">View</Link>
        </div>
      ))}
    </div>
  );
}
