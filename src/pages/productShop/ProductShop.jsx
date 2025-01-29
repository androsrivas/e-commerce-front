import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductContext" ;
import ProductCard from "../../components/Customer/molecules/ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ProductShop = () => {
  const { products } = useContext(ProductContext)
  return (
    <>

      <div className="container mx-auto px-4 py-8 ">

        <div className="absolute top-25 right-12 z-10">

        </div>
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </>

  )
}

export default ProductShop
