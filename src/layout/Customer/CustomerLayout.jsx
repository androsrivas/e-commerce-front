import Header from "../../components/Customer/organisms/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Customer/organisms/footer/Footer";
import "./CustomerLayout.css";


const CustomerLayout = () => {
    return (
        <div className="customer-layout">
            <Header className="header"/>
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
        
        
    )
}

export default CustomerLayout;