'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  name: string;
  is_landlord: boolean;
}

export function useAuth() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: async (): Promise<User | null> => {
      // Implement your user fetching logic here
      // This is a mock implementation
      const token = localStorage.getItem('token');
      if (!token) return null;

      try {
        const response = await fetch('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Not authenticated');
        return response.json();
      } catch {
        return null;
      }
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      // Implement logout logic
      localStorage.removeItem('token');
      await fetch('/api/auth/logout', { method: 'POST' });
    },
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      toast.success('Logged out successfully');
      router.push('/');
    },
    onError: (error) => {
      toast.error('Logout failed');
      console.error('Logout error:', error);
    },
  });

  return {
    isLoggedIn: !!user,
    user: user || null,
    logout: logoutMutation.mutate,
    isLoading: logoutMutation.isPending,
  };
}
