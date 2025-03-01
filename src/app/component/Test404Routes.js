"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ExternalLink, AlertTriangle } from 'lucide-react';

const Test404Routes = () => {
  const router = useRouter();

  const testRoutes = [
    '/this-page-does-not-exist',
    '/product/999999',
    '/category/non-existent',
    '/api/invalid-endpoint'
  ];

  return (
    <div className="max-w-md mx-auto p-6 mt-8 bg-amber-50 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4 text-amber-950">
        <AlertTriangle size={24} />
        <h2 className="text-lg font-semibold">404 Page Test Links</h2>
      </div>
      
      <div className="space-y-3">
        {testRoutes.map((route) => (
          <Link
            key={route}
            href={route}
            className="flex items-center justify-between p-3 bg-white rounded border border-amber-200 hover:border-amber-400 transition-colors"
          >
            <span className="text-sm text-gray-600">{route}</span>
            <ExternalLink size={16} className="text-amber-950" />
          </Link>
        ))}
      </div>
      
      <button
        onClick={() => router.push('/random-' + Math.random())}
        className="mt-4 w-full p-3 bg-amber-950 text-white rounded hover:bg-amber-900 transition-colors"
      >
        Test Random Invalid Route
      </button>
      
      <p className="mt-4 text-xs text-gray-500">
        Click any link above to test the 404 page. All links should trigger the not-found page.
      </p>
    </div>
  );
};

export default Test404Routes;