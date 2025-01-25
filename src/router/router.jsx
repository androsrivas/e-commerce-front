import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "../../src/layout/Customer/desktop/CustomerLayout";
import AdminLayout from "../layout/Admin/AdminLayout";
import ProductShop from "../pages/productShop/ProductShop";
import path from "path";
import CreateFormLayout from "../layout/Admin/CreateFormLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <CustomerLayout />,
        children: [
            {
                //
                path: "/",
                element: <ProductShop/>,
               /*  children: [
                    {
                        path: "/tienda",
                        element: <ProductShop/>,
                        children: [
                            {
                                path: "producto/:productId",
                                element: "Producto"
                            }
                        ]
                    },
                    {
                        path: "carrito",
                        element: "Checkout"

                    }
                ] */
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />
    },

    {
        path: "/create-product",
        element: <CreateFormLayout />
    },
         
        
    
])