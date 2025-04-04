
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, Building, Phone, MapPin, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { FadeIn } from './animations/FadeIn';
import { signupFarmer, loginFarmer } from '@/lib/api';
import { toast } from 'sonner';

interface UserAuthFormProps {
  type: 'login' | 'signup';
}

export function UserAuthForm({ type }: UserAuthFormProps) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    farmName: '',
    farmAddress: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: '',
    businessID: '',
    photo: null as File | null,
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    
    if (name === 'photo' && files && files.length > 0) {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (type === 'signup') {
        const result = await signupFarmer(formData);
        if (result.success) {
          toast.success('Signup successful! Check your email for verification.');
          navigate('/login');
        }
      } else if (type === 'login') {
        const result = await loginFarmer({
          farmName: formData.farmName,
          password: formData.password,
        });
        if (result.success) {
          toast.success('Login successful!');
          navigate('/profile');
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
      
      <FadeIn>
        <div className="space-y-2 text-center mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 font-display font-semibold text-xl"
          >
            <div className="w-8 h-8 rounded-full bg-farm-500 flex items-center justify-center text-white">IF</div>
            <span>Farm Forum</span>
          </Link>
          <h1 className="text-2xl font-display font-medium">
            {type === 'login' ? 'Welcome back' : 'Create your account'}
          </h1>
          <p className="text-sm text-muted-foreground">
            {type === 'login' 
              ? 'Sign in to access your account' 
              : 'Join our community of farmers and agricultural enthusiasts'}
          </p>
        </div>
      </FadeIn>
      
      <FadeIn delay={0.1}>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'signup' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="firstName"
                      name="firstName"
                      placeholder="John" 
                      className="pl-10" 
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="lastName"
                      name="lastName"
                      placeholder="Doe" 
                      className="pl-10" 
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farmName">Farm Name</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="farmName"
                    name="farmName"
                    placeholder="Doe Family Farm" 
                    className="pl-10" 
                    required
                    value={formData.farmName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farmAddress">Farm Address</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="farmAddress"
                    name="farmAddress"
                    placeholder="123 Farm Road, Countryside" 
                    className="pl-10" 
                    required
                    value={formData.farmAddress}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="08012345678" 
                    className="pl-10" 
                    required
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="businessID">Business ID</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="businessID"
                    name="businessID"
                    placeholder="Your Business Registration ID" 
                    className="pl-10" 
                    required
                    value={formData.businessID}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="photo">Profile Photo</Label>
                <Input 
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}
          
          {type === 'login' ? (
            <div className="space-y-2">
              <Label htmlFor="farmName">Farm Name</Label>
              <div className="relative">
                <Building className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="farmName"
                  name="farmName"
                  placeholder="Your Farm Name" 
                  className="pl-10" 
                  required
                  value={formData.farmName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="you@example.com" 
                  className="pl-10" 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {type === 'login' && (
                <Link 
                  to="/forgot-password" 
                  className="text-xs text-primary hover:text-primary/80"
                >
                  Forgot password?
                </Link>
              )}
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'} 
                placeholder="••••••••" 
                className="pl-10 pr-10" 
                required
                value={formData.password}
                onChange={handleInputChange}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-9 px-3 py-0"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 
                  <EyeOff className="h-4 w-4 text-muted-foreground" /> : 
                  <Eye className="h-4 w-4 text-muted-foreground" />
                }
              </Button>
            </div>
          </div>
          
          {type === 'signup' && (
            <>
              <div className="space-y-2">
                <Label htmlFor="passwordConfirm">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="••••••••" 
                    className="pl-10" 
                    required
                    value={formData.passwordConfirm}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-sm leading-none">
                  I agree to the{' '}
                  <Link to="/terms" className="text-primary hover:text-primary/80">
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-primary hover:text-primary/80">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
            </>
          )}
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 
              'Processing...' : 
              (type === 'login' ? 'Sign In' : 'Sign Up')}
          </Button>
          
          <div className="text-center text-sm">
            {type === 'login' ? (
              <p>
                Don't have an account?{' '}
                <Link to="/signup" className="text-primary hover:text-primary/80 font-medium">
                  Sign up
                </Link>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:text-primary/80 font-medium">
                  Sign in
                </Link>
              </p>
            )}
          </div>
        </form>
      </FadeIn>
    </div>
  );
}
