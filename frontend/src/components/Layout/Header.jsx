import React from 'react';
import { Menu, Bell, UserCircle } from 'lucide-react';
import Button from '../ui/Button';

const Header = ({ toggleSidebar }) => {
    return (
        <header className="sticky top-0 z-10 h-16 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
            <div className="flex items-center justify-between h-full px-4 lg:px-8">

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleSidebar}
                    className="p-2 -ml-2 text-zinc-400 rounded-lg lg:hidden hover:bg-zinc-800 hover:text-white"
                >
                    <Menu className="w-6 h-6" />
                </button>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4 ml-auto">
                    <button className="p-2 text-zinc-400 rounded-lg hover:bg-zinc-800 hover:text-white relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-zinc-950"></span>
                    </button>

                    <div className="flex items-center gap-3 pl-4 border-l border-zinc-800">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-medium text-zinc-100">User Name</p>
                            <p className="text-xs text-zinc-500">Admin</p>
                        </div>
                        <div className="h-9 w-9 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 ring-2 ring-zinc-800 overflow-hidden">
                            <UserCircle className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
