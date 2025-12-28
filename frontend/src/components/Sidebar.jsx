import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Sidebar() {
    const { user } = useAuth();

    const baseLinks = [
        { path: '/dashboard', label: 'Dashboard' },
        { path: '/profile', label: 'Profile' },
    ];

    const adminLinks = user?.role === 'admin' ? [
        { path: '/admin', label: 'Admin Dashboard' },
        { path: '/users', label: 'Manage Users' },
    ] : [];

    const allLinks = [...baseLinks, ...adminLinks];

    return (
        <aside className="w-64 bg-slate-800 text-white p-6 min-h-screen">
            <h2 className="text-xl font-bold mb-6">Navigation</h2>
            <nav className="space-y-2">
                {allLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            `block px-4 py-2 rounded transition ${isActive ? 'bg-teal-500 text-white' : 'hover:bg-slate-700'
                            }`
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}