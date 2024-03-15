import { useState, useEffect } from 'react';
import mockData from '../data/data.json';
import { Product, AutoCompleteContextType } from '../utils/types';
import { MOCK_API_DELAY, USER_TYPING_TIMEOUT } from '../utils/variables';

const useAutoCompleteMock = (): AutoCompleteContextType => {
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<Product[]>([]);
  const [userIsTyping, setUserIsTyping] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const error = false;

  const changeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setUserIsTyping(true);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setUserIsTyping(false);

      if (search.trim() === '') {
        setResults([]);
        setIsLoading(false);
        return;
      }

      console.log(`Search triggered for "${search}"`);
      setIsLoading(true);

      const filterData = async () => {
        // Simulate asynchronous operation
        const filteredResults = await new Promise<Product[]>((resolve) => {
          setTimeout(() => {
            const products = mockData.products;
            const filtered = products
              .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
              .sort((p1, p2) => p1.title.localeCompare(p2.title));
            resolve(filtered);
          }, MOCK_API_DELAY); // Simulate delay
        });

        setResults(filteredResults);
        setIsLoading(false);
      };

      filterData();
    }, USER_TYPING_TIMEOUT); // User typing timeout

    // Cleanup function to clear the timeout if the effect is called again before the 2s delay
    return () => clearTimeout(handler);
  }, [search]);

  return { search, results, userIsTyping, isLoading, error, changeSearchHandler };
};

export default useAutoCompleteMock;
