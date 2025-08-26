import { api } from "@/lib/api-client";
import { MutationConfig } from "@/lib/react-query";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import z from "zod";
import { getProductsQueryOptions } from "./get-product";

export const updateProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Product description is required"),
  price: z.number().min(1, "Product price is required"),
  quantity: z.number().min(1, "Product quantity is required"),
});

export type updateProductInput = z.infer<typeof updateProductSchema>;

export const updateProduct = ({
  id,
  data,
}: {
  id: string;
  data: updateProductInput;
}) => {
  return api.put(`/products${id}`, data);
};

type UseUpdateProductOptions = {
  mutationConfig?: MutationConfig<typeof updateProduct>;
};

export const useUpdateProduct = ({
  mutationConfig,
}: UseUpdateProductOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig || {};

  const queryClient = useQueryClient();

  return useMutation({
    onSuccess: (data, ...args) => {
      queryClient.refetchQueries({
        queryKey: getProductsQueryOptions().queryKey,
      });
      onSuccess?.(data, ...args);
    },
    ...restConfig,
    mutationFn: updateProduct,
  });
};
