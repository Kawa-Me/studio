import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bonuses } from "@/lib/course-data";
import Link from "next/link";

export default function BonusPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-8">
            <header className="mb-8 text-center">
                <h1 className="font-headline text-4xl font-bold text-foreground">
                    Bônus Exclusivos
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    Ferramentas extras para acelerar sua jornada.
                </p>
            </header>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-1">
                {bonuses.map((bonus, index) => {
                    const CardWrapper = bonus.path ? Link : 'div';
                    return (
                        <CardWrapper href={bonus.path || ''} key={index} className="block transition-colors hover:bg-muted/50">
                            <Card className="flex h-full flex-col bg-card/80">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <bonus.icon className="h-10 w-10 shrink-0 text-primary" />
                                    <CardTitle className="font-headline text-lg">{bonus.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{bonus.description}</p>
                                </CardContent>
                            </Card>
                        </CardWrapper>
                    )
                })}
            </div>
        </div>
    )
}
