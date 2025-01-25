import Header from "../../../components/Customer/organisms/desktop/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Customer/organisms/desktop/footer/Footer";
import "./CustomerLayout.css";
import ProductProvider from "../../../context/ProductContext/ProductProvider";




const CustomerLayout = () => {
    
    return (
        <ProductProvider>
            <div className="customer-layout">
                <Header className="header" />
                <main className="main">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </ProductProvider>
        
        
        
    )
}

export default CustomerLayout;