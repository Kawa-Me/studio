import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VideoPlayer } from "@/components/video-player";
import { modules } from "@/lib/course-data";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold text-foreground sm:text-5xl">
          Alpha Ascent
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
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
                <Card className="min-h-[75vh] border-0 bg-card/50 shadow-sm md:border">
                  <CardHeader className="text-center">
                    <CardTitle className="font-headline text-xl md:text-2xl">{module.title}</CardTitle>
                    <CardDescription className="text-base">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {module.videos.map((video) => (
                      <div key={video.id}>
                        <h4 className="mb-2 font-semibold text-sm">{video.title}</h4>
                        <VideoPlayer videoId={video.id} />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
