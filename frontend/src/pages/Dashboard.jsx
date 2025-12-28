import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { User, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Dashboard</h2>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid gap-6 md:grid-cols-2"
            >
                {/* Welcome Card */}
                <Card className="md:col-span-2 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20">
                    <CardHeader>
                        <CardTitle className="text-2xl">Welcome back, {user?.name}!</CardTitle>
                        <CardDescription>
                            You are logged in as a <span className="font-semibold capitalize text-indigo-400">{user?.role}</span>.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-zinc-400 mb-6">
                            This is your personal dashboard. From here you can manage your profile settings
                            {user?.role === 'admin' && ' and access administrative controls'}.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/profile">
                                <Button className="gap-2">
                                    <User className="w-4 h-4" />
                                    View Profile
                                </Button>
                            </Link>
                            {user?.role === 'admin' && (
                                <Link to="/admin">
                                    <Button variant="secondary" className="gap-2">
                                        <Shield className="w-4 h-4" />
                                        Admin Panel
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Info / User Stats could go here later */}
            </motion.div>
        </div>
    );
};

export default Dashboard;