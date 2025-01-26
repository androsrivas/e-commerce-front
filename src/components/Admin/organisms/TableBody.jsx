import EditProductBtn from "../atoms/adminCrudBtns/EditProductBtn";
import { Switch } from "@/components/ui/switch";
import DeleteProductAction from "./DeleteProductAction";


const TableBody = ({products}) => {
  return (
    <>
    <tbody products={products} >
          {products.map((product) => (
            <tr key={`${Date.now()}-${Math.random()}`} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">
                <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover" />
              </td>
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{product.price} €</td>
              <td className="px-4 py-2">
                <Switch 
                isChecked={product.featured} 
                onChange={(e) => onFeaturedChange(product.id, e.target.checked)}
                />
              </td>
              <td className="px-4 py-2 flex space-x-2">
                <EditProductBtn productId={product.id} />
                <DeleteProductAction product={product} />
                
              </td>
            </tr>
          ))}
        </tbody>
    </>
  )
}

export default TableBody;