import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-zinc-800 bg-zinc-950/50 backdrop-blur-sm py-6 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-zinc-500">
                    © 2024 AdminPanel. All rights reserved.
                </p>
                <div className="flex items-center gap-6 text-sm text-zinc-500">
                    <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-zinc-300 transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
