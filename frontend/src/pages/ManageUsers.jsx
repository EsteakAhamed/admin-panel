import React, { useState, useEffect } from 'react';
import AdminRoute from '../components/AdminRoute';
import api from '../utils/api';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Shield, User, Ban, CheckCircle } from 'lucide-react';



export default function ManageUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {

            const response = await api.get('/users');
            setUsers(response.data.users);
        } catch (error) {
            console.error('Failed to fetch users:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const updateRole = async (userId, newRole) => {
        try {
            await api.put(`/users/${userId}/role`, { role: newRole });
            fetchUsers();
        } catch (error) {
            console.error('Failed to update role:', error);
        }
    };

    const toggleStatus = async (userId, currentStatus) => {
        try {
            if (currentStatus === 'active') {
                await api.put(`/users/${userId}/suspend`);
            } else {
                await api.put(`/users/${userId}/activate`);
            }
            fetchUsers();
        } catch (error) {
            console.error('Failed to toggle status:', error);
        }
    };

    return (
        <AdminRoute>
            <div className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100">User Management</h2>
                </div>

                {loading ? (
                    <div className="text-zinc-400">Loading users...</div>
                ) : (
                    <Card>
                        <CardHeader>
                            <CardTitle>System Users</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-zinc-400 uppercase bg-zinc-900/50">
                                        <tr>
                                            <th className="px-6 py-3 rounded-l-lg">Name</th>
                                            <th className="px-6 py-3">Email</th>
                                            <th className="px-6 py-3">Role</th>
                                            <th className="px-6 py-3">Status</th>
                                            <th className="px-6 py-3 rounded-r-lg">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-zinc-800">
                                        {users.map((user) => (
                                            <tr key={user._id} className="hover:bg-zinc-900/30 transition-colors">
                                                <td className="px-6 py-4 font-medium text-zinc-200">{user.name}</td>
                                                <td className="px-6 py-4 text-zinc-400">{user.email}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        {user.role === 'admin' ? <Shield className="w-4 h-4 text-purple-400" /> : <User className="w-4 h-4 text-zinc-400" />}
                                                        <select
                                                            value={user.role}
                                                            onChange={(e) => updateRole(user._id, e.target.value)}
                                                            className="bg-zinc-900 border border-zinc-700 text-zinc-300 text-xs rounded-lg block p-1.5 focus:ring-indigo-500 focus:border-indigo-500"
                                                        >
                                                            <option value="user">User</option>
                                                            <option value="admin">Admin</option>
                                                        </select>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${user.status === 'active'
                                                        ? 'bg-emerald-500/10 text-emerald-400'
                                                        : 'bg-red-500/10 text-red-400'
                                                        }`}>
                                                        {user.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <Button
                                                        onClick={() => toggleStatus(user._id, user.status)}
                                                        variant={user.status === 'active' ? 'destructive' : 'primary'}
                                                        size="sm"
                                                        className="flex items-center gap-2"
                                                    >
                                                        {user.status === 'active' ? (
                                                            <>
                                                                <Ban className="w-3 h-3" /> Suspend
                                                            </>
                                                        ) : (
                                                            <>
                                                                <CheckCircle className="w-3 h-3" /> Activate
                                                            </>
                                                        )}
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AdminRoute>
    );
}