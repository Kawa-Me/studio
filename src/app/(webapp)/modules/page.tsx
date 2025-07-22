import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { VideoPlayer } from "@/components/video-player";
import { modules } from "@/lib/course-data";

export default function ModulesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-4xl font-bold text-foreground">
          Módulos do Curso
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Acesse todo o conteúdo e transforme sua vida.
        </p>
      </header>
      <Accordion type="single" collapsible className="w-full">
        {modules.map((module, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="mb-4 rounded-lg border bg-card/80 px-4 shadow-sm">
            <AccordionTrigger className="text-left font-headline text-lg hover:no-underline md:text-xl">
              {module.title}
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <p className="mb-6 text-muted-foreground">{module.description}</p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {module.videos.map((video) => (
                  <div key={video.id}>
                    <h4 className="mb-2 font-semibold">{video.title}</h4>
                    <VideoPlayer videoId={video.id} />
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
