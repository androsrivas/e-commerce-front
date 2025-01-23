import Header from "../../../components/Customer/organisms/desktop/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Customer/organisms/desktop/footer/Footer";
import ProductCard from "../../../components/Customer/molecules/ProductCard/ProductCard";
import "./CustomerLayout.css";



const CustomerLayout = () => {
    return (
        <div className="customer-layout">
            <Header className="header"/>
            <main className="main">
              <ProductCard/>  
            </main>
            <Footer />
        </div>
        
        
    )
}

export default CustomerLayout;