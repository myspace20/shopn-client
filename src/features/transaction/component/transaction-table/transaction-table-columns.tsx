import { ColumnDef } from "@tanstack/react-table"
import { Transaction } from "@/types/api"
import { Checkbox } from "@/components/ui/checkbox"
import clsx from "clsx"

export const transactionColumns: ColumnDef<Transaction>[] = [
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
    accessorKey: "reference",
    header: "Reference",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "shopName",
    header: "Shop",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
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
            status === "success" && "bg-green-100 text-green-700",
            status === "pending" && "bg-yellow-100 text-yellow-700",
            status === "failed" && "bg-red-100 text-red-700"
          )}
        >
          {status}
        </span>
      )
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
]
