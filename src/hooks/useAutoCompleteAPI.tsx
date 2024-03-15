import { useEffect, useState } from 'react';
import { Product, AutoCompleteContextType } from '../utils/types';
import { DUMMY_PRODUCTS_API_URL, USER_TYPING_TIMEOUT } from '../utils/variables';

const useAutoCompleteAPI = (): AutoCompleteContextType => {
  const [search, setSearch] = useState<string>('');
  const [results, setResults] = useState<Product[]>([]);
  const [userIsTyping, setUserIsTyping] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const changeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setUserIsTyping(true);
    setError(false);
  };

  useEffect(() => {
    const handler = setTimeout(async () => {
      setUserIsTyping(false);

      if (search.trim() === '') {
        setResults([]);
        setIsLoading(false);
        setError(false);
        return;
      }

      console.log(`Search triggered for "${search}"`);
      setIsLoading(true);
      setError(false);

      try {
        const response = await fetch(`${DUMMY_PRODUCTS_API_URL}/search?q=${search}`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setResults(data.products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError(true);
        setResults([]);
      }

      setIsLoading(false);
    }, USER_TYPING_TIMEOUT);

    return () => clearTimeout(handler);
  }, [search]);

  return { search, results, userIsTyping, isLoading, error, changeSearchHandler };
};

export default useAutoCompleteAPI;
