
import ProductCard from "../../components/Customer/molecules/ProductCard/ProductCard";
/* import "./CustomerLayout.css"; */
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductContext";




const ProductShop = () => {
    const {products} = useContext(ProductContext);
    return (
            
            <div className="customer-layout">
                <main className="main  ">
                    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5" >
                        {products.map(product => (
                            <div key={Math.random()}>
                                <ProductCard product={product} className="margin-4"  />
                            </div>
                        ))}
                    </div>
                </main>

            </div>
        
    )
}

export default ProductShop;