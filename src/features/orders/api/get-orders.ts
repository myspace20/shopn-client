import { api } from "@/lib/api-client"



export const getOrders = () =>{
    return api.get("/order")
}