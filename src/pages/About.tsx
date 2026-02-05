import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useFilter } from '../hooks/useFilter';
import FilterButtons from '../components/common/FilterButtons';
import StatsCounter from '../components/about/StatsCounter';
import SkillBadge from '../components/about/SkillBadge';
import Timeline from '../components/about/Timeline';
import GlassmorphicCard from '../components/common/GlassmorphicCard';
import GradientText from '../components/common/GradientText';
import { projects, aboutFilters, skillsWithLevels } from '../data/aboutData';
import styles from './About.module.css';

const About: React.FC = () => {
  useScrollAnimation();

  // Use 'all' as initial filter to show all sections
  const { activeFilter, setActiveFilter } = useFilter([], 'all');

  const shouldShowSection = (category: string) => {
    return activeFilter === 'all' || activeFilter === category;
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className="section-title fade-in">About Me</h1>
        
        <FilterButtons
          options={aboutFilters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Overview Section */}
        {shouldShowSection('overview') && (
          <div key={`overview-${activeFilter}`}>
            <GlassmorphicCard 
              className={`${styles.aboutContent} fade-in about-section-item`}
              hover={false}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
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
            </GlassmorphicCard>

            <StatsCounter />
          </div>
        )}

        {/* Skills Section */}
        {shouldShowSection('skills') && (
          <div key={`skills-${activeFilter}`} className="about-section-item">
            <GradientText as="h2" gradient="primary" className="section-title fade-in">
              Skills & Expertise
            </GradientText>
            <div className="fade-in" style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem', textAlign: 'center' }}>
              <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
                <strong>Event Coordination & Live Tech:</strong> Coordinated 30+ annual events (up to 600 attendees) and operated professional AV systems at Nokia Arena.
              </p>
              <p style={{ marginBottom: '1rem', opacity: 0.9 }}>
                <strong>Video Production & Editing:</strong> Delivered 60+ edited videos monthly across five social platforms for Onepress TV (YouTube, Instagram, TikTok, Facebook, LinkedIn).
              </p>
              <p style={{ opacity: 0.9 }}>
                <strong>Graphic Design & 3D:</strong> I create event branding, promo materials, and 3D renders for student events.
              </p>
            </div>
            
            {/* Technical Skills */}
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle} style={{ color: 'var(--accent-cyan)' }}>
                Technical Skills
              </h3>
              <div className={styles.skillsGrid}>
                {skillsWithLevels
                  .filter(skill => skill.category === 'technical')
                  .map((skill, index) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      category={skill.category}
                      index={index}
                    />
                  ))}
              </div>
            </div>

            {/* Creative Skills */}
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle} style={{ color: 'var(--accent-pink)' }}>
                Creative Skills
              </h3>
              <div className={styles.skillsGrid}>
                {skillsWithLevels
                  .filter(skill => skill.category === 'creative')
                  .map((skill, index) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      category={skill.category}
                      index={index}
                    />
                  ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className={styles.skillCategory}>
              <h3 className={styles.categoryTitle} style={{ color: 'var(--accent-purple)' }}>
                Soft Skills
              </h3>
              <div className={styles.skillsGrid}>
                {skillsWithLevels
                  .filter(skill => skill.category === 'soft')
                  .map((skill, index) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      category={skill.category}
                      index={index}
                    />
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Work Section */}
        {shouldShowSection('work') && (
          <div key={`work-${activeFilter}`} className="about-section-item">
            <GradientText as="h2" gradient="secondary" className="section-title fade-in">
              Selected Work
            </GradientText>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <GlassmorphicCard
                  key={project.id} 
                  className={`${styles.projectCard} ${index === 0 ? styles.featured : ''} fade-in ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
                  hover={true}
                  gradient={index === 0 ? 'primary' : 'none'}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <div className={styles.projectImage}>{project.image}</div>
                  <div className={styles.projectInfo}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.projectTech}>
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className={styles.techTag}>{tag}</span>
                      ))}
                    </div>
                    <div className={styles.projectLinks}>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        See Details on LinkedIn →
                      </a>
                    </div>
                  </div>
                </GlassmorphicCard>
              ))}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {shouldShowSection('experience') && (
          <div key={`experience-${activeFilter}`} className="about-section-item">
            <GradientText as="h2" gradient="accent" className="section-title fade-in">
              Experience & Education
            </GradientText>
            <Timeline />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
