import TableBody from "./TableBody"


const ProductTable = ({products, onFeaturedChange}) => {
  return (
    <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-rose-100">
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Featured</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <TableBody products={products} onFeaturedChange={onFeaturedChange}/>
      </table>
  )
}

export default ProductTable;