

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { VideoPlayer } from '@/components/video-player';
import { modules } from '@/lib/course-data';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const lessonContents: Record<string, React.ComponentType> = {
  'homem-completo': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">COMO SE TORNAR UM HOMEM COMPLETO: CORPO, MENTE E SEXUALIDADE</h1>
      <p className="text-xl text-muted-foreground">A Busca pela Excelência Integral</p>
      
      <Separator className="my-8" />
      
      <p>O Método Homem Imparável é uma jornada para a excelência integral. Ser um "homem completo" significa cultivar e harmonizar todas as dimensões da sua vida: seu corpo, sua mente e sua sexualidade. Quando essas três áreas estão em equilíbrio e sendo desenvolvidas ativamente, você se torna uma força imparável, um homem que não apenas atrai mulheres, mas que vive uma vida plena, significativa e de alto impacto.</p>
      <p>Este capítulo final é um chamado à ação para que você continue sua jornada de autodesenvolvimento, aplicando os princípios que aprendeu e buscando a maestria em todas as áreas da sua vida.</p>
      
      <Separator className="my-8" />
      
      <h2 className="font-headline text-2xl font-semibold">Os Três Pilares do Homem Completo</h2>
      <ol className="list-decimal pl-5 space-y-6 mt-4">
        <li><strong>Corpo: O Templo da Sua Força e Vitalidade</strong>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Por que é importante:</strong> Seu corpo é a base de tudo. Uma boa saúde física te dá energia, vitalidade, autoconfiança e a capacidade de desfrutar plenamente da vida, incluindo a sexualidade. Negligenciar seu corpo é negligenciar seu potencial.</li>
            <li><strong>Como cultivar:</strong>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Exercício Físico Regular:</strong> Não apenas para estética, mas para saúde cardiovascular, força, flexibilidade e bem-estar mental. Encontre uma atividade que você ame e a torne parte da sua rotina.</li>
                <li><strong>Nutrição Consciente:</strong> Alimente seu corpo com alimentos nutritivos e integrais. Evite excessos. Uma dieta equilibrada é combustível para sua energia e libido.</li>
                <li><strong>Sono de Qualidade:</strong> Priorize o sono. É durante o sono que seu corpo se recupera, seus hormônios se equilibram e sua mente se consolida.</li>
                <li><strong>Hidratação:</strong> Beba água suficiente ao longo do dia. A desidratação afeta tudo, da energia à função cognitiva.</li>
                <li><strong>Check-ups Médicos:</strong> Faça exames regulares e não ignore sinais de alerta. A prevenção é a chave para uma vida longa e saudável.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Mente: O Motor da Sua Confiança e Propósito</strong>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Por que é importante:</strong> Sua mente é sua ferramenta mais poderosa. Uma mente afiada, resiliente e com propósito é o que te permite superar desafios, aprender, crescer e liderar. A autoconfiança nasce de uma mente forte e bem treinada.</li>
            <li><strong>Como cultivar:</strong>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Aprendizado Contínuo:</strong> Nunca pare de aprender. Leia livros, faça cursos, assista a documentários. Expanda seus conhecimentos e perspectivas.</li>
                <li><strong>Gerenciamento Emocional:</strong> Aprenda a identificar e gerenciar suas emoções. A meditação, o mindfulness e a terapia podem ser ferramentas valiosas.</li>
                <li><strong>Pensamento Crítico:</strong> Questione, analise, forme suas próprias opiniões. Não aceite tudo passivamente.</li>
                <li><strong>Definição de Metas:</strong> Tenha metas claras e desafiadoras em todas as áreas da sua vida. Isso te dá direção e motivação.</li>
                <li><strong>Resolução de Problemas:</strong> Desenvolva sua capacidade de resolver problemas de forma criativa e eficaz. Não fuja dos desafios.</li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Sexualidade: A Expressão da Sua Vitalidade e Conexão</strong>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Por que é importante:</strong> Sua sexualidade é uma parte intrínseca de quem você é como homem. Uma sexualidade saudável e expressa de forma autêntica contribui para sua autoconfiança, sua conexão com os outros e seu bem-estar geral. Negar ou reprimir sua sexualidade pode levar a frustrações e problemas de relacionamento.</li>
            <li><strong>Como cultivar:</strong>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong>Autoconhecimento Sexual:</strong> Entenda seu próprio corpo, seus desejos, suas fantasias. A masturbação consciente pode ser uma ferramenta para isso.</li>
                <li><strong>Comunicação Aberta:</strong> Converse abertamente com sua parceira sobre sexo. Seus desejos, os dela, seus limites, os dela. A comunicação é a base para uma vida sexual satisfatória.</li>
                <li><strong>Exploração e Aventura:</strong> Não se acomode na rotina. Experimente novas posições, locais, fantasias (com consentimento mútuo). Mantenha a chama acesa.</li>
                <li><strong>Foco no Prazer Mútuo:</strong> Lembre-se que o sexo é uma via de mão dupla. Concentre-se em dar prazer tanto quanto em receber. A generosidade sexual é incrivelmente atraente.</li>
                <li><strong>Busque Ajuda se Necessário:</strong> Não hesite em procurar um terapeuta sexual ou médico se tiver problemas de desempenho, libido ou outras preocupações sexuais. Isso é um sinal de força, não de fraqueza.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
      
      <Separator className="my-8" />
      
      <h2 className="font-headline text-2xl font-semibold">A Sinergia dos Pilares</h2>
      <p>Esses três pilares não são independentes; eles se influenciam mutuamente. Um corpo saudável suporta uma mente clara. Uma mente forte impulsiona a disciplina para cuidar do corpo. Uma sexualidade plena aumenta a autoconfiança, que por sua vez fortalece a mente e o corpo.</p>
      <p>Ao buscar a excelência em cada uma dessas áreas, você se torna um homem verdadeiramente completo, imparável em sua jornada de vida e irresistível para as mulheres que buscam um parceiro de alto valor.</p>
      
      <Separator className="my-8" />
      
      <h2 className="font-headline text-2xl font-semibold">EXERCÍCIO PRÁTICO 5: MEU PLANO DE EXCELÊNCIA INTEGRAL</h2>
      <p>Para cada um dos três pilares, defina 1-2 metas específicas e mensuráveis para os próximos 3 meses. Para cada meta, liste 3 ações concretas que você tomará para alcançá-la.</p>
      <ol className="list-decimal pl-5 space-y-4 mt-4">
        <li><strong>Pilar: Corpo</strong>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><em>Meta:</em></li>
            <li><em>Ações:</em>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Pilar: Mente</strong>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><em>Meta:</em></li>
            <li><em>Ações:</em>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><strong>Pilar: Sexualidade</strong>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><em>Meta:</em></li>
            <li><em>Ações:</em>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
      <p>Revise seu plano semanalmente e ajuste conforme necessário. A jornada para se tornar um Homem Imparável é contínua. Celebre suas vitórias e aprenda com seus desafios.</p>
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
    <div className="container mx-auto max-w-4xl py-8 px-4">
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
            <h2 className="mb-4 text-2xl font-bold text-primary">Vídeo de Apoio</h2>
            <div className="mt-6 space-y-4">
              <VideoPlayer videoId={lesson.videoId} />
            </div>
        </div>
      )}

      <nav className="mt-12 flex justify-between">
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
