

import { modules } from '@/lib/course-data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

// This is a placeholder map. In a real app, you'd fetch this from a CMS
// or have the markdown content in local files.
const lessonContents: Record<string, React.ComponentType> = {
  'gerar-valor-social': () => (
    <article className="prose dark:prose-invert max-w-none">
<h1>COMO GERAR VALOR SOCIAL (O CARA QUE AS OUTRAS QUEREM)</h1>
<h2>O Ímã Social: Tornando-se o Centro de Atração</h2>
<p>Gerar valor social significa ser o tipo de pessoa que enriquece a vida dos outros, que é procurado por sua energia, suas ideias e sua presença. Não se trata de ser o "palhaço" da turma ou o centro das atenções a todo custo, mas de ser um homem que contribui positivamente para qualquer ambiente social. Quando você gera valor social, você se torna um "ímã" natural, e as mulheres (e as pessoas em geral) querem estar perto de você.</p>
<p>Este capítulo irá explorar como você pode cultivar essa aura de valor social, seja em seu círculo de amigos, no trabalho ou em novos ambientes.</p>
<h2>Estratégias para Gerar Valor Social</h2>
<ol>
<li><strong>Seja um Conector:</strong>
<ul>
<li><strong>O que fazer:</strong> Apresente pessoas umas às outras. Se você conhece duas pessoas que se beneficiariam de se conhecer (seja por interesses em comum, trabalho ou amizade), faça a ponte. Organize pequenos encontros ou eventos.</li>
<li><strong>Por que funciona:</strong> Você se torna o centro da rede social, o catalisador de novas conexões. Isso demonstra generosidade, liderança e uma habilidade social avançada.</li>
</ul>
</li>
<li><strong>Seja um Contribuidor:</strong>
<ul>
<li><strong>O que fazer:</strong> Em qualquer grupo ou conversa, procure formas de contribuir positivamente. Pode ser com uma ideia, uma solução, uma história interessante, um elogio sincero ou até mesmo um ouvido atento. Não seja apenas um "tomador" de energia.</li>
<li><strong>Por que funciona:</strong> Pessoas valorizam quem agrega. Você se torna alguém indispensável, alguém cuja presença é desejada e apreciada.</li>
</ul>
</li>
<li><strong>Desenvolva Habilidades Sociais:</strong>
<ul>
<li><strong>O que fazer:</strong> Pratique a escuta ativa. Faça perguntas abertas. Lembre-se de nomes e detalhes sobre as pessoas. Seja genuinamente interessado nos outros. Aprenda a contar histórias de forma envolvente. Desenvolva seu senso de humor.</li>
<li><strong>Por que funciona:</strong> Habilidades sociais bem desenvolvidas fazem com que as pessoas se sintam confortáveis e valorizadas em sua presença. Você se torna fácil de conversar e agradável de estar por perto.</li>
</ul>
</li>
<li><strong>Tenha Hobbies e Interesses Diversos:</strong>
<ul>
<li><strong>O que fazer:</strong> Cultive paixões e interesses fora do trabalho. Isso te torna uma pessoa mais interessante e com mais assuntos para conversar. Pode ser um esporte, uma arte, um clube de leitura, voluntariado, etc.</li>
<li><strong>Por que funciona:</strong> Você terá mais a compartilhar e mais pontos em comum com diferentes tipos de pessoas. Isso também te dá um senso de propósito e realização que irradia confiança.</li>
</ul>
</li>
<li><strong>Seja Positivo e Energético:</strong>
<ul>
<li><strong>O que fazer:</strong> Pessoas são atraídas por energia positiva. Procure ser otimista, entusiasmado e grato. Evite reclamar excessivamente ou focar apenas nos problemas. Sua energia é contagiosa.</li>
<li><strong>Por que funciona:</strong> Ninguém quer estar perto de alguém que drena sua energia. Ser uma fonte de positividade te torna um refúgio e um prazer de estar por perto.</li>
</ul>
</li>
<li><strong>Lidere com Exemplo:</strong>
<ul>
<li><strong>O que fazer:</strong> Seja proativo. Se você vê uma necessidade, tome a iniciativa. Se você tem uma ideia, proponha. Não espere que os outros ajam. Seja o primeiro a se voluntariar, a organizar, a propor.</li>
<li><strong>Por que funciona:</strong> Liderança é um traço Alpha e é socialmente valorizado. As pessoas respeitam e admiram quem toma a frente e faz as coisas acontecerem.</li>
</ul>
</li>
</ol>
<h2>O "Cara que as Outras Querem": O Efeito da Pré-Seleção</h2>
<p>Quando você gera valor social, o efeito da pré-seleção (discutido no Módulo 2) se amplifica. As mulheres percebem que você é um homem valorizado por seu círculo social, que você é divertido, interessante e que as pessoas gostam de estar perto de você. Isso cria um senso de "prova social" que as faz pensar: "Se ele é tão valorizado por todos, ele deve ser um homem de alto valor."</p>
<p>Não se trata de "fazer joguinhos" ou de usar seus amigos para impressionar. Trata-se de viver uma vida de alto valor, ser um homem de impacto positivo em seu ambiente social, e permitir que essa energia atraia naturalmente as mulheres para você.</p>
<h2>EXERCÍCIO PRÁTICO 4: MEU PLANO DE VALOR SOCIAL</h2>
<ol>
<li><strong>Identifique 3 Habilidades Sociais que Você Quer Melhorar:</strong> (Ex: iniciar conversas, ouvir ativamente, contar histórias, usar humor)
<ul>
<li></li>
</ul>
</li>
<li><strong>Crie um Plano de Ação para Cada Habilidade (próxima semana):</strong>
<ul>
<li><em>Habilidade 1:</em>
<ul>
<li><em>Ação:</em></li>
</ul>
</li>
<li><em>Habilidade 2:</em>
<ul>
<li><em>Ação:</em></li>
</ul>
</li>
<li><em>Habilidade 3:</em>
<ul>
<li><em>Ação:</em></li>
</ul>
</li>
</ul>
</li>
<li><strong>Pense em uma Situação Social Onde Você Pode Gerar Valor:</strong> (Ex: uma festa, um evento de trabalho, um encontro com amigos)
<ul>
<li><em>Situação:</em></li>
<li><em>Como você pode ser um conector, um contribuidor ou um líder nessa situação?</em></li>
</ul>
</li>
<li><strong>Reflita sobre Seus Hobbies:</strong> Você tem hobbies que te permitem interagir com outras pessoas e gerar valor social? Se não, qual novo hobby você consideraria?
<ul>
<li><em>Hobbies Atuais:</em></li>
<li><em>Novo Hobby (se aplicável):</em></li>
</ul>
</li>
</ol>
<p>Implemente seu plano e observe como suas interações sociais mudam. Quanto mais valor você gerar, mais valor você atrairá.</p>
    </article>
  )
};

export default function LessonPage({
  params,
}: {
  params: { moduleId: string; lessonId: string };
}) {
  const module = modules.find((m) => m.id === params.moduleId);
  const lesson = module?.lessons.find((l) => l.id === params.lessonId);

  if (!module || !lesson) {
    notFound();
  }

  const lessonIndex = module.lessons.findIndex((l) => l.id === lesson.id);
  const prevLesson = lessonIndex > 0 ? module.lessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < module.lessons.length - 1 ? module.lessons[lessonIndex + 1] : null;

  const Content = lessonContents[lesson.id];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
       <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/modules">Módulos</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{lesson.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <main className="rounded-lg border bg-card/80 p-6 shadow-sm md:p-8">
        {Content ? <Content /> : <p>Conteúdo não encontrado.</p>}
      </main>

      {lesson.videoId && (
         <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">Vídeo de Apoio</h2>
            <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-sm">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${lesson.videoId}?rel=0&controls=1&showinfo=0&modestbranding=1&autoplay=0`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
      )}

      <nav className="mt-8 flex justify-between">
        {prevLesson ? (
          <Button asChild variant="outline">
            <Link href={prevLesson.path}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Anterior
            </Link>
          </Button>
        ) : <div />}
        {nextLesson ? (
          <Button asChild>
            <Link href={nextLesson.path}>
              Próximo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : <div />}
      </nav>
    </div>
  );
}

// Simple prose styles for the article content
// In a real app, this would likely be in a global CSS file or handled by Tailwind's typography plugin
const proseStyles = `
.prose {
  color: hsl(var(--foreground));
  line-height: 1.7;
}
.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
  color: hsl(var(--foreground));
  font-weight: 700;
  margin-top: 2em;
  margin-bottom: 1em;
}
.prose h1 { font-size: 2.25rem; }
.prose h2 { font-size: 1.875rem; }
.prose h3 { font-size: 1.5rem; }
.prose p { margin-bottom: 1.25em; }
.prose a { color: hsl(var(--primary)); text-decoration: none; }
.prose a:hover { text-decoration: underline; }
.prose ul, .prose ol {
  margin-left: 0;
  padding-left: 1.5rem;
  margin-bottom: 1.25em;
}
.prose li { margin-bottom: 0.5em; }
.prose strong { color: hsl(var(--foreground)); font-weight: 600; }
.prose blockquote {
  border-left: 4px solid hsl(var(--border));
  padding-left: 1rem;
  font-style: italic;
  color: hsl(var(--muted-foreground));
  margin-left: 0;
  margin-right: 0;
}
.prose ul, .prose ol {
    padding-left: 1.5rem;
}
.prose ul > li::before {
    content: '•';
    margin-right: 0.5rem;
    color: hsl(var(--primary));
}
.prose ol > li::marker {
    font-weight: 600;
    color: hsl(var(--primary));
}
.dark .prose ul > li::before, .dark .prose ol > li::marker {
    color: hsl(var(--primary));
}
`;

if (typeof window !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = proseStyles;
    document.head.appendChild(styleSheet);
}
