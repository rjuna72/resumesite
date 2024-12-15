'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  
  return (
    <nav className="flex justify-center">
        
        <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/resume" className="hover:underline">Resume</Link>
          </div>
     
    </nav>
  );
}