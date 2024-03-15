import Result from '../result/Result';
import Input from '../ui/Input';

const AutoComplete: React.FC<{}> = () => {
  return (
    <div className='auto-complete-container'>
      <div className='title-header'>Autocomplete</div>
      <div className='auto-complete-container-inner'>
        <Input id='search' placeholder='Search...' />
        <Result />
      </div>
    </div>
  );
};

export default AutoComplete;
