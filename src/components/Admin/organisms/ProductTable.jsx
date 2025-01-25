import EditProductBtn from "../atoms/adminCrudBtns/EditProductBtn";
import DeleteProductBtn from "../atoms/adminCrudBtns/DeleteProductBtn";
import { Switch } from "@/components/ui/switch";

const ProductTable = ({products, onFeaturedChange}) => {
  return (
    <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Featured</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">
                <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover" />
              </td>
              <td className="px-4 py-2">{product.name}</td>
              <td className="px-4 py-2">{product.price} €</td>
              <td className="px-4 py-2">
                <Switch checked={product.featured} />
              </td>
              <td className="px-4 py-2 flex space-x-2">
                <EditProductBtn product={product} />
                <DeleteProductBtn product={product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default ProductTable