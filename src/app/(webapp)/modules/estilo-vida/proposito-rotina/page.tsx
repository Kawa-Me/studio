

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
  'proposito-rotina': () => (
    <article className="prose dark:prose-invert max-w-none">
<h1>COMO TER UM PROPÓSITO E ROTINA QUE IMPÕE RESPEITO</h1>
<h2>O Poder do Propósito: O Que te Move?</h2>
<p>Um homem com propósito é um homem atraente. Propósito não é apenas ter um emprego ou um hobby; é a razão pela qual você acorda todos os dias, a paixão que te impulsiona, a visão que você tem para sua vida. Quando você tem um propósito claro, sua vida ganha direção, significado e uma energia que é palpável. Mulheres são naturalmente atraídas por homens que têm uma missão, que estão construindo algo, que são apaixonados por algo maior do que eles mesmos.</p>
<p>Um propósito impõe respeito porque demonstra que você é um homem com direção, que não está à deriva, e que tem algo valioso para oferecer ao mundo. Isso se traduz em autoconfiança, disciplina e uma aura de liderança.</p>
<h2>Definindo Seu Propósito</h2>
<ol>
<li><strong>Auto-reflexão Profunda:</strong> Pergunte-se:
<ul>
<li>O que eu realmente valorizo na vida?</li>
<li>O que me faz sentir vivo e energizado?</li>
<li>Que problema eu gostaria de resolver no mundo?</li>
<li>Qual legado eu quero deixar?</li>
<li>O que eu faria se o dinheiro não fosse um problema?</li>
<li>Suas respostas podem apontar para sua carreira, um projeto pessoal, uma causa social, ou até mesmo um estilo de vida que você deseja construir.</li>
</ul>
</li>
<li><strong>Comece Pequeno, Pense Grande:</strong> Seu propósito não precisa ser grandioso desde o início. Pode ser algo como "me tornar o melhor na minha área" ou "ajudar 100 pessoas a alcançar seus objetivos". O importante é ter uma direção e começar a agir.</li>
<li><strong>Conecte com Seus Valores:</strong> Seu propósito deve estar alinhado com seus valores mais profundos. Se você valoriza a liberdade, seu propósito pode envolver empreendedorismo. Se valoriza a conexão, pode ser construir uma comunidade.</li>
</ol>
<h2>Construindo uma Rotina de Respeito</h2>
<p>Uma rotina disciplinada é o veículo para alcançar seu propósito. Ela demonstra autodisciplina, compromisso e a capacidade de gerenciar seu tempo e energia de forma eficaz. Uma rotina que impõe respeito não é rígida, mas intencional, focada em seus objetivos e no seu desenvolvimento pessoal.</p>
<ol>
<li><strong>Manhãs Poderosas:</strong>
<ul>
<li><strong>Acorde Cedo:</strong> Dê a si mesmo tempo para se preparar mental e fisicamente antes que o mundo comece a te exigir. Isso cria uma sensação de controle e proatividade.</li>
<li><strong>Exercício Físico:</strong> Comece o dia com alguma atividade física. Isso libera endorfinas, aumenta a energia e a clareza mental. Pode ser uma corrida, academia, yoga ou alongamento.</li>
<li><strong>Leitura/Aprendizado:</strong> Dedique 15-30 minutos para ler algo que te inspire, te ensine ou te ajude a crescer. Pode ser um livro, um artigo, ou um curso online.</li>
<li><strong>Planejamento do Dia:</strong> Revise seus objetivos e planeje as 3 tarefas mais importantes do dia. Isso garante que você esteja sempre avançando em direção ao seu propósito.</li>
</ul>
</li>
<li><strong>Foco e Produtividade:</strong>
<ul>
<li><strong>Trabalho Focado:</strong> Dedique blocos de tempo ininterruptos para as tarefas mais importantes. Elimine distrações (celular, redes sociais).</li>
<li><strong>Pausas Estratégicas:</strong> Faça pequenas pausas para recarregar. Levante-se, alongue-se, beba água. Isso aumenta a produtividade e evita o esgotamento.</li>
</ul>
</li>
<li><strong>Noites de Recuperação e Crescimento:</strong>
<ul>
<li><strong>Desconexão Digital:</strong> Desligue telas (celular, computador, TV) pelo menos uma hora antes de dormir. A luz azul interfere no sono.</li>
<li><strong>Reflexão:</strong> Dedique alguns minutos para refletir sobre o seu dia. O que você fez bem? O que poderia ter feito melhor? O que você aprendeu?</li>
<li><strong>Leitura/Hobby:</strong> Relaxe com um livro, um hobby ou uma conversa significativa. Evite notícias negativas ou estressantes.</li>
<li><strong>Sono de Qualidade:</strong> Priorize 7-9 horas de sono ininterrupto. O sono é fundamental para a recuperação física e mental, e para a produção hormonal.</li>
</ul>
</li>
</ol>
<h2>EXERCÍCIO PRÁTICO 1: CONSTRUINDO SUA ROTINA DE RESPEITO</h2>
<ol>
<li><strong>Defina Seu Propósito (Rascunho):</strong> Em uma frase, qual é o seu propósito principal neste momento da sua vida?
<ul>
<li><em>Meu Propósito:</em></li>
</ul>
</li>
<li><strong>Auditoria da Sua Rotina Atual:</strong> Descreva um dia típico da sua semana. Anote como você gasta seu tempo, desde o momento em que acorda até a hora de dormir.
<ul>
<li><em>Minha Rotina Atual:</em></li>
</ul>
</li>
<li><strong>Crie Sua Rotina Ideal (Semana que Vem):</strong> Com base no seu propósito e nas dicas acima, desenhe sua rotina ideal para a próxima semana. Seja realista, mas desafiador. Inclua:
<ul>
<li><em>Horário de Acordar:</em></li>
<li><em>Atividade Matinal (ex: exercício, leitura):</em></li>
<li><em>Blocos de Trabalho Focado:</em></li>
<li><em>Atividade Noturna (ex: reflexão, hobby):</em></li>
<li><em>Horário de Dormir:</em></li>
</ul>
</li>
<li><strong>Comprometa-se:</strong> Comece a implementar essa rotina amanhã. Monitore seu progresso e faça ajustes conforme necessário. Lembre-se, a consistência é mais importante que a perfeição.</li>
</ol>
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
