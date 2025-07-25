import { SidebarProvider, Sidebar, SidebarTrigger, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
import Link from "next/link";
import { Home, Dumbbell, Gift, User, Settings } from "lucide-react";
import { BottomNav } from "@/components/bottom-nav";

const navItems = [
  { href: "/", label: "Início", icon: Home },
  { href: "/modules", label: "Módulos", icon: Dumbbell },
  { href: "/bonus", label: "Bônus", icon: Gift },
  { href: "/profile", label: "Perfil", icon: User },
];

export default function WebAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent className="flex flex-col justify-between">
          <div>
            <SidebarHeader>
              <h2 className="font-headline text-2xl font-bold text-primary">M.H.I</h2>
            </SidebarHeader>
            <SidebarMenu>
              {navItems.map((item) => (
                 <SidebarMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <SidebarMenuButton>
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </div>
          <SidebarFooter>
             <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton>
                        <Settings />
                        <span>Configurações</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1">
        <header className="sticky top-0 z-10 hidden h-14 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur-sm md:flex">
            <SidebarTrigger />
            <h1 className="font-headline text-xl font-bold text-foreground">MÉTODO HOMEM IMPARÁVEL</h1>
        </header>
        <main className="pb-20 md:pb-0">{children}</main>
      </div>
      <BottomNav />
    </SidebarProvider>
  );
}
