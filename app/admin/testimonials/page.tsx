"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Edit, 
  Trash2, 
  User,
  Quote,
  Star,
  CheckCircle,
  MessageSquare,
  TrendingUp,
  ArrowUpRight
} from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  designation: string;
  src: string;
  status: "active" | "draft" | "archived";
  rating?: number;
  company?: string;
  createdAt: string;
  updatedAt: string;
}

// Mock data - in production, this would come from an API
const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for. Their translation services are unmatched in quality and speed.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/testimonials/sarah.avif",
    status: "active",
    rating: 5,
    company: "TechFlow",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "2",
    quote: "Implementation was seamless and the results exceeded our expectations. The team's expertise in localization helped us expand into new markets effortlessly. Highly recommend their services.",
    name: "Michael Rodriguez",
    designation: "CTO at GlobalTech",
    src: "/testimonials/michael.avif",
    status: "active",
    rating: 5,
    company: "GlobalTech",
    createdAt: "2024-01-12T14:30:00Z",
    updatedAt: "2024-01-12T14:30:00Z"
  },
  {
    id: "3",
    quote: "This solution has significantly improved our team's productivity. The quality of translations and cultural adaptation is outstanding. We've seen a 40% increase in international engagement.",
    name: "Emily Watson",
    designation: "Marketing Director at InnovateCorp",
    src: "/testimonials/emily.avif",
    status: "active",
    rating: 5,
    company: "InnovateCorp",
    createdAt: "2024-01-10T09:15:00Z",
    updatedAt: "2024-01-10T09:15:00Z"
  },
  {
    id: "4",
    quote: "Outstanding support and robust features. It's rare to find a service that delivers on all its promises. Their multilingual expertise has been crucial for our global expansion.",
    name: "James Thompson",
    designation: "CEO at StartupVenture",
    src: "/testimonials/james.avif",
    status: "draft",
    rating: 5,
    company: "StartupVenture",
    createdAt: "2024-01-08T16:45:00Z",
    updatedAt: "2024-01-08T16:45:00Z"
  },
  {
    id: "5",
    quote: "The scalability and performance have been game-changing for our organization. We've been able to localize content for 15+ markets with incredible efficiency and accuracy.",
    name: "Lisa Park",
    designation: "Operations Manager at ScaleUp",
    src: "/testimonials/lisa.avif",
    status: "active",
    rating: 5,
    company: "ScaleUp",
    createdAt: "2024-01-05T11:20:00Z",
    updatedAt: "2024-01-05T11:20:00Z"
  }
];

const TestimonialForm = ({ 
  testimonial, 
  onSave, 
  onCancel 
}: { 
  testimonial?: Testimonial; 
  onSave: (testimonial: Partial<Testimonial>) => void; 
  onCancel: () => void; 
}) => {
  const [formData, setFormData] = useState({
    quote: testimonial?.quote || "",
    name: testimonial?.name || "",
    designation: testimonial?.designation || "",
    src: testimonial?.src || "",
    company: testimonial?.company || "",
    rating: testimonial?.rating || 5,
    status: testimonial?.status || "draft"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          {testimonial ? "Edit Testimonial" : "Add New Testimonial"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Client name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company
              </label>
              <Input
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Company name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Designation
              </label>
              <Input
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                placeholder="Job title at Company"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Avatar URL
              </label>
              <Input
                value={formData.src}
                onChange={(e) => setFormData({ ...formData, src: e.target.value })}
                placeholder="/testimonials/avatar.avif"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Rating
              </label>
              <select
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              >
                <option value={5}>5 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={2}>2 Stars</option>
                <option value={1}>1 Star</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as Testimonial["status"] })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              >
                <option value="draft">Draft</option>
                <option value="active">Active</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Testimonial Quote
            </label>
            <Textarea
              value={formData.quote}
              onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
              placeholder="Write the client's testimonial here..."
              rows={6}
              required
            />
          </div>
          
          <div className="flex justify-end space-x-4 pt-6">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">
              {testimonial ? "Update Testimonial" : "Create Testimonial"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function TestimonialsManagement() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(mockTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | undefined>();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.quote.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || testimonial.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSave = (testimonialData: Partial<Testimonial>) => {
    if (editingTestimonial) {
      // Update existing testimonial
      setTestimonials(testimonials.map(t => 
        t.id === editingTestimonial.id 
          ? { ...t, ...testimonialData, updatedAt: new Date().toISOString() }
          : t
      ));
    } else {
      // Create new testimonial
      const newTestimonial: Testimonial = {
        id: Date.now().toString(),
        ...testimonialData as Omit<Testimonial, 'id' | 'createdAt' | 'updatedAt'>,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setTestimonials([newTestimonial, ...testimonials]);
    }
    setShowForm(false);
    setEditingTestimonial(undefined);
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setShowForm(true);
  };

  const handleDelete = (testimonialId: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      setTestimonials(testimonials.filter(t => t.id !== testimonialId));
    }
  };

  const getStatusColor = (status: Testimonial["status"]) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "draft": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "archived": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating 
            ? "text-yellow-400 fill-current" 
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Testimonials Management</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage client testimonials and reviews
          </p>
        </div>
        <Button onClick={() => setShowForm(true)} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Testimonial</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Testimonials</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{testimonials.length}</div>
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
              {testimonials.filter(t => t.status === "active").length}
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
              +8% from last week
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
            <Edit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {testimonials.filter(t => t.status === "draft").length}
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <Edit className="h-3 w-3 mr-1 text-blue-500" />
              {testimonials.filter(t => t.status === "draft").length} pending review
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(testimonials.reduce((acc, t) => acc + (t.rating || 0), 0) / testimonials.length).toFixed(1)}
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <Star className="h-3 w-3 mr-1 text-yellow-500" />
              Based on {testimonials.length} reviews
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search testimonials..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="draft">Draft</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* Testimonials List */}
      <div className="space-y-4">
        {filteredTestimonials.map((testimonial) => (
          <Card key={testimonial.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {testimonial.src ? (
                        <Image 
                          src={testimonial.src} 
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h3>
                        <Badge className={getStatusColor(testimonial.status)}>
                          {testimonial.status}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <span>{testimonial.designation}</span>
                        {testimonial.company && (
                          <>
                            <span>•</span>
                            <span>{testimonial.company}</span>
                          </>
                        )}
                        {testimonial.rating && (
                          <>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              {renderStars(testimonial.rating)}
                            </div>
                          </>
                        )}
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-3">
                        <Quote className="h-5 w-5 text-gray-400 mb-2" />
                        <p className="text-gray-700 dark:text-gray-300 italic line-clamp-3">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                      </div>
                      
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Created: {new Date(testimonial.createdAt).toLocaleDateString()} • 
                        Updated: {new Date(testimonial.updatedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(testimonial)}
                    className="flex items-center space-x-1"
                  >
                    <Edit className="h-4 w-4" />
                    <span>Edit</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(testimonial.id)}
                    className="flex items-center space-x-1 text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span>Delete</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {filteredTestimonials.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No testimonials found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {searchTerm || statusFilter !== "all" 
                  ? "Try adjusting your search or filter criteria."
                  : "Get started by adding your first testimonial."
                }
              </p>
              {!searchTerm && statusFilter === "all" && (
                <Button onClick={() => setShowForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Testimonial
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <TestimonialForm
          testimonial={editingTestimonial}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingTestimonial(undefined);
          }}
        />
      )}
    </div>
  );
}