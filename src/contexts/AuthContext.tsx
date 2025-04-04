
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getFarmerById } from '@/lib/api';

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

interface AuthContextType {
  isAuthenticated: boolean;
  farmer: Farmer | null;
  login: (token: string, id: string) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [farmer, setFarmer] = useState<Farmer | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('farmToken');
      const id = localStorage.getItem('farmerId');
      
      if (token && id) {
        try {
          const result = await getFarmerById(id);
          if (result.success) {
            setFarmer(result.data);
            setIsAuthenticated(true);
          } else {
            localStorage.removeItem('farmToken');
            localStorage.removeItem('farmerId');
          }
        } catch (error) {
          console.error(error);
          localStorage.removeItem('farmToken');
          localStorage.removeItem('farmerId');
        }
      }
      
      setLoading(false);
    };
    
    checkAuth();
  }, []);
  
  const login = (token: string, id: string) => {
    localStorage.setItem('farmToken', token);
    localStorage.setItem('farmerId', id);
    setIsAuthenticated(true);
  };
  
  const logout = () => {
    localStorage.removeItem('farmToken');
    localStorage.removeItem('farmerId');
    setIsAuthenticated(false);
    setFarmer(null);
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, farmer, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
