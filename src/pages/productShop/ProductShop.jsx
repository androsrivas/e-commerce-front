import Header from "../../../components/Customer/organisms/desktop/header/Header";
import Footer from "../../../components/Customer/organisms/desktop/footer/Footer";
import ProductCard from "../../../components/Customer/molecules/ProductCard/ProductCard";
import "./CustomerLayout.css";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext/ProductContext";



const ProductShop = () => {
    const {products} = useContext(ProductContext);
    return (
        <div className="customer-layout">
            <Header className="header"/>
            <main className="main">
                <div>
                    {products.map(product =>(
                        <div key={product.id}>
                            <ProductCard product={product}/> 
                        </div>
                    ))}
                </div>
                
                
               
            </main>
            <Footer />
        </div>
        
        
    )
}

export default CustomerLayout;