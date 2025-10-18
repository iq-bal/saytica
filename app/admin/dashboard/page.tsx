"use client";

import { useState } from "react";
import { 
  BarChart3, 
  Database, 
  Users, 
  Download, 
  TrendingUp, 
  Globe, 
  FileText, 
  ImageIcon, 
  Headphones, 
  BookOpen,
  Activity,
  Calendar,
  Filter,
  Search,
  ArrowUpRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Mock data for dashboard metrics
const dashboardStats = {
  totalDatasets: 1247,
  totalDownloads: 45623,
  activeUsers: 8934,
  dataVolume: "2.4TB",
  monthlyGrowth: 12.5,
  weeklyActive: 2341
};

const datasetBreakdown = [
  { type: "Audio", count: 423, percentage: 34, icon: Headphones, color: "bg-blue-500" },
  { type: "Text", count: 387, percentage: 31, icon: FileText, color: "bg-green-500" },
  { type: "Image", count: 298, percentage: 24, icon: ImageIcon, color: "bg-purple-500" },
  { type: "Lex", count: 139, percentage: 11, icon: BookOpen, color: "bg-orange-500" }
];

const recentActivity = [
  { id: 1, action: "New dataset uploaded", dataset: "MDT-AB015", time: "2 hours ago", type: "upload" },
  { id: 2, action: "Dataset downloaded", dataset: "MDT-TX-003", time: "4 hours ago", type: "download" },
  { id: 3, action: "User registered", user: "researcher@university.edu", time: "6 hours ago", type: "user" },
  { id: 4, action: "Dataset updated", dataset: "MDT-IMG-007", time: "1 day ago", type: "update" },
  { id: 5, action: "New dataset uploaded", dataset: "MDT-LEX-012", time: "2 days ago", type: "upload" }
];

const topDatasets = [
  { id: "mdt-ab012", title: "Mandarin Conversational Speech", downloads: 2341, type: "Audio" },
  { id: "mdt-tx-001", title: "Financial Document Classification", downloads: 1987, type: "Text" },
  { id: "mdt-img-003", title: "Medical Image Recognition", downloads: 1654, type: "Image" },
  { id: "mdt-lex-005", title: "Legal Terminology Database", downloads: 1432, type: "Lex" },
  { id: "mdt-ab008", title: "English Speech Recognition", downloads: 1298, type: "Audio" }
];

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState("7d");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Overview of your data platform performance and analytics
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <select 
                  value={timeRange} 
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="bg-background border border-border rounded-md px-3 py-1 text-sm"
                >
                  <option value="24h">Last 24 hours</option>
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </select>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Datasets</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalDatasets.toLocaleString()}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +{dashboardStats.monthlyGrowth}% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
              <Download className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.totalDownloads.toLocaleString()}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
                +18.2% from last week
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.activeUsers.toLocaleString()}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <Activity className="h-3 w-3 mr-1 text-blue-500" />
                {dashboardStats.weeklyActive.toLocaleString()} this week
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Data Volume</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{dashboardStats.dataVolume}</div>
              <div className="flex items-center text-xs text-muted-foreground mt-1">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                +245GB this month
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Dataset Breakdown */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Dataset Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {datasetBreakdown.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.type} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${item.color} bg-opacity-10`}>
                            <Icon className={`h-4 w-4 ${item.color.replace('bg-', 'text-')}`} />
                          </div>
                          <div>
                            <div className="font-medium">{item.type} Datasets</div>
                            <div className="text-sm text-muted-foreground">{item.count} datasets</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{item.percentage}%</div>
                          <div className="w-20 bg-muted rounded-full h-2 mt-1">
                            <div 
                              className={`h-2 rounded-full ${item.color}`}
                              style={{ width: `${item.percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Top Datasets */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Top Performing Datasets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topDatasets.map((dataset, index) => (
                    <div key={dataset.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-medium text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-medium">{dataset.title}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">{dataset.type}</Badge>
                            {dataset.id}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{dataset.downloads.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">downloads</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Activity
                  <Button variant="ghost" size="sm">View All</Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3">
                      <div className={`p-1.5 rounded-full ${
                        activity.type === 'upload' ? 'bg-green-100 text-green-600' :
                        activity.type === 'download' ? 'bg-blue-100 text-blue-600' :
                        activity.type === 'user' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {activity.type === 'upload' && <ArrowUpRight className="h-3 w-3" />}
                        {activity.type === 'download' && <Download className="h-3 w-3" />}
                        {activity.type === 'user' && <Users className="h-3 w-3" />}
                        {activity.type === 'update' && <Activity className="h-3 w-3" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium">{activity.action}</div>
                        <div className="text-xs text-muted-foreground truncate">
                          {activity.dataset || activity.user}
                        </div>
                        <div className="text-xs text-muted-foreground">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Database className="h-4 w-4 mr-2" />
                  Upload New Dataset
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Search className="h-4 w-4 mr-2" />
                  Search Datasets
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}