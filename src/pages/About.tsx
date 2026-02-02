import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useFilter } from '../hooks/useFilter';
import FilterButtons from '../components/common/FilterButtons';
import StatsCounter from '../components/about/StatsCounter';
import SkillsWeb from '../components/about/SkillsWeb';
import Timeline from '../components/about/Timeline';
import { projects, aboutFilters } from '../data/aboutData';
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
            <div className={`${styles.aboutContent} fade-in about-section-item`}>
              <div className={styles.aboutImage}>
                <img 
                  src="/Media/Profile.jpg" 
                  alt="Joey Audi - Audiovisual Professional" 
                />
              </div>
              <div className={styles.aboutText}>
                <p>
                  I'm an audiovisual technician and event coordinator who thrives in the organized chaos of 
                  live events. I've managed everything from 600-person international student gatherings to 
                  daily operations in Nokia Arena's gaming space, Paidia—where I optimized 40 high-end PCs, 
                  guided guests through VR setups, and created visual content with Adobe Creative Suite.
                </p>
                <p>
                  My background spans technical AV systems, video production, and community management. I've 
                  edited 60+ videos monthly for Onepress TV's social channels, secured €9,000 in event 
                  sponsorships as CLINT's Vice-Chairman, and spent three years moderating a 3,000-player 
                  online gaming community. I speak English, Arabic, and French, which has been invaluable 
                  working with Tampere's international student population.
                </p>
              </div>
            </div>

            <StatsCounter />
          </div>
        )}

        {/* Skills Section */}
        {shouldShowSection('skills') && (
          <div key={`skills-${activeFilter}`} className="about-section-item">
            <h2 className="section-title fade-in">Skills</h2>
            <div className="fade-in" style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Event Coordination & Live Tech:</strong> Coordinated 30+ annual events (up to 600 attendees) and operated AV systems at Nokia Arena
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Video Production & Editing:</strong> Delivered 60+ edited videos monthly across 5 platforms for Onepress TV
              </p>
              <p>
                <strong>Graphic Design & 3D:</strong> Created event branding, promotional materials, and 3D environments for student events
              </p>
            </div>
            <SkillsWeb />
          </div>
        )}

        {/* Work Section */}
        {shouldShowSection('work') && (
          <div key={`work-${activeFilter}`} className="about-section-item">
            <h2 className="section-title fade-in">Selected Work</h2>
            <div className={styles.projectsGrid}>
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`${styles.projectCard} ${index === 0 ? styles.featured : ''} fade-in ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
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
                        See Details on LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {shouldShowSection('experience') && (
          <div key={`experience-${activeFilter}`} className="about-section-item">
            <h2 className="section-title fade-in">Experience & Education</h2>
            <Timeline />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
