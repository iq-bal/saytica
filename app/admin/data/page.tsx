"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Database, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Eye,
  Download,
  Upload,
  CheckCircle,
  TrendingUp,
  ArrowUpRight,
  BarChart3
} from "lucide-react";

type Dataset = {
  id: string;
  title: string;
  type: "Audio" | "Text" | "Image" | "Lex";
  openSource?: boolean;
  samples: number;
  language: string;
  industry: string;
  application: string;
  dataType: "Training Set" | "Test Set";
  region: string;
  topic: string;
  status: "Active" | "Draft" | "Archived";
  createdAt: string;
  updatedAt: string;
};

// Mock data for demonstration
const mockDatasets: Dataset[] = [
  {
    id: "1",
    title: "English Conversational Speech Dataset",
    type: "Audio",
    openSource: true,
    samples: 50000,
    language: "English",
    industry: "Automotive",
    application: "Automotive Virtual Assistant",
    dataType: "Training Set",
    region: "USA",
    topic: "Daily Life",
    status: "Active",
    createdAt: "2024-01-15",
    updatedAt: "2024-01-20"
  },
  {
    id: "2",
    title: "Mandarin Text Classification Dataset",
    type: "Text",
    samples: 25000,
    language: "Mandarin Chinese",
    industry: "Financial Services",
    application: "Voice Commerce & Consumer Service",
    dataType: "Test Set",
    region: "China",
    topic: "Business & Economy",
    status: "Active",
    createdAt: "2024-01-10",
    updatedAt: "2024-01-18"
  },
  {
    id: "3",
    title: "Medical Image Recognition Dataset",
    type: "Image",
    samples: 15000,
    language: "English",
    industry: "Healthcare",
    application: "Healthcare",
    dataType: "Training Set",
    region: "USA",
    topic: "Health",
    status: "Draft",
    createdAt: "2024-01-12",
    updatedAt: "2024-01-19"
  }
];

const DATA_TYPES = ["All", "Audio", "Text", "Image", "Lex"] as const;
const STATUSES = ["All", "Active", "Draft", "Archived"] as const;
const INDUSTRIES = ["All", "Automotive", "Financial Services", "Healthcare", "Smart Home", "Smart Devices"] as const;

export default function DataManagementPage() {
  const [datasets, setDatasets] = useState<Dataset[]>(mockDatasets);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [showFilters, setShowFilters] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDataset, setNewDataset] = useState<Partial<Dataset>>({
    title: "",
    type: "Audio",
    samples: 0,
    language: "English",
    industry: "Automotive",
    application: "Automotive Virtual Assistant",
    dataType: "Training Set",
    region: "USA",
    topic: "Daily Life",
    status: "Draft"
  });

  const filteredDatasets = useMemo(() => {
    return datasets.filter(dataset => {
      const matchesSearch = dataset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           dataset.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           dataset.application.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesType = selectedType === "All" || dataset.type === selectedType;
      const matchesStatus = selectedStatus === "All" || dataset.status === selectedStatus;
      const matchesIndustry = selectedIndustry === "All" || dataset.industry === selectedIndustry;
      
      return matchesSearch && matchesType && matchesStatus && matchesIndustry;
    });
  }, [datasets, searchTerm, selectedType, selectedStatus, selectedIndustry]);

  const handleDeleteDataset = (id: string) => {
    if (confirm("Are you sure you want to delete this dataset?")) {
      setDatasets(prev => prev.filter(dataset => dataset.id !== id));
    }
  };

  const handleStatusChange = (id: string, newStatus: Dataset["status"]) => {
    setDatasets(prev => prev.map(dataset => 
      dataset.id === id 
        ? { ...dataset, status: newStatus, updatedAt: new Date().toISOString().split('T')[0] }
        : dataset
    ));
  };

  const handleAddDataset = () => {
    if (!newDataset.title || !newDataset.samples) {
      alert("Please fill in all required fields");
      return;
    }

    const dataset: Dataset = {
      id: (datasets.length + 1).toString(),
      title: newDataset.title!,
      type: newDataset.type!,
      openSource: false,
      samples: newDataset.samples!,
      language: newDataset.language!,
      industry: newDataset.industry!,
      application: newDataset.application!,
      dataType: newDataset.dataType!,
      region: newDataset.region!,
      topic: newDataset.topic!,
      status: newDataset.status!,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };

    setDatasets(prev => [...prev, dataset]);
    setShowAddModal(false);
    setNewDataset({
      title: "",
      type: "Audio",
      samples: 0,
      language: "English",
      industry: "Automotive",
      application: "Automotive Virtual Assistant",
      dataType: "Training Set",
      region: "USA",
      topic: "Daily Life",
      status: "Draft"
    });
  };

  const getStatusColor = (status: Dataset["status"]) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Draft": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Archived": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: Dataset["type"]) => {
    switch (type) {
      case "Audio": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Text": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Image": return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
      case "Lex": return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Database className="h-6 w-6" />
            Data Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage your datasets, collections, and data resources
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Import
          </Button>
          <Button className="flex items-center gap-2" onClick={() => setShowAddModal(true)}>
            <Plus className="h-4 w-4" />
            Add Dataset
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Datasets</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{datasets.length}</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +12% from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {datasets.filter(d => d.status === "Active").length}
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
              +18% from last week
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Draft</CardTitle>
            <Edit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {datasets.filter(d => d.status === "Draft").length}
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <Edit className="h-3 w-3 mr-1 text-blue-500" />
              {datasets.filter(d => d.status === "Draft").length} in progress
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Samples</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {datasets.reduce((sum, d) => sum + d.samples, 0).toLocaleString()}
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              High quality datasets
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search datasets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >
                  {DATA_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >
                  {STATUSES.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                >
                  {INDUSTRIES.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Datasets Table */}
      <Card>
        <CardHeader>
          <CardTitle>Datasets ({filteredDatasets.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Dataset
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Samples
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Language
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Updated
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredDatasets.map((dataset) => (
                  <tr key={dataset.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {dataset.title}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {dataset.application}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge className={getTypeColor(dataset.type)}>
                        {dataset.type}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {dataset.samples.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {dataset.language}
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={dataset.status}
                        onChange={(e) => handleStatusChange(dataset.id, e.target.value as Dataset["status"])}
                        className={`text-xs px-2 py-1 rounded-full border-0 focus:ring-2 focus:ring-blue-500 ${getStatusColor(dataset.status)}`}
                      >
                        <option value="Active">Active</option>
                        <option value="Draft">Draft</option>
                        <option value="Archived">Archived</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                      {dataset.updatedAt}
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                          onClick={() => handleDeleteDataset(dataset.id)}
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
          
          {filteredDatasets.length === 0 && (
            <div className="text-center py-12">
              <Database className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-white">No datasets found</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Add Dataset Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Add New Dataset</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAddModal(false)}
                  className="h-8 w-8 p-0"
                >
                  ×
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Title *
                    </label>
                    <Input
                      value={newDataset.title || ""}
                      onChange={(e) => setNewDataset(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter dataset title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Type
                    </label>
                    <select
                      value={newDataset.type}
                      onChange={(e) => setNewDataset(prev => ({ ...prev, type: e.target.value as Dataset["type"] }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                      <option value="Audio">Audio</option>
                      <option value="Text">Text</option>
                      <option value="Image">Image</option>
                      <option value="Lex">Lex</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Samples *
                    </label>
                    <Input
                      type="number"
                      value={newDataset.samples || ""}
                      onChange={(e) => setNewDataset(prev => ({ ...prev, samples: parseInt(e.target.value) || 0 }))}
                      placeholder="Number of samples"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Language
                    </label>
                    <select
                      value={newDataset.language}
                      onChange={(e) => setNewDataset(prev => ({ ...prev, language: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                      <option value="English">English</option>
                      <option value="Mandarin Chinese">Mandarin Chinese</option>
                      <option value="Japanese">Japanese</option>
                      <option value="Korean">Korean</option>
                      <option value="Spanish">Spanish</option>
                      <option value="French">French</option>
                      <option value="German">German</option>
                      <option value="Hindi">Hindi</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Industry
                    </label>
                    <select
                      value={newDataset.industry}
                      onChange={(e) => setNewDataset(prev => ({ ...prev, industry: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                      <option value="Automotive">Automotive</option>
                      <option value="Financial Services">Financial Services</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Smart Home">Smart Home</option>
                      <option value="Smart Devices">Smart Devices</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Application
                    </label>
                    <select
                      value={newDataset.application}
                      onChange={(e) => setNewDataset(prev => ({ ...prev, application: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                      <option value="Automotive Virtual Assistant">Automotive Virtual Assistant</option>
                      <option value="Voice Commerce & Consumer Service">Voice Commerce & Consumer Service</option>
                      <option value="Smart Home Controls">Smart Home Controls</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Security & Authentication">Security & Authentication</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Data Type
                    </label>
                    <select
                      value={newDataset.dataType}
                      onChange={(e) => setNewDataset(prev => ({ ...prev, dataType: e.target.value as Dataset["dataType"] }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                      <option value="Training Set">Training Set</option>
                      <option value="Test Set">Test Set</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Region
                    </label>
                    <select
                      value={newDataset.region}
                      onChange={(e) => setNewDataset(prev => ({ ...prev, region: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                      <option value="USA">USA</option>
                      <option value="China">China</option>
                      <option value="Japan">Japan</option>
                      <option value="Korea">Korea</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Spain">Spain</option>
                      <option value="India">India</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Topic
                    </label>
                    <select
                      value={newDataset.topic}
                      onChange={(e) => setNewDataset(prev => ({ ...prev, topic: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                      <option value="Daily Life">Daily Life</option>
                      <option value="Business & Economy">Business & Economy</option>
                      <option value="Health">Health</option>
                      <option value="Education & Healthcare">Education & Healthcare</option>
                      <option value="Entertainment">Entertainment</option>
                      <option value="Science & Technology">Science & Technology</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Status
                    </label>
                    <select
                      value={newDataset.status}
                      onChange={(e) => setNewDataset(prev => ({ ...prev, status: e.target.value as Dataset["status"] }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    >
                      <option value="Draft">Draft</option>
                      <option value="Active">Active</option>
                      <option value="Archived">Archived</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleAddDataset}>
                  Add Dataset
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}