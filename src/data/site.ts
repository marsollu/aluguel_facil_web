/**
 * Dados do site em um lugar so. Edite aqui, nao nos componentes.
 */

export const PACKAGE_ID = 'com.marsollu.meus_alugueis';

export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${PACKAGE_ID}`;

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
  operatingSystem: 'Android',
  /** Imagem usada no card de resultado rico e nas previas sociais. */
  image: '/screenshots/01_tudo_em_ordem.png',
};

/** Ultima revisao das paginas legais. Atualize ao mudar o texto. */
export const LEGAL_UPDATED_AT = '28 de agosto de 2026';

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
  { src: '/screenshots/01_tudo_em_ordem.png', alt: 'Painel do mês mostrando quanto foi recebido e as últimas movimentações' },
  { src: '/screenshots/03_seus_imoveis.png', alt: 'Lista de imóveis cadastrados com status de cada um' },
  { src: '/screenshots/13_cobranca_facil.png', alt: 'Cobrança pelo WhatsApp com a mensagem já preenchida' },
  { src: '/screenshots/07_recebeu_um_toque.png', alt: 'Registro de pagamento recebido em um toque' },
  { src: '/screenshots/10_carne_leao_pronto.png', alt: 'Assistente de Carnê-Leão com a apuração do mês pronta' },
  { src: '/screenshots/09_relatorio_do_mes.png', alt: 'Relatório mensal com o resumo dos aluguéis' },
  { src: '/screenshots/02_seu_ano_inteiro.png', alt: 'Visão anual da renda dos imóveis' },
  { src: '/screenshots/04_contrato_sempre_a_mao.png', alt: 'Contrato do inquilino com vencimento e reajuste' },
  { src: '/screenshots/05_reparos_anotados.png', alt: 'Manutenções e reparos anotados por imóvel' },
  { src: '/screenshots/06_agua_luz_e_gas.png', alt: 'Histórico de contas de água, luz e gás do imóvel' },
  { src: '/screenshots/11_agenda_do_mes.png', alt: 'Agenda do mês com os vencimentos' },
  { src: '/screenshots/12_anuncie_o_imovel.png', alt: 'Anúncio do imóvel disponível para alugar' },
];

export interface FaqItem {
  q: string;
  a: string;
}

/** Fonte unica do FAQ: alimenta a secao visivel e o schema FAQPage. */
export const FAQ: FaqItem[] = [
  {
    q: 'Preciso criar uma conta para usar?',
    a: 'Não. O app abre direto no painel. Não há cadastro, login nem perfil online.',
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
    a: 'Por enquanto o app está disponível para Android, na Google Play.',
  },
];
