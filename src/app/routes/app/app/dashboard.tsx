import { AppSidebar } from "@/components/app-sidebar";
import { ContentLayout } from "@/components/layouts/content-layout";
import {
  SidebarProvider,
  SidebarInset,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserNav } from "@/components/user-nav";
import { Outlet } from "react-router";

export const DashboardRoute = () => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <SidebarHeader className="bg-sidebar-primary-foreground">
            <div className="flex justify-between">
              <SidebarTrigger className="self-center" variant="secondary" />
              <div className="py-2">
                <UserNav />
              </div>
            </div>
          </SidebarHeader>
          <ContentLayout title="Dashboard">
            <Outlet />
          </ContentLayout>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};
