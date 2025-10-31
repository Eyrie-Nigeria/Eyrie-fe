'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { User } from '@/types';
import { mockAuthAPI } from '@/data/user';

export function useAuth() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ['user'],
    queryFn: async (): Promise<User | null> => {
      return await mockAuthAPI.getCurrentUser();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const response = await mockAuthAPI.login(credentials.email, credentials.password);
      localStorage.setItem('token', response.token);
      return response.user;
    },
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user);
      toast.success(`Welcome back, ${user.name}!`);
      // Redirect based on user role
      if (user.role === 'user') {
        router.push('/user/dashboard');
      } else {
        router.push('/profile');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Login failed');
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await mockAuthAPI.logout();
      localStorage.removeItem('token');
    },
    onSuccess: () => {
      queryClient.setQueryData(['user'], null);
      queryClient.clear(); // Clear all queries
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
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isLoading: isLoadingUser || loginMutation.isPending || logoutMutation.isPending,
    isLoginLoading: loginMutation.isPending,
    isLogoutLoading: logoutMutation.isPending,
    // Removed unused userError from return
  };
}
