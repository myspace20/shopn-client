import { AppSidebar } from './components/app-sidebar'
import { SidebarHeader, SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function App() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset >
        <SidebarHeader className='bg-sidebar-primary-foreground' >
          <div className='flex justify-between'>
            <SidebarTrigger className='self-center' variant="secondary" />
            <div className='py-2'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </SidebarHeader>
        <main>
          <div className='p-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nisi facere nulla, consequatur animi maxime iusto non asperiores voluptatum odio atque officiis eius doloremque deleniti est pariatur quo iste itaque.
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>

  )
}

export default App
