'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AuthLayout } from '@/components/auth/auth-layout';
import { SocialButton } from '@/components/auth/social-button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useAuthMutation } from '@/hooks/use-auth-mutation';
import { authAPI } from '@/lib/api/auth';
import { loginSchema, type LoginFormValues } from '@/lib/validations';

export default function Login() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginMutation = useAuthMutation({
    mutationFn: authAPI.login,
    onSuccess: () => {
      window.location.href = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/dashboard`;
    },
    successMessage: 'Login successful!',
    errorMessage: 'Login failed',
  });

  function onSubmit(data: LoginFormValues) {
    loginMutation.mutate(data);
  }

  const handleGoogleSignIn = () => {
    window.location.href = authAPI.getGoogleAuthURL();
  };

  return (
    <AuthLayout imageSrc="/images/signup.jpg" imageAlt="Modern house">
      <div className="form-container">
        {/* Header */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1.5">
            Welcome Back!
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Sign in to continue to your account
          </p>
        </motion.div>

        {/* Google Sign In */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <SocialButton provider="google" onClick={handleGoogleSignIn}>
            Continue with Google
          </SocialButton>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="flex-1 h-px bg-gray-400" />
          <span className="px-3 text-xs sm:text-sm text-muted-foreground bg-card">
            Or continue with email
          </span>
          <div className="flex-1 h-px bg-gray-400" />
        </motion.div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3.5">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm font-semibold">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        className="custom-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm font-semibold">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="custom-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex items-center justify-between text-xs sm:text-sm pt-1"
            >
              <Button
                variant="link"
                className="p-0 text-[#FF4500] font-medium hover:text-[#FF4500]/80 hover:no-underline"
                onClick={() => (window.location.href = '/forgot-password')}
              >
                Forgot password?
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button
                type="submit"
                disabled={loginMutation.isPending}
                className="custom-button mt-1 bg-[#ff5b20] hover:bg-[#FF4500] text-white text-base font-semibold"
              >
                {loginMutation.isPending ? (
                  <span className="flex items-center justify-center gap-2">
                    <LoadingSpinner size="sm" />
                    Signing in...
                  </span>
                ) : (
                  'Sign In'
                )}
              </Button>
            </motion.div>
          </form>
        </Form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-center text-xs sm:text-sm text-muted-foreground mt-5"
        >
          Don&apos;t have an account?{' '}
          <Button
            variant="link"
            className="p-0 text-[#FF4500] font-semibold hover:text-[#FF4500]/80 hover:no-underline"
            onClick={() => (window.location.href = '/signup')}
          >
            Sign up for free
          </Button>
        </motion.p>
      </div>
    </AuthLayout>
  );
}
