

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
  'redes-sociais': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">REDES SOCIAIS QUE ATRAEM (O QUE MOSTRAR E O QUE EVITAR)</h1>
      <p className="text-xl text-muted-foreground">Sua Marca Pessoal Online: Atração Digital</p>
      
      <Separator className="my-8" />
      
      <p>No mundo moderno, suas redes sociais são uma extensão da sua marca pessoal. Antes mesmo de te conhecerem pessoalmente, muitas mulheres (e pessoas em geral) irão pesquisar seu perfil online. O que elas encontram lá pode reforçar ou destruir a atração inicial. Uma presença online atraente não é sobre ostentação ou falsidade, mas sobre apresentar uma imagem autêntica, interessante e de alto valor.</p>
      <p>Este capítulo irá guiá-lo sobre como otimizar suas redes sociais para que elas trabalhem a seu favor, atraindo as pessoas certas e comunicando quem você realmente é.</p>
      
      <Separator className="my-8" />
      
      <h2 className="font-headline text-2xl font-semibold">O Que Mostrar para Atrair</h2>
      <ol className="list-decimal pl-5 space-y-6 mt-4">
        <li><strong>Sua Vida com Propósito e Paixão:</strong>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>O que fazer:</strong> Compartilhe fotos e vídeos de você engajado em seus hobbies, paixões, projetos de trabalho ou viagens. Mostre que você tem uma vida interessante e que é apaixonado por algo. Isso pode incluir:
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Você praticando um esporte ou atividade física.</li>
                <li>Você trabalhando em um projeto que te empolga.</li>
                <li>Você explorando novos lugares ou culturas.</li>
                <li>Você com amigos em atividades sociais saudáveis.</li>
              </ul>
            </li>
            <li><strong>Por que atrai:</strong> Demonstra que você é um homem com profundidade, que tem uma vida rica e que não está esperando por alguém para preenchê-la. Isso é incrivelmente atraente.</li>
          </ul>
        </li>
        <li><strong>Seu Lado Social e Conectado:</strong>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>O que fazer:</strong> Mostre que você tem um círculo social saudável e que sabe interagir com as pessoas. Fotos com amigos (homens e mulheres, sem flerte excessivo com outras mulheres), em eventos sociais, ou participando de grupos.</li>
            <li><strong>Por que atrai:</strong> Ativa o gatilho da pré-seleção (Módulo 2). Mostra que você é socialmente competente e desejado por outras pessoas, o que aumenta seu valor percebido.</li>
          </ul>
        </li>
        <li><strong>Seu Estilo e Cuidado Pessoal:</strong>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>O que fazer:</strong> Compartilhe fotos onde você está bem vestido, com boa postura e higiene. Não precisa ser um ensaio fotográfico, mas fotos casuais onde você está apresentável. Isso reforça a imagem de um homem que se cuida.</li>
            <li><strong>Por que atrai:</strong> Reforça a ideia de que você se valoriza e se preocupa com sua imagem, o que é um sinal de respeito por si mesmo e pelos outros.</li>
          </ul>
        </li>
        <li><strong>Seu Senso de Humor e Leveza:</strong>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>O que fazer:</strong> Compartilhe memes engraçados (com bom senso), vídeos leves, ou legendas com um toque de humor. Mostre que você não se leva tão a sério e que sabe se divertir.</li>
            <li><strong>Por que atrai:</strong> O humor é um grande atrativo. Ele mostra que você é divertido, descontraído e que pode trazer leveza para a vida de alguém.</li>
          </ul>
        </li>
        <li><strong>Autenticidade e Vulnerabilidade (com Moderação):</strong>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>O que fazer:</strong> Compartilhe um pouco de sua personalidade real. Pode ser uma reflexão sobre um desafio superado, um momento de aprendizado, ou uma opinião sobre algo que você se importa. Isso cria conexão.</li>
            <li><strong>Por que atrai:</strong> Mostra que você é um ser humano real, com profundidade e emoções. A vulnerabilidade controlada é atraente porque convida à conexão.</li>
          </ul>
        </li>
      </ol>
      
      <Separator className="my-8" />
      
      <h2 className="font-headline text-2xl font-semibold">O Que Evitar para Não Afastar</h2>
      <ol className="list-decimal pl-5 space-y-4 mt-4 text-red-500">
        <li>❌ **Ostentação Excessiva:** Evite postar apenas fotos de carros de luxo, dinheiro, relógios caros. Isso pode passar uma imagem de superficialidade e insegurança.</li>
        <li>❌ **Reclamações e Negatividade:** Suas redes sociais não são um diário de lamentações. Evite reclamar do trabalho, da vida, de ex-parceiras. Ninguém quer se associar a uma energia negativa.</li>
        <li>❌ **Fotos Sem Camisa Excessivas/Selfies no Banheiro:** A menos que você seja um modelo fitness, evite uma enxurrada de fotos sem camisa ou selfies no banheiro. Isso pode parecer narcisista e desesperado por atenção.</li>
        <li>❌ **Conteúdo Polêmico ou Extremista:** Evite postar conteúdo excessivamente político, religioso ou socialmente polarizador. Isso pode afastar um grande número de pessoas e gerar discussões desnecessárias.</li>
        <li>❌ **Ex-Parceiras ou Dramas Passados:** Suas redes sociais devem ser sobre o seu presente e futuro. Evite fotos ou menções a ex-parceiras, ou dramas de relacionamentos passados.</li>
        <li>❌ **Falta de Atividade ou Perfil Vazio:** Um perfil vazio ou com pouquíssimas postagens pode levantar bandeiras vermelhas. Parece que você não tem uma vida interessante ou que está escondendo algo.</li>
      </ol>
      
      <Separator className="my-8" />
      
      <h2 className="font-headline text-2xl font-semibold">EXERCÍCIO PRÁTICO 3: AUDITORIA DE REDES SOCIAIS</h2>
      <p>Faça uma auditoria completa de seus perfis nas redes sociais (Instagram, Facebook, TikTok, etc.). Passe 30 minutos revisando suas últimas 20-30 postagens.</p>
      <ol className="list-decimal pl-5 space-y-4 mt-4">
        <li><strong>O que suas redes sociais comunicam sobre você?</strong> (Escreva 3-5 adjetivos)
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li></li>
          </ul>
        </li>
        <li><strong>Identifique 3-5 postagens que você considera atraentes e por quê:</strong>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li></li>
          </ul>
        </li>
        <li><strong>Identifique 3-5 postagens que você considera que podem estar te prejudicando e por quê. O que você faria com elas (apagar, arquivar, editar)?</strong>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li></li>
          </ul>
        </li>
        <li><strong>Crie um plano para as próximas 5 postagens:</strong> O que você vai mostrar para reforçar sua imagem de Homem Imparável?
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li></li>
          </ul>
        </li>
      </ol>
      <p>Lembre-se: suas redes sociais são uma ferramenta poderosa. Use-as intencionalmente para construir a imagem que você deseja projetar.</p>
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
