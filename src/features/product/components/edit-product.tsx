"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import { AxiosError } from "axios";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Product } from "@/types/api";
import { Row } from "@tanstack/react-table";
import { FormDrawer } from "@/components/ui/form-drawer";
import { useUpdateProduct } from "../api/update-product";
import { toast } from "sonner";

export const updateProductSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Product description is required"),
  price: z.number().min(1, "Product price must be at least 1"),
  quantity: z.number().min(1, "Product quantity must be at least 1"),
});

type EditProductFormProps = {
  row: Row<Product>;
  isEditProductDialogOpen: boolean;
  setIsEditProductDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function EditProduct({
  row,
  isEditProductDialogOpen,
  setIsEditProductDialogOpen,
}: EditProductFormProps) {
  const form = useForm<z.infer<typeof updateProductSchema>>({
    resolver: zodResolver(updateProductSchema),
    defaultValues: {
      name: row.original.name,
      description: row.original.description,
      price: row.original.price,
      quantity: row.original.quantity,
    },
  });

  const updateProductMutation = useUpdateProduct({
    mutationConfig: {
      onSuccess: (response) => {},
    },
  });

  useEffect(() => {
    if (updateProductMutation.error instanceof AxiosError) {
      toast(`${updateProductMutation.error?.response?.data?.message}`);
    }
  }, [updateProductMutation.error]);

  function onSubmit(data: z.infer<typeof updateProductSchema>) {
    updateProductMutation.mutate({ id: row.id, data });
    form.reset();
  }

  return (
    <>
      <FormDrawer
        open={isEditProductDialogOpen}
        setOpen={setIsEditProductDialogOpen}
        description="Please follow to edit a product"
        title="Edit product"
        isDone={false}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Type your name here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type your description here"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input placeholder="Type your quantity here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="Type your price here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-2 justify-center items-center">
                {/* {updatePositionMutation.isPending ? (
                <Button disabled>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : ( */}
                <Button type="submit">Submit</Button>
                {/* )} */}
              </div>
            </div>
          </form>
        </Form>
      </FormDrawer>
    </>
  );
}
