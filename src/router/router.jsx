import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: "Layout de Customer",
        children: [
            {
                //
                path: "/",
                element: "LandingPage o Home",
                children: [
                    {
                        path: "/tienda",
                        element: "Shop",
                        children: [
                            {
                                path: "/producto/:productId",
                                element: "Producto"
                            }
                        ]
                    },
                    {
                        path: "/carrito",
                        element: "Checkout"

                    }
                ]
            }
        ]
    },
    {
        path: "/admin",
        element: "Layout de admin",
        children: [
            {
                path: "/productos",
                element: "Productos",
                children: [
                    {
                        path: "/lista",
                        element: "Todos los productos"
                    },
                    {
                        path: "/crear",
                        element: "Formulario añadir producto"
                    }
                ]
            }
        ]
    }
])