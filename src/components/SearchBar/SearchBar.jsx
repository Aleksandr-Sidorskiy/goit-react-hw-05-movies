import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Container from 'components/Container';
import { FormSearch, InputSearch, ButtonSubmit } from './SearchBar.styled';
import { FaSearch } from 'react-icons/fa';


function SearchBar() {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const queryValue = searchQuery.get('query') ?? '';
  const location = useLocation();
  const navigate = useNavigate();

  function handleInput(e) {
    if (e.currentTarget.value.toLowerCase() !== searchQuery)
      setSearchQuery({ query: e.currentTarget.value.toLowerCase() });
  };

  function onSubmitForm(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;
    
    if (queryValue.trim() === '') {
      console.log('ERROR');
      return;
    }
      navigate({
        ...location,
        search: `query=${value}`,
      });
   
    
  
  }

  return (
    <Container>
      <FormSearch onSubmit={onSubmitForm}>
        <InputSearch
          type="text"
          name="query" 
          value={queryValue}
          onChange={handleInput}
          />
        <ButtonSubmit type="submit">
          <FaSearch />
        </ButtonSubmit>
      </FormSearch>
    </Container>
  );
}

export default SearchBar;
