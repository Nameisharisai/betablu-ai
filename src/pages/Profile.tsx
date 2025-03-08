
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";
import { useToast } from "@/hooks/use-toast";
import {
  User,
  Settings,
  CreditCard,
  Shield,
  Bell,
  Key,
  LogOut,
  Edit2,
} from "lucide-react";

const Profile = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "",
    subscription: "Professional",
    role: "Developer",
    joined: "June 2023",
  });

  // Simulate checking authentication status
  useEffect(() => {
    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
      
      if (!isAuthenticated) {
        navigate("/login");
        toast({
          title: "Authentication Required",
          description: "Please log in to view your profile",
        });
      }
      
      setIsLoggedIn(isAuthenticated);
    };
    
    checkAuth();
  }, [navigate, toast]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
    navigate("/");
  };

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  // If not logged in, the useEffect will redirect to login
  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-10">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[250px_1fr] gap-8">
            {/* Sidebar */}
            <div className="glass-card p-6 rounded-lg h-fit">
              {/* User info */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blu-600 rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-3">
                  {userData.avatar ? (
                    <img
                      src={userData.avatar}
                      alt={userData.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    getInitials(userData.name)
                  )}
                </div>
                <h3 className="font-semibold text-lg">{userData.name}</h3>
                <p className="text-muted-foreground text-sm">{userData.email}</p>
                <div className="mt-2">
                  <span className="inline-block bg-blu-600/20 text-blu-400 text-xs px-2 py-1 rounded-full">
                    {userData.subscription} Plan
                  </span>
                </div>
              </div>
              
              {/* Navigation */}
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                    activeTab === "profile"
                      ? "bg-blu-600 text-white"
                      : "hover:bg-dark-700"
                  }`}
                >
                  <User className="h-5 w-5 mr-3" />
                  Profile
                </button>
                <button
                  onClick={() => setActiveTab("subscription")}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                    activeTab === "subscription"
                      ? "bg-blu-600 text-white"
                      : "hover:bg-dark-700"
                  }`}
                >
                  <CreditCard className="h-5 w-5 mr-3" />
                  Subscription
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                    activeTab === "security"
                      ? "bg-blu-600 text-white"
                      : "hover:bg-dark-700"
                  }`}
                >
                  <Shield className="h-5 w-5 mr-3" />
                  Security
                </button>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                    activeTab === "notifications"
                      ? "bg-blu-600 text-white"
                      : "hover:bg-dark-700"
                  }`}
                >
                  <Bell className="h-5 w-5 mr-3" />
                  Notifications
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                    activeTab === "settings"
                      ? "bg-blu-600 text-white"
                      : "hover:bg-dark-700"
                  }`}
                >
                  <Settings className="h-5 w-5 mr-3" />
                  Settings
                </button>
              </nav>
              
              <div className="pt-6 mt-6 border-t border-border">
                <Button
                  variant="ghost"
                  full
                  icon={<LogOut className="h-5 w-5" />}
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="glass-card p-6 rounded-lg">
              {activeTab === "profile" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Profile Information</h2>
                    <Button variant="outline" size="sm" icon={<Edit2 className="h-4 w-4" />}>
                      Edit Profile
                    </Button>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1">
                          Full Name
                        </label>
                        <div className="p-3 bg-dark-700 rounded-lg">
                          {userData.name}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1">
                          Email
                        </label>
                        <div className="p-3 bg-dark-700 rounded-lg">
                          {userData.email}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1">
                          Role
                        </label>
                        <div className="p-3 bg-dark-700 rounded-lg">
                          {userData.role}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-muted-foreground mb-1">
                          Member Since
                        </label>
                        <div className="p-3 bg-dark-700 rounded-lg">
                          {userData.joined}
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-border space-y-4">
                      <h3 className="text-lg font-medium">Connected Services</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-dark-700 rounded-lg flex items-center">
                          <div className="bg-slate-800 p-2 rounded-full mr-3">
                            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.35c.731 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0zm-3.219 7.5H18.25v8.711h-3.125V7.5zm-1.563-3.023c1.016 0 1.838.821 1.838 1.837s-.822 1.838-1.838 1.838-1.837-.822-1.837-1.838.821-1.837 1.837-1.837zM5.25 7.5h3.125v8.711H5.25V7.5z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">LinkedIn</div>
                            <div className="text-xs text-muted-foreground">Connected</div>
                          </div>
                        </div>
                        <div className="p-4 bg-dark-700 rounded-lg flex items-center">
                          <div className="bg-slate-800 p-2 rounded-full mr-3">
                            <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-medium">Facebook</div>
                            <div className="text-xs text-muted-foreground">Connected</div>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Connect More Accounts
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "subscription" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Subscription</h2>
                  
                  <div className="mb-8 p-4 bg-gradient-to-r from-blu-800 to-blu-600 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Professional Plan</h3>
                        <p className="text-blu-100">$49/month</p>
                      </div>
                      <div className="text-xs bg-blu-100 text-blu-800 font-medium px-2 py-1 rounded-full">
                        Active
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Plan Details</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-3 bg-dark-700 rounded-lg">
                          <div className="text-sm text-muted-foreground">Billing Cycle</div>
                          <div>Monthly</div>
                        </div>
                        <div className="p-3 bg-dark-700 rounded-lg">
                          <div className="text-sm text-muted-foreground">Next Billing Date</div>
                          <div>July 15, 2023</div>
                        </div>
                        <div className="p-3 bg-dark-700 rounded-lg">
                          <div className="text-sm text-muted-foreground">Payment Method</div>
                          <div>•••• •••• •••• 4242</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t border-border">
                      <h3 className="text-lg font-medium mb-3">Actions</h3>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline">Change Plan</Button>
                        <Button variant="outline">Update Payment</Button>
                        <Button variant="outline" className="text-red-500 hover:text-red-600">
                          Cancel Subscription
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "security" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Security</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Change Password</h3>
                      <form className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Current Password
                          </label>
                          <input
                            type="password"
                            className="w-full p-3 rounded-lg bg-dark-700 border border-border focus:ring-blu-500 focus:border-blu-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            New Password
                          </label>
                          <input
                            type="password"
                            className="w-full p-3 rounded-lg bg-dark-700 border border-border focus:ring-blu-500 focus:border-blu-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">
                            Confirm New Password
                          </label>
                          <input
                            type="password"
                            className="w-full p-3 rounded-lg bg-dark-700 border border-border focus:ring-blu-500 focus:border-blu-500"
                          />
                        </div>
                        <Button type="button">Update Password</Button>
                      </form>
                    </div>
                    
                    <div className="pt-6 border-t border-border">
                      <h3 className="text-lg font-medium mb-3">Two-Factor Authentication</h3>
                      <p className="mb-3 text-muted-foreground">
                        Add an extra layer of security to your account by enabling two-factor authentication.
                      </p>
                      <Button variant="outline" icon={<Key className="h-4 w-4" />}>
                        Enable 2FA
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "notifications" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Notification Preferences</h2>
                  
                  <div className="space-y-6">
                    {["Email", "Browser", "Mobile"].map((type) => (
                      <div key={type} className="pt-4 first:pt-0 border-t first:border-0 border-border">
                        <h3 className="text-lg font-medium mb-3">{type} Notifications</h3>
                        <div className="space-y-3">
                          {["Product updates", "Security alerts", "Newsletter", "Marketing"].map((item) => (
                            <div key={item} className="flex items-center justify-between">
                              <span>{item}</span>
                              <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked={item === "Security alerts"} />
                                <div className="relative w-11 h-6 bg-dark-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blu-600"></div>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-4 border-t border-border">
                      <Button>Save Preferences</Button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === "settings" && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-3">Language Preference</h3>
                      <select className="w-full p-3 rounded-lg bg-dark-700 border border-border focus:ring-blu-500 focus:border-blu-500">
                        <option>English (US)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                    
                    <div className="pt-6 border-t border-border">
                      <h3 className="text-lg font-medium mb-3">Data & Privacy</h3>
                      <div className="space-y-3">
                        <Button variant="outline" size="sm" full className="justify-start">
                          Download my data
                        </Button>
                        <Button variant="outline" size="sm" full className="justify-start">
                          Manage cookies
                        </Button>
                        <Button variant="outline" size="sm" full className="justify-start text-red-500 hover:text-red-600">
                          Delete account
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
