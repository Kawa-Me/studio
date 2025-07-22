
import { ListChecks, HeartPulse, Video } from "lucide-react";

export type Lesson = {
  id: string;
  title: string;
  videoId?: string;
  path: string;
};

export type Module = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Bonus = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const modules: Module[] = [
  {
    id: "mentalidade-alpha",
    title: "🔥 Módulo 1 – Mentalidade do Macho Alpha Real",
    description: "Desenvolva a mentalidade de um líder, confiante e autêntico, que atrai naturalmente o respeito e a admiração.",
    lessons: [
      { id: "o-que-e-alpha-real", title: "O Que é Ser um Macho Alpha Hoje?", videoId: "hJ1CRSEaqMQ", path: "/modules/mentalidade-alpha/o-que-e-alpha-real" },
      { id: "erro-dos-bonzinhos", title: "O Erro Fatal dos 'Bonzinhos'", path: "/modules/mentalidade-alpha/erro-dos-bonzinhos" },
      { id: "postura-dominante", title: "Como Criar Postura e Presença Dominante", videoId: "2NEiDwtj890", path: "/modules/mentalidade-alpha/postura-dominante" },
      { id: "confianca-timidez", title: "Como Desenvolver Confiança Mesmo Sendo Tímido", path: "/modules/mentalidade-alpha/confianca-timidez" },
      { id: "crencas-limitantes", title: "Quebrando Crenças Limitantes", path: "/modules/mentalidade-alpha/crencas-limitantes" },
    ],
  },
  {
    id: "atrair-mulheres",
    title: "💬 Módulo 2 – Como Atrair Mulheres Sem Forçar Nada",
    description: "Aprenda a arte da atração genuína, comunicando seu valor sem precisar de joguinhos ou manipulação.",
    lessons: [
      { id: "psicologia-atracao", title: "A Psicologia da Atração Feminina", path: "/modules/atrair-mulheres/psicologia-atracao" },
      { id: "iniciar-conversas", title: "Como Iniciar Conversas de Forma Natural", path: "/modules/atrair-mulheres/iniciar-conversas" },
      { id: "humor-inteligencia", title: "Humor e Inteligência na Sedução", path: "/modules/atrair-mulheres/humor-inteligencia" },
      { id: "tensao-sexual", title: "Criando Tensão Sexual Positiva", path: "/modules/atrair-mulheres/tensao-sexual" },
      { id: "primeiro-encontro", title: "O Guia do Primeiro Encontro", path: "/modules/atrair-mulheres/primeiro-encontro" },
    ],
  },
  {
    id: "tecnicas-seducao",
    title: "💣 Módulo 3 – Técnicas de Sedução e Encontro",
    description: "Domine as técnicas práticas para seduzir e criar encontros memoráveis que evoluem para algo mais.",
    lessons: [
      { id: "online-para-real", title: "Do Online para o Encontro Real", path: "/modules/tecnicas-seducao/online-para-real" },
      { id: "escalando-toque", title: "Escalando o Toque Físico com Respeito", path: "/modules/tecnicas-seducao/escalando-toque" },
      { id: "beijos-marcantes", title: "Beijos que Deixam Marcas", path: "/modules/tecnicas-seducao/beijos-marcantes" },
      { id: "lendo-sinais", title: "Lendo os Sinais de Interesse Dela", path: "/modules/tecnicas-seducao/lendo-sinais" },
      { id: "convite-final", title: "Como Convidá-la para Sua Casa", path: "/modules/tecnicas-seducao/convite-final" },
    ],
  },
  {
    id: "dominio-sexual",
    title: "🔥 Módulo 4 – Domínio Sexual – Como Durar Mais e Dar Mais Prazer",
    description: "Transforme sua performance na cama com técnicas para controle ejaculatório e para maximizar o prazer dela.",
    lessons: [
      { id: "fisiologia-orgasmo", title: "Entendendo a Fisiologia do Orgasmo", path: "/modules/dominio-sexual/fisiologia-orgasmo" },
      { id: "exercicios-respiracao", title: "Exercícios de Kegel e Respiração", path: "/modules/dominio-sexual/exercicios-respiracao" },
      { id: "retardar-ejaculacao", title: "Técnicas para Retardar a Ejaculação", path: "/modules/dominio-sexual/retardar-ejaculacao" },
      { id: "mapeando-corpo", title: "Mapeando o Corpo Feminino para o Prazer", path: "/modules/dominio-sexual/mapeando-corpo" },
      { id: "importancia-preliminares", title: "A Importância das Preliminares", path: "/modules/dominio-sexual/importancia-preliminares" },
    ],
  },
  {
    id: "estilo-vida",
    title: "🔑 Módulo 5 – Estilo de Vida Atraente – O Cara que Elas Querem ao Lado",
    description: "Construa um estilo de vida que não só atrai mulheres, mas também te traz realização pessoal e felicidade.",
    lessons: [
      { id: "cuidando-aparencia", title: "Cuidando da Aparência: Estilo e Higiene", path: "/modules/estilo-vida/cuidando-aparencia" },
      { id: "hobbies-paixoes", title: "Hobbies e Paixões que te Tornam Interessante", path: "/modules/estilo-vida/hobbies-paixoes" },
      { id: "inteligencia-financeira", title: "Inteligência Financeira e Ambição", path: "/modules/estilo-vida/inteligencia-financeira" },
      { id: "circulo-social", title: "Construindo um Círculo Social de Valor", path: "/modules/estilo-vida/circulo-social" },
      { id: "mantendo-chama", title: "Mantendo a Chama Acesa no Relacionamento", path: "/modules/estilo-vida/mantendo-chama" },
    ],
  },
];


export const bonuses: Bonus[] = [
    {
        title: "🎁 BÔNUS 1: Lista de Mensagens Prontas para Criar Conexão",
        description: "Copie e cole mensagens testadas para gerar conversas interessantes e criar uma conexão genuína, do primeiro 'oi' até o convite para sair.",
        icon: ListChecks
    },
    {
        title: "🎁 BÔNUS 2: Exercícios Diários para Controle da Ejaculação",
        description: "Um guia prático com rotinas de exercícios diários para fortalecer seu assoalho pélvico e ganhar controle total sobre sua ejaculação.",
        icon: HeartPulse
    },
    {
        title: "🎁 BÔNUS 3: Masterclass com Terapeuta Sexual",
        description: "Uma aula exclusiva com uma especialista em sexualidade para tirar dúvidas, quebrar tabus e aprofundar seu conhecimento sobre prazer.",
        icon: Video
    }
]
