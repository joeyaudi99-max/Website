import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'profile' | 'article';
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = '/Media/Profile.jpg',
  type = 'website',
  structuredData
}) => {
  const location = useLocation();
  const siteUrl = 'https://joeyaudi.com';
  const canonicalUrl = `${siteUrl}${location.pathname}`;
  const fullTitle = title === 'Joey Audi - Audiovisual Technician & Event Coordinator' 
    ? title 
    : `${title} | Joey Audi`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Joey Audi Portfolio" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content="@joeyaudi2" />

      {/* Additional SEO */}
      <meta name="author" content="Joey Audi" />
      <meta name="robots" content="index, follow" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
