import React from 'react';
import { Product } from '../../utils/types';

interface Props {
  item: Product;
  search: string;
}

const ResultItem: React.FC<Props> = ({ item, search }) => {
  const highlightSearchTerm = (name: string, searchTerm: string) => {
    // Return early if the search term is empty or whitespace
    if (searchTerm.trim() === '') return name;

    const lowerCaseName = name.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const startIndex = lowerCaseName.indexOf(lowerCaseSearchTerm);

    // If the search term is not found, return the original name
    if (startIndex === -1) return name;

    // Splitting the name into three parts: before the match, the match, and after the match
    const beforeMatch = name.slice(0, startIndex);
    const match = name.slice(startIndex, startIndex + searchTerm.length);
    const afterMatch = name.slice(startIndex + searchTerm.length);

    // Highlighting the match
    return (
      <>
        {beforeMatch}
        <span className='auto-complete-result-item-highlight'>{match}</span>
        {afterMatch}
      </>
    );
  };

  return <div className='auto-complete-result-item'>{highlightSearchTerm(item.title, search)}</div>;
};

export default ResultItem;
