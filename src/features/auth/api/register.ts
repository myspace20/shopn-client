import { api } from "@/lib/api-client";
import { MutationConfig } from "@/lib/react-query";
import { AuthResponse } from "@/types/api";
import { useMutation } from "@tanstack/react-query";
import z from "zod";

export const registerInputSchema = z.object({
  email: z.string().min(1, "Required"),
  seller: z.string().min(1, "Required"),
  password: z.string().min(5, "Required"),
});

export type registerInput = z.infer<typeof registerInputSchema>;

export const registerWithEmailAndPassword = (
  data: registerInput,
): Promise<AuthResponse> => {
  return api.post("/auth/register", data);
};

type UseRegisterWithEmailAndPasswordOptions = {
  mutationConfig?: MutationConfig<typeof registerWithEmailAndPassword>;
};

export const useRegisterWithEmailAndPassword = ({
  mutationConfig,
}: UseRegisterWithEmailAndPasswordOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: registerWithEmailAndPassword,
  });
};
