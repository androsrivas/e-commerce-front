import { Card, CardFooter, CardHeader, CardContent } from "@/components/ui/card";
import { StarIcon } from '@heroicons/react/24/solid';
import { BookmarkIcon } from '@heroicons/react/24/solid';
import "./ProductCard.css"

function ProductCard({product}) {
  
  return (
    <Card className="w-72  overflow-hidden m-8">
      <div>
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      </div>
      <CardContent className="p-4">
        <CardHeader className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          {product.featured && (
            <span className="text-sm text-rose-600 font-bold">Featured</span>
          )|| (<span className="text-sm text-white font-bold">Featured</span>)}

        </CardHeader>

        <p className="text-center text-lg">{`${product.price} €`}</p>

        <div className="flex justify-center items-center mt-2">
          <div className="flex text-yellow-400">
            {[ ...Array(5) ].map((star, index) => (
              <StarIcon key={index} className={`h-5 w-5 ${index < 4/* rating */ ? 'text-yellow-400' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">{/* {reviews} */} Reviews</span>
        </div>
      </CardContent >
      <CardFooter className="p-4">
        <button className="w-full bg-rose-600 text-white py-2  hover:bg-rose-400 transition">
          Ver más
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
