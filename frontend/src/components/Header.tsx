'use client';

import { User, Menu } from 'lucide-react';
// import { useState } from 'react';

/*interface HeaderProps {
  onNavigate: (section: 'home' | 'profile' | '') => void;
}
  */
export default function Header() {
  return (
    <header className="fixed z-50 w-screen left-0 top-0 border-b shadow-sm bg-white">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-4xl font-bold">Graph of Life</h1>
      </div>
      <div className="w-full flex items-center justify-between px-4 h-12">
        <Menu className="h-5 w-5 mx-2" />
        <User className="h-5 w-5 mx-2" />
      </div>
    </header>
  );
}
