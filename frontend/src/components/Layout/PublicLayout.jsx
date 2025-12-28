import React from 'react';
import { Outlet } from 'react-router-dom';
import PublicNavbar from './PublicNavbar';
import Footer from './Footer';

const PublicLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30">
            <PublicNavbar />
            <main className="flex-1 flex flex-col pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
