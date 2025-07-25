
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { modules } from "@/lib/course-data";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function ModulesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold text-foreground md:text-5xl">
          Módulos do Curso
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Acesse todo o conteúdo e transforme sua vida.
        </p>
      </header>
      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {modules.map((module, index) => (
          <AccordionItem key={module.id} value={`item-${index}`} className="mb-4 rounded-xl border border-border bg-card/80 px-4 shadow-lg transition-all hover:border-primary/50 hover:shadow-primary/10">
            <AccordionTrigger className="text-left font-headline text-lg hover:no-underline md:text-2xl">
              <span className="text-primary">{module.title}</span>
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <p className="mb-6 text-muted-foreground">{module.description}</p>
              <div className="space-y-4">
                {module.lessons.map((lesson) => (
                  <Link href={lesson.path} key={lesson.id} className="block rounded-lg border p-4 transition-all duration-300 hover:bg-muted/50 hover:shadow-md hover:border-primary/50">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{lesson.title}</h4>
                      <PlayCircle className="h-6 w-6 text-primary" />
                    </div>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
