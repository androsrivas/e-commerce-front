import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "../../src/layout/Customer/desktop/CustomerLayout";
import AdminLayout from "../layout/Admin/AdminLayout";
import ProductShop from "../pages/productShop/ProductShop";

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
        element: <AdminLayout />,
        children: [
            {
                path: "dashboard",
                element: "Inicio de dashboard",
                children: [
                    {
                        path: "productos",
                        element: "Todos los productos", //mismo elemento que ruta lista
                        children: [
                            {
                                path: "lista",
                                element: "Todos los productos"
                            },
                            {
                                path: "crear",
                                element: "Formulario añadir producto"
                            }
                        ]
                    }
                ]
            }
        ]
    }
])