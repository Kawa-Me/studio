import { BottomNav } from "@/components/bottom-nav";

export default function WebAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <main className="pb-20">{children}</main>
      <BottomNav />
    </div>
  );
}
