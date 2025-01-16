import Header from "../../components/Customer/organisms/header/Header";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CustomerLayout = () => {
    return (
        <div className="customer-layout">
            <Button>Click me</Button>
        </div>
        
        
    )
}

export default CustomerLayout;