import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Order } from "@/types/api";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import React from "react";
import { useState } from "react";
import { UpdateOrder } from "../update-order";

type OrderTableRowActionsProps = {
  row: Row<Order>;
};

export const OrderTableRowActions = ({ row }: OrderTableRowActionsProps) => {
  const [isOrderDialogOpen, setIsEditOrderDialogOpen] = React.useState(false);

  return (
    <>
      <UpdateOrder
        row={row}
        isOrderDialogOpen={isOrderDialogOpen}
        setIsEditOrderDialogOpen={setIsEditOrderDialogOpen}
      ></UpdateOrder>
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
          <DropdownMenuItem onClick={() => setIsEditOrderDialogOpen(true)}>
            Update order
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
