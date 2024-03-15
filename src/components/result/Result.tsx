import { useAutoComplete } from '../store/AutoCompleteContext';
import ResultItem from './ResultItem';

const Result: React.FC<{}> = () => {
  // Get states from ContextAPI
  const { search, results, userIsTyping, isLoading, error } = useAutoComplete();

  // No search, show nothing
  if (search.trim() === '') {
    return null;
  }

  // If API error, display message to user
  if (error) {
    return (
      <div className='auto-complete-result-error'>An error occurred. Please try again later.</div>
    );
  }

  const displayResults = () => {
    if (userIsTyping) {
      return <div className='auto-complete-result-item'>Typing...</div>;
    }

    if (isLoading) {
      return <div className='auto-complete-result-item'>Loading...</div>;
    }

    if (search.trim() !== '' && results.length === 0) {
      return <div className='auto-complete-result-item'>No results. Type something else.</div>;
    }

    return results.map((result, index) => (
      <ResultItem key={`${index}_${result.id}`} item={result} search={search} />
    ));
  };

  return <div className='auto-complete-result'>{displayResults()}</div>;
};

export default Result;
