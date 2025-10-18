"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Mail, 
  Calendar, 
  User, 
  MessageSquare, 
  Archive, 
  Trash2, 
  Reply
} from "lucide-react";

type ContactStatus = "new" | "replied" | "archived";

type ContactMessage = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  status: ContactStatus;
  createdAt: string;
  repliedAt?: string;
  reply?: string;
};

const statusColors = {
  new: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  replied: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  archived: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
};

export default function ContactManagementPage() {
  const [contacts, setContacts] = useState<ContactMessage[]>([
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@email.com",
      message: "I&apos;m interested in your data solutions for my e-commerce business. Could you provide more information about pricing and implementation?",
      status: "new",
      createdAt: "2024-01-15T10:30:00Z"
    },
    {
      id: "2",
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.j@company.com",
      message: "We need help with text dataset processing for our AI project. What services do you offer?",
      status: "replied",
      createdAt: "2024-01-14T14:20:00Z",
      repliedAt: "2024-01-14T16:45:00Z",
      reply: "Thank you for your inquiry! I&apos;ve sent you detailed information about our text processing services to your email."
    },
    {
      id: "3",
      firstName: "Michael",
      lastName: "Chen",
      email: "m.chen@startup.io",
      message: "Looking for partnership opportunities in the data analytics space. Would love to discuss potential collaboration.",
      status: "new",
      createdAt: "2024-01-13T09:15:00Z"
    },
    {
      id: "4",
      firstName: "Emily",
      lastName: "Rodriguez",
      email: "emily.r@tech.com",
      message: "Your blog post about machine learning datasets was very helpful. Do you offer consulting services?",
      status: "archived",
      createdAt: "2024-01-12T11:00:00Z"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<ContactStatus | "all">("all");
  const [selectedContact, setSelectedContact] = useState<ContactMessage | null>(null);
  const [replyText, setReplyText] = useState("");
  const [isReplying, setIsReplying] = useState(false);

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = 
      contact.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || contact.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleReply = (contactId: string) => {
    if (replyText.trim()) {
      setContacts(contacts.map(contact => 
        contact.id === contactId 
          ? { 
              ...contact, 
              status: "replied" as ContactStatus, 
              reply: replyText,
              repliedAt: new Date().toISOString()
            }
          : contact
      ));
      setReplyText("");
      setIsReplying(false);
      setSelectedContact(null);
    }
  };

  const handleArchive = (contactId: string) => {
    setContacts(contacts.map(contact => 
      contact.id === contactId 
        ? { ...contact, status: "archived" as ContactStatus }
        : contact
    ));
  };

  const handleDelete = (contactId: string) => {
    if (confirm("Are you sure you want to delete this contact message?")) {
      setContacts(contacts.filter(contact => contact.id !== contactId));
      if (selectedContact?.id === contactId) {
        setSelectedContact(null);
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const getStatusCount = (status: ContactStatus) => {
    return contacts.filter(contact => contact.status === status).length;
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Contact Management</h1>
          <p className="text-muted-foreground">Manage and respond to customer inquiries</p>
        </div>
        
        {/* Status Summary */}
        <div className="flex gap-2">
          <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950">
            New: {getStatusCount("new")}
          </Badge>
          <Badge variant="outline" className="bg-green-50 dark:bg-green-950">
            Replied: {getStatusCount("replied")}
          </Badge>
          <Badge variant="outline" className="bg-gray-50 dark:bg-gray-950">
            Archived: {getStatusCount("archived")}
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as ContactStatus | "all")}
                className="px-3 py-2 border border-input bg-background rounded-md text-sm"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="replied">Replied</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Contact List */}
        <div className="space-y-4">
          {filteredContacts.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No contacts found</p>
              </CardContent>
            </Card>
          ) : (
            filteredContacts.map((contact) => (
              <Card 
                key={contact.id} 
                className={`cursor-pointer transition-colors hover:bg-muted/50 ${
                  selectedContact?.id === contact.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedContact(contact)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">
                        {contact.firstName} {contact.lastName}
                      </span>
                    </div>
                    <Badge className={statusColors[contact.status]}>
                      {contact.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Mail className="h-3 w-3" />
                    <span>{contact.email}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(contact.createdAt)}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {contact.message}
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Right: Contact Details */}
        <div className="lg:sticky lg:top-6">
          {selectedContact ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    {selectedContact.firstName} {selectedContact.lastName}
                  </CardTitle>
                  <Badge className={statusColors[selectedContact.status]}>
                    {selectedContact.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{selectedContact.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Received: {formatDate(selectedContact.createdAt)}</span>
                  </div>
                  {selectedContact.repliedAt && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Reply className="h-4 w-4" />
                      <span>Replied: {formatDate(selectedContact.repliedAt)}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="font-medium mb-2">Message:</h4>
                  <p className="text-sm bg-muted p-3 rounded-md">
                    {selectedContact.message}
                  </p>
                </div>

                {selectedContact.reply && (
                  <div>
                    <h4 className="font-medium mb-2">Your Reply:</h4>
                    <p className="text-sm bg-green-50 dark:bg-green-950 p-3 rounded-md">
                      {selectedContact.reply}
                    </p>
                  </div>
                )}

                {/* Reply Section */}
                {isReplying ? (
                  <div className="space-y-3">
                    <Textarea
                      placeholder="Type your reply..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="min-h-[100px]"
                    />
                    <div className="flex gap-2">
                      <Button 
                        onClick={() => handleReply(selectedContact.id)}
                        disabled={!replyText.trim()}
                        size="sm"
                      >
                        <Reply className="h-4 w-4 mr-2" />
                        Send Reply
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setIsReplying(false);
                          setReplyText("");
                        }}
                        size="sm"
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {selectedContact.status !== "replied" && (
                      <Button 
                        onClick={() => setIsReplying(true)}
                        size="sm"
                      >
                        <Reply className="h-4 w-4 mr-2" />
                        Reply
                      </Button>
                    )}
                    {selectedContact.status !== "archived" && (
                      <Button 
                        variant="outline"
                        onClick={() => handleArchive(selectedContact.id)}
                        size="sm"
                      >
                        <Archive className="h-4 w-4 mr-2" />
                        Archive
                      </Button>
                    )}
                    <Button 
                      variant="destructive"
                      onClick={() => handleDelete(selectedContact.id)}
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Select a contact to view details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}