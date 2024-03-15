import { createContext, useContext, ReactNode } from 'react';
import { AutoCompleteContextType } from '../utils/types';
import useAutoCompleteAPI from '../hooks/useAutoCompleteAPI';
// import useAutoCompleteMock from '../../hooks/useAutoCompleteMock';

const AutocompleteContext = createContext<AutoCompleteContextType | undefined>(undefined);

export const useAutoComplete = () => {
  const context = useContext(AutocompleteContext);
  if (context === undefined) {
    throw new Error('useAutocomplete must be used within a AutocompleteProvider');
  }
  return context;
};

export const AutocompleteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // use this to fetch data from the actual API
  const { search, results, userIsTyping, isLoading, error, changeSearchHandler } =
    useAutoCompleteAPI();

  // use this to fetch data from mock and fake API delay
  // const { search, results, userIsTyping, isLoading, error, changeSearchHandler } = useAutoCompleteMock();

  return (
    <AutocompleteContext.Provider
      value={{ search, results, userIsTyping, isLoading, error, changeSearchHandler }}
    >
      {children}
    </AutocompleteContext.Provider>
  );
};
