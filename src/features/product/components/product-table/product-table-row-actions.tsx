import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Product } from "@/types/api";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { useState } from "react";
import EditProduct from "../edit-product";
import { DeleteProduct } from "../delete-product";

type ProductTableRowActionsProps = {
  row: Row<Product>;
};

export const ProductTableRowActions = ({
  row,
}: ProductTableRowActionsProps) => {
  const [isEditProductDialogOpen, setIsEditProductDialogOpen] =
    React.useState(false);
  const [isDeleteProductDialogOpen, setIsDeleteProductDialogOpen] =
    React.useState(false);

  return (
    <>
      <EditProduct
        row={row}
        isEditProductDialogOpen={isEditProductDialogOpen}
        setIsEditProductDialogOpen={setIsEditProductDialogOpen}
      />
      <DeleteProduct
        id={row.id}
        isDeleteProductDialogOpen={isDeleteProductDialogOpen}
        setIsDeleteProductDialogOpen={setIsDeleteProductDialogOpen}
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
          <DropdownMenuItem onClick={() => setIsEditProductDialogOpen(true)}>
            Edit Product
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDeleteProductDialogOpen(true)}>
            Delete Product
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
