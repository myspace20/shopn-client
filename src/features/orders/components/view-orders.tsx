import { Spinner } from "@/components/ui/spinner"
import { useOrders } from "../api/get-orders"
import { DataTable } from "@/components/data-table"
import { orderColumns } from "./order-table/order-table-columns"


import { Order } from "@/types/api"

export const sampleOrders: Order[] = [
    {
        id: "1",
        total: "249.99",
        deliveryDate: "2025-08-20T14:30:00Z",
        address: "123 Maple Street, Accra, Ghana",
        slug: "order-24999-1",
        seller: "TechWorld Ltd",
        phoneNumber: "+233201234567",
        createdAt: "2025-08-10T10:00:00Z",
        status: "Delivered",
    },
    {
        id: "2",
        total: "89.50",
        deliveryDate: "2025-08-18T09:00:00Z",
        address: "45 Independence Ave, Accra, Ghana",
        slug: "order-8950-2",
        seller: "BookMart",
        phoneNumber: "+233509876543",
        createdAt: "2025-08-09T15:20:00Z",
        status: "Delivered",
    },
    {
        id: "3",
        total: "560.00",
        deliveryDate: "2025-08-25T16:15:00Z",
        address: "67 Osu Oxford St, Accra, Ghana",
        slug: "order-56000-3",
        seller: "GadgetHub",
        phoneNumber: "+233245678901",
        createdAt: "2025-08-11T08:45:00Z",
        status: "Out for Delivery",
    },
    {
        id: "4",
        total: "120.75",
        deliveryDate: "2025-08-22T11:45:00Z",
        address: "12 Labone Crescent, Accra, Ghana",
        slug: "order-12075-4",
        seller: "Clothify",
        phoneNumber: "+233278654321",
        createdAt: "2025-08-12T12:30:00Z",
        status: "Processing",
    },
    {
        id: "5",
        total: "45.00",
        deliveryDate: "2025-08-19T18:00:00Z",
        address: "89 Spintex Road, Accra, Ghana",
        slug: "order-4500-5",
        seller: "Foodies Express",
        phoneNumber: "+233201112223",
        createdAt: "2025-08-10T19:10:00Z",
        status: "Delivered",
    },
]




export const OrderList = () => {


    const orderQuery = useOrders({})

    if (orderQuery.isLoading) {
        return (
            <div className="flex flex-row min-h-screen justify-center items-center">
                <Spinner />
          </div>

        )
    }


    return (
        <div className="container w-full py-10">
            <DataTable columns={orderColumns} data={sampleOrders} />
        </div>
    )
}