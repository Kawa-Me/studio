export type Video = {
  id: string;
  title: string;
};

export type Module = {
  title: string;
  description: string;
  videos: Video[];
};

export type Bonus = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const modules: Module[] = [
  {
    title: "🔥 Módulo 1 – Mentalidade do Macho Alpha Real",
    description: "Desenvolva a mentalidade de um líder, confiante e autêntico, que atrai naturalmente o respeito e a admiração.",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Aula 1: O Que é Ser um Macho Alpha Hoje?" },
      { id: "dQw4w9WgXcQ", title: "Aula 2: Quebrando Mitos e Crenças Limitantes" },
      { id: "dQw4w9WgXcQ", title: "Aula 3: Construindo uma Autoestima Inabalável" },
      { id: "dQw4w9WgXcQ", title: "Aula 4: O Poder da Linguagem Corporal" },
      { id: "dQw4w9WgXcQ", title: "Aula 5: Definindo Seus Valores e Propósito" },
    ],
  },
  {
    title: "💬 Módulo 2 – Como Atrair Mulheres Sem Forçar Nada",
    description: "Aprenda a arte da atração genuína, comunicando seu valor sem precisar de joguinhos ou manipulação.",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Aula 1: A Psicologia da Atração Feminina" },
      { id: "dQw4w9WgXcQ", title: "Aula 2: Como Iniciar Conversas de Forma Natural" },
      { id: "dQw4w9WgXcQ", title: "Aula 3: Humor e Inteligência na Sedução" },
      { id: "dQw4w9WgXcQ", title: "Aula 4: Criando Tensão Sexual Positiva" },
      { id: "dQw4w9WgXcQ", title: "Aula 5: O Guia do Primeiro Encontro" },
    ],
  },
  {
    title: "💣 Módulo 3 – Técnicas de Sedução e Encontro",
    description: "Domine as técnicas práticas para seduzir e criar encontros memoráveis que evoluem para algo mais.",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Aula 1: Do Online para o Encontro Real" },
      { id: "dQw4w9WgXcQ", title: "Aula 2: Escalando o Toque Físico com Respeito" },
      { id: "dQw4w9WgXcQ", title: "Aula 3: Beijos que Deixam Marcas" },
      { id: "dQw4w9WgXcQ", title: "Aula 4: Lendo os Sinais de Interesse Dela" },
      { id: "dQw4w9WgXcQ", title: "Aula 5: Como Convidá-la para Sua Casa" },
    ],
  },
  {
    title: "🔥 Módulo 4 – Domínio Sexual – Como Durar Mais e Dar Mais Prazer",
    description: "Transforme sua performance na cama com técnicas para controle ejaculatório e para maximizar o prazer dela.",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Aula 1: Entendendo a Fisiologia do Orgasmo" },
      { id: "dQw4w9WgXcQ", title: "Aula 2: Exercícios de Kegel e Respiração" },
      { id: "dQw4w9WgXcQ", title: "Aula 3: Técnicas para Retardar a Ejaculação" },
      { id: "dQw4w9WgXcQ", title: "Aula 4: Mapeando o Corpo Feminino para o Prazer" },
      { id: "dQw4w9WgXcQ", title: "Aula 5: A Importância das Preliminares" },
    ],
  },
  {
    title: "🔑 Módulo 5 – Estilo de Vida Atraente – O Cara que Elas Querem ao Lado",
    description: "Construa um estilo de vida que não só atrai mulheres, mas também te traz realização pessoal e felicidade.",
    videos: [
      { id: "dQw4w9WgXcQ", title: "Aula 1: Cuidando da Aparência: Estilo e Higiene" },
      { id: "dQw4w9WgXcQ", title: "Aula 2: Hobbies e Paixões que te Tornam Interessante" },
      { id: "dQw4w9WgXcQ", title: "Aula 3: Inteligência Financeira e Ambição" },
      { id: "dQw4w9WgXcQ", title: "Aula 4: Construindo um Círculo Social de Valor" },
      { id: "dQw4w9WgXcQ", title: "Aula 5: Mantendo a Chama Acesa no Relacionamento" },
    ],
  },
];

import { ListChecks, HeartPulse, Video } from "lucide-react";

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
