

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
  'cuidar-aparencia': () => (
    <article className="prose dark:prose-invert max-w-none">
<h1>COMO CUIDAR DA APARÊNCIA SEM PARECER VAIDOSO DEMAIS</h1>
<h2>A Aparência do Homem Imparável: Cuidado e Autenticidade</h2>
<p>No Módulo 2, abordamos a importância de se vestir e se portar para gerar atração automática. Agora, vamos aprofundar na ideia de que cuidar da sua aparência é um ato de autovalorização e respeito, e não de vaidade excessiva. Um homem que se cuida transmite uma mensagem de disciplina, saúde e sucesso. Ele não precisa ser um modelo de passarela, mas deve ser a melhor versão de si mesmo.</p>
<p>O objetivo não é parecer "perfeito" ou artificial, mas sim apresentar-se de forma limpa, saudável e com um estilo que reflita sua personalidade. Isso atrai mulheres porque demonstra que você se importa consigo mesmo e com a forma como se apresenta ao mundo.</p>
<h2>Pilares do Cuidado Pessoal Masculino</h2>
<ol>
<li><strong>Higiene Pessoal Impecável:</strong>
<ul>
<li><strong>O que fazer:</strong> Banho diário, uso de desodorante, escovação dos dentes (pelo menos duas vezes ao dia), uso de fio dental. Mantenha as unhas limpas e aparadas. Lave o cabelo regularmente e use produtos adequados ao seu tipo de cabelo.</li>
<li><strong>Por que é importante:</strong> A base de uma boa aparência é a higiene. Não há roupa cara ou perfume importado que compense a falta de higiene básica.</li>
</ul>
</li>
<li><strong>Cabelo e Barba (ou Rosto Limpo):</strong>
<ul>
<li><strong>O que fazer:</strong> Encontre um bom barbeiro/cabeleireiro e mantenha um corte de cabelo que valorize seu rosto e seja fácil de manter. Se você usa barba, mantenha-a aparada e limpa. Se não usa, mantenha o rosto bem barbeado e hidratado. Invista em produtos de qualidade para cabelo e barba.</li>
<li><strong>Por que é importante:</strong> Cabelo e barba são molduras do rosto. Um bom corte e cuidado adequado podem transformar sua aparência.</li>
</ul>
</li>
<li><strong>Cuidados com a Pele:</strong>
<ul>
<li><strong>O que fazer:</strong> Lave o rosto duas vezes ao dia com um sabonete específico para seu tipo de pele. Use um hidratante facial diariamente (mesmo que sua pele seja oleosa). Considere usar protetor solar facial. Se tiver problemas de acne ou pele, procure um dermatologista.</li>
<li><strong>Por que é importante:</strong> Uma pele saudável e bem cuidada transmite vitalidade e juventude. Não é "coisa de mulher"; é cuidado básico.</li>
</ul>
</li>
<li><strong>Vestuário Inteligente e Adequado:</strong>
<ul>
<li><strong>O que fazer:</strong> Invista em roupas que caem bem no seu corpo (ajuste é mais importante que marca). Tenha peças básicas e versáteis (camisas neutras, jeans de bom corte, calças sociais). Vista-se de acordo com a ocasião. Roupas limpas, passadas e sem furos são essenciais.</li>
<li><strong>Por que é importante:</strong> Sua roupa é sua segunda pele. Ela comunica seu status, seu estilo e seu respeito por si mesmo e pelos outros.</li>
</ul>
</li>
<li><strong>Perfume (com Moderação):</strong>
<ul>
<li><strong>O que fazer:</strong> Escolha um perfume que combine com sua personalidade e use-o com moderação. Menos é mais. O perfume deve ser um convite sutil, não uma agressão olfativa.</li>
<li><strong>Por que é importante:</strong> O olfato é um sentido poderoso e está diretamente ligado à memória e à atração. Um bom cheiro pode deixar uma impressão duradoura.</li>
</ul>
</li>
<li><strong>Saúde Bucal:</strong>
<ul>
<li><strong>O que fazer:</strong> Além da escovação e fio dental, visite o dentista regularmente para limpezas e check-ups. Um sorriso saudável e um hálito fresco são cruciais para a confiança e a interação social.</li>
<li><strong>Por que é importante:</strong> Um sorriso bonito é um dos seus maiores ativos. Problemas bucais podem afetar sua saúde geral e sua autoconfiança.</li>
</ul>
</li>
</ol>
<h2>Evitando a Vaidade Excessiva</h2>
<p>O limite entre cuidado pessoal e vaidade excessiva é sutil. A chave é a autenticidade e a naturalidade. Não se trata de tentar ser outra pessoa, mas de otimizar quem você já é. Evite:</p>
<ul>
<li><strong>Excesso de Maquiagem:</strong> Homens não precisam de maquiagem, a menos que seja para fins artísticos ou profissionais específicos. O objetivo é uma pele saudável, não uma cobertura.</li>
<li><strong>Obsessão por Marcas:</strong> Não se vista apenas com marcas. Vista-se com estilo e bom gosto. A qualidade e o caimento são mais importantes que o logo.</li>
<li><strong>Excesso de Acessórios:</strong> Menos é mais. Um bom relógio, um cinto elegante, talvez uma pulseira discreta. Não se sobrecarregue com joias ou acessórios chamativos.</li>
<li><strong>Falar Demais sobre Sua Aparência:</strong> Cuide-se, mas não faça disso o centro das suas conversas. Deixe que sua aparência fale por si só.</li>
</ul>
<h2>EXERCÍCIO PRÁTICO 2: AUDITORIA DE CUIDADO PESSOAL</h2>
<p>Faça uma auditoria completa de sua rotina de cuidado pessoal. Para cada item abaixo, avalie-se de 1 a 5 (1 = Precisa de Muita Melhoria, 5 = Excelente) e escreva uma ação que você pode tomar esta semana para melhorar.</p>
<ol>
<li><strong>Higiene Pessoal (banho, desodorante, dentes, unhas):</strong>
<ul>
<li><em>Avaliação:</em></li>
<li><em>Ação para Melhorar:</em></li>
</ul>
</li>
<li><strong>Cabelo e Barba (corte, limpeza, produtos):</strong>
<ul>
<li><em>Avaliação:</em></li>
<li><em>Ação para Melhorar:</em></li>
</ul>
</li>
<li><strong>Cuidados com a Pele (limpeza, hidratação, protetor solar):</strong>
<ul>
<li><em>Avaliação:</em></li>
<li><em>Ação para Melhorar:</em></li>
</ul>
</li>
<li><strong>Vestuário (caimento, limpeza, adequação):</strong>
<ul>
<li><em>Avaliação:</em></li>
<li><em>Ação para Melhorar:</em></li>
</ul>
</li>
<li><strong>Perfume (escolha, aplicação):</strong>
<ul>
<li><em>Avaliação:</em></li>
<li><em>Ação para Melhorar:</em></li>
</ul>
</li>
<li><strong>Saúde Bucal (hálito, dentes):</strong>
<ul>
<li><em>Avaliação:</em></li>
<li><em>Ação para Melhorar:</em></li>
</ul>
</li>
</ol>
<p>Comprometa-se a implementar essas ações. Pequenas melhorias consistentes farão uma grande diferença na sua autoconfiança e na forma como você é percebido.</p>
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
  margin-left: 1.5rem;
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
`;

if (typeof window !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = proseStyles;
    document.head.appendChild(styleSheet);
}
