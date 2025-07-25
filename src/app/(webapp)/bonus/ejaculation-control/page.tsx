

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
import Link from 'next/link';

const Content = () => (
    <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-primary">🎁 BÔNUS 2: Exercícios Diários para Controle da Ejaculação</h1>
        <p className="text-xl text-muted-foreground">Rotina de 15 Minutos para Fortalecer o Músculo PC</p>
        
        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">Introdução</h2>
        <p>A ejaculação precoce é uma preocupação comum para muitos homens, afetando a confiança e a satisfação sexual. A boa notícia é que, na maioria dos casos, ela pode ser controlada e até eliminada com a prática de exercícios específicos que fortalecem o assoalho pélvico, especialmente o músculo pubococcígeo (PC).</p>
        <p><strong>Este bônus oferece uma rotina diária de 15 minutos que irá fortalecer seu controle ejaculatório e aumentar sua resistência na cama.</strong></p>

        <Separator className="my-8" />
        
        <h2 className="font-headline text-2xl font-semibold">O Músculo PC e Sua Importância</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">O Que É o Músculo PC?</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>O músculo pubococcígeo (PC) é parte do assoalho pélvico.</li>
            <li>Ele se estende do osso púbico (na frente) até o cóccix (na parte de trás).</li>
            <li>É responsável por controlar o fluxo da urina, a ereção e a ejaculação.</li>
        </ul>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Por Que Fortalecê-lo?</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Controle Ejaculatório:</strong> Um PC forte permite maior controle sobre o momento da ejaculação.</li>
            <li><strong>Ereções Mais Firmes:</strong> Ajuda a manter o sangue no pênis, resultando em ereções mais duras e duradouras.</li>
            <li><strong>Orgasmos Mais Intensos:</strong> Contribui para orgasmos mais potentes e prazerosos.</li>
            <li><strong>Saúde da Próstata:</strong> Melhora a circulação na região pélvica.</li>
        </ul>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">Como Identificar o Músculo PC</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">O Teste do Fluxo Urinário:</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Ao urinar, tente interromper o fluxo da urina no meio.</li>
            <li>O músculo que você contrai para fazer isso é o seu músculo PC.</li>
            <li><strong>Importante:</strong> Não faça isso com frequência, apenas para identificar o músculo.</li>
        </ul>
        
        <h3 className="font-headline text-xl font-semibold mt-6">O Teste do Dedo:</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Insira um dedo limpo no ânus.</li>
            <li>Contraia os músculos como se estivesse segurando a urina ou as fezes.</li>
            <li>Você sentirá uma pressão no seu dedo. Esse é o músculo PC.</li>
        </ul>

        <Separator className="my-8" />
        
        <h2 className="font-headline text-2xl font-semibold">A Rotina Diária de Exercícios (15 Minutos)</h2>
        <p className="mt-4"><strong>Frequência:</strong> 1 a 2 vezes ao dia, todos os dias.<br/>
        <strong>Posição:</strong> Pode ser feito deitado, sentado ou em pé.<br/>
        <strong>Foco:</strong> Concentre-se apenas no músculo PC. Evite contrair glúteos, abdômen ou coxas.</p>

        <h3 className="font-headline text-xl font-semibold mt-6">Exercício 1: Contrações Lentas (5 Minutos)</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Como fazer:</strong> Contraia o músculo PC lentamente, segurando a contração por 5 segundos.</li>
            <li><strong>Foco:</strong> Sinta o músculo subindo e apertando.</li>
            <li><strong>Liberação:</strong> Relaxe completamente por 5 segundos.</li>
            <li><strong>Repetições:</strong> Faça 10 a 15 repetições.</li>
        </ul>

        <h3 className="font-headline text-xl font-semibold mt-6">Exercício 2: Contrações Rápidas (5 Minutos)</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Como fazer:</strong> Contraia e relaxe o músculo PC o mais rápido possível.</li>
            <li><strong>Foco:</strong> Movimentos curtos e rápidos.</li>
            <li><strong>Repetições:</strong> Faça 20 a 30 repetições. Descanse por 30 segundos e repita por 5 minutos.</li>
        </ul>

        <h3 className="font-headline text-xl font-semibold mt-6">Exercício 3: O Elevador (5 Minutos)</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Como fazer:</strong> Imagine que seu músculo PC é um elevador.</li>
            <li><strong>Suba:</strong> Contraia o músculo em 3 ou 4 estágios, segurando em cada "andar" por 1-2 segundos.</li>
            <li><strong>Desça:</strong> Relaxe o músculo em 3 ou 4 estágios, sentindo-o descer completamente.</li>
            <li><strong>Repetições:</strong> Faça 10 a 15 repetições.</li>
        </ul>

        <Separator className="my-8" />
        
        <h2 className="font-headline text-2xl font-semibold">Dicas Essenciais para o Sucesso</h2>
        <ol className="list-decimal pl-5 space-y-2 mt-4">
            <li><strong>Consistência é Chave:</strong> Faça os exercícios todos os dias. Os resultados não são imediatos, mas são cumulativos.</li>
            <li><strong>Respire:</strong> Não prenda a respiração durante as contrações. Respire normalmente.</li>
            <li><strong>Paciência:</strong> Pode levar algumas semanas para sentir uma melhora significativa.</li>
            <li><strong>Não Force:</strong> Comece devagar e aumente a intensidade e o número de repetições gradualmente.</li>
            <li><strong>Combine com Outras Técnicas:</strong> Os exercícios do músculo PC são mais eficazes quando combinados com técnicas de respiração e foco mental (abordadas no Módulo 4).</li>
        </ol>

        <h3 className="font-headline text-xl font-semibold mt-6">Benefícios Adicionais</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Melhora da Saúde Urinária:</strong> Ajuda a prevenir incontinência urinária.</li>
            <li><strong>Maior Sensibilidade:</strong> Aumenta a sensibilidade na região genital.</li>
            <li><strong>Aumento da Confiança:</strong> Saber que você tem mais controle melhora sua autoestima.</li>
        </ul>

        <Separator className="my-8" />
        
        <h2 className="font-headline text-2xl font-semibold">Exercícios Práticos</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Exercício 1: Diário de Progresso (Diário)</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Anote diariamente:
                <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>Quantas repetições de cada exercício você fez.</li>
                    <li>Como você se sentiu durante os exercícios.</li>
                    <li>Qualquer melhora percebida no controle ejaculatório ou ereções.</li>
                </ul>
            </li>
        </ul>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Exercício 2: Integração na Rotina (Diário)</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Escolha um momento fixo do dia para fazer os exercícios (ex: ao acordar, antes de dormir, durante o banho).</li>
            <li>Crie um lembrete no seu celular para não esquecer.</li>
        </ul>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Exercício 3: Teste de Controle (Semanal)</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Uma vez por semana, pratique a técnica de "parar e começar" durante a masturbação.</li>
            <li>Observe quanto tempo você consegue prolongar antes de ejacular.</li>
            <li>Não se frustre se não for perfeito no início.</li>
        </ul>

        <Separator className="my-8" />
        
        <h2 className="font-headline text-2xl font-semibold">Vídeos de Apoio</h2>
        <div className="mt-6 space-y-4">
            <VideoPlayer videoId="KfwWFfMAVgc" />
            <VideoPlayer videoId="SQGkDAm0fjQ" />
            <VideoPlayer videoId="hKLUYbXn0r0" />
        </div>

        <Separator className="my-8" />
        
        <h2 className="font-headline text-2xl font-semibold">Conclusão</h2>
        <p>Os exercícios do músculo PC são uma ferramenta poderosa para qualquer homem que deseja melhorar seu desempenho sexual e ter mais controle sobre a ejaculação. Com dedicação e consistência, você notará uma diferença significativa em sua vida sexual e em sua confiança.</p>
        <p><strong>Lembre-se: a prática leva à perfeição. Seja paciente consigo mesmo e celebre cada pequena vitória.</strong></p>
    </article>
);


export default function EjaculationControlPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
       <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/bonus">Bônus</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Controle da Ejaculação</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <main className="rounded-lg border bg-card/80 p-6 shadow-sm md:p-8">
        <Content />
      </main>

    </div>
  );
}
