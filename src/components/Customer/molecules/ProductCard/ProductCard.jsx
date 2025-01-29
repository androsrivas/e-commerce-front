import { Card, CardFooter, CardHeader, CardContent } from "@/components/ui/card"
import { StarIcon } from "@heroicons/react/24/solid"

function ProductCard({ product }) {
  return (
    <Card className="flex flex-col h-full">
      <div className="relative pt-[75%]">
        <img
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <CardContent className="flex-grow p-4">
        <CardHeader className="p-0 mb-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold truncate">{product.name}</h3>
            {product.featured ? (
              <span className="text-xs text-rose-600 font-bold">Featured</span>
            ) : (
              <span className="text-xs text-transparent">Featured</span>
            )}
          </div>
        </CardHeader>

        <p className="text-center text-lg font-bold">{`${product.price} €`}</p>

        <div className="flex justify-center items-center mt-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} className={`h-4 w-4 ${index < 4 ? "text-yellow-400" : "text-gray-300"}`} />
            ))}
          </div>
          <span className="ml-2 text-xs text-gray-600">Reviews</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <button className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700 transition">Ver más</button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
