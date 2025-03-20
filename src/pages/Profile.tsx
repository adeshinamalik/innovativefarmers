
import { useState } from 'react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/animations/FadeIn";
import { User, MapPin, Mail, Phone, Edit, Save, Camera, ShoppingBag, Heart, MessageCircle, Settings } from "lucide-react";

// Mock user data
const userData = {
  name: "John Doe",
  type: "Farmer",
  location: "California, USA",
  email: "john.doe@example.com",
  phone: "+1 (123) 456-7890",
  bio: "Passionate organic farmer with over 10 years of experience in sustainable agriculture. Specializing in heirloom vegetables and free-range poultry farming.",
  profileImage: "https://randomuser.me/api/portraits/men/42.jpg",
  coverImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
};

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(userData);
  
  const handleSave = () => {
    // In a real app, you would save to the database here
    setIsEditing(false);
    console.log("Profile saved:", profile);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Profile Header */}
        <div className="relative">
          <div className="h-48 md:h-64 overflow-hidden">
            <img 
              src={profile.coverImage} 
              alt="Cover" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4">
            <div className="relative -mt-20 mb-8 flex flex-col md:flex-row items-center md:items-end gap-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-background overflow-hidden bg-muted">
                  <img 
                    src={profile.profileImage} 
                    alt={profile.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {isEditing && (
                  <Button 
                    variant="secondary" 
                    size="icon" 
                    className="absolute bottom-0 right-0 rounded-full h-8 w-8"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-display font-medium">
                  {profile.name}
                </h1>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-muted-foreground mt-2">
                  <span className="inline-flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {profile.type}
                  </span>
                  <span className="hidden md:inline">•</span>
                  <span className="inline-flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {profile.location}
                  </span>
                </div>
              </div>
              
              <div>
                {isEditing ? (
                  <Button onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                ) : (
                  <Button variant="outline" onClick={() => setIsEditing(true)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Profile Content */}
        <div className="container mx-auto px-4 py-6">
          <Tabs defaultValue="about">
            <TabsList className="mb-8 bg-muted">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about">
              <FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="bg-card rounded-lg border border-border p-5">
                      <h3 className="font-medium text-lg mb-4">Contact Information</h3>
                      
                      {isEditing ? (
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input 
                                id="email" 
                                value={profile.email}
                                onChange={(e) => setProfile({...profile, email: e.target.value})}
                                className="pl-10"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="phone">Phone</Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input 
                                id="phone" 
                                value={profile.phone}
                                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                                className="pl-10"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="location">Location</Label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                              <Input 
                                id="location" 
                                value={profile.location}
                                onChange={(e) => setProfile({...profile, location: e.target.value})}
                                className="pl-10"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <Mail className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <p className="font-medium">Email</p>
                              <p className="text-muted-foreground">{profile.email}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <Phone className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <p className="font-medium">Phone</p>
                              <p className="text-muted-foreground">{profile.phone}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <p className="font-medium">Location</p>
                              <p className="text-muted-foreground">{profile.location}</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="bg-card rounded-lg border border-border p-5">
                      <h3 className="font-medium text-lg mb-4">About Me</h3>
                      
                      {isEditing ? (
                        <div>
                          <Label htmlFor="bio" className="mb-2 block">Bio</Label>
                          <Textarea 
                            id="bio"
                            value={profile.bio}
                            onChange={(e) => setProfile({...profile, bio: e.target.value})}
                            rows={6}
                            className="mb-4"
                          />
                        </div>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">
                          {profile.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </TabsContent>
            
            <TabsContent value="products">
              <FadeIn>
                <div className="bg-card rounded-lg border border-border p-5">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-medium text-lg">My Products</h3>
                    <Button>
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add New Product
                    </Button>
                  </div>
                  
                  <div className="text-center py-8">
                    <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                    <h4 className="text-lg font-medium mb-2">No products yet</h4>
                    <p className="text-muted-foreground mb-4">
                      You haven't added any products to your profile.
                    </p>
                    <Button>Add Your First Product</Button>
                  </div>
                </div>
              </FadeIn>
            </TabsContent>
            
            <TabsContent value="saved">
              <FadeIn>
                <div className="bg-card rounded-lg border border-border p-5">
                  <h3 className="font-medium text-lg mb-6">Saved Items</h3>
                  
                  <div className="text-center py-8">
                    <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                    <h4 className="text-lg font-medium mb-2">No saved items</h4>
                    <p className="text-muted-foreground mb-4">
                      Items you save will appear here.
                    </p>
                    <Button variant="outline">Browse Products</Button>
                  </div>
                </div>
              </FadeIn>
            </TabsContent>
            
            <TabsContent value="messages">
              <FadeIn>
                <div className="bg-card rounded-lg border border-border p-5">
                  <h3 className="font-medium text-lg mb-6">Messages</h3>
                  
                  <div className="text-center py-8">
                    <MessageCircle className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                    <h4 className="text-lg font-medium mb-2">No messages</h4>
                    <p className="text-muted-foreground mb-4">
                      Connect with farmers and experts to start a conversation.
                    </p>
                    <Button variant="outline">Explore Community</Button>
                  </div>
                </div>
              </FadeIn>
            </TabsContent>
            
            <TabsContent value="settings">
              <FadeIn>
                <div className="bg-card rounded-lg border border-border p-5">
                  <h3 className="font-medium text-lg mb-6">Account Settings</h3>
                  
                  <div className="text-center py-8">
                    <Settings className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
                    <h4 className="text-lg font-medium mb-2">Settings coming soon</h4>
                    <p className="text-muted-foreground mb-4">
                      This feature is currently under development.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
