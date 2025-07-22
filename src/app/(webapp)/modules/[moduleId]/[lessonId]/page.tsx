
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
  'o-que-e-alpha-real': () => (
    <article className="prose dark:prose-invert max-w-none">
<h1>O que é um "Alpha Real"</h1>
<p>Muitos homens têm uma visão completamente distorcida do que significa ser um "Alpha". Eles pensam que ser Alpha significa ser agressivo, dominador ou até mesmo babaca com as pessoas ao redor.</p>
<p><strong>Isso não poderia estar mais longe da verdade.</strong></p>
<h2>A Verdadeira Definição de Alpha</h2>
<p>Um homem Alpha Real é aquele que:</p>
<h3>1. Tem Controle Emocional</h3>
<ul>
<li>Não explode por qualquer coisa</li>
<li>Mantém a calma em situações de pressão</li>
<li>Sabe quando falar e quando ficar quieto</li>
<li>Não precisa provar nada para ninguém</li>
</ul>
<h3>2. Lidera pelo Exemplo</h3>
<ul>
<li>Suas ações falam mais alto que suas palavras</li>
<li>Inspira outros através de seu comportamento</li>
<li>Assume responsabilidade por suas decisões</li>
<li>Não culpa outros por seus problemas</li>
</ul>
<h3>3. Tem Propósito e Direção</h3>
<ul>
<li>Sabe o que quer da vida</li>
<li>Tem objetivos claros e trabalha para alcançá-los</li>
<li>Não vive apenas para agradar outros</li>
<li>Tem uma missão maior que si mesmo</li>
</ul>
<h3>4. É Autêntico</h3>
<ul>
<li>Não finge ser alguém que não é</li>
<li>É congruente em suas palavras e ações</li>
<li>Não muda de personalidade dependendo de quem está por perto</li>
<li>Tem valores sólidos e os segue</li>
</ul>
<h2>O Que NÃO É Ser Alpha</h2>
<ul>
<li>❌ <strong>Ser agressivo ou violento</strong></li>
<li>❌ <strong>Humilhar ou diminuir outros</strong></li>
<li>❌ <strong>Ser arrogante ou prepotente</strong></li>
<li>❌ <strong>Precisar estar sempre certo</strong></li>
<li>❌ <strong>Competir desnecessariamente</strong></li>
<li>❌ <strong>Ser inflexível ou teimoso</strong></li>
</ul>
<h2>Como Desenvolver a Mentalidade Alpha Real</h2>
<h3>Exercício Prático 1: Autoavaliação Diária</h3>
<p>Todas as noites, antes de dormir, faça estas perguntas:</p>
<ul>
<li>Como reagi às situações de stress hoje?</li>
<li>Mantive minha palavra em tudo que prometi?</li>
<li>Agi de acordo com meus valores?</li>
<li>Fui autêntico em minhas interações?</li>
</ul>
<h3>Exercício Prático 2: Liderança Silenciosa</h3>
<p>Durante uma semana, pratique liderar pelo exemplo:</p>
<ul>
<li>Chegue pontualmente aos compromissos</li>
<li>Mantenha sua palavra, mesmo em coisas pequenas</li>
<li>Ajude alguém sem esperar reconhecimento</li>
<li>Assuma responsabilidade por um erro</li>
</ul>
<h3>Exercício Prático 3: Controle Emocional</h3>
<p>Quando sentir raiva ou frustração:</p>
<ol>
<li>Respire fundo 3 vezes</li>
<li>Conte até 10 antes de responder</li>
<li>Pergunte-se: "Como um Alpha Real reagiria?"</li>
<li>Responda com calma e assertividade</li>
</ol>
<h2>Resultado Esperado</h2>
<p>Quando você desenvolve a verdadeira mentalidade Alpha, as pessoas naturalmente:</p>
<ul>
<li>Respeitam sua opinião</li>
<li>Buscam sua liderança</li>
<li>Confiam em você</li>
<li>Se sentem seguras ao seu lado</li>
</ul>
<p><strong>E isso inclui as mulheres.</strong></p>
<p>Mulheres são naturalmente atraídas por homens que demonstram liderança genuína, controle emocional e autenticidade. Não por caras que gritam, brigam ou tentam dominar pela força.</p>
    </article>
  ),
  'erro-dos-bonzinhos': () => (
    <article className="prose dark:prose-invert max-w-none">
<h1>O Erro Fatal dos "Bonzinhos"</h1>
<p>Se você está lendo isso, provavelmente já passou pela frustração de ser o "cara legal" que sempre fica na friendzone. Você faz tudo certo, é gentil, atencioso, sempre disponível... mas ela nunca te vê como algo além de um amigo.</p>
<p><strong>Por que isso acontece?</strong></p>
<h2>O Mito do "Cara Legal"</h2>
<p>A sociedade nos ensinou que para conquistar uma mulher, devemos:</p>
<ul>
<li>Ser sempre gentil e educado</li>
<li>Fazer tudo que ela pede</li>
<li>Estar sempre disponível</li>
<li>Nunca discordar ou confrontar</li>
<li>Colocá-la em um pedestal</li>
</ul>
<p><strong>Esse é o maior erro que um homem pode cometer.</strong></p>
<h2>Por Que Ser "Bonzinho" Não Funciona</h2>
<h3>1. Falta de Desafio</h3>
<p>Quando você concorda com tudo que ela diz e faz tudo que ela quer, você se torna previsível e entediante. Mulheres são atraídas por homens que as desafiam intelectual e emocionalmente.</p>
<h3>2. Ausência de Tensão Sexual</h3>
<p>Ser sempre "certinho" elimina qualquer tensão sexual. Você vira o "amigo seguro" com quem ela pode desabafar sobre os caras que ela realmente deseja.</p>
<h3>3. Demonstração de Baixo Valor</h3>
<p>Quando você está sempre disponível e faz tudo por ela, subconscientemente você está comunicando que ela é mais valiosa que você. E ninguém se atrai por alguém que considera inferior.</p>
<h3>4. Falta de Autenticidade</h3>
<p>Muitas vezes, o "bonzinho" não está sendo genuinamente gentil. Ele está sendo gentil porque espera algo em troca. Mulheres percebem essa inautenticidade.</p>
<h2>Os Comportamentos Típicos do "Bonzinho"</h2>
<ul>
<li>❌ <strong>Sempre concorda com ela</strong></li>
<li>❌ <strong>Cancela seus planos para estar disponível</strong></li>
<li>❌ <strong>Paga tudo nos encontros</strong></li>
<li>❌ <strong>Responde mensagens imediatamente</strong></li>
<li>❌ <strong>Nunca expressa suas próprias opiniões</strong></li>
<li>❌ <strong>Aceita ser tratado como "plano B"</strong></li>
<li>❌ <strong>Faz favores esperando algo em troca</strong></li>
</ul>
<h2>A Mentalidade Correta</h2>
<h3>Seja Gentil, Mas Não Submisso</h3>
<p>Existe uma diferença enorme entre ser gentil e ser submisso. Você pode ser respeitoso e educado sem abrir mão de sua masculinidade e liderança.</p>
<h3>Tenha Suas Próprias Opiniões</h3>
<p>Não tenha medo de discordar dela. Mulheres respeitam homens que têm convicções próprias e não mudam de opinião só para agradá-las.</p>
<h3>Mantenha Sua Vida</h3>
<p>Não abandone seus amigos, hobbies e objetivos por causa de uma mulher. Tenha uma vida interessante que ela queira fazer parte.</p>
<h3>Seja Seletivo</h3>
<p>Não trate toda mulher como se ela fosse a única no mundo. Seja seletivo e demonstre que ela precisa conquistar seu interesse também.</p>
<h2>Como Sair da Friendzone</h2>
<h3>1. Pare de Estar Sempre Disponível</h3>
<ul>
<li>Não responda mensagens imediatamente</li>
<li>Tenha seus próprios planos e compromissos</li>
<li>Diga "não" quando necessário</li>
</ul>
<h3>2. Crie Tensão Sexual</h3>
<ul>
<li>Use contato visual intenso</li>
<li>Faça toques sutis e apropriados</li>
<li>Use humor com duplo sentido</li>
<li>Seja um pouco misterioso</li>
</ul>
<h3>3. Demonstre Valor</h3>
<ul>
<li>Tenha paixões e objetivos próprios</li>
<li>Seja bom no que faz</li>
<li>Cuide de sua aparência</li>
<li>Desenvolva habilidades interessantes</li>
</ul>
<h3>4. Seja Desafiador</h3>
<ul>
<li>Questione suas opiniões (respeitosamente)</li>
<li>Não concorde com tudo</li>
<li>Tenha padrões e os mantenha</li>
<li>Seja imprevisível às vezes</li>
</ul>
<h2>Exercício Prático: Teste do Espelho</h2>
<p>Por uma semana, observe seus comportamentos com mulheres:</p>
<p><strong>Pergunte-se:</strong></p>
<ul>
<li>Estou sendo autêntico ou tentando agradar?</li>
<li>Estou demonstrando valor ou carência?</li>
<li>Estou criando tensão ou sendo "seguro demais"?</li>
<li>Estou sendo seletivo ou desesperado?</li>
</ul>
    </article>
  ),
  'postura-dominante': () => (
    <article className="prose dark:prose-invert max-w-none">
<h1>Como Criar Postura e Presença Dominante</h1>
<p>Sua postura e presença comunicam mais sobre você do que qualquer palavra que você possa dizer. Em segundos, as pessoas (incluindo mulheres) fazem julgamentos sobre sua confiança, status e atratividade baseados apenas em como você se porta.</p>
<h2>A Ciência Por Trás da Postura</h2>
<p>Estudos mostram que:</p>
<ul>
<li><strong>55% da comunicação</strong> é linguagem corporal</li>
<li><strong>38% é tom de voz</strong></li>
<li><strong>Apenas 7% são as palavras</strong></li>
</ul>
<p>Isso significa que sua postura é <strong>8 vezes mais importante</strong> que o que você fala!</p>
<h2>Os Elementos da Presença Dominante</h2>
<h3>1. Postura Física</h3>
<h4>Posição Ereta</h4>
<ul>
<li>Ombros para trás e relaxados</li>
<li>Peito aberto (não estufado)</li>
<li>Cabeça erguida, queixo paralelo ao chão</li>
<li>Coluna reta mas não rígida</li>
</ul>
<h4>Ocupação do Espaço</h4>
<ul>
<li>Não se encolha ou tente "desaparecer"</li>
<li>Mantenha braços e pernas em posições abertas</li>
<li>Evite cruzar braços ou pernas defensivamente</li>
<li>Sente-se e ande como se o espaço fosse seu</li>
</ul>
<h3>2. Movimentos Controlados</h3>
<h4>Gestos Deliberados</h4>
<ul>
<li>Movimentos lentos e controlados</li>
<li>Evite gestos nervosos (mexer no cabelo, balançar a perna)</li>
<li>Use as mãos para enfatizar pontos importantes</li>
<li>Mantenha movimentos fluidos, não robóticos</li>
</ul>
<h4>Caminhada Confiante</h4>
<ul>
<li>Passos firmes e decididos</li>
<li>Velocidade moderada (não muito rápido, não muito lento)</li>
<li>Olhe para frente, não para o chão</li>
<li>Mantenha ritmo constante</li>
</ul>
<h3>3. Contato Visual</h3>
<h4>O Poder do Olhar</h4>
<ul>
<li>Mantenha contato visual 60-70% do tempo</li>
<li>Não desvie o olhar primeiro em conversas</li>
<li>Use o "triângulo do olhar" (olhos e boca)</li>
<li>Pratique o olhar intenso mas não agressivo</li>
</ul>
<h4>Técnica do Olhar Dominante</h4>
<ol>
<li>Olhe diretamente nos olhos</li>
<li>Conte mentalmente até 3</li>
<li>Desvie lentamente para a boca</li>
<li>Volte para os olhos</li>
<li>Repita o processo</li>
</ol>
<h3>4. Voz e Tom</h3>
<h4>Características da Voz Dominante</h4>
<ul>
<li>Tom mais grave (pratique falar do peito, não da garganta)</li>
<li>Velocidade moderada (não fale muito rápido)</li>
<li>Volume adequado (não grite, mas seja ouvido)</li>
<li>Pausas estratégicas para enfatizar pontos</li>
</ul>
<h4>Exercício de Voz</h4>
<p>Pratique falar estas frases com diferentes tons:</p>
<ul>
<li>"Olá, como você está?" (casual)</li>
<li>"Isso é interessante" (intrigado)</li>
<li>"Não concordo com isso" (firme mas respeitoso)</li>
</ul>
<h2>Exercícios Práticos</h2>
<h3>Exercício 1: O Teste do Espelho (5 minutos/dia)</h3>
<ol>
<li>Fique em frente ao espelho</li>
<li>Pratique a postura ideal</li>
<li>Observe sua expressão facial</li>
<li>Pratique diferentes tipos de sorriso</li>
<li>Trabalhe seu contato visual</li>
</ol>
<h3>Exercício 2: Caminhada Consciente (Durante o dia)</h3>
<ul>
<li>Toda vez que sair de casa, foque na sua caminhada</li>
<li>Ombros para trás, cabeça erguida</li>
<li>Observe como as pessoas reagem diferente</li>
<li>Pratique em diferentes ambientes</li>
</ul>
<h3>Exercício 3: Ocupação de Espaço (Em locais públicos)</h3>
<ul>
<li>Em restaurantes, sente-se confortavelmente</li>
<li>Não se encolha em transportes públicos</li>
<li>Mantenha postura aberta em filas</li>
<li>Observe como isso afeta as interações</li>
</ul>
<h3>Exercício 4: Controle de Gestos (1 semana)</h3>
<ul>
<li>Elimine gestos nervosos</li>
<li>Pratique falar com as mãos</li>
<li>Movimentos lentos e deliberados</li>
<li>Grave-se falando para autoavaliação</li>
</ul>
<h2>Erros Comuns a Evitar</h2>
<ul>
<li>❌ <strong>Postura muito rígida</strong> (parecer robô)</li>
<li>❌ <strong>Exagerar na "dominância"</strong> (parecer agressivo)</li>
<li>❌ <strong>Olhar fixo demais</strong> (intimidar)</li>
<li>❌ <strong>Gestos muito amplos</strong> (parecer desesperado por atenção)</li>
<li>❌ <strong>Voz forçada</strong> (soar artificial)</li>
</ul>
<h2>A Transformação Gradual</h2>
<h3>Semana 1: Foco na Postura</h3>
<ul>
<li>Trabalhe apenas postura física</li>
<li>Use lembretes no celular para verificar postura</li>
<li>Pratique 5 minutos no espelho diariamente</li>
</ul>
<h3>Semana 2: Adicione Movimentos</h3>
<ul>
<li>Inclua trabalho de caminhada</li>
<li>Pratique gestos controlados</li>
<li>Observe reações das pessoas</li>
</ul>
<h3>Semana 3: Contato Visual</h3>
<ul>
<li>Foque no olhar durante conversas</li>
<li>Pratique com estranhos em situações casuais</li>
<li>Desenvolva confiança no olhar</li>
</ul>
<h3>Semana 4: Integração Total</h3>
<ul>
<li>Combine todos os elementos</li>
<li>Pratique em situações sociais</li>
<li>Observe mudanças nas interações</li>
</ul>
<h2>Resultados Esperados</h2>
<p>Após 30 dias de prática consistente, você notará:</p>
<h3>Em Você Mesmo:</h3>
<ul>
<li>Maior confiança natural</li>
<li>Sensação de controle em situações sociais</li>
<li>Menos ansiedade em interações</li>
<li>Maior autoestima</li>
</ul>
<h3>Nas Outras Pessoas:</h3>
<ul>
<li>Mais respeito automático</li>
<li>Mulheres prestam mais atenção</li>
<li>Pessoas buscam sua opinião</li>
<li>Tratamento diferenciado em serviços</li>
</ul>
<h3>Dica Avançada: O Poder da Pausa</h3>
<p>Uma das técnicas mais poderosas é aprender a usar pausas:</p>
<ul>
<li>Pause antes de responder perguntas</li>
<li>Use silêncio para criar tensão</li>
<li>Não preencha todo silêncio com palavras</li>
<li>Deixe suas palavras "respirarem"</li>
</ul>
    </article>
  ),
  'confianca-timidez': () => (
    <article className="prose dark:prose-invert max-w-none">
<h1>Como Desenvolver Confiança Mesmo Sendo Tímido</h1>
<p>Se você é tímido, a ideia de se tornar um "Macho Alpha" pode parecer impossível. A timidez é frequentemente confundida com fraqueza ou falta de confiança, mas a verdade é que muitos homens de sucesso são naturalmente introvertidos ou tímidos.</p>
<p><strong>A confiança não é a ausência de timidez, mas a capacidade de agir apesar dela.</strong></p>
<h2>Entendendo a Timidez</h2>
<h3>O Que É Timidez?</h3>
<ul>
<li>Não é uma doença, mas uma característica de personalidade</li>
<li>É uma tendência a se sentir desconfortável ou inibido em situações sociais</li>
<li>Geralmente vem do medo do julgamento ou da rejeição</li>
<li>Pode ser superada com prática e técnicas</li>
</ul>
<h3>Timidez vs. Introversão</h3>
<ul>
<li><strong>Timidez:</strong> Medo de interações sociais</li>
<li><strong>Introversão:</strong> Preferência por ambientes calmos e menos estímulo social</li>
</ul>
<p>Você pode ser introvertido e confiante, ou extrovertido e tímido. O objetivo é ser confiante, independentemente do seu nível de introversão/extroversão.</p>
<h2>Os Pilares da Confiança para Tímidos</h2>
<h3>1. Pequenas Vitórias</h3>
<ul>
<li>Comece com pequenos desafios sociais</li>
<li>Aumente a dificuldade gradualmente</li>
<li>Celebre cada pequena vitória</li>
</ul>
<p><strong>Exemplos:</strong></p>
<ul>
<li>Sorria para 3 estranhos por dia</li>
<li>Faça uma pergunta a um atendente</li>
<li>Elogie alguém sinceramente</li>
<li>Peça uma informação na rua</li>
</ul>
<h3>2. Foco no Outro, Não em Si Mesmo</h3>
<ul>
<li>A timidez faz você focar em como você está sendo percebido</li>
<li>Mude o foco para o que o outro está dizendo ou sentindo</li>
<li>Faça perguntas abertas e escute ativamente</li>
</ul>
<p><strong>Perguntas para se fazer:</strong></p>
<ul>
<li>O que essa pessoa está tentando me comunicar?</li>
<li>Como posso fazer essa pessoa se sentir mais confortável?</li>
<li>O que posso aprender com essa interação?</li>
</ul>
<h3>3. Preparação e Roteiro</h3>
<ul>
<li>Para situações que te deixam nervoso, prepare-se</li>
<li>Pense em 3-5 tópicos de conversa</li>
<li>Tenha algumas perguntas prontas</li>
<li>Não decore, apenas tenha um guia</li>
</ul>
<p><strong>Exemplos de tópicos:</strong></p>
<ul>
<li>Notícias recentes</li>
<li>Hobbies</li>
<li>Viagens</li>
<li>Filmes/séries</li>
<li>Comida</li>
</ul>
<h3>4. Linguagem Corporal Confiante (Mesmo que Não Sinta)</h3>
<ul>
<li>Postura ereta, ombros para trás</li>
<li>Contato visual (Módulo 1)</li>
<li>Sorriso genuíno</li>
<li>Movimentos deliberados</li>
</ul>
<p><strong>Ação gera emoção.</strong> Se você agir como se fosse confiante, seu cérebro começará a acreditar.</p>
<h3>5. Aceitação da Imperfeição</h3>
<ul>
<li>Você vai cometer erros, e está tudo bem</li>
<li>Ninguém é perfeito, e as pessoas não esperam que você seja</li>
<li>Use os erros como aprendizado, não como motivo para desistir</li>
</ul>
<p><strong>Lembre-se:</strong> A maioria das pessoas está mais preocupada consigo mesma do que com você.</p>
<h2>Exercícios Práticos para Superar a Timidez</h2>
<h3>Exercício 1: O Desafio do "Olá" (7 dias)</h3>
<ul>
<li>Diga "Olá" e sorria para 10 pessoas diferentes por dia</li>
<li>Não espere uma resposta, apenas faça o gesto</li>
<li>Observe como isso se torna mais fácil com o tempo</li>
</ul>
<h3>Exercício 2: A Pergunta Aberta (7 dias)</h3>
<ul>
<li>Em cada interação social, faça pelo menos uma pergunta aberta</li>
<li>Ex: "O que você achou do evento?" em vez de "Você gostou do evento?"</li>
<li>Foque em ouvir a resposta, não em pensar na próxima pergunta</li>
</ul>
<h3>Exercício 3: O Elogio Sincero (7 dias)</h3>
<ul>
<li>Elogie sinceramente 3 pessoas diferentes por dia</li>
<li>Foque em algo não-físico (ex: "Adorei sua energia", "Que ideia interessante!")</li>
<li>Observe a reação positiva das pessoas</li>
</ul>
<h3>Exercício 4: O "Pequeno Risco" Diário (30 dias)</h3>
<ul>
<li>Faça algo que te deixe um pouco desconfortável socialmente todos os dias</li>
<li>Ex: pedir um desconto, iniciar uma conversa com um estranho, fazer uma piada</li>
<li>Aumente o risco gradualmente</li>
</ul>
<h2>Como Lidar com a Ansiedade Social</h2>
<h3>1. Respiração Profunda</h3>
<ul>
<li>Quando sentir ansiedade, respire fundo 3 vezes (inspire 4, segure 2, expire 6)</li>
<li>Isso acalma o sistema nervoso</li>
</ul>
<h3>2. Reestruturação Cognitiva</h3>
<ul>
<li>Desafie seus pensamentos negativos</li>
<li>"E se eu gaguejar?" -> "E se eu falar algo interessante?"</li>
<li>"E se ela me rejeitar?" -> "E se ela gostar de mim?"</li>
</ul>
<h3>3. Ancoragem</h3>
<ul>
<li>Escolha um objeto ou gesto (ex: tocar o polegar)</li>
<li>Associe-o a um sentimento de confiança</li>
<li>Use-o quando precisar de um "boost" de confiança</li>
</ul>
<h2>O Caminho da Confiança</h2>
<ul>
<li><strong>Não é linear:</strong> Haverá dias bons e dias ruins</li>
<li><strong>É uma habilidade:</strong> Pode ser aprendida e aprimorada</li>
<li><strong>Exige prática:</strong> Quanto mais você pratica, mais fácil se torna</li>
<li><strong>É libertador:</strong> Permite que você seja quem realmente é</li>
</ul>
    </article>
  ),
  'crencas-limitantes': () => (
    <article className="prose dark:prose-invert max-w-none">
<h1>Como Quebrar Crenças Limitantes Sobre Si Mesmo e Sobre Mulheres</h1>
<p>Crenças limitantes são ideias que você aceita como verdadeiras sobre si mesmo, sobre os outros ou sobre o mundo, e que te impedem de alcançar seu potencial máximo. Elas são como correntes invisíveis que te prendem.</p>
<p><strong>A boa notícia é que elas são apenas ideias, e ideias podem ser mudadas.</strong></p>
<h2>O Que São Crenças Limitantes?</h2>
<h3>Exemplos Comuns em Homens:</h3>
<ul>
<li>"Eu não sou bom o suficiente para atrair mulheres bonitas."</li>
<li>"Mulheres só se interessam por dinheiro ou aparência."</li>
<li>"Eu sou muito tímido/feio/magro/gordo para ter sucesso com mulheres."</li>
<li>"Todas as mulheres são iguais."</li>
<li>"Eu sempre acabo na friendzone."</li>
<li>"Não consigo durar muito na cama."</li>
</ul>
<h3>Como Elas Se Formam:</h3>
<ul>
<li>Experiências passadas negativas</li>
<li>Mensagens da família, amigos, mídia</li>
<li>Interpretações erradas de eventos</li>
<li>Medo do desconhecido</li>
</ul>
<h2>O Impacto das Crenças Limitantes</h2>
<ul>
<li><strong>Autossabotagem:</strong> Você age de forma a confirmar sua crença.</li>
<li><strong>Perda de Oportunidades:</strong> Você nem tenta, pois já "sabe" que vai falhar.</li>
<li><strong>Ciclo Vicioso:</strong> A crença gera um comportamento, que gera um resultado, que reforça a crença.</li>
<li><strong>Ansiedade e Frustração:</strong> Você se sente preso e infeliz.</li>
</ul>
<h2>O Processo de Quebra de Crenças</h2>
<h3>Passo 1: Identifique a Crença</h3>
<ul>
<li>Preste atenção aos seus pensamentos negativos</li>
<li>Quais frases você repete para si mesmo?</li>
<li>Que medos te impedem de agir?</li>
</ul>
<p><strong>Exemplo:</strong> "Eu sou muito tímido para conversar com mulheres."</p>
<h3>Passo 2: Questione a Crença</h3>
<ul>
<li>Essa crença é 100% verdadeira? Sempre? Em todas as situações?</li>
<li>Quem me disse isso? É uma fonte confiável?</li>
<li>Quais evidências eu tenho de que essa crença é falsa?</li>
<li>Que exemplos eu conheço que contradizem essa crença?</li>
</ul>
<p><strong>Exemplo:</strong> "Conheço homens tímidos que têm namoradas. Eu já consegui conversar com algumas mulheres, mesmo sendo tímido."</p>
<h3>Passo 3: Reestruture a Crença</h3>
<ul>
<li>Crie uma nova crença, positiva e capacitadora</li>
<li>Ela deve ser o oposto da crença limitante</li>
<li>Deve ser realista e acreditar que é possível</li>
</ul>
<p><strong>Exemplo:</strong> "Eu posso desenvolver minhas habilidades sociais e me tornar mais confiante em interações com mulheres."</p>
<h3>Passo 4: Reforce a Nova Crença</h3>
<ul>
<li>Repita a nova crença para si mesmo diariamente</li>
<li>Busque evidências que a confirmem</li>
<li>Aja como se a nova crença fosse verdadeira</li>
<li>Cerque-se de pessoas que apoiam sua nova crença</li>
</ul>
<h2>Exercícios Práticos para Quebrar Crenças</h2>
<h3>Exercício 1: O Diário da Crença (7 dias)</h3>
<ul>
<li>Escolha uma crença limitante</li>
<li>Todos os dias, anote:
<ul>
<li>Quando essa crença surgiu</li>
<li>Como ela te afetou</li>
<li>Evidências que a contradizem</li>
<li>Como você agiria se não tivesse essa crença</li>
</ul>
</li>
</ul>
<h3>Exercício 2: A "Prova" Contrária (30 dias)</h3>
<ul>
<li>Escolha uma nova crença capacitadora</li>
<li>Todos os dias, procure ativamente por 3 evidências que a confirmem</li>
<li>Ex: Se a crença é "Eu sou atraente", procure por olhares, sorrisos, elogios</li>
</ul>
<h3>Exercício 3: Visualização Ativa (5 minutos/dia)</h3>
<ul>
<li>Feche os olhos e visualize-se agindo com a nova crença</li>
<li>Sinta as emoções de sucesso e confiança</li>
<li>Repita a visualização diariamente</li>
</ul>
<h3>Exercício 4: O Desafio da Ação (1 semana)</h3>
<ul>
<li>Escolha uma ação que sua crença limitante te impede de fazer</li>
<li>Faça essa ação, mesmo com medo</li>
<li>Observe que o resultado geralmente não é tão ruim quanto você imaginava</li>
</ul>
<h2>Crenças Comuns Sobre Mulheres e Como Quebrá-las</h2>
<h3>Crença: "Mulheres só se interessam por dinheiro/aparência."</h3>
<ul>
<li><strong>Realidade:</strong> Mulheres buscam segurança, liderança, humor, inteligência emocional, propósito. Dinheiro e aparência são bônus, não requisitos.</li>
<li><strong>Ação:</strong> Foque em desenvolver os pilares da atração (Módulo 2).</li>
</ul>
<h3>Crença: "Todas as mulheres são iguais."</h3>
<ul>
<li><strong>Realidade:</strong> Mulheres são indivíduos complexos e diversas. Generalizar impede você de conhecê-las de verdade.</li>
<li><strong>Ação:</strong> Aborde cada mulher como um universo único. Faça perguntas, ouça, descubra o que a torna especial.</li>
</ul>
<h3>Crença: "Eu sempre acabo na friendzone."</h3>
<ul>
<li><strong>Realidade:</strong> Você acaba na friendzone porque age como amigo, não como potencial parceiro. Falta tensão sexual e demonstração de valor.</li>
<li><strong>Ação:</strong> Aplique as técnicas do Módulo 1 e 2 para criar atração e tensão sexual.</li>
</ul>
<h2>O Poder da Nova Mentalidade</h2>
<p>Quando você quebra suas crenças limitantes, você:</p>
<ul>
<li>Se liberta para agir de forma diferente</li>
<li>Abre-se para novas possibilidades</li>
<li>Atrai pessoas e situações que antes pareciam impossíveis</li>
<li>Torna-se o verdadeiro "Homem Imparável"</li>
</ul>
    </article>
  ),
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
