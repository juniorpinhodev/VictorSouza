import React from 'react';
import BlogPage from '../../components/Blogs/BlogPage';

const Blog1 = () => (
  <BlogPage
    title="Como identificar as melhores oportunidades em leilões da Caixa"
    subtitle="Aprenda as estratégias para encontrar imóveis com potencial de valorização em leilões bancários."
    videoUrl="https://www.youtube.com/watch?v=8DENDFjm9cg"
    content={[
      'Neste artigo, você vai aprender como analisar editais, avaliar localização, e identificar imóveis com alto potencial de valorização.',
      'Com as técnicas certas, é possível encontrar ótimas oportunidades escondidas nos leilões. Aprenda também a evitar os principais riscos envolvidos.'
    ]}
  />
);

export default Blog1;