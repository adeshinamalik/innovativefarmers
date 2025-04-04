
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { submitBankDetails } from '@/lib/api';
import { toast } from 'sonner';

export function BankDetailsForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    AccountName: '',
    AccountNumber: '',
    BankName: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const farmerId = localStorage.getItem('farmerId');
      if (!farmerId) {
        toast.error('Please login first');
        navigate('/login');
        return;
      }
      
      const result = await submitBankDetails(farmerId, formData);
      if (result.success) {
        toast.success('Bank details submitted successfully!');
        navigate('/profile');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Card className="w-full max-w-md mx-auto p-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-display font-medium">Bank Details</h1>
        <p className="text-sm text-muted-foreground">
          Please provide your bank details for payments
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="AccountName">Account Name</Label>
          <Input 
            id="AccountName"
            name="AccountName"
            placeholder="John Doe" 
            required
            value={formData.AccountName}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="AccountNumber">Account Number</Label>
          <Input 
            id="AccountNumber"
            name="AccountNumber"
            placeholder="0123456789" 
            required
            value={formData.AccountNumber}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="BankName">Bank Name</Label>
          <Input 
            id="BankName"
            name="BankName"
            placeholder="Example Bank" 
            required
            value={formData.BankName}
            onChange={handleInputChange}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit Bank Details'}
        </Button>
      </form>
    </Card>
  );
}
