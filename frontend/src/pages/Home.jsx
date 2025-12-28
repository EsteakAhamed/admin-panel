import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const Home = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center text-center relative overflow-hidden p-4">
            {/* Background Blobs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl space-y-8"
            >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Modern <span className="text-indigo-400">Admin</span> Controls
                </h1>
                <p className="text-xl text-zinc-400 leading-relaxed">
                    A powerful, secure, and role-based administration system.
                    Manage users, track statistics, and control access with ease.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link to="/register">
                        <Button size="lg" className="px-8">
                            Create Account
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button variant="secondary" size="lg" className="px-8">
                            Sign In
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
