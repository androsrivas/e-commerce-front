import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem
} from "@/components/ui/sidebar";
import {
    Accordion, 
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "@/components/ui/accordion";
import { NavLink } from "react-router-dom";
import Logo from "../../../Customer/atoms/logo/Logo";
import useSidebarItems from "../../../../hooks/UseSidebarItems";

export function AppSidebar() {
    const { items, concepts } = useSidebarItems();

    return (
        <Sidebar>
            <SidebarHeader>
                <Logo name="Cukies Shop" to="#"/>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Producción</SidebarGroupLabel>
                    <SidebarMenu>
                        {items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <NavLink 
                                    to={item.url} 
                                    className={({isActive}) => 
                                        `flex items-center p-2 gap-2 ${isActive ? "active-class" : "inactive-class"}`
                                    }
                                >
                                    {item.icon && <item.icon/>}
                                    <span>{item.title}</span>
                                </NavLink>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Conceptos</SidebarGroupLabel>
                    <SidebarMenu>
                        <Accordion type="multiple" className="w-full">
                            { concepts.map((concept) => (
                                <AccordionItem key={concept.title} value={concept.title}>
                                    <AccordionTrigger className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-2">
                                            {concept.icon && <concept.icon />}
                                            <span>{concept.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    {concept.openSub && (
                                        <AccordionContent>
                                            <SidebarMenuSub>
                                                {concept.openSub.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title} asChild>
                                                        <NavLink
                                                            to={subItem.url}
                                                            className={({isActive}) => isActive ? "active-class" : "inactive-class"}
                                                        >
                                                            {subItem.title}
                                                        </NavLink>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </AccordionContent>
                                    )}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}