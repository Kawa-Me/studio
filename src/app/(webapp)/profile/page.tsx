import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Flame, Star, Trophy } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
          Seu Perfil
        </h1>
      </header>
      <Card className="overflow-hidden rounded-xl border border-border bg-card/80 shadow-lg">
        <CardHeader className="items-center bg-muted/30 p-8 text-center">
          <Avatar className="h-32 w-32 border-4 border-primary/50 shadow-lg">
            <AvatarImage src="https://placehold.co/128x128.png" alt="User avatar" data-ai-hint="alpha man" />
            <AvatarFallback>UA</AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 font-headline text-3xl">Usuário Alpha</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
            <div className="grid grid-cols-3 gap-4 text-center mb-8">
                <div className="rounded-lg bg-muted/30 p-4">
                    <Trophy className="mx-auto h-8 w-8 text-primary" />
                    <p className="mt-2 text-2xl font-bold">5</p>
                    <p className="text-sm text-muted-foreground">Módulos Concluídos</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-4">
                    <Flame className="mx-auto h-8 w-8 text-primary" />
                    <p className="mt-2 text-2xl font-bold">25</p>
                    <p className="text-sm text-muted-foreground">Lições Vistas</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-4">
                    <Star className="mx-auto h-8 w-8 text-primary" />
                    <p className="mt-2 text-2xl font-bold">3</p>
                    <p className="text-sm text-muted-foreground">Bônus Desbloqueados</p>
                </div>
            </div>
            <Separator className="my-8" />
            <div className="space-y-4 text-center">
                <Button size="lg" variant="secondary" className="w-full max-w-sm">Minha Conta</Button>
                 <Button size="lg" variant="ghost" className="w-full max-w-sm text-destructive hover:bg-destructive/10 hover:text-destructive">
                    Sair
                </Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
