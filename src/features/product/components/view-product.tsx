import { useQueryClient } from "@tanstack/react-query"
import { useProducts } from "../api/get-product"
import {DataTable}  from "@/components/data-table"
import { productColumns } from "./product-table/product-table-columns"
import { Product } from "@/types/api"

export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with USB receiver",
    price: 29.99,
    quantity: 120,
    createdAt: "2025-08-01T10:30:00Z",
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with blue switches",
    price: 89.99,
    quantity: 60,
    createdAt: "2025-07-20T14:15:00Z",
  },
  {
    id: "3",
    name: "HD Monitor",
    description: "24-inch Full HD LED monitor",
    price: 159.99,
    quantity: 35,
    createdAt: "2025-06-12T08:45:00Z",
  },
  {
    id: "4",
    name: "USB-C Hub",
    description: "Multiport USB-C hub with HDMI, USB 3.0, and SD card reader",
    price: 49.99,
    quantity: 80,
    createdAt: "2025-08-10T12:00:00Z",
  },
  {
    id: "5",
    name: "External SSD",
    description: "1TB portable external SSD with fast transfer speeds",
    price: 129.99,
    quantity: 50,
    createdAt: "2025-07-05T09:00:00Z",
  },
]



export const ProductList = () => {
    const queryclient = useQueryClient()

    const productQuery = useProducts({
        // page: 1
    })


    if (productQuery.isLoading) {
        return (
            <div>

            </div>
        )
    }



    return (
        <div className="container w-full py-10">
            <DataTable columns={productColumns} data={sampleProducts} />
        </div>
    )
}