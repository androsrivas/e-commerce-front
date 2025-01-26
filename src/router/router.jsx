import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "../../src/layout/Customer/desktop/CustomerLayout";
import AdminLayout from "../layout/Admin/AdminLayout";
import ProductShop from "../pages/productShop/ProductShop";
import path from "path";
import CreateFormLayout from "../layout/Admin/CreateFormLayout";

import EditProductForm from "../components/Admin/organisms/EditProductForm";
import CategoryPanel from "../pages/admin/CategoryPanel";

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
    {
        path: "update-product/:id",
        element: <EditProductForm/>,
    },
    {
        path: "/categories",
        element: <CategoryPanel/>
    }
         
        
    
])