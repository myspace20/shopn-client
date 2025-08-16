import { AppSidebar } from './components/app-sidebar'
import { ContentLayout } from './components/layouts/content-layout'
import { SidebarHeader, SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import { UserNav } from './components/user-nav'
import { OrderList } from './features/orders/components/view-orders'


function App() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarHeader className='bg-sidebar-primary-foreground' >
          <div className='flex justify-between'>
            <SidebarTrigger className='self-center' variant="secondary" />
            <div className='py-2'>
             <UserNav />
            </div>
          </div>
        </SidebarHeader>
        <ContentLayout title='Dashboard'>
         <OrderList />
        </ContentLayout>
      </SidebarInset>
    </SidebarProvider>

  )
}

export default App
