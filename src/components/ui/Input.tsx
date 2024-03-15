import { useAutoComplete } from '../../store/AutoCompleteContext';

interface Props {
  id: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({ id, placeholder = '' }) => {
  const { search, changeSearchHandler } = useAutoComplete();

  return (
    <div className='auto-complete-input-container'>
      <input
        className='auto-complete-input'
        id={id}
        value={search}
        onChange={changeSearchHandler}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
