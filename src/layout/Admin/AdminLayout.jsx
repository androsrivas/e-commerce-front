import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/Admin/organisms/appSidebar/AppSidebar";
import AdminPanel from "../../pages/admin/AdminPanel";
import ProductProvider from "../../context/ProductContext/ProductProvider";

function AdminLayout({ children }) {
  return (
    <ProductProvider>
      <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <AdminPanel/>
      </main>
    </SidebarProvider>
    </ProductProvider>
    
  )
}

export default AdminLayout;