

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
        <h1 className="text-3xl font-bold text-primary">🎁 BÔNUS 1: Lista de Mensagens Prontas para Criar Conexão</h1>
        <p className="text-xl text-muted-foreground">50+ Mensagens Testadas para WhatsApp e Instagram</p>
        
        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">Introdução</h2>
        <p>A comunicação digital se tornou fundamental nos relacionamentos modernos. Saber o que escrever, quando escrever e como manter uma conversa interessante pode ser a diferença entre conquistar uma mulher ou ser apenas mais um na lista de contatos dela.</p>
        <p><strong>Este bônus contém mensagens testadas e aprovadas que criam conexão, geram interesse e mantêm ela pensando em você.</strong></p>
        
        <Separator className="my-8" />
        
        <h2 className="font-headline text-2xl font-semibold">A Psicologia das Mensagens Digitais</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Por Que Mensagens São Importantes?</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Primeira impressão:</strong> Muitas vezes é o primeiro contato após conhecê-la</li>
            <li><strong>Manutenção do interesse:</strong> Mantém a conexão entre os encontros</li>
            <li><strong>Criação de tensão:</strong> Pode gerar antecipação e desejo</li>
            <li><strong>Demonstração de personalidade:</strong> Mostra quem você é através das palavras</li>
        </ul>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Princípios das Mensagens Eficazes:</h3>
        <ol className="list-decimal pl-5 space-y-2 mt-4">
            <li><strong>Seja autêntico:</strong> Use sua própria voz e personalidade</li>
            <li><strong>Crie curiosidade:</strong> Deixe ela querendo saber mais</li>
            <li><strong>Seja específico:</strong> Evite mensagens genéricas</li>
            <li><strong>Mantenha leveza:</strong> Humor e diversão são fundamentais</li>
            <li><strong>Não seja carente:</strong> Qualidade sobre quantidade</li>
        </ol>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">CATEGORIA 1: Mensagens de Abertura (Primeiras Mensagens)</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Para Redes Sociais (Instagram/Facebook)</h3>
        <ol className="list-decimal pl-5 space-y-4 mt-4">
            <li><strong>A Observação Específica:</strong><br/>"Vi que você estava em [local da foto]. Esse lugar é incrível! Qual foi a parte mais legal da viagem?"</li>
            <li><strong>O Comentário Inteligente:</strong><br/>"Adorei seu post sobre [assunto]. Você tem uma perspectiva muito interessante sobre isso."</li>
            <li><strong>A Conexão Comum:</strong><br/>"Acabei de ver que você também curte [banda/filme/hobby]. Finalmente alguém com bom gosto! 😄"</li>
            <li><strong>O Mistério Positivo:</strong><br/>"Tem algo no seu sorriso nessa foto que me fez parar para olhar duas vezes. Você sempre é assim tão radiante?"</li>
            <li><strong>A Pergunta Curiosa:</strong><br/>"Sério que você fez esse [prato/arte/projeto]? Está incrível! Como você aprendeu a fazer isso?"</li>
        </ol>

        <h3 className="font-headline text-xl font-semibold mt-6">Para Aplicativos de Relacionamento</h3>
        <ol className="list-decimal pl-5 space-y-4 mt-4" start="6">
            <li><strong>O Elogio Não-Físico:</strong><br/>"Seu perfil me chamou atenção não só pela beleza, mas pela inteligência. Você parece ser uma pessoa muito interessante."</li>
            <li><strong>A Pergunta Sobre Interesses:</strong><br/>"Vi que você gosta de [hobby]. Qual foi sua melhor experiência fazendo isso?"</li>
            <li><strong>O Comentário Sobre Fotos:</strong><br/>"Essa foto em [local] ficou incrível! Você é fotógrafa ou só tem um olho muito bom para isso?"</li>
            <li><strong>A Provocação Leve:</strong><br/>"Pelo seu perfil, você parece ser daquelas pessoas que tem histórias interessantes para contar. Verdade ou mentira?"</li>
            <li><strong>A Conexão de Valores:</strong><br/>"Adorei ver que você se importa com [causa/valor]. É raro encontrar pessoas que realmente fazem a diferença."</li>
        </ol>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">CATEGORIA 2: Mensagens para Manter a Conversa</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Criando Curiosidade</h3>
        <ol className="list-decimal pl-5 space-y-4 mt-4" start="11">
            <li><strong>O Gancho Misterioso:</strong><br/>"Acabou de acontecer algo que me lembrou de você... 🤔"</li>
            <li><strong>A História Incompleta:</strong><br/>"Você não vai acreditar no que aconteceu comigo hoje... mas vou te contar pessoalmente 😏"</li>
            <li><strong>A Pergunta Intrigante:</strong><br/>"Se você pudesse ter um superpoder por um dia, qual seria? (E não vale dizer 'todos' 😄)"</li>
            <li><strong>O Desafio Divertido:</strong><br/>"Aposto que você não consegue adivinhar o que estou fazendo agora..."</li>
            <li><strong>A Observação Única:</strong><br/>"Estava pensando... você é uma das poucas pessoas que [característica única que você notou]."</li>
        </ol>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Gerando Interesse</h3>
        <ol className="list-decimal pl-5 space-y-4 mt-4" start="16">
            <li><strong>A Experiência Compartilhada:</strong><br/>"Lembrei de você quando vi [algo relacionado ao que vocês conversaram]. Como foi seu dia?"</li>
            <li><strong>A Pergunta Profunda:</strong><br/>"O que te deixa realmente animada na vida? Quero conhecer essa versão empolgada de você."</li>
            <li><strong>O Elogio Específico:</strong><br/>"Adoro a forma como você [algo específico que ela faz]. É uma qualidade rara."</li>
            <li><strong>A Provocação Carinhosa:</strong><br/>"Você é daquelas pessoas que sempre tem uma resposta inteligente na ponta da língua, né? 😏"</li>
            <li><strong>A Curiosidade Genuína:</strong><br/>"Qual foi a última coisa que te fez rir até doer a barriga?"</li>
        </ol>

        <Separator className="my-8" />
        
        <h2 className="font-headline text-2xl font-semibold">CATEGORIA 3: Mensagens de Flerte</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Criando Tensão Sexual</h3>
        <ol className="list-decimal pl-5 space-y-4 mt-4" start="21">
            <li><strong>O Elogio Sensual (Sutil):</strong><br/>"Tem algo no seu jeito que é irresistível... ainda estou tentando descobrir o que é."</li>
            <li><strong>A Insinuação Leve:</strong><br/>"Você tem um sorriso que faz qualquer homem perder o foco. Perigosa! 😈"</li>
            <li><strong>O Desejo Controlado:</strong><br/>"Confesso que não consigo parar de pensar em [momento específico que vocês tiveram]."</li>
            <li><strong>A Tensão Criada:</strong><br/>"Se você estivesse aqui agora, eu... [deixe em aberto]"</li>
            <li><strong>O Mistério Sedutor:</strong><br/>"Tem uma coisa que quero te falar, mas só pessoalmente... 🔥"</li>
        </ol>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Escalando a Intimidade</h3>
        <ol className="list-decimal pl-5 space-y-4 mt-4" start="26">
            <li><strong>A Pergunta Íntima:</strong><br/>"O que te deixa mais excitada: uma massagem relaxante ou uma conversa profunda?"</li>
            <li><strong>A Fantasia Sutil:</strong><br/>"Imagino como seria acordar ao seu lado em uma manhã de domingo..."</li>
            <li><strong>O Toque Virtual:</strong><br/>"Se eu estivesse aí, estaria passando a mão no seu cabelo agora..."</li>
            <li><strong>A Provocação Sensual:</strong><br/>"Você tem ideia do efeito que causa quando [algo específico que ela faz]?"</li>
            <li><strong>A Antecipação:</strong><br/>"Mal posso esperar para te ver de novo e [algo que vocês vão fazer juntos]..."</li>
        </ol>

        <Separator className="my-8" />
        
        <h2 className="font-headline text-2xl font-semibold">CATEGORIA 4: Mensagens de Conexão Emocional</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Criando Intimidade</h3>
        <ol className="list-decimal pl-5 space-y-4 mt-4" start="31">
            <li><strong>A Vulnerabilidade Controlada:</strong><br/>"Você é uma das poucas pessoas com quem me sinto à vontade para ser eu mesmo."</li>
            <li><strong>A Apreciação Profunda:</strong><br/>"Adoro como você vê o mundo. Sua perspectiva me faz pensar diferente sobre as coisas."</li>
            <li><strong>A Conexão Especial:</strong><br/>"Tem algo em você que me faz querer conhecer cada detalhe da sua história."</li>
            <li><strong>O Reconhecimento:</strong><br/>"Você é muito mais do que aparenta. Gosto dessa profundidade que você tem."</li>
            <li><strong>A Admiração Genuína:</strong><br/>"A forma como você lida com [situação] me impressiona. Você é mais forte do que imagina."</li>
        </ol>

        <h3 className="font-headline text-xl font-semibold mt-6">Demonstrando Interesse Genuíno</h3>
        <ol className="list-decimal pl-5 space-y-4 mt-4" start="36">
            <li><strong>A Pergunta do Coração:</strong><br/>"O que te faz sentir mais viva? Quero entender o que move você."</li>
            <li><strong>A Curiosidade Sobre Sonhos:</strong><br/>"Se dinheiro não fosse problema, o que você estaria fazendo da vida?"</li>
            <li><strong>A Conexão de Valores:</strong><br/>"Admiro pessoas que [valor que ela demonstrou]. É algo que valorizo muito também."</li>
            <li><strong>A Pergunta Sobre Paixões:</strong><br/>"Qual é aquela coisa que você faz e perde a noção do tempo?"</li>
            <li><strong>A Busca por Essência:</strong><br/>"O que as pessoas não sabem sobre você que você gostaria que soubessem?"</li>
        </ol>

        <Separator className="my-8" />
        
        <h2 className="font-headline text-2xl font-semibold">CATEGORIA 5: Mensagens para Marcar Encontros</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Convites Naturais</h3>
        <ol className="list-decimal pl-5 space-y-4 mt-4" start="41">
            <li><strong>A Continuação da Conversa:</strong><br/>"Adorei nossa conversa sobre [assunto]. Que tal continuarmos pessoalmente? Conheço um lugar perfeito."</li>
            <li><strong>A Experiência Compartilhada:</strong><br/>"Lembrei de você quando vi que vai ter [evento]. Quer ir comigo?"</li>
            <li><strong>O Convite Específico:</strong><br/>"Sábado à tarde estou livre e pensei em você. Que tal tomarmos aquele café que conversamos?"</li>
            <li><strong>A Aventura Proposta:</strong><br/>"Que tal fazermos algo diferente? Conheço um lugar que você vai adorar."</li>
            <li><strong>A Sugestão Casual:</strong><br/>"Se você não tiver planos domingo, que tal [atividade específica]?"</li>
        </ol>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">CATEGORIA 6: Mensagens de Recuperação</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Quando Ela Demora para Responder</h3>
        <ol className="list-decimal pl-5 space-y-4 mt-4" start="46">
            <li><strong>A Mensagem Descontraída:</strong><br/>"Imagino que você deve estar ocupada salvando o mundo ou algo assim... 😄"</li>
            <li><strong>A Provocação Leve:</strong><br/>"Começando a achar que você me esqueceu... ou está só se fazendo de difícil? 😏"</li>
            <li><strong>A Mensagem de Valor:</strong><br/>"Vi isso e lembrei de você [compartilhe algo interessante]. Como você está?"</li>
            <li><strong>A Abordagem Direta:</strong><br/>"Senti sua falta por aqui. Tudo bem?"</li>
            <li><strong>A Mensagem Final:</strong><br/>"Se você não estiver interessada, tudo bem. Só me avise para eu não ficar aqui falando sozinho 😄"</li>
        </ol>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">CATEGORIA 7: Mensagens de Boa Noite/Bom Dia</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Criando Presença Constante</h3>
        <ol className="list-decimal pl-5 space-y-4 mt-4" start="51">
            <li><strong>O Bom Dia Especial:</strong><br/>"Bom dia, linda! Espero que seu dia seja tão incrível quanto você."</li>
            <li><strong>A Boa Noite Carinhosa:</strong><br/>"Boa noite! Que você tenha sonhos tão doces quanto seu sorriso."</li>
            <li><strong>A Mensagem Motivacional:</strong><br/>"Bom dia! Lembre-se: você é capaz de conquistar qualquer coisa que quiser hoje."</li>
            <li><strong>A Boa Noite Sensual:</strong><br/>"Boa noite... sonhe comigo 😘"</li>
            <li><strong>O Despertar Carinhoso:</strong><br/>"Acordei pensando em você. Espero que seu dia seja maravilhoso!"</li>
        </ol>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">Como Usar Essas Mensagens</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Dicas Importantes:</h3>
        <ol className="list-decimal pl-5 space-y-2 mt-4">
            <li><strong>Personalize:</strong> Adapte as mensagens à sua personalidade e à dela</li>
            <li><strong>Contextualize:</strong> Use informações específicas sobre ela</li>
            <li><strong>Varie:</strong> Não use sempre o mesmo tipo de mensagem</li>
            <li><strong>Timing:</strong> Respeite os horários e a frequência</li>
            <li><strong>Autenticidade:</strong> Seja genuíno, não robótico</li>
        </ol>

        <h3 className="font-headline text-xl font-semibold mt-6">Erros a Evitar:</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4 text-red-500">
            <li>❌ **Copiar e colar sem personalizar**</li>
            <li>❌ **Enviar mensagens muito longas**</li>
            <li>❌ **Ser muito intenso muito rápido**</li>
            <li>❌ **Bombardear com mensagens**</li>
            <li>❌ **Usar linguagem muito formal ou muito informal**</li>
        </ul>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">Exercícios Práticos</h2>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Exercício 1: Personalização (1 semana)</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Escolha 5 mensagens de categorias diferentes</li>
            <li>Adapte cada uma para uma mulher específica</li>
            <li>Use informações que você sabe sobre ela</li>
            <li>Teste e observe as reações</li>
        </ul>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Exercício 2: Timing (1 semana)</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Observe os horários que ela mais responde</li>
            <li>Teste diferentes momentos do dia</li>
            <li>Varie a frequência das mensagens</li>
            <li>Encontre o ritmo ideal para cada pessoa</li>
        </ul>
        
        <h3 className="font-headline text-xl font-semibold mt-6">Exercício 3: Variação (2 semanas)</h3>
        <ul className="list-disc pl-5 space-y-2 mt-4">
            <li>Use mensagens de categorias diferentes</li>
            <li>Alterne entre humor, flerte e conexão</li>
            <li>Observe qual tipo gera mais engajamento</li>
            <li>Adapte sua estratégia baseada nos resultados</li>
        </ul>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">Vídeos de Apoio</h2>
        <div className="mt-6 space-y-4">
            <VideoPlayer videoId="exemplo_whatsapp" />
            <VideoPlayer videoId="exemplo_mensagens" />
            <VideoPlayer videoId="exemplo_conversa" />
        </div>

        <Separator className="my-8" />

        <h2 className="font-headline text-2xl font-semibold">Conclusão</h2>
        <p>Lembre-se: as mensagens são apenas uma ferramenta. O mais importante é a conexão genuína que você cria com a pessoa. Use essas mensagens como inspiração, mas sempre mantenha sua autenticidade e respeite os limites da outra pessoa.</p>
        <p><strong>A comunicação digital é uma arte que se aperfeiçoa com a prática. Seja paciente, seja você mesmo e os resultados virão naturalmente.</strong></p>
    </article>
);


export default function ConnectionMessagesPage() {
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
            <BreadcrumbPage>Lista de Mensagens</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <main className="rounded-lg border bg-card/80 p-6 shadow-sm md:p-8">
        <Content />
      </main>

    </div>
  );
}
