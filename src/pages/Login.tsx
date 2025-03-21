
import { Navbar } from "@/components/Navbar";
import { UserAuthForm } from "@/components/UserAuthForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, ShieldCheck } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4 bg-muted/20">
        <div className="w-full max-w-md bg-card border border-border rounded-lg shadow-sm p-8">
          <UserAuthForm type="login" />
          
          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Quick access:</h3>
            <div className="flex flex-col gap-2">
              <Link to="/analytics">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Analytics Dashboard
                </Button>
              </Link>
              <Link to="/admin">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <ShieldCheck className="mr-2 h-4 w-4" />
                  Admin Panel
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
