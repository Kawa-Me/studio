
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
  path?: string;
};

export const modules: Module[] = [
  {
    id: "mentalidade-alpha",
    title: "🔥 Módulo 1 – Mentalidade Imparável",
    description: "Desenvolva a mentalidade de um líder, confiante e autêntico, que atrai naturalmente o respeito e a admiração.",
    lessons: [
      { id: "o-que-e-alpha-real", title: "O Que é Ser um Homem de Alto Valor?", videoId: "hJ1CRSEaqMQ", path: "/modules/mentalidade-alpha/o-que-e-alpha-real" },
      { id: "erro-dos-bonzinhos", title: "O Erro Fatal dos 'Bonzinhos'", path: "/modules/mentalidade-alpha/erro-dos-bonzinhos", videoId: "bO45Tcy_55M" },
      { id: "postura-dominante", title: "Como Criar Postura e Presença Dominante", videoId: "2NEiDwtj890", path: "/modules/mentalidade-alpha/postura-dominante" },
      { id: "confianca-timidez", title: "Como Desenvolver Confiança Mesmo Sendo Tímido", path: "/modules/mentalidade-alpha/confianca-timidez", videoId: "Yl__q-4w2uE" },
      { id: "crencas-limitantes", title: "Quebrando Crenças Limitantes", path: "/modules/mentalidade-alpha/crencas-limitantes", videoId: "m_VvxANt4pQ" },
    ],
  },
  {
    id: "atrair-mulheres",
    title: "💬 Módulo 2 – Como Atrair Mulheres Sem Forçar Nada",
    description: "Aprenda a arte da atração genuína, comunicando seu valor sem precisar de joguinhos ou manipulação.",
    lessons: [
      { id: "psicologia-atracao", title: "O Que Realmente Atrai as Mulheres", videoId: "h3rAfOuYzh0", path: "/modules/atrair-mulheres/psicologia-atracao" },
      { id: "vestir-e-portar", title: "Como se Vestir e Portar para Atração Automática", videoId: "szXwbwRH-4E", path: "/modules/atrair-mulheres/vestir-e-portar" },
      { id: "gatilhos-atracao", title: "Os 3 Gatilhos de Atração Instantânea", videoId: "UxsO0YNgiX4", path: "/modules/atrair-mulheres/gatilhos-atracao" },
      { id: "linguagem-corporal", title: "A Linguagem Corporal que Atrai Sem Dizer Uma Palavra", videoId: "yLH0_KGUSrI", path: "/modules/atrair-mulheres/linguagem-corporal" },
      { id: "puxar-assunto", title: "Como Puxar Assunto do Jeito Certo", videoId: "5MelvOkaD-M", path: "/modules/atrair-mulheres/puxar-assunto" },
      { id: "criar-tensao", title: "Como Criar Tensão e Fazer Ela Pensar em Você", videoId: "JXUP3wTPJiE", path: "/modules/atrair-mulheres/criar-tensao" },
    ],
  },
  {
    id: "tecnicas-seducao",
    title: "💣 Módulo 3 – Técnicas de Sedução e Encontro",
    description: "Domine as técnicas práticas para seduzir e criar encontros memoráveis que evoluem para algo mais.",
    lessons: [
      { id: "como-marcar-encontros-naturalmente", title: "Como Marcar Encontros Naturalmente", videoId: "z0tWFuPrBMg", path: "/modules/tecnicas-seducao/como-marcar-encontros-naturalmente" },
      { id: "frases-prontas-que-criam-conexao-profunda", title: "Frases Prontas Que Criam Conexão Profunda", videoId: "4_q1y81f3kA", path: "/modules/tecnicas-seducao/frases-prontas-que-criam-conexao-profunda" },
      { id: "como-lidar-com-testes-femininos-e-joguinhos", title: "Como Lidar com Testes Femininos e Joguinhos", videoId: "L9Yh_C60CgY", path: "/modules/tecnicas-seducao/como-lidar-com-testes-femininos-e-joguinhos" },
      { id: "o-passo-a-passo-do-encontro-ideal", title: "O Passo a Passo do Encontro Ideal", videoId: "0bE-vV_G3YI", path: "/modules/tecnicas-seducao/o-passo-a-passo-do-encontro-ideal" },
      { id: "como-sair-do-primeiro-beijo-para-o-sexo", title: "Como Sair do Primeiro Beijo Para o Sexo", videoId: "Qp01-5t2XwI", path: "/modules/tecnicas-seducao/como-sair-do-primeiro-beijo-para-o-sexo" },
      { id: "como-se-comportar-para-gerar-desejo-durante-o-encontro", title: "Como se Comportar para Gerar Desejo Durante o Encontro", videoId: "k_aTfA1hH7w", path: "/modules/tecnicas-seducao/como-se-comportar-para-gerar-desejo-durante-o-encontro" },
    ],
  },
  {
    id: "dominio-sexual",
    title: "🔥 Módulo 4 – Domínio Sexual – Como Durar Mais e Dar Mais Prazer",
    description: "Transforme sua performance na cama com técnicas para controle ejaculatório e para maximizar o prazer dela.",
    lessons: [
      { id: "erros-gozar-rapido", title: "Os 5 Maiores Erros que Fazem o Homem Gozar Rápido", videoId: "Xs0mDjB0Fag", path: "/modules/dominio-sexual/erros-gozar-rapido" },
      { id: "controlar-ejaculacao", title: "Como Controlar a Ejaculação com Respiração e Foco Muscular", videoId: "JmIjeYtcbvg", path: "/modules/dominio-sexual/controlar-ejaculacao" },
      { id: "segredo-ritmo", title: "O 'Segredo do Ritmo' que Enlouquece Qualquer Mulher", videoId: "k1ZbMRGN-sk", path: "/modules/dominio-sexual/segredo-ritmo" },
      { id: "estimular-zonas-erogenas", title: "Como Estimular Zonas Erógenas Pouco Exploradas", videoId: "QDgZicf4VUc", path: "/modules/dominio-sexual/estimular-zonas-erogenas" },
      { id: "satisfazer-corpo-feminino", title: "Como Entender e Satisfazer o Corpo Feminino", videoId: "ATx_ALLgLtc", path: "/modules/dominio-sexual/satisfazer-corpo-feminino" },
      { id: "erecoes-fortes", title: "Como Ter Ereções Mais Fortes Naturalmente", videoId: "ZFpV-r6FVfM", path: "/modules/dominio-sexual/erecoes-fortes" },
    ],
  },
  {
    id: "estilo-vida",
    title: "🔑 Módulo 5 – Estilo de Vida Atraente – O Cara que Elas Querem ao Lado",
    description: "Construa um estilo de vida que não só atrai mulheres, mas também te traz realização pessoal e felicidade.",
    lessons: [
      { id: "proposito-rotina", title: "Como Ter um Propósito e Rotina que Impõe Respeito", videoId: "o78zXqAZAwQ", path: "/modules/estilo-vida/proposito-rotina" },
      { id: "cuidar-aparencia", title: "Como Cuidar da Aparência Sem Parecer Vaidoso Demais", videoId: "Iwpb6VZ3pkw", path: "/modules/estilo-vida/cuidar-aparencia" },
      { id: "redes-sociais", title: "Redes Sociais Que Atraem (O Que Mostrar e O Que Evitar)", videoId: "lJQkA0dUiZc", path: "/modules/estilo-vida/redes-sociais" },
      { id: "gerar-valor-social", title: "Como Gerar Valor Social (O Cara que as Outras Querem)", videoId: "AmW8s-5Bmsw", path: "/modules/estilo-vida/gerar-valor-social" },
      { id: "homem-completo", title: "Como se Tornar um Homem Completo: Corpo, Mente e Sexualidade", videoId: "FMEMxRtwnH0", path: "/modules/estilo-vida/homem-completo" },
    ],
  },
];


export const bonuses: Bonus[] = [
    {
        title: "🎁 BÔNUS 1: Lista de Mensagens Prontas para Criar Conexão",
        description: "Copie e cole mensagens testadas para gerar conversas interessantes e criar uma conexão genuína, do primeiro 'oi' até o convite para sair.",
        icon: ListChecks,
        path: "/bonus/connection-messages"
    },
    {
        title: "🎁 BÔNUS 2: Exercícios Diários para Controle da Ejaculação",
        description: "Um guia prático com rotinas de exercícios diários para fortalecer seu assoalho pélvico e ganhar controle total sobre sua ejaculação.",
        icon: HeartPulse,
        path: "/bonus/ejaculation-control"
    },
    {
        title: "🎁 BÔNUS 3: Masterclass com Terapeuta Sexual",
        description: "Uma aula exclusiva com uma especialista em sexualidade para tirar dúvidas, quebrar tabus e aprofundar seu conhecimento sobre prazer.",
        icon: Video,
        path: "/bonus/masterclass"
    }
]
