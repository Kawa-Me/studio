import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  return (
    <div className="container mx-auto max-w-lg px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold text-foreground">
          Seu Perfil
        </h1>
      </header>
      <Card className="overflow-hidden bg-card/80">
        <CardHeader className="items-center bg-muted/50 p-6 text-center">
          <Avatar className="h-24 w-24 border-4 border-background shadow-md">
            <AvatarImage src="https://placehold.co/100x100.png" alt="User avatar" data-ai-hint="profile avatar" />
            <AvatarFallback>HI</AvatarFallback>
          </Avatar>
          <CardTitle className="mt-4 font-headline text-2xl">Usuário Imparável</CardTitle>
          <CardDescription>Membro desde: 01 de Janeiro, 2024</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
            <div className="space-y-4 text-center">
                <Button className="w-full max-w-xs">Editar Perfil</Button>
                <Button variant="outline" className="w-full max-w-xs">Configurações</Button>
            </div>
            <Separator className="my-6" />
            <div className="text-center">
                <Button variant="ghost" className="text-destructive hover:text-destructive">
                    Sair da Conta
                </Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
