import { useState, useEffect } from 'react';

function useParentStorage(parentId) {
  const [data, setData] = useState(() => {
    try {
      const storedData = JSON.parse(localStorage.getItem(`eficiencia-${parentId}`));
      return storedData || [];
    } catch (error) {
      console.error('Error parsing localStorage data:', error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(`eficiencia-${parentId}`, JSON.stringify(data));
  }, [data, parentId]); // Update localStorage on data or parentId change

  const addDiv = (newDiv) => setData([...data, newDiv]);
  const removeDiv = (index) => setData(data.filter((_, i) => i !== index)); // Remove by index

  return { data, addDiv, removeDiv };
}

export default useParentStorage;
