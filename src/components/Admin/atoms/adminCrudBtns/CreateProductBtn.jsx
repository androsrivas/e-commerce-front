import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';

const CreateProductBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create-product');
  };

  return (
    <Button onClick={handleClick} className="rounded-md bg-indigo-500"><PlusIcon/>Create Product</Button>
  )
}

export default CreateProductBtn;