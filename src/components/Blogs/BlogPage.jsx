import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = ({ title, subtitle, videoUrl, content }) => {
  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 font-poppins">{title}</h1>
        <h2 className="text-xl mb-6 text-gray-600">{subtitle}</h2>
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
            className="w-full h-full rounded-lg"
            src={videoUrl}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-gray-800 space-y-4 text-lg">
          {content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>

      <div className="mt-8">
            <Link
                to="/"
                className="inline-block px-6 py-2 text-sm font-semibold text-white bg-primary rounded hover:bg-primary/90 transition"
            >
                ← Voltar para a página
            </Link>
      </div> 

    </section>
  );
};

export default BlogPage;