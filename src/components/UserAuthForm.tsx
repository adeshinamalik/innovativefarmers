
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { FadeIn } from './animations/FadeIn';

interface UserAuthFormProps {
  type: 'login' | 'signup';
}

export function UserAuthForm({ type }: UserAuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be where you handle authentication logic
    console.log('Form submitted');
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
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="pl-10" 
                  required 
                />
              </div>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                className="pl-10" 
                required 
              />
            </div>
          </div>
          
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
                type={showPassword ? 'text' : 'password'} 
                placeholder="••••••••" 
                className="pl-10 pr-10" 
                required 
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
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
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
          )}
          
          <Button type="submit" className="w-full">
            {type === 'login' ? 'Sign In' : 'Sign Up'}
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
