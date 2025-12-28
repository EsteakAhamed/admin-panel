import React, { useState, useEffect } from 'react';
import AdminRoute from '../components/AdminRoute';
import api from '../utils/api';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Users, UserCheck, UserX, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {

                const response = await api.get('/users/stats');
                setStats(response.data.stats);
            } catch (error) {
                console.error('Failed to fetch stats:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const statCards = [
        { title: "Total Users", value: stats?.totalUsers, icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
        { title: "Active Users", value: stats?.activeUsers, icon: UserCheck, color: "text-emerald-500", bg: "bg-emerald-500/10" },
        { title: "Suspended", value: stats?.suspendedCount, icon: UserX, color: "text-red-500", bg: "bg-red-500/10" },
        { title: "Admins", value: stats?.adminCount, icon: ShieldAlert, color: "text-purple-500", bg: "bg-purple-500/10" },
    ];

    return (
        <AdminRoute>
            <div className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Admin Overview</h2>
                </div>

                {loading ? (
                    <div className="text-zinc-400">Loading stats...</div>
                ) : stats ? (
                    <>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {statCards.map((stat, index) => (
                                <motion.div
                                    key={stat.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                            <CardTitle className="text-sm font-medium text-zinc-400">
                                                {stat.title}
                                            </CardTitle>
                                            <div className={`p-2 rounded-lg ${stat.bg}`}>
                                                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold text-zinc-100">{stat.value}</div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Registrations</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <thead className="text-xs text-zinc-400 uppercase bg-zinc-900/50">
                                            <tr>
                                                <th className="px-6 py-3 rounded-l-lg">Name</th>
                                                <th className="px-6 py-3">Email</th>
                                                <th className="px-6 py-3">Role</th>
                                                <th className="px-6 py-3 rounded-r-lg">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {stats.recentUsers.map((user) => (
                                                <tr key={user._id} className="border-b border-zinc-800 last:border-0 hover:bg-zinc-900/30 transition-colors">
                                                    <td className="px-6 py-4 font-medium text-zinc-200">{user.name}</td>
                                                    <td className="px-6 py-4 text-zinc-400">{user.email}</td>
                                                    <td className="px-6 py-4 capitalize text-zinc-300">{user.role}</td>
                                                    <td className="px-6 py-4">
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'active'
                                                            ? 'bg-emerald-500/10 text-emerald-400'
                                                            : 'bg-red-500/10 text-red-400'
                                                            }`}>
                                                            {user.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </>
                ) : (
                    <div className="text-red-400">Failed to load stats</div>
                )}
            </div>
        </AdminRoute>
    );
}