'use client';


import Link from 'next/link';

export default function Navbar() {
  
  return (
    <nav className="flex justify-center">
        
        <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline text-red-600">About</Link>
            <Link href="/contact" className="hover:underline text-green-600">Contact</Link>
            <Link href="/resume" className="hover:underline text-blue-700">Resume</Link>
          </div>
     
    </nav>
  );
}