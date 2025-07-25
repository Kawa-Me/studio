
import { BottomNav } from "@/components/bottom-nav";
import { Home, Dumbbell, Gift, User, Settings } from "lucide-react";

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
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-20 flex h-16 items-center justify-center border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <h1 className="font-headline text-2xl font-bold text-primary">
          MÉTODO HOMEM IMPARÁVEL
        </h1>
      </header>
      <main className="flex-1 pb-24">{children}</main>
      <BottomNav />
    </div>
  );
}
