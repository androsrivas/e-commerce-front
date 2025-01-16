import Header from "../../components/Customer/organisms/header/Header";
import { Outlet } from "react-router-dom";


const CustomerLayout = () => {
    return (
        <div className="customer-layout">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
        
        
    )
}

export default CustomerLayout;