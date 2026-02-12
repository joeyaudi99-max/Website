import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';
import StatsCounter from '../components/about/StatsCounter';
import Timeline from '../components/about/Timeline';
import GlassmorphicCard from '../components/common/GlassmorphicCard';
import GradientText from '../components/common/GradientText';
import styles from './About.module.css';

const About: React.FC = () => {
  useScrollAnimation();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joey Audi",
    "jobTitle": "Audiovisual Technician & Event Coordinator",
    "description": "Based in Tampere, Finland. Over 4 years of experience in event coordination, video production, and audiovisual work. Specialized in cinematography, live event production, and community engagement.",
    "url": "https://joeyaudi.com/about",
    "image": "https://joeyaudi.com/Media/Profile.jpg",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Tampere University of Applied Sciences"
    },
    "knowsAbout": [
      "Video Editing",
      "Cinematography",
      "3D Animation",
      "Event Coordination",
      "Live Production",
      "Audio Engineering"
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
        description="Learn about Joey Audi's journey in audiovisual technology and event coordination. Over 4 years of experience in video production, cinematography, and live event management."
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
                  I work in live events and AV tech. My background is a mix of hands-on technical work and 
                  people management. At Nokia Arena's Paidia gaming space, I kept 40 gaming PCs running (using 
                  GGLeap for optimization), helped visitors with VR setups and console troubleshooting, and 
                  made graphics and videos in Photoshop, Illustrator, and Premiere. I've also coordinated 
                  international student events for up to 600 people.
                </p>
                <p>
                  For Onepress TV, I edited 60+ videos every month for their YouTube, Instagram, TikTok, Facebook, 
                  and LinkedIn channels. As Vice-Chairman at CLINT, I brought in €9,000 in sponsorships and ran 
                  30+ events annually. Earlier, I spent three years as a moderator for an online game with 3,000+ 
                  daily players. I speak English, Arabic, and French, which helps a lot when working with Tampere's 
                  international students.
                </p>
              </div>
            </div>
            <StatsCounter />
          </GlassmorphicCard>
        </div>

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
