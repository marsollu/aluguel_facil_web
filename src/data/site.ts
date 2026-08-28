/**
 * Dados do site em um lugar so. Edite aqui, nao nos componentes.
 */

export const PACKAGE_ID = 'com.marsollu.meus_alugueis';

export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${PACKAGE_ID}`;

export const CONTACT_EMAIL = 'appsollu@gmail.com';

/** Ultima revisao das paginas legais. Atualize ao mudar o texto. */
export const LEGAL_UPDATED_AT = '28 de agosto de 2026';

export const SITE = {
  name: 'Aluguel Fácil',
  tagline: 'Menos controle manual. Mais clareza sobre sua renda.',
  description:
    'App para proprietários acompanharem aluguéis: quem deve, o que vence agora e quanto entrou. Os dados ficam no seu celular.',
};

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const FEATURES: Feature[] = [
  {
    title: 'Quem deve e o que vence',
    description:
      'O painel do mês abre direto com previsto, recebido e pendente. Sem procurar em planilha.',
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
    title: 'Assistente de Carnê-Leão',
    description:
      'Apuração mensal do IR sobre aluguéis pelo regime de caixa, já separando o que é repasse.',
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
