
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { modules } from "@/lib/course-data";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
          MÉTODO HOMEM IMPARÁVEL
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          O caminho para sua melhor versão.
        </p>
      </header>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {modules.map((module, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="min-h-[75vh] border-2 border-primary/20 bg-card/50 shadow-lg shadow-primary/10">
                  <CardHeader className="text-center">
                    <CardTitle className="font-headline text-xl md:text-3xl text-primary">{module.title}</CardTitle>
                    <CardDescription className="text-base md:text-lg">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {module.lessons.map((lesson) => (
                       <Link href={lesson.path} key={lesson.id} className="block rounded-lg border border-border bg-background/50 p-4 transition-all duration-300 hover:bg-muted/50 hover:shadow-md hover:border-primary/50">
                        <div className="flex items-center justify-between">
                          <h4 className="flex-1 font-semibold text-sm">{lesson.title}</h4>
                          <PlayCircle className="h-5 w-5 text-primary" />
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="bg-secondary hover:bg-primary" />
          <CarouselNext className="bg-secondary hover:bg-primary" />
        </div>
      </Carousel>
    </div>
  );
}
