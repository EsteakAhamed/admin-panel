import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-slate-900 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Admin Panel</h1>
                {user && (
                    <div className="flex items-center gap-4">
                        <span className="text-sm">Welcome, {user.name}</span>
                        <span className="bg-teal-500 px-3 py-1 rounded text-sm font-semibold">
                            {user.role.toUpperCase()}
                        </span>
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-medium"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}