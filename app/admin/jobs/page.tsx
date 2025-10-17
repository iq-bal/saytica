"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  MapPin,
  Clock,
  DollarSign,
  Briefcase
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  status: "active" | "draft" | "closed";
  createdAt: string;
  applicants: number;
}

// Mock data
const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    description: "We are looking for a Senior Frontend Developer to join our team...",
    requirements: ["5+ years React experience", "TypeScript proficiency", "Next.js knowledge"],
    benefits: ["Health insurance", "Remote work", "Flexible hours"],
    status: "active",
    createdAt: "2024-01-15",
    applicants: 12
  },
  {
    id: "2",
    title: "Data Scientist",
    department: "Data",
    location: "New York, NY",
    type: "Full-time",
    salary: "$90,000 - $140,000",
    description: "Join our data team to work on cutting-edge ML projects...",
    requirements: ["PhD in relevant field", "Python/R expertise", "ML experience"],
    benefits: ["Health insurance", "401k matching", "Learning budget"],
    status: "active",
    createdAt: "2024-01-10",
    applicants: 8
  },
  {
    id: "3",
    title: "UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Contract",
    salary: "$70 - $90/hour",
    description: "We need a talented UX Designer for a 6-month project...",
    requirements: ["3+ years UX experience", "Figma proficiency", "Portfolio required"],
    benefits: ["Flexible schedule", "Remote options", "Creative freedom"],
    status: "draft",
    createdAt: "2024-01-12",
    applicants: 0
  }
];

const JobForm = ({ 
  job, 
  onSave, 
  onCancel 
}: { 
  job?: Job; 
  onSave: (job: Partial<Job>) => void; 
  onCancel: () => void; 
}) => {
  const [formData, setFormData] = useState({
    title: job?.title || "",
    department: job?.department || "",
    location: job?.location || "",
    type: job?.type || "Full-time",
    salary: job?.salary || "",
    description: job?.description || "",
    requirements: job?.requirements?.join("\n") || "",
    benefits: job?.benefits?.join("\n") || "",
    status: job?.status || "draft"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      requirements: formData.requirements.split("\n").filter(r => r.trim()),
      benefits: formData.benefits.split("\n").filter(b => b.trim()),
    });
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        {job ? "Edit Job" : "Create New Job"}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Job Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Department</label>
            <input
              type="text"
              value={formData.department}
              onChange={(e) => setFormData({...formData, department: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Job Type</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({...formData, type: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Salary Range</label>
            <input
              type="text"
              value={formData.salary}
              onChange={(e) => setFormData({...formData, salary: e.target.value})}
              placeholder="e.g., $80,000 - $120,000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({...formData, status: e.target.value as Job["status"]})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            >
              <option value="draft">Draft</option>
              <option value="active">Active</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Job Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Requirements (one per line)</label>
          <textarea
            value={formData.requirements}
            onChange={(e) => setFormData({...formData, requirements: e.target.value})}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Benefits (one per line)</label>
          <textarea
            value={formData.benefits}
            onChange={(e) => setFormData({...formData, benefits: e.target.value})}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
        </div>
        
        <div className="flex space-x-2">
          <Button type="submit">
            {job ? "Update Job" : "Create Job"}
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  const handleCreateJob = () => {
    setEditingJob(null);
    setShowForm(true);
  };

  const handleEditJob = (job: Job) => {
    setEditingJob(job);
    setShowForm(true);
  };

  const handleSaveJob = (jobData: Partial<Job>) => {
    if (editingJob) {
      // Update existing job
      setJobs(jobs.map(job => 
        job.id === editingJob.id 
          ? { ...job, ...jobData }
          : job
      ));
    } else {
      // Create new job
      const newJob: Job = {
        ...jobData as Job,
        id: Date.now().toString(),
        createdAt: new Date().toISOString().split('T')[0],
        applicants: 0
      };
      setJobs([newJob, ...jobs]);
    }
    setShowForm(false);
    setEditingJob(null);
  };

  const handleDeleteJob = (jobId: string) => {
    if (confirm("Are you sure you want to delete this job?")) {
      setJobs(jobs.filter(job => job.id !== jobId));
    }
  };

  const getStatusColor = (status: Job["status"]) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "draft": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "closed": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  if (showForm) {
    return (
      <div>
        <JobForm
          job={editingJob || undefined}
          onSave={handleSaveJob}
          onCancel={() => {
            setShowForm(false);
            setEditingJob(null);
          }}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Job Postings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage career opportunities and job listings
          </p>
        </div>
        <Button onClick={handleCreateJob} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create Job</span>
        </Button>
      </div>

      <div className="grid gap-4">
        {jobs.map((job) => (
          <Card key={job.id} className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(job.status)}`}>
                    {job.status}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{job.applicants} applicants</span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
                  {job.description}
                </p>
                
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Department: {job.department} • Created: {job.createdAt}
                </div>
              </div>
              
              <div className="flex space-x-2 ml-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditJob(job)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeleteJob(job.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {jobs.length === 0 && (
        <div className="text-center py-12">
          <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No job postings yet
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Create your first job posting to start hiring talent.
          </p>
          <Button onClick={handleCreateJob}>
            Create Job Posting
          </Button>
        </div>
      )}
    </div>
  );
}