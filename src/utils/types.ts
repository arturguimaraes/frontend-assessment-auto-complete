export interface Product {
  id: number;
  title: string;
}

export interface AutoCompleteContextType {
  search: string;
  results: Product[];
  userIsTyping: boolean;
  isLoading: boolean;
  error: boolean;
  changeSearchHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
