import { Home, Package, ShoppingCart, CreditCard,ShoppingBag } from "lucide-react"


import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"



const items = [
  {
    title: "Orders",
    url: "/app/dashboard/orders",
    icon: ShoppingCart, 
  },
  {
    title: "Transactions",
    url: "/app/dashboard/transactions",
    icon: CreditCard, 
  },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="sidebar">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild  size="lg">
                            <div>
                                <Button variant="outline">
                                <ShoppingBag size={80}/>
                                </Button>
                                <div className="flex justify-between flex-col">
                                <p className="text-xl font-bold text-orange-500">Shopn</p>
                                <p>commerce</p>
                                </div>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <Separator />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <p>Info</p>
            </SidebarFooter>
        </Sidebar>
    )
}