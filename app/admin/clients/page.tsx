'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Users,
  TrendingUp,
  ArrowUpRight,
  BarChart3,
  Eye,
  Settings,
  Image as ImageIcon
} from 'lucide-react';

// Types
interface Client {
  id: string;
  name: string;
  logoLight: string;
  logoDark: string;
  status: 'active' | 'inactive';
  addedDate: string;
  category: string;
}

interface ClientScrollerSettings {
  heading: string;
  subheading: string;
  bottomText: string;
  animationSpeed: number;
  showGradients: boolean;
  pauseOnHover: boolean;
}

export default function ClientsAdminPage() {
  // Mock data for clients
  const [clients, setClients] = useState<Client[]>([
    {
      id: '1',
      name: 'Airbnb',
      logoLight: '/client_logo_light/airbnb.png',
      logoDark: '/client_logo_dark/airbnb.png',
      status: 'active',
      addedDate: '2024-01-15',
      category: 'Technology'
    },
    {
      id: '2',
      name: 'Envato',
      logoLight: '/client_logo_light/envato.png',
      logoDark: '/client_logo_dark/envato.png',
      status: 'active',
      addedDate: '2024-01-20',
      category: 'Creative'
    },
    {
      id: '3',
      name: 'Slack',
      logoLight: '/client_logo_light/slack.png',
      logoDark: '/client_logo_dark/slack.png',
      status: 'active',
      addedDate: '2024-02-01',
      category: 'Communication'
    },
    {
      id: '4',
      name: 'Zoom',
      logoLight: '/client_logo_light/zoom.png',
      logoDark: '/client_logo_dark/zoom.png',
      status: 'active',
      addedDate: '2024-02-10',
      category: 'Communication'
    }
  ]);

  // ClientScroller settings
  const [settings, setSettings] = useState<ClientScrollerSettings>({
    heading: 'Trusted by Global Brands',
    subheading: 'Leading companies worldwide rely on our translation expertise',
    bottomText: 'Join 1000+ companies that trust our translation services',
    animationSpeed: 30,
    showGradients: true,
    pauseOnHover: true
  });

  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [newClient, setNewClient] = useState<Partial<Client>>({
    name: '',
    logoLight: '',
    logoDark: '',
    status: 'active',
    category: ''
  });

  // Filter clients
  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || client.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || client.category === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Get unique categories
  const categories = Array.from(new Set(clients.map(client => client.category)));

  // Statistics
  const stats = {
    total: clients.length,
    active: clients.filter(c => c.status === 'active').length,
    inactive: clients.filter(c => c.status === 'inactive').length,
    categories: categories.length
  };

  // Handle add client
  const handleAddClient = () => {
    if (!newClient.name || !newClient.logoLight || !newClient.logoDark || !newClient.category) {
      alert('Please fill in all required fields');
      return;
    }

    const client: Client = {
      id: Date.now().toString(),
      name: newClient.name,
      logoLight: newClient.logoLight,
      logoDark: newClient.logoDark,
      status: newClient.status as 'active' | 'inactive',
      category: newClient.category,
      addedDate: new Date().toISOString().split('T')[0]
    };

    setClients([...clients, client]);
    setNewClient({ name: '', logoLight: '', logoDark: '', status: 'active', category: '' });
    setShowAddModal(false);
  };

  // Handle edit client
  const handleEditClient = (client: Client) => {
    setEditingClient(client);
    setNewClient(client);
    setShowAddModal(true);
  };

  // Handle update client
  const handleUpdateClient = () => {
    if (!editingClient || !newClient.name || !newClient.logoLight || !newClient.logoDark || !newClient.category) {
      alert('Please fill in all required fields');
      return;
    }

    setClients(clients.map(client => 
      client.id === editingClient.id 
        ? { ...client, ...newClient } as Client
        : client
    ));
    setEditingClient(null);
    setNewClient({ name: '', logoLight: '', logoDark: '', status: 'active', category: '' });
    setShowAddModal(false);
  };

  // Handle delete client
  const handleDeleteClient = (id: string) => {
    if (confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter(client => client.id !== id));
    }
  };

  // Handle settings update
  const handleUpdateSettings = () => {
    // In a real app, this would save to backend
    setShowSettingsModal(false);
    alert('Settings updated successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Client Management</h1>
          <p className="text-muted-foreground">Manage client logos and ClientScroller settings</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setShowSettingsModal(true)} variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button onClick={() => setShowAddModal(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Client
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Clients</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1" />
              +2 from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active</CardTitle>
            <Eye className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.active}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              All clients active
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Inactive</CardTitle>
            <Edit className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.inactive}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Edit className="h-3 w-3 mr-1" />
              Ready to activate
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Categories</CardTitle>
            <BarChart3 className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.categories}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3 mr-1" />
              Diverse portfolio
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search clients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as 'all' | 'active' | 'inactive')}
                className="px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clients Table */}
      <Card>
        <CardHeader>
          <CardTitle>Clients ({filteredClients.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Client</th>
                  <th className="text-left py-3 px-4 font-medium">Category</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-left py-3 px-4 font-medium">Added Date</th>
                  <th className="text-left py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client) => (
                  <tr key={client.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                          <ImageIcon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="font-medium">{client.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Light: {client.logoLight.split('/').pop()}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="secondary">{client.category}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={client.status === 'active' ? 'default' : 'secondary'}>
                        {client.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">
                      {new Date(client.addedDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEditClient(client)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteClient(client.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Add/Edit Client Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">
              {editingClient ? 'Edit Client' : 'Add New Client'}
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium">Client Name *</label>
                <Input
                  id="name"
                  value={newClient.name || ''}
                  onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                  placeholder="Enter client name"
                />
              </div>
              <div>
                <label htmlFor="category" className="text-sm font-medium">Category *</label>
                <Input
                  id="category"
                  value={newClient.category || ''}
                  onChange={(e) => setNewClient({ ...newClient, category: e.target.value })}
                  placeholder="e.g., Technology, Creative, Communication"
                />
              </div>
              <div>
                <label htmlFor="logoLight" className="text-sm font-medium">Light Theme Logo Path *</label>
                <Input
                  id="logoLight"
                  value={newClient.logoLight || ''}
                  onChange={(e) => setNewClient({ ...newClient, logoLight: e.target.value })}
                  placeholder="/client_logo_light/example.png"
                />
              </div>
              <div>
                <label htmlFor="logoDark" className="text-sm font-medium">Dark Theme Logo Path *</label>
                <Input
                  id="logoDark"
                  value={newClient.logoDark || ''}
                  onChange={(e) => setNewClient({ ...newClient, logoDark: e.target.value })}
                  placeholder="/client_logo_dark/example.png"
                />
              </div>
              <div>
                <label htmlFor="status" className="text-sm font-medium">Status</label>
                <select
                  id="status"
                  value={newClient.status || 'active'}
                  onChange={(e) => setNewClient({ ...newClient, status: e.target.value as 'active' | 'inactive' })}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setShowAddModal(false);
                  setEditingClient(null);
                  setNewClient({ name: '', logoLight: '', logoDark: '', status: 'active', category: '' });
                }}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={editingClient ? handleUpdateClient : handleAddClient}
                className="flex-1"
              >
                {editingClient ? 'Update Client' : 'Add Client'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">ClientScroller Settings</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="heading" className="text-sm font-medium">Section Heading</label>
                <Input
                  id="heading"
                  value={settings.heading}
                  onChange={(e) => setSettings({ ...settings, heading: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="subheading" className="text-sm font-medium">Subheading</label>
                <Textarea
                  id="subheading"
                  value={settings.subheading}
                  onChange={(e) => setSettings({ ...settings, subheading: e.target.value })}
                  rows={2}
                />
              </div>
              <div>
                <label htmlFor="bottomText" className="text-sm font-medium">Bottom Text</label>
                <Input
                  id="bottomText"
                  value={settings.bottomText}
                  onChange={(e) => setSettings({ ...settings, bottomText: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="animationSpeed" className="text-sm font-medium">Animation Speed (seconds)</label>
                <Input
                  id="animationSpeed"
                  type="number"
                  value={settings.animationSpeed}
                  onChange={(e) => setSettings({ ...settings, animationSpeed: parseInt(e.target.value) })}
                  min="10"
                  max="60"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="showGradients"
                  checked={settings.showGradients}
                  onChange={(e) => setSettings({ ...settings, showGradients: e.target.checked })}
                />
                <label htmlFor="showGradients" className="text-sm font-medium">Show gradient overlays</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="pauseOnHover"
                  checked={settings.pauseOnHover}
                  onChange={(e) => setSettings({ ...settings, pauseOnHover: e.target.checked })}
                />
                <label htmlFor="pauseOnHover" className="text-sm font-medium">Pause animation on hover</label>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Button
                variant="outline"
                onClick={() => setShowSettingsModal(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleUpdateSettings}
                className="flex-1"
              >
                Update Settings
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}