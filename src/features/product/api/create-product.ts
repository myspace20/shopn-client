import { api } from "@/lib/api-client";
import { MutationConfig } from "@/lib/react-query";
import { Product } from "@/types/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import z from "zod"
import { getProductsQueryOptions } from "./get-product";


export const createProductInputSchema = z.object({
    name: z.string().min(1, "Product name is required"),
    description: z.string().min(1, "Product description is required"),
    price: z.number().min(1, "Product price is required"),
    quantity: z.number().min(1, "Product quantity is required")
});


export type createProductInput = z.infer<typeof createProductInputSchema>;


export const createProduct = ({ data }: {
    data: createProductInput
}): Promise<Product> => {
    return api.post("/products", data)
}

export type UseCreateProductOptions = {
    mutationConfig?: MutationConfig<typeof createProduct>
}


export const useCreateProduct = ({ mutationConfig }: UseCreateProductOptions = {}) => {
    const queryClient = useQueryClient()

    const { onSuccess, ...restConfig } = mutationConfig || {};

    return useMutation({
        onSuccess: (...args) => {
            queryClient.invalidateQueries({
                queryKey:getProductsQueryOptions().queryKey
            });
            onSuccess?.(...args);
        },
        ...restConfig,
        mutationFn: createProduct
    })
}


