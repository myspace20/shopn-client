import { Checkbox } from "@/components/ui/checkbox"
import { Order } from "@/types/api"
import { ColumnDef } from "@tanstack/react-table"




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
    }
]