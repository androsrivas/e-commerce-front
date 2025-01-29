import React from "react";
import { 
    RiHomeSmile2Line, 
    RiBarChartGroupedFill, 
    RiWindow2Line, 
    RiAccountBox2Line,
    RiUserLine,
    RiShoppingCartLine,
    RiShoppingBag2Line,
    RiBillLine,
    RiTruckLine
} from "react-icons/ri";

function useSidebarItems() {
    const items = [
            { title: "General", url: "#", icon: <RiHomeSmile2Line/> },
            { title: "Análisi", url: "#", icon: <RiBarChartGroupedFill /> },
            { title: "E-Commerce", url: "#", icon: <RiWindow2Line /> },
            { title: "Cuenta", url: "#", icon: <RiAccountBox2Line /> }
    ];

    const concepts = [
        { title: "Clientes", url: "#", icon: <RiUserLine /> },
        { title: "Productos", url: "#", icon: <RiShoppingBag2Line />, 
            openSub: [
                {
                    title: "Lista",
                    url: "#"
                },
                {
                    title: "Crear",
                    url: "#"
                }
            ] },
        { title: "Pedidos", url: "#", icon: <RiShoppingCartLine /> },
        { title: "Facturas", url: "#", icon: <RiBillLine /> },
        { title: "Logistica", url: "#", icon: <RiTruckLine /> }      
    ];

     return { items, concepts }
}

export default useSidebarItems