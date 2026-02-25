import React from 'react';
import { motion } from 'framer-motion';
import styles from './ClientsGrid.module.css';

interface Client {
  name: string;
  logo: string;
  noInvert?: boolean;
  whiteOnly?: boolean;    // pure white logo on transparent — needs darkening in light mode
  hasWhiteElements?: boolean; // mixed logo with white parts — needs drop-shadow in light mode
}

const clients: Client[] = [
  { name: 'Nokia Arena', logo: '/Media/Logos/nokia_arena.png', whiteOnly: true },
  { name: 'Tampere University', logo: '/Media/Logos/tampere_university.png' },
  { name: 'Onepress TV', logo: '/Media/Logos/onepress_tv.jpg', noInvert: true },
  { name: 'CLINT', logo: '/Media/Logos/clint.png', noInvert: true },
  { name: 'GGLeap', logo: '/Media/Logos/ggleap.png', hasWhiteElements: true },
];

const ClientsGrid: React.FC = () => {
  return (
    <div className={styles.clientsSection}>
      <motion.h3
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        Clients & Collaborations
      </motion.h3>
      <motion.div
        className={styles.clientsGrid}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {clients.map((client, index) => (
          <motion.div
            key={client.name}
            className={styles.clientCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -4 }}
          >
            <img 
              src={client.logo} 
              alt={`${client.name} logo`}
              className={`${styles.clientLogo} ${client.noInvert ? styles.clientLogoNatural : ''} ${client.whiteOnly ? styles.clientLogoWhiteOnly : ''} ${client.hasWhiteElements ? styles.clientLogoHasWhite : ''}`}
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClientsGrid;
