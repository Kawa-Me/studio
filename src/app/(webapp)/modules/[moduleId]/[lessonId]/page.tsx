

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
import { VideoPlayer } from '@/components/video-player';
import { Separator } from '@/components/ui/separator';
import React from 'react';

// This is a placeholder map. In a real app, you'd fetch this from a CMS
// or have the markdown content in local files.
const lessonContents: Record<string, React.ComponentType> = {
  'o-que-e-alpha-real': () => (
    <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-primary">O Que é Ser um Homem de Alto Valor?</h1>
        <p className="text-xl text-muted-foreground">Muitos homens têm uma visão distorcida do que significa ser um "Alpha". Acham que é ser agressivo ou dominador. A verdade é que um Homem de Alto Valor lidera pelo exemplo, tem controle emocional e um propósito claro.</p>
        <Separator className="my-8" />
        <h2 className="font-headline text-2xl font-semibold">Os Pilares do Homem de Alto Valor</h2>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Controle Emocional:</strong> Mantém a calma sob pressão e não precisa provar nada a ninguém.</li>
            <li><strong>Liderança pelo Exemplo:</strong> Inspira outros com suas ações, não apenas com palavras.</li>
            <li><strong>Propósito e Direção:</strong> Sabe o que quer da vida e trabalha para alcançar seus objetivos.</li>
            <li><strong>Autenticidade:</strong> É genuíno e vive de acordo com seus valores.</li>
        </ul>
        <Separator className="my-8" />
        <h2 className="font-headline text-2xl font-semibold">Exercício Prático: Diário de Autoavaliação</h2>
        <p>Ao final de cada dia, pergunte-se: "Hoje, eu agi como a minha melhor versão? Fui autêntico e segui meus valores?" Essa reflexão diária é o primeiro passo para a transformação.</p>
    </article>
  ),
  'erro-dos-bonzinhos': () => (
    <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold text-primary">O Erro Fatal dos "Bonzinhos"</h1>
        <p className="text-xl text-muted-foreground">Ser o "cara legal" que sempre termina na friendzone é uma frustração comum. Isso acontece porque ser "bonzinho" demais elimina o desafio e a tensão sexual, comunicando baixo valor.</p>
        <Separator className="my-8" />
        <h2 className="font-headline text-2xl font-semibold">Por Que Ser "Bonzinho" Não Funciona?</h2>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Falta de Desafio:</strong> Previsibilidade gera tédio. Mulheres são atraídas por homens que as desafiam.</li>
            <li><strong>Ausência de Tensão Sexual:</strong> Ser "certinho" elimina a química.</li>
            <li><strong>Demonstração de Baixo Valor:</strong> Colocá-la em um pedestal te coloca abaixo dela.</li>
        </ul>
        <Separator className="my-8" />
        <h2 className="font-headline text-2xl font-semibold">Como Sair da Friendzone</h2>
        <p>Pare de estar sempre disponível, crie tensão sexual com flertes e toques sutis, tenha uma vida interessante e não tenha medo de discordar dela. Demonstre que ela também precisa conquistar seu interesse.</p>
    </article>
  ),
   'postura-dominante': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como Criar Postura e Presença Dominante</h1>
      <p className="text-xl text-muted-foreground">Sua linguagem corporal comunica 55% da sua mensagem. Uma postura dominante transmite confiança e status antes mesmo de você dizer uma palavra.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Elementos da Presença Dominante</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Postura Física:</strong> Ombros para trás, peito aberto, cabeça erguida. Ocupe seu espaço.</li>
        <li><strong>Movimentos Controlados:</strong> Gestos lentos e deliberados. Evite inquietação.</li>
        <li><strong>Contato Visual:</strong> Mantenha o olhar, demonstre confiança e interesse.</li>
        <li><strong>Voz e Tom:</strong> Fale com clareza, em um tom mais grave e com pausas estratégicas.</li>
      </ul>
       <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Exercício: Caminhada Consciente</h2>
      <p>Toda vez que andar em público, foque em manter a cabeça erguida e os ombros para trás. Observe como sua autopercepção e a reação das pessoas mudam.</p>
    </article>
  ),
  'confianca-timidez': () => (
      <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-primary">Como Desenvolver Confiança Mesmo Sendo Tímido</h1>
          <p className="text-xl text-muted-foreground">Confiança não é a ausência de timidez, mas a capacidade de agir apesar dela. Homens tímidos podem ser extremamente confiantes e atraentes.</p>
          <Separator className="my-8" />
          <h2 className="font-headline text-2xl font-semibold">Pilares da Confiança para Tímidos</h2>
          <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>Pequenas Vitórias:</strong> Comece com desafios sociais pequenos, como sorrir para estranhos, e aumente gradualmente.</li>
              <li><strong>Foco no Outro:</strong> Em vez de se preocupar com o que os outros pensam de você, foque em conhecê-los.</li>
              <li><strong>Linguagem Corporal:</strong> Adote uma postura confiante mesmo que não se sinta assim. A ação gera a emoção.</li>
          </ul>
           <Separator className="my-8" />
          <h2 className="font-headline text-2xl font-semibold">Exercício: O Desafio do "Olá"</h2>
          <p>Por uma semana, diga "Olá" e sorria para 5 pessoas diferentes por dia. O objetivo não é iniciar uma conversa, mas sim se acostumar com a iniciativa e a exposição social.</p>
      </article>
  ),
  'crencas-limitantes': () => (
      <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-primary">Quebrando Crenças Limitantes</h1>
          <p className="text-xl text-muted-foreground">Suas crenças sobre si mesmo e sobre as mulheres ditam seus resultados. Crenças como "não sou bom o suficiente" ou "mulheres só querem dinheiro" são correntes que te prendem.</p>
          <Separator className="my-8" />
          <h2 className="font-headline text-2xl font-semibold">Como Quebrar Suas Crenças</h2>
          <ol className="list-decimal pl-5 space-y-2 mt-4">
              <li><strong>Identifique:</strong> Qual pensamento negativo te sabota?</li>
              <li><strong>Questione:</strong> Essa crença é 100% verdade? Onde estão as provas?</li>
              <li><strong>Reestruture:</strong> Crie uma nova crença positiva e capacitadora.</li>
              <li><strong>Reforce:</strong> Aja como se a nova crença fosse verdade e busque evidências que a confirmem.</li>
          </ol>
           <Separator className="my-8" />
          <h2 className="font-headline text-2xl font-semibold">Exemplo de Reestruturação</h2>
          <p>Troque "Eu sempre acabo na friendzone" por "Eu posso aprender a criar tensão sexual e demonstrar meu interesse de forma clara". Essa mudança de mentalidade abre portas para novas ações e resultados.</p>
      </article>
  ),
  'psicologia-atracao': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">O Que Realmente Atrai as Mulheres</h1>
      <p className="text-xl text-muted-foreground">A atração feminina é muito mais sobre comportamento e emoção do que sobre aparência e dinheiro. Entender seus pilares é a chave para se tornar irresistível.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Os 7 Pilares da Atração</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Confiança Genuína:</strong> Segurança em si mesmo.</li>
        <li><strong>Liderança Natural:</strong> Capacidade de tomar a iniciativa.</li>
        <li><strong>Senso de Humor:</strong> Habilidade de criar leveza e diversão.</li>
        <li><strong>Inteligência Emocional:</strong> Entender e lidar com emoções.</li>
        <li><strong>Paixão e Propósito:</strong> Ter uma vida interessante.</li>
        <li><strong>Mistério:</strong> Não ser um livro aberto.</li>
        <li><strong>Autenticidade:</strong> Ser você mesmo, sem máscaras.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Exercício: Autoavaliação</h2>
      <p>Dê uma nota de 1 a 10 para si mesmo em cada um dos 7 pilares. Foque em melhorar os dois pilares com as menores notas nas próximas semanas.</p>
    </article>
  ),
  'vestir-e-portar': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como se Vestir e Portar para Atração Automática</h1>
      <p className="text-xl text-muted-foreground">Sua aparência é seu cartão de visitas. O objetivo não é ser um modelo, mas a melhor versão de si mesmo: bem-cuidado, com roupas que vestem bem e com uma postura confiante.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Fundamentos do Visual Masculino</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Higiene Impecável:</strong> É o básico não negociável. Banho, dentes, unhas, cabelo e barba sempre em dia.</li>
        <li><strong>Caimento é Rei:</strong> Roupas bem ajustadas são mais importantes que marcas caras.</li>
        <li><strong>Cores Neutras:</strong> Invista em peças básicas (branco, preto, cinza, azul) que combinam com tudo.</li>
        <li><strong>Acessórios Estratégicos:</strong> Um bom relógio e um perfume discreto fazem toda a diferença.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Exercício: Auditoria do Guarda-Roupa</h2>
      <p>Tire tudo do armário. Separe em três pilhas: "uso sempre", "às vezes" e "nunca uso". Doe a última pilha e identifique quais peças-chave estão faltando.</p>
    </article>
  ),
  'gatilhos-atracao': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Os 3 Gatilhos de Atração Instantânea</h1>
      <p className="text-xl text-muted-foreground">Existem comportamentos que disparam atração de forma quase automática, baseados em psicologia evolutiva.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Os Gatilhos</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Pré-seleção:</strong> Ser desejado por outras mulheres valida seu valor. Ter amigas genuínas e ser socialmente ativo ativa esse gatilho.</li>
        <li><strong>Liderança Masculina:</strong> Ser respeitado por outros homens. Tome a iniciativa em grupos, organize eventos, seja uma referência.</li>
        <li><strong>Protetor dos Entes Queridos:</strong> Demonstrar cuidado com seus amigos e família. Isso comunica segurança e lealdade.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Exemplo Prático</h2>
      <p>Numa festa, converse com várias pessoas (pré-seleção), sugira irem para outro bar (liderança) e garanta que todos do seu grupo peguem um transporte seguro para casa (proteção).</p>
    </article>
  ),
  'linguagem-corporal': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">A Linguagem Corporal que Atrai Sem Dizer Uma Palavra</h1>
      <p className="text-xl text-muted-foreground">Sua postura, olhar e gestos comunicam seu nível de confiança e status social antes de você abrir a boca. Dominar isso é fundamental.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Elementos-Chave</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Postura:</strong> Reta e relaxada. Ocupe seu espaço.</li>
        <li><strong>Contato Visual:</strong> Intenso, mas não intimidador. Cria conexão e tensão.</li>
        <li><strong>Movimentos:</strong> Lentos e deliberados. Evite gestos nervosos.</li>
        <li><strong>Toque:</strong> Escale o toque de forma gradual e apropriada, sempre lendo os sinais dela.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Leitura de Sinais</h2>
      <p>Aprenda a identificar os sinais de interesse dela (inclinar-se na sua direção, tocar o cabelo) e desinteresse (braços cruzados, evitar contato visual) para calibrar suas ações.</p>
    </article>
  ),
  'puxar-assunto': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como Puxar Assunto do Jeito Certo</h1>
      <p className="text-xl text-muted-foreground">O medo da rejeição paralisa muitos homens. A chave é ser natural, genuíno e demonstrar valor, não carência.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Abordagens Naturais</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Situacional:</strong> Comente sobre algo no ambiente. "Esse café aqui é ótimo, você já provou?"</li>
        <li><strong>Observação:</strong> Comente algo que notou nela (não físico). "Vi que você está lendo [livro]. É um dos meus favoritos."</li>
        <li><strong>Opinião:</strong> Peça a opinião dela. "Preciso de uma opinião feminina sobre um presente para minha irmã."</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Mantendo a Conversa</h2>
      <p>Use a técnica FORD (Família, Ocupação, Recreação, Sonhos - Dreams) para ter sempre tópicos de conversa. Lembre-se de ouvir mais do que falar.</p>
    </article>
  ),
  'criar-tensao': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como Criar Tensão e Fazer Ela Pensar em Você</h1>
      <p className="text-xl text-muted-foreground">Tensão é o ingrediente que transforma amizade em atração. É o "frio na barriga" que ela sente com você.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Técnicas para Criar Tensão</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Contato Visual:</strong> Olhar intenso, alternando entre os olhos e a boca dela.</li>
        <li><strong>Push-Pull:</strong> Aproxime-se (elogio, toque) e afaste-se (uma leve provocação, um passo para trás). Isso cria um jogo de conquista.</li>
        <li><strong>Mistério:</strong> Não revele tudo sobre você de uma vez. Deixe-a curiosa.</li>
        <li><strong>Imprevisibilidade:</strong> Varie sua energia e quebre padrões.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">A Regra de Ouro</h2>
      <p>Lembre-se do equilíbrio: Tensão sem conexão gera ansiedade. Conexão sem tensão gera amizade. Você precisa dos dois.</p>
    </article>
  ),
  'como-marcar-encontros-naturalmente': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como Marcar Encontros Naturalmente</h1>
      <p className="text-xl text-muted-foreground">Fazer o convite para um encontro sem parecer desesperado é uma arte. A chave é a confiança e a naturalidade.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Princípios do Convite Natural</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Construa Conexão Primeiro:</strong> Converse, faça ela rir, crie rapport antes de convidar.</li>
        <li><strong>Seja Específico:</strong> "Que tal um café no [lugar] sábado às 15h?" é melhor que "Vamos sair qualquer dia?".</li>
        <li><strong>Ofereça Valor:</strong> Apresente o encontro como uma experiência legal, não um favor. "Conheço um lugar que você vai adorar."</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Lidando com Objeções</h2>
      <p>Se ela disser "estou ocupada", responda com confiança: "Entendo. Quando sua agenda aliviar, me avise. Vai valer a pena." Isso mantém seu valor alto.</p>
    </article>
  ),
  'frases-prontas-que-criam-conexao-profunda': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Frases Que Criam Conexão Profunda</h1>
      <p className="text-xl text-muted-foreground">Palavras têm o poder de transformar interações superficiais em algo memorável. Use-as para tocar na emoção e curiosidade.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Tipos de Frases de Conexão</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Observação Genuína:</strong> "Admiro a forma como você se expressa com paixão sobre [tópico]."</li>
        <li><strong>Curiosidade Profunda:</strong> "O que te motiva de verdade na vida?"</li>
        <li><strong>Vulnerabilidade Controlada:</strong> "Confesso que nem sempre sou tão confiante quanto pareço."</li>
        <li><strong>Validação:</strong> "Você é uma pessoa muito forte por ter passado por [situação]."</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Dica de Mestre</h2>
      <p>Não decore frases. Entenda o conceito por trás delas e adapte à sua personalidade e ao contexto da conversa. A autenticidade é sempre mais atraente.</p>
    </article>
  ),
  'como-lidar-com-testes-femininos-e-joguinhos': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como Lidar com Testes Femininos e Joguinhos</h1>
      <p className="text-xl text-muted-foreground">Mulheres testam os homens para filtrar os fracos e inseguros. Aprender a passar nesses testes é uma oportunidade de demonstrar sua confiança e alto valor.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Como Responder a Testes ("Shit Tests")</h2>
      <p>Se ela diz: "Você está tentando me impressionar?", não reaja de forma defensiva. A melhor resposta é manter a calma e usar o humor.</p>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Humor:</strong> "Claro, e está funcionando?" (com um sorriso)</li>
        <li><strong>Concordar e Intensificar:</strong> "Sim, e essa é só a ponta do iceberg. Espere para ver meu próximo truque."</li>
        <li><strong>Ignorar:</strong> Simplesmente mude de assunto, mostrando que o teste não te afetou.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">A Mentalidade Correta</h2>
      <p>Não leve para o lado pessoal. Veja os testes como um jogo divertido e uma chance de flertar e demonstrar que você é um homem seguro e que não se abala facilmente.</p>
    </article>
  ),
  'o-passo-a-passo-do-encontro-ideal': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">O Passo a Passo do Encontro Ideal</h1>
      <p className="text-xl text-muted-foreground">Um encontro bem-sucedido é uma experiência memorável que cria conexão e deixa ela querendo mais. Requer planejamento, liderança e desapego do resultado.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">As Fases do Encontro</h2>
      <ol className="list-decimal pl-5 space-y-2 mt-4">
        <li><strong>Pré-Encontro:</strong> Escolha um local apropriado (café é ótimo para o primeiro), confirme no dia e cuide da sua aparência.</li>
        <li><strong>Durante o Encontro:</strong> Chegue um pouco antes, lidere a conversa (mas ouça mais do que fala), e escale o contato físico gradualmente (toques leves no braço, etc.).</li>
        <li><strong>Pós-Encontro:</strong> Termine o encontro no auge. Se o clima for bom, avance para o beijo. Mande uma mensagem leve no dia seguinte.</li>
      </ol>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Dica Avançada</h2>
      <p>Experimente encontros ativos, como boliche ou uma caminhada no parque. Isso cria memórias, alivia a pressão da conversa constante e abre mais oportunidades para interação física natural.</p>
    </article>
  ),
  'como-sair-do-primeiro-beijo-para-o-sexo': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como Sair do Primeiro Beijo Para o Sexo</h1>
      <p className="text-xl text-muted-foreground">A escalação da intimidade após o beijo é uma dança delicada que exige sensibilidade e confiança para liderar.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Lendo os Sinais e Escalando</h2>
      <p>Após o beijo, não se afaste. Mantenha a proximidade, acaricie o rosto ou cabelo dela e olhe nos olhos dela. Se a resposta for positiva (ela te beija de volta com intensidade, te puxa para perto), você pode escalar.</p>
      <ol className="list-decimal pl-5 space-y-2 mt-4">
        <li><strong>Pescoço e Orelha:</strong> Beije o pescoço, sussurre algo sensual.</li>
        <li><strong>Toque no Corpo:</strong> Acaricie as costas, cintura, coxas (por cima da roupa).</li>
        <li><strong>Mude de Ambiente:</strong> "Que tal continuarmos em um lugar mais confortável?".</li>
        <li><strong>Intimidade:</strong> Com consentimento claro, aprofunde a intimidade.</li>
      </ol>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Consentimento é Tudo</h2>
      <p>Sempre preste atenção aos sinais. Na dúvida, comunique-se verbalmente. "Posso te tocar aqui?". O respeito e a segurança são os maiores afrodisíacos.</p>
    </article>
  ),
  'como-se-comportar-para-gerar-desejo-durante-o-encontro': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como se Comportar para Gerar Desejo Durante o Encontro</h1>
      <p className="text-xl text-muted-foreground">Gerar desejo é sobre criar uma atmosfera de excitação, mistério e conexão. É a arte de ser magnético e inesquecível.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Comportamentos que Geram Desejo</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Ser um Desafio:</strong> Provoque de forma leve e divertida. Não concorde com tudo.</li>
        <li><strong>Liderança:</strong> Tome a iniciativa na escolha do local e na condução da conversa.</li>
        <li><strong>Tensão Sexual:</strong> Use contato visual intenso e toques calibrados.</li>
        <li><strong>Escuta Ativa:</strong> Mostre interesse genuíno por ela.</li>
        <li><strong>Paixão e Propósito:</strong> Fale com entusiasmo sobre seus objetivos e hobbies.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">O Que Mata o Desejo</h2>
      <p>Evite ser carente, reclamar da vida, falar de ex-namoradas, ficar no celular ou ser previsível. Esses comportamentos destroem a atração instantaneamente.</p>
    </article>
  ),
  'erros-gozar-rapido': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Os 5 Maiores Erros que Fazem o Homem Gozar Rápido</h1>
      <p className="text-xl text-muted-foreground">A ejaculação precoce, na maioria dos casos, é de origem psicológica e comportamental. Identificar os erros comuns é o primeiro passo para o controle.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Erros Comuns</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Ansiedade de Performance:</strong> Focar em "não gozar rápido" só acelera o processo.</li>
        <li><strong>Estimulação Excessiva:</strong> Começar de forma muito intensa e rápida.</li>
        <li><strong>Falta de Controle Corporal:</strong> Não conhecer os próprios sinais de excitação.</li>
        <li><strong>Comunicação Deficiente:</strong> Não conversar sobre o assunto com a parceira.</li>
        <li><strong>Ignorar a Mente:</strong> Deixar que o estresse e a ansiedade do dia a dia invadam a cama.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Como Evitar</h2>
      <p>Mude o foco do desempenho para o prazer e a conexão. Esteja presente no momento. Comece devagar, aprenda a controlar sua respiração e comunique-se abertamente com sua parceira.</p>
    </article>
  ),
  'controlar-ejaculacao': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como Controlar a Ejaculação com Respiração e Foco Muscular</h1>
      <p className="text-xl text-muted-foreground">Aprender a gerenciar sua excitação através da mente e do corpo é a chave para durar mais e aumentar o prazer.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Técnicas de Controle</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Respiração Consciente:</strong> Quando a excitação estiver alta, pare ou diminua o ritmo e respire profundamente pelo diafragma (inspire em 4s, segure por 2s, expire em 6s). Isso acalma o sistema nervoso.</li>
        <li><strong>Exercícios de Kegel:</strong> Fortaleça o músculo pubococcígeo (PC), aquele que você usa para interromper o fluxo de urina. Contraia e relaxe em séries lentas e rápidas diariamente.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Aplicação no Sexo</h2>
      <p>Quando sentir que a ejaculação está próxima, use a respiração profunda e contraia o músculo PC firmemente por alguns segundos. Isso cria uma "pausa" que te permite recuperar o controle.</p>
    </article>
  ),
  'segredo-ritmo': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">O 'Segredo do Ritmo' que Enlouquece Qualquer Mulher</h1>
      <p className="text-xl text-muted-foreground">A maestria do ritmo e da variação durante o sexo é o que cria uma experiência inesquecível para a mulher, levando a orgasmos mais intensos.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Como Dominar o Ritmo</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Comece Lento:</strong> Inicie a penetração com movimentos suaves e superficiais para construir a excitação gradualmente.</li>
        <li><strong>Aumente a Intensidade:</strong> À medida que ela se excita, aumente a velocidade e a profundidade.</li>
        <li><strong>Varie o Ângulo:</strong> Mude o ângulo do quadril para estimular diferentes pontos, como o Ponto G.</li>
        <li><strong>Use Pausas (Start-Stop):</strong> Pare completamente a estimulação no auge da excitação por alguns segundos e depois recomece.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Comunicação é Chave</h2>
      <p>Pergunte o que ela gosta. "Mais rápido ou mais lento?". Preste atenção aos sons e à linguagem corporal dela. Ela é o seu melhor guia.</p>
    </article>
  ),
  'estimular-zonas-erogenas': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como Estimular Zonas Erógenas Pouco Exploradas</h1>
      <p className="text-xl text-muted-foreground">O corpo feminino é um mapa de prazer. Explorar zonas além do óbvio é a chave para desbloquear um novo nível de intimidade e satisfação.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Zonas Erógenas Secretas</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Pescoço e Nuca:</strong> Beijos, mordiscadas leves e sussurros.</li>
        <li><strong>Orelhas:</strong> Beijar e lamber suavemente o lóbulo.</li>
        <li><strong>Parte Interna das Coxas:</strong> Carícias e beijos que constroem a tensão.</li>
        <li><strong>Parte Inferior das Costas:</strong> Massagens suaves perto do cóccix.</li>
        <li><strong>Couro Cabeludo:</strong> Massagem suave e puxões leves no cabelo.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Dica de Ouro</h2>
      <p>Cada mulher é única. Comunique-se abertamente, pergunte o que ela gosta e observe atentamente suas reações. A experimentação (com consentimento) é fundamental.</p>
    </article>
  ),
  'satisfazer-corpo-feminino': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como Entender e Satisfazer o Corpo Feminino</h1>
      <p className="text-xl text-muted-foreground">Satisfazer uma mulher vai muito além da penetração. É sobre conhecimento, atenção e a mentalidade de ser um "doador de prazer".</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Pilares do Prazer Feminino</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>O Clitóris:</strong> É a principal fonte de orgasmo para a maioria das mulheres. A estimulação direta (com dedos ou boca) é quase sempre necessária.</li>
        <li><strong>O Ponto G:</strong> Uma área sensível na parede frontal da vagina que pode levar a orgasmos intensos.</li>
        <li><strong>As Preliminares:</strong> Cruciais para construir a excitação. Dedique tempo a beijos, carícias e sexo oral.</li>
        <li><strong>Comunicação:</strong> Pergunte, ouça e observe. Ela é seu melhor guia.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Mentalidade do Amante Imparável</h2>
      <p>Foque no prazer dela. Seja generoso com seu tempo e atenção. Um homem que se dedica a satisfazer sua parceira se torna inesquecível e profundamente desejado.</p>
    </article>
  ),
  'erecoes-fortes': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como Ter Ereções Mais Fortes Naturalmente</h1>
      <p className="text-xl text-muted-foreground">Uma ereção forte é um pilar da confiança sexual. Muitas vezes, a qualidade da ereção está ligada a fatores de estilo de vida que você pode controlar.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Estratégias Naturais</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Saúde Cardiovascular:</strong> A ereção é um evento vascular. Coma bem, faça exercícios aeróbicos, controle o peso e evite fumar.</li>
        <li><strong>Gerencie o Estresse:</strong> A ansiedade é inimiga da ereção. Pratique meditação, mindfulness e durma bem.</li>
        <li><strong>Otimize a Testosterona:</strong> Levante pesos, consuma gorduras saudáveis, garanta níveis adequados de Vitamina D e Zinco.</li>
        <li><strong>Exercícios de Kegel:</strong> Fortalecer o assoalho pélvico melhora a rigidez da ereção.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Plano de Ação</h2>
      <p>Crie um plano de 4 semanas focado em pequenas melhorias diárias na sua dieta, rotina de exercícios e gerenciamento de estresse. A consistência é a chave para grandes resultados.</p>
    </article>
  ),
  'proposito-rotina': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como Ter um Propósito e Rotina que Impõe Respeito</h1>
      <p className="text-xl text-muted-foreground">Um homem com propósito é um homem atraente. Sua rotina disciplinada é o veículo para alcançar esse propósito e demonstra autodisciplina e liderança.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Construindo Sua Rotina</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Manhãs Poderosas:</strong> Acorde cedo, faça exercícios, leia ou aprenda algo novo e planeje seu dia.</li>
        <li><strong>Foco e Produtividade:</strong> Trabalhe em blocos de tempo sem distrações.</li>
        <li><strong>Noites de Recuperação:</strong> Desconecte-se de telas, reflita sobre seu dia e priorize o sono de qualidade.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Exercício: Defina seu Propósito</h2>
      <p>Pergunte-se: "O que me faz sentir vivo?", "Qual legado eu quero deixar?". Use as respostas para definir uma direção clara e comece a construir uma rotina que te leve até lá.</p>
    </article>
  ),
  'cuidar-aparencia': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como Cuidar da Aparência Sem Parecer Vaidoso Demais</h1>
      <p className="text-xl text-muted-foreground">Cuidar da aparência é um ato de autovalorização e respeito, não de vaidade. O objetivo é ser a melhor versão de si mesmo, transmitindo uma mensagem de disciplina, saúde e sucesso.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Pilares do Cuidado Pessoal</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Higiene Impecável:</strong> A base de tudo.</li>
        <li><strong>Cabelo e Barba:</strong> Encontre um corte que valorize seu rosto.</li>
        <li><strong>Cuidados com a Pele:</strong> Limpeza e hidratação são essenciais.</li>
        <li><strong>Vestuário Inteligente:</strong> O caimento é mais importante que a marca.</li>
        <li><strong>Perfume com Moderação:</strong> Menos é mais.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Exercício: Auditoria de Cuidado Pessoal</h2>
      <p>Avalie sua rotina de 1 a 5 em cada pilar e defina uma ação concreta para melhorar cada ponto nesta semana. Pequenas melhorias consistentes fazem uma grande diferença.</p>
    </article>
  ),
  'redes-sociais': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Redes Sociais Que Atraem (O Que Mostrar e O Que Evitar)</h1>
      <p className="text-xl text-muted-foreground">Suas redes sociais são sua marca pessoal online. Use-as para apresentar uma imagem autêntica, interessante e de alto valor.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">O Que Mostrar para Atrair</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Sua Vida com Propósito:</strong> Compartilhe seus hobbies, paixões e projetos.</li>
        <li><strong>Seu Lado Social:</strong> Fotos com amigos em eventos mostram que você é socialmente calibrado.</li>
        <li><strong>Seu Estilo:</strong> Fotos onde você está bem-apresentado reforçam a imagem de autocuidado.</li>
        <li><strong>Senso de Humor:</strong> Mostre que você é leve e divertido.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">O Que Evitar</h2>
      <p>Evite ostentação excessiva, reclamações e negatividade, excesso de selfies sem camisa e conteúdo polêmico. Um perfil vazio também é um sinal de alerta.</p>
    </article>
  ),
  'gerar-valor-social': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como Gerar Valor Social (O Cara que as Outras Querem)</h1>
      <p className="text-xl text-muted-foreground">Gerar valor social significa ser a pessoa que enriquece a vida dos outros. Quando você faz isso, você se torna um "ímã" social natural.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Estratégias para Gerar Valor</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Seja um Conector:</strong> Apresente pessoas umas às outras.</li>
        <li><strong>Seja um Contribuidor:</strong> Agregue com ideias, soluções ou uma história interessante.</li>
        <li><strong>Desenvolva Habilidades Sociais:</strong> Pratique escuta ativa, lembre-se de nomes, seja genuinamente interessado.</li>
        <li><strong>Seja Positivo:</strong> Energia positiva é contagiante.</li>
        <li><strong>Lidere com Exemplo:</strong> Tome a iniciativa e seja proativo.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">O Efeito da Pré-Seleção</h2>
      <p>Ao gerar valor social, as mulheres percebem que você é um homem valorizado pelo seu círculo, o que aumenta exponencialmente sua atratividade.</p>
    </article>
  ),
  'homem-completo': () => (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-primary">Como se Tornar um Homem Completo: Corpo, Mente e Sexualidade</h1>
      <p className="text-xl text-muted-foreground">Ser um "homem completo" é sobre cultivar e harmonizar todas as dimensões da sua vida. Quando corpo, mente e sexualidade estão em equilíbrio, você se torna uma força imparável.</p>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">Os Três Pilares</h2>
      <ul className="list-disc pl-5 space-y-2 mt-4">
        <li><strong>Corpo:</strong> É seu templo. Cuide dele com exercícios, boa nutrição e sono de qualidade.</li>
        <li><strong>Mente:</strong> É seu motor. Nunca pare de aprender, gerencie suas emoções e tenha metas claras.</li>
        <li><strong>Sexualidade:</strong> É sua expressão. Entenda seus desejos, comunique-se abertamente e foque no prazer mútuo.</li>
      </ul>
      <Separator className="my-8" />
      <h2 className="font-headline text-2xl font-semibold">A Jornada é Contínua</h2>
      <p>Esses três pilares se influenciam mutuamente. A busca pela excelência em cada área é o que te tornará um homem verdadeiramente completo e realizado. Continue sua jornada, celebre suas vitórias e aprenda com seus desafios.</p>
    </article>
  )
};

export default async function LessonPage({
  params,
}: {
  params: { moduleId: string; lessonId: string };
}) {
  const { moduleId, lessonId } = params;
  const module = modules.find((m) => m.id === moduleId);
  const lesson = module?.lessons.find((l) => l.id === lessonId);

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
            <BreadcrumbLink href="/app">Módulos</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{module.title}</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
           <BreadcrumbItem>
            <BreadcrumbPage>{lesson.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <main className="rounded-lg border bg-card/80 p-6 shadow-sm md:p-8">
        {Content ? <Content /> : <p>Conteúdo da lição não encontrado.</p>}
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
