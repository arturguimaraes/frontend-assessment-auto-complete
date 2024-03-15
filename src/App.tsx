import AutoComplete from './components/autoComplete/AutoComplete';
import { AutocompleteProvider } from './components/store/AutoCompleteContext';
import './App.css';

function App() {
  return (
    <AutocompleteProvider>
      <div className='container'>
        <AutoComplete />
      </div>
    </AutocompleteProvider>
  );
}

export default App;
