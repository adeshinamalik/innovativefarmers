
import { Navbar } from "@/components/Navbar";
import { BankDetailsForm } from "@/components/BankDetailsForm";

const BankDetails = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4 bg-muted/20">
        <BankDetailsForm />
      </main>
    </div>
  );
};

export default BankDetails;
