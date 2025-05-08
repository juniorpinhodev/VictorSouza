import React from 'react';
import BlogPage from '../../components/Blogs/BlogPage';

const Blog2 = () => (
  <BlogPage
    title="Como Avaliar Imóveis de Leilão na Prática"
    subtitle="Dicas valiosas para quem deseja investir com segurança e inteligência no mercado imobiliário"
    videoUrl="https://www.youtube.com/embed/x9Pliey8lxg?si=ycQq80kmj3gnQA3v"
    videoWidth="560"
    videoHeight="315"
    content={[
      {
        type: 'p',
        text: 'Avaliar imóveis de leilão exige mais do que vontade de investir — requer estratégia, capital e pesquisa aprofundada. Neste guia prático, você vai aprender os principais pontos para fazer uma avaliação segura antes de entrar em um leilão.'
      },
      {
        type: 'h2',
        text: '1. Tenha Capital Inicial Disponível'
      },
      {
        type: 'p',
        text: 'Leilões exigem pagamentos rápidos. Você precisa ter o valor em mãos para não perder a oportunidade nem entrar em dívidas perigosas. Além do lance, considere custos com documentação, possíveis reformas e regularizações.'
      },
      {
        type: 'h2',
        text: '2. Entenda a Diferença entre Leilão Judicial e Extrajudicial'
      },
      {
        type: 'p',
        text: 'Leilões judiciais envolvem imóveis com pendências legais — podem ser mais baratos, mas também mais arriscados. Já os extrajudiciais, geralmente realizados por bancos, têm menor risco jurídico, embora o preço possa ser um pouco maior.'
      },
      {
        type: 'h2',
        text: '3. Faça Pesquisa de Campo'
      },
      {
        type: 'p',
        text: 'Nunca compre no escuro. Vá até o local. Observe a infraestrutura do condomínio, áreas comuns, segurança, localização e conservação do imóvel. Às vezes, uma simples sacada ou vaga coberta pode fazer toda a diferença na hora de vender ou alugar.'
      },
      {
        type: 'h2',
        text: '4. Foque em Imóveis com Alta Liquidez'
      },
      {
        type: 'p',
        text: 'Unidades do programa Minha Casa Minha Vida, por exemplo, são muito procuradas por famílias. Isso significa liquidez — ou seja, facilidade para revenda ou aluguel. Palhoça (SC) e bairros como Bela Vista são bons exemplos de regiões em crescimento.'
      },
      {
        type: 'h2',
        text: '5. Avalie a Apresentação do Condomínio'
      },
      {
        type: 'p',
        text: 'Portaria 24h, playground, salão de festas, organização e limpeza influenciam diretamente na atratividade. Investidores experientes sabem que um condomínio bem cuidado vende mais rápido.'
      },
      {
        type: 'h2',
        text: '6. Compare Condomínios Semelhantes'
      },
      {
        type: 'p',
        text: 'Às vezes, a diferença entre dois imóveis está apenas na apresentação ou em pequenos detalhes. Não compre por impulso. Compare preços, taxas de condomínio, qualidade da construção e feedback de moradores (se possível).'
      },
      {
        type: 'h2',
        text: '7. Assista ao Vídeo Completo para Mais Dicas'
      },
      {
        type: 'p',
        text: 'O Victor Souza apresenta tudo isso na prática, com imagens reais dos imóveis avaliados em Palhoça. Se você quer entrar no mercado com conhecimento e segurança, este vídeo é obrigatório.'
      },
      {
        type: 'p',
        text: 'Clique no vídeo acima e confira agora mesmo!'
      }
    ]}
  />
);

export default Blog2;
