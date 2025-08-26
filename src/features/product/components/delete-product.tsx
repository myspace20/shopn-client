import { Button } from "@/components/ui/button";
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog";
import { Trash } from "lucide-react";
import { useDeleteProduct } from "../api/delete-product";
import { ReloadIcon } from "@radix-ui/react-icons";


type DeleteProductProps = {
    id: string,
    isDeleteProductDialogOpen: boolean,
    setIsDeleteProductDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export const DeleteProduct = ({
    id,
    isDeleteProductDialogOpen,
    setIsDeleteProductDialogOpen
}: DeleteProductProps) => {

    
    const deleteProductMutation = useDeleteProduct({})

    return (
        <ConfirmationDialog
            open={isDeleteProductDialogOpen}
            setOpen={setIsDeleteProductDialogOpen}
            icon="danger"
            title="Delete Product"
            body="Are you sure you want to delete this product?"
            confirmButton={
                deleteProductMutation.isPending ? (
                <Button disabled>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button
                onClick={()=> deleteProductMutation.mutate({id})} 
                type="button"
                variant='destructive'
                >Delete Product</Button>
              )
            }
        />
    );

}