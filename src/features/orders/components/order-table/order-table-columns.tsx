import { Checkbox } from "@/components/ui/checkbox"
import { Order } from "@/types/api"
import { ColumnDef } from "@tanstack/react-table"
import { OrderTableRowActions } from "./order-table-row-actions"
import clsx from "clsx"




export const orderColumns: ColumnDef<Order>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "total",
        header: "Total",
    },
    {
        accessorKey: "deliveryDate",
        header: "DeliveryDate",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "slug",
        header: "Slug",
    },
    {
        accessorKey: "seller",
        header: "Seller",
    },
    {
        accessorKey: "phoneNumber",
        header: "PhoneNumber",
    },
    {
        accessorKey: "createdAt",
        header: "Created at",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("status") as string

            return (
                <span
                    className={clsx(
                        "px-3 py-1 rounded-full font-semibold text-sm font-bold",
                        status === "Delivered" && "bg-green-100 text-green-700",
                        status === "Out for Delivery" && "bg-blue-100 text-blue-700",
                        status === "Processing" && "bg-yellow-100 text-yellow-700"
                    )}
                >
                    {status}
                </span>
            )
        },
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            return (
                <>
                    <OrderTableRowActions row={row} />
                </>
            )
        },
    }
]