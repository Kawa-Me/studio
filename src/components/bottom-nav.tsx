
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Dumbbell, Gift, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/app", label: "Início", icon: Home },
  { href: "/modules", label: "Módulos", icon: Dumbbell },
  { href: "/bonus", label: "Bônus", icon: Gift },
  { href: "/profile", label: "Perfil", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 mt-8 border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto grid h-20 max-w-lg grid-cols-4 items-center justify-around gap-2 px-2">
        {navItems.map((item) => {
          const isActive =
            item.href === "/app"
              ? pathname === item.href
              : pathname.startsWith(item.href) && item.href !== '/app';
          
          if (item.href === "/app" && pathname !== "/app") {
              const isActive = false
          }


          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-xs font-medium transition-colors hover:bg-primary/10 hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <div className={cn("rounded-full p-3 transition-colors group-hover:bg-primary/20", isActive ? "bg-primary/20" : "bg-transparent")}>
                <item.icon className="h-6 w-6" />
              </div>
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
