
import { toast } from "sonner";

const API_BASE_URL = "https://innovative-farm-hub-3.onrender.com/api/v1";

interface SignupFormData {
  firstName: string;
  lastName: string;
  farmName: string;
  farmAddress: string;
  password: string;
  passwordConfirm: string;
  email: string;
  phoneNumber: string;
  businessID: string;
  photo?: File;
}

interface LoginFormData {
  farmName: string;
  password: string;
}

interface BankDetailsFormData {
  AccountName: string;
  AccountNumber: string;
  BankName: string;
}

interface Farmer {
  _id: string;
  firstName: string;
  lastName: string;
  farmName: string;
  farmAddress: string;
  email: string;
  photo: string;
  phoneNumber: string;
  productID: string[];
  postsID: string[];
}

export async function signupFarmer(data: SignupFormData) {
  try {
    const formData = new FormData();
    
    Object.entries(data).forEach(([key, value]) => {
      if (value !== undefined) {
        if (key === 'photo' && value instanceof File) {
          formData.append(key, value);
        } else {
          formData.append(key, value.toString());
        }
      }
    });
    
    const response = await fetch(`${API_BASE_URL}/farmers/signup`, {
      method: 'POST',
      body: formData,
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to sign up');
    }
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Signup error:', error);
    let errorMessage = 'Signup failed';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    toast.error(errorMessage);
    return { success: false, error: errorMessage };
  }
}

export async function loginFarmer(data: LoginFormData) {
  try {
    const response = await fetch(`${API_BASE_URL}/farmers/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to login');
    }
    
    // Store auth token or user data in localStorage
    if (result.token) {
      localStorage.setItem('farmToken', result.token);
      localStorage.setItem('farmerId', result.data._id);
    }
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Login error:', error);
    let errorMessage = 'Login failed';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    toast.error(errorMessage);
    return { success: false, error: errorMessage };
  }
}

export async function submitBankDetails(farmerId: string, data: BankDetailsFormData) {
  try {
    const response = await fetch(`${API_BASE_URL}/farmers/${farmerId}/bank-details`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('farmToken')}`,
      },
      body: JSON.stringify(data),
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit bank details');
    }
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Bank details submission error:', error);
    let errorMessage = 'Failed to submit bank details';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    toast.error(errorMessage);
    return { success: false, error: errorMessage };
  }
}

export async function getAllFarmers() {
  try {
    const response = await fetch(`${API_BASE_URL}/farmers`);
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to fetch farmers');
    }
    
    return { success: true, data: result.data };
  } catch (error) {
    console.error('Get farmers error:', error);
    let errorMessage = 'Failed to fetch farmers';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
}

export async function getFarmerById(id: string) {
  try {
    const response = await fetch(`${API_BASE_URL}/farmers/${id}`);
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to fetch farmer');
    }
    
    return { success: true, data: result.data };
  } catch (error) {
    console.error('Get farmer error:', error);
    let errorMessage = 'Failed to fetch farmer';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
}

export async function uploadFarmerPhoto(farmerId: string, photoFile: File) {
  try {
    const formData = new FormData();
    formData.append('photo', photoFile);
    
    const response = await fetch(`${API_BASE_URL}/farmers/${farmerId}/photo`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('farmToken')}`,
      },
      body: formData,
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to upload photo');
    }
    
    return { success: true, data: result };
  } catch (error) {
    console.error('Photo upload error:', error);
    let errorMessage = 'Failed to upload photo';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    toast.error(errorMessage);
    return { success: false, error: errorMessage };
  }
}
