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
                  I am an audiovisual technician and event coordinator with a passion for community-driven experiences. 
                  From arena-scale gaming spaces to international student events and online communities, I create 
                  environments where people feel welcome, engaged, and inspired.
                </p>
                <p>
                  My work blends technical expertise in cinematography, live event tech, and editing with strong 
                  communication and customer support. I enjoy collaborating with diverse teams, mentoring guests on AV 
                  tools and VR, and turning ideas into memorable, inclusive events.
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
