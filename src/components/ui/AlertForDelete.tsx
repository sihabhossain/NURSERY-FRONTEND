import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "./badge";
import { useDeleteProductMutation } from "@/redux/api/api";
import toast from "react-hot-toast";

export function AlertForDelete({ productId }: { productId: string }) {
  const [deleteProduct, { isSuccess }] = useDeleteProductMutation();

  if (isSuccess) {
    toast.success("Product deleted");
  }

  const handleDelete = async () => {
    try {
      await deleteProduct(productId);
    } catch (error) {
      console.error("Error deleting product:", error);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Badge>Delete</Badge>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            product and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
