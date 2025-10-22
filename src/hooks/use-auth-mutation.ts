import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

interface AuthMutationProps<TInput, TOutput> {
  mutationFn: (data: TInput) => Promise<TOutput>;
  onSuccess?: (data: TOutput) => void;
  onError?: (error: Error) => void;
  successMessage?: string;
  errorMessage?: string;
}

export function useAuthMutation<TInput, TOutput>({
  mutationFn,
  onSuccess,
  onError,
  successMessage = 'Operation completed successfully!',
  errorMessage = 'Operation failed',
}: AuthMutationProps<TInput, TOutput>) {
  return useMutation<TOutput, Error, TInput>({
    mutationFn,
    onSuccess: (data) => {
      toast.success(successMessage);
      onSuccess?.(data);
    },
    onError: (error: Error) => {
      toast.error(`${errorMessage}: ${error.message}`);
      onError?.(error);
    },
  });
}
