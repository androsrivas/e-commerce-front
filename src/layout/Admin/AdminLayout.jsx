import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/Admin/organisms/appSidebar/AppSidebar";
import ProductProvider from "../../context/ProductContext/ProductProvider";
import CategoryProvider from "../../context/categoryContext/CategoryProvider";

function AdminLayout({ children }) {
  return (
    <CategoryProvider>
    <ProductProvider>
      <SidebarProvider>
      <AppSidebar />
      <main className="flex w-8xl mx-10">
        <SidebarTrigger className="flex"/>
      </main>
    </SidebarProvider>
    </ProductProvider>
    </CategoryProvider>
    
  )
}

export default AdminLayout;