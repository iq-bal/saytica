"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Search,
  HelpCircle 
} from "lucide-react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
};

type CategoryType = typeof categories[number];

const categories = [
  "General Questions",
  "Saytica Services", 
  "Registration & Account",
  "Data Solutions & Datasets",
  "Using the Website",
] as const;

// Sample FAQ data - in a real app, this would come from a database
const initialFaqs: FaqItem[] = [
  {
    id: "1",
    question: "What is Saytica and how does it work?",
    answer: "Saytica is a language and data solutions company. We help teams localize content and source multilingual datasets with transparent processes, quality assurance, and enterprise-ready delivery.",
    category: "General Questions"
  },
  {
    id: "2", 
    question: "What makes Saytica different?",
    answer: "We combine strong in-house expertise with curated networks, modern tooling, and review flows. Our UI and delivery pipelines prioritize clarity, consistency, and speed.",
    category: "General Questions"
  },
  {
    id: "3",
    question: "Do you offer translation and localization services?",
    answer: "Yes. We provide end-to-end translation and localization for websites, apps, games, eLearning, documents, and media (including voiceover).",
    category: "Saytica Services"
  }
];

export default function FAQManagementPage() {
  const [faqs, setFaqs] = useState<FaqItem[]>(initialFaqs);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: categories[0] as CategoryType
  });

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCreate = () => {
    if (formData.question.trim() && formData.answer.trim()) {
      const newFaq: FaqItem = {
        id: Date.now().toString(),
        question: formData.question,
        answer: formData.answer,
        category: formData.category
      };
      setFaqs([...faqs, newFaq]);
      setFormData({ question: "", answer: "", category: categories[0] as CategoryType });
      setIsCreating(false);
    }
  };

  const handleEdit = (faq: FaqItem) => {
    setEditingId(faq.id);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category as CategoryType
    });
  };

  const handleUpdate = () => {
    if (editingId && formData.question.trim() && formData.answer.trim()) {
      setFaqs(faqs.map(faq => 
        faq.id === editingId 
          ? { ...faq, question: formData.question, answer: formData.answer, category: formData.category }
          : faq
      ));
      setEditingId(null);
      setFormData({ question: "", answer: "", category: categories[0] as CategoryType });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this FAQ?")) {
      setFaqs(faqs.filter(faq => faq.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsCreating(false);
    setFormData({ question: "", answer: "", category: categories[0] as CategoryType });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <HelpCircle className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              FAQ Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Create and manage frequently asked questions
            </p>
          </div>
        </div>
        <Button 
          onClick={() => setIsCreating(true)}
          className="flex items-center space-x-2"
          disabled={isCreating || editingId !== null}
        >
          <Plus className="h-4 w-4" />
          <span>Add FAQ</span>
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        >
          <option value="All">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {/* Create Form */}
      {isCreating && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Create New FAQ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as CategoryType })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Question</label>
              <Input
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                placeholder="Enter the question..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Answer</label>
              <Textarea
                value={formData.answer}
                onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                placeholder="Enter the answer..."
                rows={4}
              />
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleCreate} className="flex items-center space-x-2">
                <Save className="h-4 w-4" />
                <span>Save FAQ</span>
              </Button>
              <Button variant="outline" onClick={handleCancel}>
                <X className="h-4 w-4" />
                <span>Cancel</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFaqs.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                {searchTerm || selectedCategory !== "All" 
                  ? "No FAQs match your search criteria." 
                  : "No FAQs created yet. Click &apos;Add FAQ&apos; to get started."
                }
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredFaqs.map((faq) => (
            <Card key={faq.id}>
              <CardContent className="p-6">
                {editingId === faq.id ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value as CategoryType })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                      >
                        {categories.map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Question</label>
                      <Input
                        value={formData.question}
                        onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Answer</label>
                      <Textarea
                        value={formData.answer}
                        onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <div className="flex space-x-2">
                      <Button onClick={handleUpdate} className="flex items-center space-x-2">
                        <Save className="h-4 w-4" />
                        <span>Update</span>
                      </Button>
                      <Button variant="outline" onClick={handleCancel}>
                        <X className="h-4 w-4" />
                        <span>Cancel</span>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">
                          {faq.category}
                        </Badge>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(faq)}
                          disabled={editingId !== null || isCreating}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(faq.id)}
                          className="text-red-600 hover:text-red-700"
                          disabled={editingId !== null || isCreating}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">{faqs.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total FAQs</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{categories.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Categories</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{filteredFaqs.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Filtered Results</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}