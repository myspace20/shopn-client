import { api } from "@/lib/api-client";
import { MutationConfig } from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getProductsQueryOptions } from "./get-product";

export const deleteProduct = ({ id }: { id: string }) => {
  return api.delete(`/products/${id}`);
};

type UseDeleteProductOptions = {
  mutationConfig?: MutationConfig<typeof deleteProduct>;
};

export const useDeleteProduct = ({
  mutationConfig,
}: UseDeleteProductOptions = {}) => {
  const { onSuccess, ...restConfig } = mutationConfig || {};

  const queryClient = useQueryClient();

  return useMutation({
    onSuccess: (...args) => {
      (queryClient.invalidateQueries({
        queryKey: getProductsQueryOptions().queryKey,
      }),
        onSuccess?.(...args));
    },
    ...restConfig,
    mutationFn: deleteProduct,
  });
};
