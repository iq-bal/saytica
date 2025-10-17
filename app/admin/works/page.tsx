"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Calendar,
  User,
  Tag,
  Image as ImageIcon,
  ExternalLink,
  CheckCircle,
  Archive,
  TrendingUp,
  ArrowUpRight,
  Briefcase
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  tags: string[];
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  client: string;
  status: "active" | "draft" | "archived";
  createdAt: string;
  updatedAt: string;
}

// Mock data - in production, this would come from an API
const mockProjects: Project[] = [
  {
    id: "1",
    title: "Global Education Platform Localization",
    slug: "global-education-platform-localization",
    image: "/case-studies/global-education.png",
    summary: "Localized a large-scale e-learning platform across 18 languages with consistent terminology, UI patterns, and QA flows.",
    tags: ["Localization", "EdTech", "Multilingual"],
    description: "A comprehensive localization project for a leading global education platform serving millions of students worldwide.",
    challenge: "The main challenge was maintaining consistency across multiple languages while ensuring educational content remained pedagogically sound.",
    solution: "We implemented a robust localization workflow with specialized educational translators, comprehensive glossaries, and rigorous QA processes.",
    results: ["Successful launch in 18 markets", "95% user satisfaction rate", "30% increase in global user engagement", "Zero critical localization bugs post-launch"],
    technologies: ["Translation Management Systems", "Quality Assurance Tools", "Linguistic Testing", "Cultural Adaptation"],
    duration: "8 months",
    client: "Global EdTech Leader",
    status: "active",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: "2",
    title: "Enterprise Knowledge Base Translation",
    slug: "enterprise-knowledge-base-translation",
    image: "/case-studies/technology.png",
    summary: "Structured translation for 1,200+ articles with glossary alignment, review loops, and continuous delivery.",
    tags: ["Translation", "Technical", "Glossary"],
    description: "A large-scale technical documentation translation project for a Fortune 500 enterprise.",
    challenge: "Managing the complexity of technical terminology across different product lines while maintaining consistency.",
    solution: "We developed a sophisticated glossary management system and implemented automated quality checks.",
    results: ["1,200+ articles translated", "99.8% terminology consistency", "50% reduction in translation turnaround time", "Seamless integration with client's CMS"],
    technologies: ["CAT Tools", "Terminology Management", "API Integration", "Automated QA"],
    duration: "6 months",
    client: "Fortune 500 Technology Company",
    status: "active",
    createdAt: "2024-01-12T14:30:00Z",
    updatedAt: "2024-01-12T14:30:00Z"
  },
  {
    id: "3",
    title: "Voiceover & Subtitling for Product Demos",
    slug: "voiceover-subtitling-product-demos",
    image: "/case-studies/console.png",
    summary: "Produced multilingual voiceover and timed subtitles, integrated with a modern media pipeline and versioning.",
    tags: ["Media", "Voiceover", "Subtitles"],
    description: "A comprehensive multimedia localization project involving voiceover production and subtitling for product demonstration videos.",
    challenge: "Synchronizing voiceover timing with existing video content while maintaining natural speech patterns.",
    solution: "We established a professional recording studio network and developed custom timing algorithms for subtitle optimization.",
    results: ["25 languages supported", "Professional studio quality", "100% lip-sync accuracy", "Automated subtitle generation pipeline"],
    technologies: ["Professional Recording Studios", "Subtitle Timing Software", "Voice Talent Network", "Quality Control Systems"],
    duration: "4 months",
    client: "SaaS Platform Provider",
    status: "draft",
    createdAt: "2024-01-10T09:15:00Z",
    updatedAt: "2024-01-10T09:15:00Z"
  }
];

const ProjectForm = ({ 
  project, 
  onSave, 
  onCancel 
}: { 
  project?: Project; 
  onSave: (project: Partial<Project>) => void; 
  onCancel: () => void; 
}) => {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    slug: project?.slug || "",
    image: project?.image || "",
    summary: project?.summary || "",
    tags: project?.tags?.join(", ") || "",
    description: project?.description || "",
    challenge: project?.challenge || "",
    solution: project?.solution || "",
    results: project?.results?.join("\n") || "",
    technologies: project?.technologies?.join(", ") || "",
    duration: project?.duration || "",
    client: project?.client || "",
    status: project?.status || "draft"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      tags: formData.tags.split(",").map(tag => tag.trim()).filter(Boolean),
      results: formData.results.split("\n").map(result => result.trim()).filter(Boolean),
      technologies: formData.technologies.split(",").map(tech => tech.trim()).filter(Boolean),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          {project ? "Edit Project" : "Add New Project"}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Title
              </label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Project title"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Slug
              </label>
              <Input
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="project-slug"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Client
              </label>
              <Input
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                placeholder="Client name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Duration
              </label>
              <Input
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                placeholder="e.g., 6 months"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Image URL
              </label>
              <Input
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="/case-studies/project-image.png"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as Project["status"] })}
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
              Summary
            </label>
            <Textarea
              value={formData.summary}
              onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
              placeholder="Brief project summary"
              rows={3}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <Textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Detailed project description"
              rows={4}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Challenge
            </label>
            <Textarea
              value={formData.challenge}
              onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
              placeholder="What challenges did this project address?"
              rows={3}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Solution
            </label>
            <Textarea
              value={formData.solution}
              onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
              placeholder="How did you solve the challenges?"
              rows={3}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Results (one per line)
            </label>
            <Textarea
              value={formData.results}
              onChange={(e) => setFormData({ ...formData, results: e.target.value })}
              placeholder="Successful launch in 18 markets&#10;95% user satisfaction rate&#10;30% increase in global user engagement"
              rows={4}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tags (comma-separated)
            </label>
            <Input
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="Localization, EdTech, Multilingual"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Technologies (comma-separated)
            </label>
            <Input
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              placeholder="Translation Management Systems, Quality Assurance Tools"
              required
            />
          </div>
          
          <div className="flex justify-end space-x-4 pt-6">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">
              {project ? "Update Project" : "Create Project"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function WorksManagement() {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | undefined>();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSave = (projectData: Partial<Project>) => {
    if (editingProject) {
      // Update existing project
      setProjects(projects.map(p => 
        p.id === editingProject.id 
          ? { ...p, ...projectData, updatedAt: new Date().toISOString() }
          : p
      ));
    } else {
      // Create new project
      const newProject: Project = {
        id: Date.now().toString(),
        ...projectData as Omit<Project, 'id' | 'createdAt' | 'updatedAt'>,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setProjects([newProject, ...projects]);
    }
    setShowForm(false);
    setEditingProject(undefined);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleDelete = (projectId: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter(p => p.id !== projectId));
    }
  };

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "draft": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "archived": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Works Management</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your portfolio projects and case studies
          </p>
        </div>
        <Button onClick={() => setShowForm(true)} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Project</span>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projects.length}</div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              +15% from last month
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
              {projects.filter(p => p.status === "active").length}
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-500" />
              +22% from last week
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
              {projects.filter(p => p.status === "draft").length}
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <Edit className="h-3 w-3 mr-1 text-blue-500" />
              {projects.filter(p => p.status === "draft").length} in progress
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Archived</CardTitle>
            <Archive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {projects.filter(p => p.status === "archived").length}
            </div>
            <div className="flex items-center text-xs text-muted-foreground mt-1">
              <Archive className="h-3 w-3 mr-1 text-gray-500" />
              Completed projects
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search projects..."
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

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ImageIcon className="h-8 w-8 text-gray-400" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                          {project.title}
                        </h3>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{project.client}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <ExternalLink className="h-4 w-4" />
                          <span>/work/{project.slug}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
                        {project.summary}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.tags.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Created: {new Date(project.createdAt).toLocaleDateString()} • 
                        Updated: {new Date(project.updatedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`/work/${project.slug}`, '_blank')}
                    className="flex items-center space-x-1"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(project)}
                    className="flex items-center space-x-1"
                  >
                    <Edit className="h-4 w-4" />
                    <span>Edit</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(project.id)}
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
        
        {filteredProjects.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <ImageIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {searchTerm || statusFilter !== "all" 
                  ? "Try adjusting your search or filter criteria."
                  : "Get started by creating your first project."
                }
              </p>
              {!searchTerm && statusFilter === "all" && (
                <Button onClick={() => setShowForm(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Project
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <ProjectForm
          project={editingProject}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingProject(undefined);
          }}
        />
      )}
    </div>
  );
}