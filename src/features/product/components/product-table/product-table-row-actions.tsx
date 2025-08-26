import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Product } from "@/types/api"
import { Row } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import React from "react"
import { useState } from "react"
import EditProduct from "../edit-product"

type ProductTableRowActionsProps = {
    row: Row<Product>
}

export const ProductTableRowActions = ({ row }: ProductTableRowActionsProps) => {

    const [isEditProductDialogOpen, setIsEditProductDialogOpen] = React.useState(false)



    return (
        <>
        <EditProduct row={row}
            isEditProductDialogOpen={isEditProductDialogOpen}
            setIsEditProductDialogOpen={setIsEditProductDialogOpen}
        />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={()=>setIsEditProductDialogOpen(true)}>
                        Edit Product
                        {/* <EditProductDrawer
                            row={row}
                            isEditProductDialogOpen={isEditProductDialogOpen}
                            setIsEditProductDialogOpen={setIsEditProductDialogOpen}
                        /> */}
                    </DropdownMenuItem>
                    <DropdownMenuItem>View payment details</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}