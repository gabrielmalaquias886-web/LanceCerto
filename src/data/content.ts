import {
  NavItem,
  ServiceItem,
  FlyerItem,
  CaseItem,
  StepItem,
  FaqItem,
  WhyUsItem,
} from '../types.ts';

export const BRAND_LINKS = {
  logo: 'https://i.postimg.cc/nrkgLzrF/file-0000000096bc820da5b79ce4d875e9d9.png',
  whatsapp: 'https://w.app/dxrvdh',
  youtube: 'https://youtube.com/@lancecerto-edicoesesportivas?si=Jbu-XyjBeOWC4ohS',
  instagram: 'https://www.instagram.com/highlights_esportivo?stkn=MWcweW01MzFnNDhoMQ==',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'INÍCIO', href: '#inicio' },
  { label: 'SERVIÇOS', href: '#servicos' },
  { label: 'PORTFÓLIO', href: '#portfolio' },
  { label: 'CASES', href: '#cases' },
  { label: 'COMO FUNCIONA', href: '#como-funciona' },
  { label: 'DÚVIDAS', href: '#duvidas' },
  { label: 'CONTATO', href: '#contato' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'dvds-highlights',
    number: '01',
    title: 'DVDs / Highlights',
    description: 'Os melhores momentos da sua trajetória organizados em um material profissional.',
    iconName: 'video',
    badge: 'Produção em Vídeo',
  },
  {
    id: 'flyers-esportivos',
    number: '02',
    title: 'Flyers Esportivos',
    description: 'Artes profissionais para divulgar jogos, resultados e momentos importantes.',
    iconName: 'image',
    badge: 'Design Esportivo',
  },
  {
    id: 'materiais-atletas',
    number: '03',
    title: 'Materiais para Atletas',
    description: 'Conteúdo visual pensado para atletas profissionais e categorias de base.',
    iconName: 'award',
    badge: 'Apresentação Completa',
  },
];

export const FLYERS: FlyerItem[] = [
  {
    id: 'flyer-01',
    title: 'FLYER 01',
    imageUrl: 'https://i.postimg.cc/W1HKtzmS/1-20260322-003428-0000.png',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'flyer-02',
    title: 'FLYER 02',
    imageUrl: 'https://i.postimg.cc/ZqNfRc57/Copia-de-TEMPLATE-EVERTON-RIBEIRO-20260401-130427-0000.png',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'flyer-03',
    title: 'FLYER 03',
    imageUrl: 'https://i.postimg.cc/vHjLVVj6/Copia-de-TEMPLATE-EVERTON-RIBEIRO-20260619-183533-0000.png',
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 'flyer-04',
    title: 'FLYER 04',
    imageUrl: 'https://i.postimg.cc/s2zWY9Jw/Copia-de-Arrascaeta-20260917-130444-0000.png',
    aspectRatio: 'aspect-[4/5]',
  },
];

export const CASES: CaseItem[] = [
  {
    id: 'gustavo-santiago',
    athleteName: 'GUSTAVO SANTIAGO',
    clubName: 'Benfica Academy',
    clubLocation: 'Lisboa, Portugal',
    description:
      'Atleta das categorias de base do Benfica Academy, em Lisboa, Portugal. A Lance Certo produziu seu material em vídeo para apresentação de sua trajetória esportiva.',
    photoUrl: 'https://i.postimg.cc/nLK8XZdF/IMG-20260917-WA0066.jpg',
    clubLogoUrl: 'https://i.postimg.cc/nc7fyvvX/250px-Sport-Lisboa-e-Benfica-svg-(1).pngn',
    clubLogoFallbackUrl: 'https://i.postimg.cc/nc7fyvvX/250px-Sport-Lisboa-e-Benfica-svg-(1).png',
    videoButtonText: 'ASSISTIR AO DVD DO GUSTAVO',
    videoUrl: 'https://youtu.be/-CYDJjvxiUI?is=z4-us5I3rg_5atO6',
    youtubeId: '-CYDJjvxiUI',
  },
  {
    id: 'daniel-ribeiro',
    athleteName: 'DANIEL RIBEIRO',
    clubName: 'NK Suhopolje',
    clubLocation: 'Croácia',
    description:
      'Jogador profissional do NK Suhopolje, na Croácia. A Lance Certo produziu seu material em vídeo, apresentando seus principais momentos dentro de campo.',
    photoUrl: 'https://i.postimg.cc/QCfKs2Lf/Screenshot-20260922-105503-Instagram.jpg',
    clubLogoUrl: 'https://i.postimg.cc/WbJs2RPZ/IMG-885fd405-30e4-48ba-ac37-7c0af0c4f6fb.jpg',
    videoButtonText: 'ASSISTIR AO DVD DO DANIEL',
    videoUrl: 'https://youtu.be/Mv6ychpNRm0?is=Dz4C1o5L8s0LsPmy',
    youtubeId: 'Mv6ychpNRm0',
  },
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    title: 'PROFISSIONALISMO',
    description: 'Materiais pensados para apresentar o atleta com qualidade.',
    iconName: 'shield-check',
  },
  {
    title: 'IDENTIDADE',
    description: 'Cada projeto recebe uma identidade visual própria.',
    iconName: 'sparkles',
  },
  {
    title: 'EXPERIÊNCIA',
    description: 'Experiência com atletas profissionais e categorias de base.',
    iconName: 'users',
  },
  {
    title: 'QUALIDADE',
    description: 'Foco nos detalhes que fazem seu material se destacar.',
    iconName: 'focus',
  },
];

export const PROCESS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'ENVIE SEUS LANCES',
    description: 'Envie seus lances cortados ou simplesmente os links dos seus jogos completos.',
    iconName: 'upload',
  },
  {
    number: '02',
    title: 'SELECIONAMOS OS MELHORES MOMENTOS',
    description: 'Identificamos, analisamos e extraímos as jogadas de maior impacto técnico e tático.',
    iconName: 'scissors',
  },
  {
    number: '03',
    title: 'EDITAMOS SEU MATERIAL',
    description: 'Produção audiovisual completa, correções, transições, capas e identidade personalizada.',
    iconName: 'film',
  },
  {
    number: '04',
    title: 'VOCÊ RECEBE UM MATERIAL PROFISSIONAL',
    description: 'Material finalizado em altíssima resolução, pronto para clubes, scouts e agentes.',
    iconName: 'check-circle-2',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: 'Não tenho meus lances cortados. E agora?',
    answer:
      'Fique tranquilo. Você pode nos enviar os links dos seus jogos. Nós assistimos às partidas, identificamos e retiramos seus melhores momentos para montar o seu vídeo.\n\nSe você já tiver os lances cortados, é só nos enviar também.',
    ctaText: 'FALAR COM A LANCE CERTO',
    ctaUrl: BRAND_LINKS.whatsapp,
  },
  {
    id: 2,
    question: 'Como funciona o valor do material?',
    answer:
      'Os valores variam de acordo com a forma que você envia o material.\n\nTrabalhamos com pacotes de links dos jogos ou com lances já cortados.\n\nPara saber qual opção se encaixa melhor no seu caso, fale com a Lance Certo pelo WhatsApp e solicite um orçamento.',
    ctaText: 'SOLICITAR ORÇAMENTO',
    ctaUrl: BRAND_LINKS.whatsapp,
  },
  {
    id: 3,
    question: 'Quais são as formas de pagamento?',
    answer: 'Trabalhamos com:',
    bulletPoints: ['Pix à vista', 'Cartão à vista', 'Cartão parcelado'],
  },
  {
    id: 4,
    question: 'Como funciona a capa do meu material?',
    answer:
      'A capa do material pode ser produzida em português e em inglês, com uma apresentação profissional pensada para valorizar o atleta.',
  },
  {
    id: 5,
    question: 'Posso fazer uma contracapa com meu currículo?',
    answer:
      'Sim. Caso o atleta opte por esse formato, também podemos produzir uma contracapa com o currículo esportivo, destacando os times pelos quais já passou.',
  },
  {
    id: 6,
    question: 'Preciso ter todos os meus lances separados?',
    answer:
      'Não.\n\nSe você já tiver seus lances cortados, pode nos enviar diretamente.\n\nCaso não tenha, basta enviar os links dos seus jogos e nós fazemos a seleção dos melhores momentos.',
  },
  {
    id: 7,
    question: 'Como faço para pedir um orçamento?',
    answer:
      'É simples. Clique no botão abaixo e fale diretamente com a Lance Certo pelo WhatsApp. Vamos entender o seu material e passar a melhor opção para o seu caso.',
    ctaText: 'FAZER ORÇAMENTO',
    ctaUrl: BRAND_LINKS.whatsapp,
  },
];
