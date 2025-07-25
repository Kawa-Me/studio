import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { bonuses } from "@/lib/course-data";
import Link from "next/link";

export default function BonusPage() {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-8">
            <header className="mb-12 text-center">
                <h1 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
                    Bônus Exclusivos
                </h1>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                    Ferramentas extras para acelerar sua jornada.
                </p>
            </header>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
                {bonuses.map((bonus, index) => {
                    const CardWrapper = bonus.path ? Link : 'div';
                    return (
                        <CardWrapper href={bonus.path || ''} key={index} className="block transition-transform duration-300 hover:scale-[1.02]">
                            <Card className="flex h-full flex-col rounded-xl border border-border bg-card/80 shadow-lg transition-all hover:border-primary/50 hover:shadow-primary/10">
                                <CardHeader className="flex flex-row items-start gap-6 p-6">
                                    <bonus.icon className="h-12 w-12 shrink-0 text-primary" />
                                    <div>
                                        <CardTitle className="font-headline text-xl text-primary">{bonus.title}</CardTitle>
                                        <CardDescription className="mt-2 text-base text-muted-foreground">{bonus.description}</CardDescription>
                                    </div>
                                </CardHeader>
                            </Card>
                        </CardWrapper>
                    )
                })}
            </div>
        </div>
    )
}
