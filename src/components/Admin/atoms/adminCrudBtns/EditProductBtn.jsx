import { Button } from "@/components/ui/button";
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom"; 

const EditProductBtn = ({ productId }) => {
  return (
    <Link to={`/update-product/${productId}`}>
      <Button className="bg-indigo-500">
        <PencilSquareIcon className="w-5 h-5" />
      </Button>
    </Link>
  );
}

export default EditProductBtn;
