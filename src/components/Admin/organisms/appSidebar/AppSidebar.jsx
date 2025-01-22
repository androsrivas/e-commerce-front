import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem
} from "@/components/ui/sidebar";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";  
import Logo from "@/components/Customer/atoms/logo/Logo";
import { useSidebarState } from "../../../../hooks/useSidebar/UseSidebarState";
import { 
    RiHomeSmile2Line, 
    RiBarChartGroupedFill, 
    RiWindow2Line, 
    RiAccountBox2Line,
    RiUserLine,
    RiShoppingCartLine,
    RiShoppingBag2Line,
    RiBillLine,
    RiTruckLine,
    RiArrowDropDownLine     
} from "react-icons/ri";

export function AppSidebar() {
    const items = [
        {
            title: "General",
            url: "#",
            icon: <RiHomeSmile2Line/>
        },
        {
            title: "Análisi",
            url: "#",
            icon: <RiBarChartGroupedFill />

        },
        {
            title: "E-Commerce",
            url: "#",
            icon: <RiWindow2Line />

        },
        {
            title: "Cuenta",
            url: "#",
            icon: <RiAccountBox2Line />
        }
    ];
    const concepts = [
        {
            title: "Clientes",
            url: "#",
            icon: <RiUserLine />
        },
        {
            title: "Productos",
            url: "#",
            icon: <RiShoppingBag2Line />
        },
        {
            title: "Pedidos",
            url: "#",
            icon: <RiShoppingCartLine />
        },
        {
            title: "Facturas",
            url: "#",
            icon: <RiBillLine />
        },
        {
            title: "Logistica",
            url: "#",
            icon: <RiTruckLine />
        }      
    ];

   const { openItems, toggleItems } = useSidebarState();

  return (
    <Sidebar>
        <SidebarHeader>
            <Logo name="Cukies Shop" to="#" className=""/>
        </SidebarHeader>
      <SidebarContent>
        {/* Sección Producción */}
            <SidebarGroup>
                <SidebarGroupLabel>Producción</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={ item.title }>
                                <SidebarMenuButton asChild>
                                    <a href={ item.url }>
                                        { item.icon }
                                        <span>{ item.title }</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            {/* Sección Conceptos */}
            <SidebarGroup>
                <SidebarGroupLabel>Conceptos</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {concepts.map((concept) => (
                            <Collapsible key={ concept.title }>
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild onClick={() => toggleItems(concept.title)}>
                                        <SidebarMenuButton>
                                            <a href={concept.url} className="flex items-center justify-between w-full">
                                                <div className="flex items-center gap-2">
                                                    { concept.icon }
                                                    <span>{ concept.title}</span>
                                                </div>
                                                <RiArrowDropDownLine 
                                                    className={`transition-transform ${openItems[concept.title] ? "rotate-180" : ""}`}
                                                />
                                            </a>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem asChild>
                                                <a href={`${ concept.url }/lista`}>Lista</a>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem asChild>
                                                <a href={`${ concept.url }/crear`}>Crear</a>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        ))}                        
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    /*  */
  )
}
