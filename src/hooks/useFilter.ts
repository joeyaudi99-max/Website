import { useState, useEffect } from 'react';

export const useFilter = <T extends { category?: string; categories?: string }>(
  items: T[],
  initialFilter: string = 'all'
) => {
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter(item => {
          const categories = item.category || item.categories || '';
          // Split by comma and check if any category matches
          const categoryArray = categories.split(',').map(c => c.trim());
          return categoryArray.includes(activeFilter);
        })
      );
    }
  }, [activeFilter, items]);

  return { activeFilter, setActiveFilter, filteredItems };
};
