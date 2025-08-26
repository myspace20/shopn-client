import { FormDrawer } from "@/components/ui/form-drawer";
import { Order } from "@/types/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Row } from "@tanstack/react-table";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const updateOrderSchema = z.object({
  status: z.string().min(1, "Status name is required"),
  address: z.string().min(1, "Address is required"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\+?[0-9\s\-()]+$/, "Invalid phone number format"),
  // total: z
  //     .string()
  //     .regex(/^\d+(\.\d{1,2})?$/, "Total must be a valid number with up to 2 decimal places"),
});

type UpdateOrderFormProps = {
  row: Row<Order>;
  isOrderDialogOpen: boolean;
  setIsEditOrderDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UpdateOrder = ({
  row,
  isOrderDialogOpen,
  setIsEditOrderDialogOpen,
}: UpdateOrderFormProps) => {
  const form = useForm<z.infer<typeof updateOrderSchema>>({
    resolver: zodResolver(updateOrderSchema),
    defaultValues: {
      status: row.original.status,
    },
  });

  function onSubmit(data: z.infer<typeof updateOrderSchema>) {
    console.log(data);
  }

  return (
    <>
      <FormDrawer
        open={isOrderDialogOpen}
        setOpen={setIsEditOrderDialogOpen}
        description="Please follow to edit a product"
        title="Edit product"
        isDone={false}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-[380px]">
                          <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Type your phone number here"
                        {...field}
                      />
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
};
