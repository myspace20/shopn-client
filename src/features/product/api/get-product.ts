import { api } from "@/lib/api-client"
import { QueryConfig } from "@/lib/react-query"
import { Meta, Product } from "@/types/api"
import { queryOptions, useQuery } from "@tanstack/react-query"
import { number } from "zod"




export const getProducts = ( page = 1 ): Promise<Product[]> => {
    return api.get("/products", {
        params: {
            page
        }
    })
}


export const getProductsQueryOptions = ({ page }: { page?: number } = {}) => {
    return queryOptions({
        queryKey: page ? ['products', { page }] : ['products'],
        queryFn: () => getProducts(page)
    })
}


type UseProductsOptions = {
    page?: number,
    queryConfig: QueryConfig<typeof getProductsQueryOptions>
}


export const useProducts = ({
    queryConfig,
    page
}:UseProductsOptions) =>{
    return useQuery({
        ...getProductsQueryOptions({page}),
        ...queryConfig
    })
}