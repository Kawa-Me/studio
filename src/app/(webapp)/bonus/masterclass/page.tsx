

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
        <h1 className="text-3xl font-bold text-primary">🎁 BÔNUS 3: Masterclass com Terapeuta Sexual</h1>
        <p className="text-xl text-muted-foreground">Aula Exclusiva sobre Anatomia Feminina e Prazer</p>
        
        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">Introdução</h2>
        <p>Para ser um amante verdadeiramente imparável, é fundamental ir além das técnicas e entender profundamente o corpo e a mente feminina. Esta masterclass exclusiva, com a visão de uma terapeuta sexual, irá desvendar os segredos da anatomia feminina e, mais importante, do prazer feminino.</p>
        <p><strong>Compreender o que realmente excita e satisfaz uma mulher é o seu passaporte para se tornar inesquecível na cama.</strong></p>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">A Anatomia Feminina Além do Óbvio</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">1. O Clitóris: O Centro do Prazer</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Localização e Estrutura:</strong> Muito maior do que se imagina, com nervos que se estendem internamente.</li>
            <li><strong>Função:</strong> Exclusivamente para o prazer sexual.</li>
            <li><strong>Estimulação:</strong> A maioria das mulheres precisa de estimulação clitoriana direta ou indireta para atingir o orgasmo.</li>
        </ul>

        <h3 className="font-headline text-xl font-semibold mt-6">2. A Vagina: Mais do Que um Canal</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Estrutura Interna:</strong> Paredes sensíveis, ponto G (ainda debatido, mas importante para algumas).</li>
            <li><strong>Lubrificação:</strong> Essencial para o conforto e prazer.</li>
            <li><strong>Contração:</strong> Músculos vaginais que podem ser fortalecidos (exercícios de Kegel femininos).</li>
        </ul>

        <h3 className="font-headline text-xl font-semibold mt-6">3. Os Lábios e o Períneo: Zonas Erógenas Externas</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Lábios Maiores e Menores:</strong> Sensíveis ao toque e beijos.</li>
            <li><strong>Períneo:</strong> Área entre a vagina e o ânus, altamente sensível.</li>
        </ul>

        <h3 className="font-headline text-xl font-semibold mt-6">4. O Útero e o Colo do Útero: Sensibilidade Interna</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Estimulação:</strong> Para algumas mulheres, a estimulação profunda pode ser prazerosa.</li>
            <li><strong>Cuidado:</strong> Sempre com delicadeza e comunicação.</li>
        </ul>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">O Mapa do Prazer Feminino</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">1. A Importância da Preliminar</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Não é "aquecimento":</strong> É parte essencial do ato sexual.</li>
            <li><strong>Tempo:</strong> Pode levar de 15 a 30 minutos (ou mais) para uma mulher ficar totalmente excitada.</li>
            <li><strong>Variedade:</strong> Beijos, carícias, massagens, sexo oral, toques em todo o corpo.</li>
        </ul>

        <h3 className="font-headline text-xl font-semibold mt-6">2. Zonas Erógenas Além das Genitais</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Pescoço e Nuca:</strong> Beijos e mordidinhas leves.</li>
            <li><strong>Orelhas:</strong> Sussurros e toques suaves.</li>
            <li><strong>Seios e Mamilos:</strong> Carícias, beijos, sucção.</li>
            <li><strong>Coxas Internas:</strong> Altamente sensíveis.</li>
            <li><strong>Pés:</strong> Massagens e beijos para algumas.</li>
            <li><strong>Cabelo:</strong> Puxões leves, carícias.</li>
        </ul>

        <h3 className="font-headline text-xl font-semibold mt-6">3. O Sexo Oral: Uma Arte a Ser Dominada</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Foco no Clitóris:</strong> A maioria das mulheres precisa de estimulação clitoriana.</li>
            <li><strong>Variedade de Técnicas:</strong> Língua, lábios, sucção, ritmo.</li>
            <li><strong>Comunicação:</strong> Pergunte o que ela gosta, o que é bom para ela.</li>
        </ul>

        <h3 className="font-headline text-xl font-semibold mt-6">4. A Penetração: Ritmo e Profundidade</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Ritmo:</strong> Varie a velocidade e a intensidade.</li>
            <li><strong>Profundidade:</strong> Experimente diferentes ângulos e profundidades.</li>
            <li><strong>Comunicação:</strong> Pergunte se está bom, se ela quer mais forte/suave.</li>
            <li><strong>Combinação:</strong> Muitas mulheres precisam de estimulação clitoriana durante a penetração.</li>
        </ul>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">A Comunicação é a Chave do Prazer</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">1. Pergunte e Escute Ativamente</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Antes:</strong> "O que você gosta na cama?", "Tem algo que você sempre quis experimentar?"</li>
            <li><strong>Durante:</strong> "Está bom assim?", "Você gosta quando eu faço isso?", "Mais rápido/devagar?"</li>
            <li><strong>Depois:</strong> "O que você mais gostou?", "Tem algo que eu possa fazer melhor da próxima vez?"</li>
        </ul>

        <h3 className="font-headline text-xl font-semibold mt-6">2. Leia os Sinais Não-Verbais</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Gemidos e Suspiros:</strong> Sinais de prazer.</li>
            <li><strong>Movimentos do Corpo:</strong> Ela se move em sua direção, arqueia as costas.</li>
            <li><strong>Expressões Faciais:</strong> Olhos fechados, sorriso, boca entreaberta.</li>
            <li><strong>Tensão Muscular:</strong> Mãos apertando, pernas contraindo.</li>
        </ul>

        <h3 className="font-headline text-xl font-semibold mt-6">3. Crie um Ambiente de Confiança</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Sem Julgamento:</strong> Faça-a sentir-se segura para expressar seus desejos.</li>
            <li><strong>Respeito:</strong> Sempre respeite os limites e o "não" dela.</li>
            <li><strong>Vulnerabilidade:</strong> Compartilhe seus próprios desejos e fantasias.</li>
        </ul>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">Mitos e Verdades sobre o Prazer Feminino</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Mitos:</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4 text-red-500">
            <li>❌ **O orgasmo feminino é sempre vaginal:** A maioria é clitoriano.</li>
            <li>❌ **Todas as mulheres são iguais:** Cada mulher é única.</li>
            <li>❌ **Sexo é só penetração:** Preliminares e sexo oral são cruciais.</li>
            <li>❌ **Mulheres não gostam de sexo anal:** Algumas sim, outras não. Sempre com consentimento.</li>
        </ul>

        <h3 className="font-headline text-xl font-semibold mt-6">Verdades:</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4 text-green-500">
            <li>✅ **A comunicação é fundamental:** Ela precisa te guiar.</li>
            <li>✅ **O clitóris é a chave:** Sua estimulação é vital para o orgasmo.</li>
            <li>✅ **Preliminares são essenciais:** Não pule essa etapa.</li>
            <li>✅ **Variedade é o tempero:** Experimente diferentes técnicas e posições.</li>
            <li>✅ **O prazer dela é o seu prazer:** Focar nela aumenta a sua satisfação.</li>
        </ul>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">Exercícios Práticos</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Exercício 1: Conversa Aberta (Com sua parceira)</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Tenha uma conversa honesta sobre o que cada um gosta na cama.</li>
            <li>Compartilhe suas fantasias e desejos.</li>
            <li>Pergunte sobre as zonas erógenas dela e o que a excita.</li>
        </ul>

        <h3 className="font-headline text-xl font-semibold mt-6">Exercício 2: Exploração Guiada (Com sua parceira)</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Peça a ela para te guiar enquanto você explora o corpo dela.</li>
            <li>Ela pode dizer "mais forte", "mais suave", "aqui", "ali".</li>
            <li>Foque em aprender o que a excita, não em atingir o orgasmo.</li>
        </ul>

        <h3 className="font-headline text-xl font-semibold mt-6">Exercício 3: Diário do Prazer (Individual)</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Após cada relação sexual, anote:
                <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>O que funcionou bem para ela?</li>
                    <li>O que poderia ter sido melhor?</li>
                    <li>Que sinais você percebeu?</li>
                    <li>O que você aprendeu sobre o prazer dela?</li>
                </ul>
            </li>
        </ul>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">Vídeos de Apoio</h2>
        <div className="mt-6 space-y-4">
             <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-sm">
                <p className="flex h-full items-center justify-center p-4 text-center text-muted-foreground">O vídeo sobre "Mapa do prazer da vagina" não está disponível no formato embed. <a href="https://www.metropoles.com/colunas/pouca-vergonha/mapa-do-prazer-da-vagina-um-guia-para-conhecer-e-dar-prazer-para-elas" target="_blank" rel="noopener noreferrer" className="text-primary underline">Acesse o artigo aqui.</a></p>
            </div>
            <VideoPlayer videoId="G4kAdO50gQY" />
             <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-sm">
                <p className="flex h-full items-center justify-center p-4 text-center text-muted-foreground">O vídeo sobre "Comunicação: o segredo da longevidade sexual" não está disponível no formato embed. <a href="https://www.agazeta.com.br/hz/viver-bem/comunicacao-o-segredo-da-longevidade-sexual-entre-o-casal-0123" target="_blank" rel="noopener noreferrer" className="text-primary underline">Acesse o artigo aqui.</a></p>
            </div>
        </div>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">Conclusão</h2>
        <p>Entender a anatomia feminina e, mais importante, a psicologia do prazer, é o que transformará você em um amante excepcional. Não se trata de técnica mecânica, mas de conexão, sensibilidade e desejo genuíno de proporcionar prazer.</p>
        <p><strong>Seja curioso, seja comunicativo e esteja sempre disposto a aprender. O prazer dela é um universo a ser explorado, e você tem o mapa em suas mãos.</strong></p>
    </article>
);


export default function MasterclassPage() {
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
            <BreadcrumbPage>Masterclass</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <main className="rounded-lg border bg-card/80 p-6 shadow-sm md:p-8">
        <Content />
      </main>

    </div>
  );
}
