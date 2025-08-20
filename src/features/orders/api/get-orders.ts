import { api } from "@/lib/api-client"
import { QueryConfig } from "@/lib/react-query"
import { Order } from "@/types/api"
import { queryOptions, useQuery } from "@tanstack/react-query"



export const getOrders = (page = 1): Promise<Order []> =>{
    return api.get("/orders")
}


export const getOrdersQueryOptions = ({page}:{page?: number} = {}) =>{
    return queryOptions({
        queryKey: page ? ['orders', { page }] : ['orders'],
        queryFn: ()=> getOrders(page)
    })
}


type UseOrderOptions = {
    page?: number,
    queryConfig?: QueryConfig<typeof getOrdersQueryOptions>
}

export const useOrders = ({queryConfig, page}: UseOrderOptions) =>{
    return useQuery({
        ...getOrdersQueryOptions({page}),
        ...queryConfig
    })
}