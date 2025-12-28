import React from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { User, Mail, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Profile() {
    const { user } = useAuth();

    return (
        <ProtectedRoute>
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100">My Profile</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>View your account details</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                <div className="p-3 rounded-full bg-indigo-500/10 text-indigo-400">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-zinc-400">Full Name</p>
                                    <p className="text-lg font-medium text-zinc-100">{user?.name || 'User Name'}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                <div className="p-3 rounded-full bg-pink-500/10 text-pink-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-zinc-400">Email Address</p>
                                    <p className="text-lg font-medium text-zinc-100">{user?.email || 'user@example.com'}</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                                <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-zinc-400">Role</p>
                                    <p className="text-lg font-medium text-zinc-100 capitalize">{user?.role || 'User'}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </ProtectedRoute>
    );
}