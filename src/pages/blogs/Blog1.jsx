import React from 'react';
import BlogPage from '../../components/Blogs/BlogPage';

const Blog1 = () => (
  <BlogPage
    title="COMO ENCONTRAR IMÓVEIS EM LEILÕES DA CAIXA"
    subtitle=""
    videoUrl="https://www.youtube.com/embed/AQRiU7SZscs?start=416"
    videoWidth="560"
    videoHeight="315"
    content={[
      {
        type: 'p',
        text: 'Os leilões de imóveis da Caixa Econômica Federal representam uma das formas mais vantajosas de adquirir imóveis com preços abaixo do valor de mercado. Neste guia, você vai aprender o passo a passo para encontrar imóveis em leilão, filtrar por região, entender os tipos de venda e identificar oportunidades com alto potencial de valorização. Vamos direto ao ponto.'
      },
      { type: 'h2', text: 'Por que escolher leilões da Caixa?' },
      {
        type: 'p',
        text: 'A Caixa detém cerca de 60% a 70% do market share em leilões extrajudiciais no Brasil. Isso significa que a maior parte dos imóveis retomados por financiamento inadimplente são negociados através dela. Além disso, a Caixa disponibiliza informações oficiais, seguras e com documentação acessível, como edital, matrícula e fotos do imóvel.'
      },

      { type: 'h3', text: '1. Acesse o portal oficial da Caixa' },
      {
        type: 'p',
        text: 'O primeiro passo é entrar no site oficial da Caixa. Para isso, digite no Google: “Caixa Imóveis” e clique na opção: “Venda de Imóveis Caixa”.'
      },
      {
        type: 'p',
        text: (
          <>
            Link direto:{" "}
            <a
              href="https://venda-imoveis.caixa.gov.br"
              className="text-blue-600 hover:text-blue-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://venda-imoveis.caixa.gov.br
            </a>
          </>
        ),
      },

      { type: 'h3', text: '2. Use a função “Busque seu Imóvel”' },
      {
        type: 'p',
        text: 'Essa é a forma mais eficiente de encontrar imóveis leiloados por região. No topo do site, clique em “Busque seu Imóvel” e siga os passos:'
      },
      {
        type: 'ul',
        items: [
          'Escolha o Estado',
          'Escolha o Município (cidade)',
          'Deixe os filtros de tipo e modalidade em branco (caso queira visualizar todos os imóveis)',
          'Clique em “Pesquisar”',
          'O site retornará todos os imóveis disponíveis, tanto em venda direta quanto em leilão (1º e 2º)'
        ]
      },

      { type: 'h3', text: '3. Analise os detalhes do imóvel' },
      {
        type: 'p',
        text: 'Ao clicar em um imóvel listado, você poderá:'
      },
      {
        type: 'ul',
        items: [
          'Ver fotos (se disponíveis)',
          'Baixar a matrícula atualizada',
          'Baixar o edital com todas as regras da venda',
          'Ver o valor do 1º e 2º leilão',
          'Saber se o imóvel aceita financiamento ou uso do FGTS'
        ]
      },
      {
        type: 'p',
        text: 'Imóveis no 2º leilão costumam ter descontos maiores, o que aumenta a atratividade para investidores e compradores em busca de boas oportunidades.'
      },

      { type: 'h3', text: '4. Entenda os tipos de venda' },
      {
        type: 'ul',
        items: [
          'Venda Direta: Imóveis disponíveis para proposta direta, sem necessidade de leilão. O primeiro que propuser o valor mínimo pode adquirir.',
          '1º Leilão: Abertura inicial com valor de avaliação.',
          '2º Leilão: Caso o imóvel não seja arrematado no primeiro, entra com desconto.',
          'Licitação Aberta/Fechada: Modalidade que exige proposta via sistema, com ou sem disputa pública.'
        ]
      },

      { type: 'h3', text: '5. Consulte o calendário de leilões e os leiloeiros' },
      {
        type: 'p',
        text: 'No site da Caixa, há um calendário de leilões com datas e os leiloeiros oficiais. Isso garante segurança jurídica e evita cair em golpes.'
      },
      {
        type: 'p',
        text: 'Você pode acessar o calendário clicando em “Leilões – Primeiro e Segundo” na barra superior. Lá, estão os lotes por mês, com links para os sites dos leiloeiros homologados.'
      },

      { type: 'h3', text: '6. Explore por regiões estratégicas' },
      {
        type: 'p',
        text: 'A dica de ouro é filtrar imóveis em regiões próximas ou que você conheça bem. Isso reduz riscos com reformas, regularizações e revenda. Exemplos:'
      },
      {
        type: 'ul',
        items: [
          'Santa Catarina: Itajaí, Palhoça, Florianópolis, Brusque',
          'São Paulo: Capital, Guarulhos, Osasco, ABC Paulista',
          'Regiões nobres como Jurerê Internacional ou zonas urbanas com potencial de valorização.'
        ]
      },

      { type: 'h3', text: '7. Dicas finais' },
      {
        type: 'ul',
        items: [
          'Imóveis aparecem e somem rapidamente. Acompanhe o site com frequência.',
          'Leia o edital com atenção antes de fazer propostas.',
          'Consulte um advogado ou despachante imobiliário se for sua primeira compra.',
          'Avalie custos extras: taxas, reforma, desocupação (se houver).'
        ]
      },

      { type: 'h2', text: 'Conclusão' },
      { 
        type: 'p', 
        text: 'Comprar imóveis em leilão da Caixa pode ser uma excelente oportunidade de investimento, especialmente quando realizada com estratégia e cautela. Para aproveitar ao máximo essa oportunidade, é fundamental utilizar o portal oficial, filtrar por localização e acompanhar os leilões disponíveis. O processo é totalmente acessível, podendo ser realizado de forma prática e segura, tanto pelo smartphone quanto pelo computador.'
      },
      { 
        type: 'p', 
        text: 'Para mais detalhes e orientações, assista ao vídeo acima e aprenda o passo a passo completo.' 
      }
      
    ]}
  />
);

export default Blog1;