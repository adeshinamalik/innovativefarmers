
import { Navbar } from "@/components/Navbar";
import { UserAuthForm } from "@/components/UserAuthForm";

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4 bg-muted/20">
        <div className="w-full max-w-md bg-card border border-border rounded-lg shadow-sm p-8">
          <UserAuthForm type="signup" />
        </div>
      </main>
    </div>
  );
};

export default SignUp;
