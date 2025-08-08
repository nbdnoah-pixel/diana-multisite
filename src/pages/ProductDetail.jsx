
import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../products';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  if (!product) return <div className="p-8">Product not found.</div>;

  return (
    <div className="p-8">
      <img src={product.image} alt={product.name} className="w-96 h-96 object-cover mb-4" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mb-4">${product.price}</p>
      <button className="bg-black text-white px-6 py-2 rounded">Add to Cart</button>
    </div>
  );
}
