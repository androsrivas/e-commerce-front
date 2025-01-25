import { Card, CardFooter, CardHeader, CardContent } from "@/components/ui/card";
import { StarIcon } from '@heroicons/react/24/solid';

function ProductCard({product}) {
  
  return (
    <Card className="w-72 bh-white rounded-lg shadow-lg overflow-hidden m-8">
      <div>
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      </div>
      <CardContent className="p-4">
        <CardHeader className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          {product.featured && (
            <span className="text-sm text-green-500 font-bold">Featured</span>
          )}

        </CardHeader>

        <p>{`${product.price}€`}</p>

        <div className="flex items-center mt-2">
          <div className="flex text-yellow-400">
            {[ ...Array(5) ].map((star, index) => (
              <StarIcon key={index} className={`h-5 w-5 ${index < 4/* rating */ ? 'text-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{/* {reviews} */} Reviews</span>
        </div>
      </CardContent >
      <CardFooter className="p-4">
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Ver más
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
