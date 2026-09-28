/**
 * Dados do site em um lugar so. Edite aqui, nao nos componentes.
 */

export const PACKAGE_ID = 'com.marsollu.meus_alugueis';

export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${PACKAGE_ID}`;

export const APP_STORE_ID = '6811875632';

export const APP_STORE_URL = `https://apps.apple.com/br/app/aluguel-f%C3%A1cil-controle-im%C3%B3vel/id${APP_STORE_ID}`;

export const CONTACT_EMAIL = 'appsollu@gmail.com';

/** Dominio canonico, sem barra final. Usado nos dados estruturados. */
export const SITE_URL = 'https://aluguelfacil.app';

/**
 * Categoria e sistema do app nos dados estruturados (schema.org).
 * FinanceApplication e a categoria que o Google reconhece para controle
 * financeiro pessoal.
 */
export const APP_SCHEMA = {
  category: 'FinanceApplication',
  operatingSystem: 'Android, iOS',
  /** Imagem usada no card de resultado rico e nas previas sociais. */
  image: '/screenshots/og_resumo.jpg',
};

/** Ultima revisao das paginas legais. Atualize ao mudar o texto. */
export const LEGAL_UPDATED_AT = '28 de setembro de 2026';

export const SITE = {
  name: 'Aluguel Fácil',
  /** Titulo da home. Usado no <title> junto do nome — mire em 60 caracteres. */
  tagline: 'Controle de aluguel no celular, sem planilha',
  description:
    'App de controle de aluguel para quem aluga o próprio imóvel: quem deve, o que vence, recibo em PDF e Carnê-Leão pronto. Substitui a planilha, sem cadastro.',
};

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const FEATURES: Feature[] = [
  {
    title: 'Controle de pagamentos',
    description:
      'O painel do mês abre com previsto, recebido e pendente: quem deve e o que vence, sem procurar em planilha.',
    icon: 'dashboard',
  },
  {
    title: 'Cobrança pelo WhatsApp',
    description:
      'Um toque abre a conversa com a mensagem pronta. Você só confere e envia.',
    icon: 'whatsapp',
  },
  {
    title: 'Recibo em PDF',
    description:
      'Gere e compartilhe o recibo do pagamento na hora, com os dados do imóvel e do inquilino.',
    icon: 'receipt',
  },
  {
    title: 'Carnê-Leão e imposto de renda',
    description:
      'Apuração mensal do imposto sobre aluguéis pelo regime de caixa, já separando o que é repasse.',
    icon: 'tax',
  },
  {
    title: 'Contratos e reajustes',
    description:
      'Vencimento e reajuste ficam à vista. O app avisa quando chega a hora de renovar.',
    icon: 'contract',
  },
  {
    title: 'Manutenções e contas',
    description:
      'Reparos anotados e histórico de água, luz e gás por imóvel — para saber o custo real.',
    icon: 'tools',
  },
];

export interface Screenshot {
  src: string;
  alt: string;
}

export const SCREENSHOTS: Screenshot[] = [
  { src: '/screenshots/01_resumo_progresso.webp', alt: 'Resumo do mês mostrando quanto já foi recebido do total previsto' },
  { src: '/screenshots/02_resumo_grafico.webp', alt: 'Gráfico com a renda dos imóveis mês a mês' },
  { src: '/screenshots/03_imoveis_lista.webp', alt: 'Lista de imóveis com status, inquilino e valor do aluguel' },
  { src: '/screenshots/04_pagamentos_lista.webp', alt: 'Pagamentos do mês com botões para marcar como recebido e gerar recibo' },
  { src: '/screenshots/05_contas_consumo.webp', alt: 'Contas de água, luz e internet do imóvel e quem pagou cada uma' },
  { src: '/screenshots/06_relatorio_mensal.webp', alt: 'Relatório mensal com o resumo e a lista de pagamentos' },
  { src: '/screenshots/07_carne_leao.webp', alt: 'Carnê-Leão com o imposto estimado no ano e o valor de cada mês' },
  { src: '/screenshots/08_agenda_mes.webp', alt: 'Agenda do mês com os vencimentos e pagamentos por dia' },
  { src: '/screenshots/09_analise_imovel.webp', alt: 'Análise do imóvel com receita, despesas e resultado no ano' },
  { src: '/screenshots/10_imovel_completo.webp', alt: 'Página do imóvel com contrato, manutenções e histórico de pagamentos' },
  { src: '/screenshots/11_modo_escuro.webp', alt: 'Resumo do mês no tema escuro' },
];

export interface FaqItem {
  q: string;
  a: string;
}

/** Fonte unica do FAQ: alimenta a secao visivel e o schema FAQPage. */
export const FAQ: FaqItem[] = [
  {
    q: 'Preciso criar uma conta para usar?',
    a: 'Não. O app abre direto no painel e funciona por completo sem cadastro. Se quiser, você pode criar uma conta com e-mail para manter a assinatura PRO ao trocar de aparelho — e apagá-la quando quiser.',
  },
  {
    q: 'O app é grátis?',
    a: 'Sim, o essencial é grátis: cadastrar imóveis, registrar pagamentos e gerar recibo. A assinatura PRO libera imóveis ilimitados, remove os anúncios, exporta relatórios e dá acesso ao assistente de Carnê-Leão.',
  },
  {
    q: 'Meus dados vão para a internet?',
    a: 'Não. Imóveis, inquilinos, contratos e pagamentos ficam gravados no seu aparelho. Se trocar de celular, use a exportação de backup para levar seus dados.',
  },
  {
    q: 'Como funciona a cobrança pelo WhatsApp?',
    a: 'O app abre a conversa com o inquilino já com a mensagem de cobrança preenchida. Você revisa e envia — nada é enviado automaticamente em seu nome.',
  },
  {
    q: 'O assistente de Carnê-Leão substitui meu contador?',
    a: 'Não. Ele organiza a apuração mensal do IR sobre os aluguéis pelo regime de caixa e separa o que é repasse do que é tributável, para você ou seu contador conferirem. A responsabilidade pela declaração continua sendo sua.',
  },
  {
    q: 'Tem versão para iPhone?',
    a: 'Sim. O app está na App Store para iPhone e na Google Play para Android.',
  },
];
