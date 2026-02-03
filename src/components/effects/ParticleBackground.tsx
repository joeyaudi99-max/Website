import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import styles from './ParticleBackground.module.css';

interface ParticleBackgroundProps {
  density?: number;
  color?: string;
  opacity?: number;
  speed?: number;
  links?: boolean;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = React.memo(({
  density = 80,
  color = '#667eea',
  opacity = 0.5,
  speed = 1,
  links = true,
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: {
                enable: true,
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: color,
            },
            links: links
              ? {
                  color: color,
                  distance: 150,
                  enable: true,
                  opacity: opacity * 0.4,
                  width: 1,
                }
              : {
                  enable: false,
                },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: speed,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: density,
            },
            opacity: {
              value: opacity,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }), [color, opacity, speed, density, links]);

  if (!init) {
    return null;
  }

  return (
    <div className={styles.particleContainer}>
      <Particles
        id="tsparticles"
        options={options as any}
      />
    </div>
  );
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;
