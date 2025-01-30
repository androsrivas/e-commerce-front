import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "../../src/layout/Customer/desktop/CustomerLayout";
import AdminLayout from "../layout/Admin/AdminLayout";
// import ProductShop from "../pages/productShop/ProductShop";
// import ProductSeparateFilters from "../pages/productShop/ProductSeparateFilters";
import ProductList from "../pages/Admin/ProductList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <CustomerLayout />,
        children: [
            {
                //
                // path: "/",
                // element: <ProductShop/>,
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
            },
            // {
            //     path: "/filters",
            //     element: <ProductSeparateFilters/>
            // }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "dashboard",
                element: "Inicio de dashboard",
                children: [
                    {
                        path: "productos",
                        element: "Todos los productos",
                        children: [
                            {
                                path: "lista",
                                element: <ProductList />
                            },
                            // {
                            //     path: "crear",
                            //     element: <AddProduct />
                            // }
                        ]
                    }
                ]
            }
        ]
    }        
    
])