// app/signup/page.tsx

'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
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
import { signupSchema, type SignupFormValues } from '@/lib/validations';

export default function Signup() {
  const router = useRouter();

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const signupMutation = useAuthMutation({
    mutationFn: authAPI.signup,
    onSuccess: () => {
      router.push(`${process.env.NEXT_PUBLIC_FRONTEND_URL}/login`);
    },
    successMessage: 'Account created successfully!',
    errorMessage: 'Signup failed',
  });

  function onSubmit(data: SignupFormValues) {
    signupMutation.mutate({
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      password: data.password,
    });
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
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1.5">
            Create your Account
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Join us today and get started
          </p>
        </motion.div>

        {/* Google Sign In */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <SocialButton provider="google" onClick={handleGoogleSignIn}>
            Sign up with Google
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
            Or sign up with email
          </span>
          <div className="flex-1 h-px bg-gray-400" />
        </motion.div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              <FormField
                control={form.control}
                name="fname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm font-semibold">First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" className="custom-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm font-semibold">Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" className="custom-input" {...field} />
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
              transition={{ delay: 0.7, duration: 0.5 }}
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
                        placeholder="Create a strong password"
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
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs sm:text-sm font-semibold">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Re-enter your password"
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
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Button
                type="submit"
                disabled={!form.formState.isValid || signupMutation.isPending}
                className="custom-button mt-1 bg-[#ff5b20] hover:bg-[#FF4500] text-white text-base font-semibold"
              >
                {signupMutation.isPending ? (
                  <span className="flex items-center justify-center gap-2">
                    <LoadingSpinner size="sm" />
                    Creating account...
                  </span>
                ) : (
                  'Create Account'
                )}
              </Button>
            </motion.div>
          </form>
        </Form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center text-xs sm:text-sm text-muted-foreground mt-5"
        >
          Already have an account?{' '}
          <Button
            variant="link"
            className="p-0 text-[#FF4500] font-semibold hover:text-[#FF4500]/80 hover:no-underline"
            onClick={() => router.push('/login')}
          >
            Sign in
          </Button>
        </motion.p>
      </div>
    </AuthLayout>
  );
}
