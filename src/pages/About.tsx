import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';
import StatsCounter from '../components/about/StatsCounter';
import Timeline from '../components/about/Timeline';
import ClientsGrid from '../components/about/ClientsGrid';
import GlassmorphicCard from '../components/common/GlassmorphicCard';
import GradientText from '../components/common/GradientText';
import styles from './About.module.css';

const About: React.FC = () => {
  useScrollAnimation();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joey Audi",
    "jobTitle": "Audiovisual Marketing Specialist",
    "description": "Based in Finland. Hands-on audiovisual marketing professional with experience in content creation, newsletter planning, visual branding, website management, and multi-platform campaign execution.",
    "url": "https://joeyaudi.com/about",
    "image": "https://joeyaudi.com/Media/Profile.jpg",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Tampere University of Applied Sciences"
    },
    "knowsAbout": [
      "Digital Marketing",
      "Content Creation",
      "Newsletter & Email Marketing",
      "Visual Branding",
      "Adobe Creative Suite",
      "Social Media Management",
      "E-commerce"
    ],
    "sameAs": [
      "https://www.instagram.com/joeyaudi2/",
      "https://www.linkedin.com/in/joey-audi"
    ]
  };

  return (
    <div className={styles.page}>
      <SEO 
        title="About Me"
        description="Audiovisual marketing specialist with hands-on experience in content creation, newsletters, visual branding, and campaign execution. Based in Finland."
        type="profile"
        structuredData={structuredData}
      />
      <div className="container">
        <h1 className="section-title fade-in">About Me</h1>

        {/* Overview Section */}
        <div>
          <GlassmorphicCard 
            className={`${styles.aboutContent} fade-in about-section-item`}
            hover={false}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className={styles.aboutWrapper}>
              <div className={styles.aboutImage}>
                <div className={styles.imageGlow}></div>
                <img 
                  src="/Media/Profile.jpg" 
                  alt="Joey Audi - Audiovisual Professional" 
                  className={styles.profileImg}
                  loading="lazy"
                  width="250"
                  height="250"
                />
              </div>
              <div className={styles.aboutText}>
                <p>
                  A background in audiovisual arts, cinema, and interactive media shapes the way I approach digital marketing 
                  and visual brand development. At Nokia Arena's Paidia gaming space, I managed events, 
                  operated cameras, and produced graphics and video content using Adobe Photoshop, 
                  Illustrator, and Premiere Pro — coordinating international student events for up to 
                  600 people. At CLINT, I planned and managed marketing materials, visual advertising, 
                  and sponsorship outreach that secured funding for 30+ annual events.
                </p>
                <p>
                  For Onepress TV, I managed the audiovisual content workflow for 5+ social media channels — 
                  YouTube, Instagram, TikTok, Facebook, and LinkedIn — producing 60+ videos per month with 
                  consistent visual standards. I also ran e-commerce sales of club merchandise at CLINT, 
                  handling orders and customer communication end-to-end. I speak English, Arabic, and French, 
                  an asset when working with international audiences and partners.
                </p>
              </div>
            </div>
            <StatsCounter />
          </GlassmorphicCard>
        </div>

        {/* Clients & Collaborations Section */}
        <ClientsGrid />

        {/* Experience Section - Moved before Skills */}
        <div className="about-section-item">
          <GradientText as="h2" gradient="accent" className="section-title fade-in">
            Experience & Education
          </GradientText>
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default About;
