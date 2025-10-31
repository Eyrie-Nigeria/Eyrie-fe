import { User } from '@/types';

export const sampleUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    image: '/images/testimonial1.jpg',
    role: 'user',
  },
  {
    id: '2',
    name: 'Sarah Agent',
    email: 'sarah@example.com',
    image: '/images/testimonial2.jpg',
    role: 'agent',
  },
  {
    id: '3',
    name: 'Mike Landlord',
    email: 'mike@example.com',
    role: 'landlord',
  },
  {
    id: '4',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin',
  },
];

// Mock auth API for development
export const mockAuthAPI = {
  getCurrentUser: async (): Promise<User | null> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const token = localStorage.getItem('token');
    if (!token) return null;

    // Extract user ID from mock token
    const userId = token.replace('mock-jwt-token-', '');
    return sampleUsers.find((u) => u.id === userId) || null;
  },

  login: async (email: string, password: string): Promise<{ user: User; token: string }> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const user = sampleUsers.find((u) => u.email === email);
    if (!user || password !== 'password') {
      throw new Error('Invalid credentials');
    }

    return {
      user,
      token: 'mock-jwt-token-' + user.id,
    };
  },

  logout: async (): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    // Nothing to do in mock
  },
};
