import { Button } from "@/components/ui/button";
import { TrashIcon } from '@heroicons/react/24/solid';
import { useContext } from "react";
import { ProductContext } from "../../../../context/ProductContext/ProductContext";

const DeleteProductBtn = ({product}) => {
  const {deleteProductById} = useContext(ProductContext);
  
  return (
    <Button variant="destructive" onClick={()=>{
      console.log("Product ID:", product.id);
      deleteProductById(product.id)}}>
      <TrashIcon/>
    </Button>
    
  )
}

export default DeleteProductBtn;