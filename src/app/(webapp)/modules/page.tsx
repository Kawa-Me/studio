
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
          <AccordionItem key={module.id} value={`item-${index}`} className="mb-4 rounded-lg border bg-card/80 px-4 shadow-sm">
            <AccordionTrigger className="text-left font-headline text-lg hover:no-underline md:text-xl">
              {module.title}
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <p className="mb-6 text-muted-foreground">{module.description}</p>
              <div className="space-y-4">
                {module.lessons.map((lesson) => (
                  <Link href={lesson.path} key={lesson.id} className="block rounded-md border p-4 transition-colors hover:bg-muted/50">
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
