import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../../components/Admin/organisms/AppSidebar";
import ProductProvider from "../../context/ProductContext/ProductProvider";
import CategoryProvider from "../../context/categoryContext/CategoryProvider";
import AdminHeader from "../../components/Admin/organisms/AdminHeader";

function AdminLayout({ children }) {
  return (
    <CategoryProvider>
    <ProductProvider>
      <SidebarProvider>
      <AppSidebar />
      <AdminHeader />
      <main className="flex w-8xl mx-10">
        { children }
      </main>
    </SidebarProvider>
    </ProductProvider>
    </CategoryProvider>
    
  )
}

export default AdminLayout;