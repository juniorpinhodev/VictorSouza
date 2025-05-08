import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const BlogNavbarMenu = [
  {
    id: 1,
    title: 'Voltar',
    url: '/#'
  }
];

const BlogPage = ({ title, subtitle, videoUrl, content }) => {
  return (
    <>
      <Navbar customMenu={BlogNavbarMenu} />
      
      <section className="bg-gray-50 min-h-screen py-12 px-4 font-inter">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 font-poppins">{title}</h1>
          <h2 className="text-lg md:text-xl mb-6 text-gray-600 italic font-bold">{subtitle}</h2>

          {videoUrl && (
            <div className="relative w-full pb-[56.25%] h-0 my-8 rounded-xl overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="text-gray-800 space-y-6 text-base leading-relaxed">
            {content.map((block, i) => {
              switch (block.type) {
                case 'h1':
                  return (
                    <h1 key={i} className="text-4xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2">
                      {block.text}
                    </h1>
                  );
                case 'h2':
                  return (
                    <h2 key={i} className="text-xl font-bold text-gray-800 mt-6 mb-2">
                      {block.text}
                    </h2>
                  );
                case 'h3':
                  return (
                    <h3 key={i} className="text-2xl font-bold text-gray-800 mt-6 mb-2">
                      {block.text}
                    </h3>
                  );
                case 'p':
                  return <p key={i}>{block.text}</p>;
                case 'ul':
                  return (
                    <ul key={i} className="list-disc list-inside pl-4 space-y-1">
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                case 'ol':
                  return (
                    <ol key={i} className="list-decimal list-inside pl-4 space-y-1">
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ol>
                  );
                default:
                  return null;
              }
            })}
          </div>

          <div className="mt-10">
            <Link
              to="/"
              className="inline-block px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
            >
              ← Voltar para a página
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;