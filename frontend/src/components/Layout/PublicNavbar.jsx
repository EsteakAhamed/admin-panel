import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const PublicNavbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center font-bold text-white">
                        A
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        AdminPanel
                    </span>
                </Link>
                <div className="flex items-center gap-4">
                    <Link to="/login">
                        <Button variant="ghost" size="sm">Log In</Button>
                    </Link>
                    <Link to="/register">
                        <Button size="sm">Get Started</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default PublicNavbar;
