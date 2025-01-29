import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/Admin/organisms/appSidebar/AppSidebar";
import ProductCreateForm from "../../pages/admin/ProductCreateForm";
import ProductProvider from "../../context/ProductContext/ProductProvider";

function AdminLayout() {
  return (
    <ProductProvider>
      <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <ProductCreateForm/>
      </main>
    </SidebarProvider>
    </ProductProvider>
    
  )
}

export default AdminLayout;