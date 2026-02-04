import React from 'react';
import styles from './FilterButtons.module.css';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterButtonsProps {
  options: FilterOption[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  options,
  activeFilter,
  onFilterChange
}) => {
  return (
    <div className={styles.portfolioFilter}>
      {options.map(option => (
        <button
          key={option.value}
          className={`${styles.filterBtn} ${activeFilter === option.value ? styles.active : ''}`}
          onClick={() => onFilterChange(option.value)}
          data-filter={option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
