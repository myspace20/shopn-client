import { api } from "@/lib/api-client";
import { MutationConfig } from "@/lib/react-query";
import { AuthResponse, User } from "@/types/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import z from "zod";

export const loginInputSchema = z.object({
  email: z.email('Invalid email'),
  password: z.string().min(5, 'Required'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

export const loginWithEmailAndPassword = (data: LoginInput): Promise<AuthResponse> => {
  return api.post('/auth/login', data);
};



type UseLoginWithEmailAndPasswordOptions = {
  mutationConfig?: MutationConfig<typeof loginWithEmailAndPassword>
}

export const useLoginWithEmailAndPassword = ({
  mutationConfig
}: UseLoginWithEmailAndPasswordOptions = {}) => {

  const { onSuccess, ...restConfig } = mutationConfig || {};


  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: loginWithEmailAndPassword
  })
}
