import { Delete, ListPlus, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MoreVertical size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <ListPlus className="mr-2 h-4 w-4" />
            <span>Update</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="bg-red-500 hover:bg-red-600 text-white mt-2">
            <Delete className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
