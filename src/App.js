import { useEffect, useState } from 'react';
import Autocomplete from './components/Autocomplete';
import inMemoryService from './services/inMemoryService';

function App() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // No point searching for nothing
    if (!query) {
      setSuggestions([]);
      return;
    }

    inMemoryService.search(query).then((results) => {
      setSuggestions(results);
    });
  }, [query]);

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  const handleSelectSuggestion = (newQuery) => {
    setQuery(newQuery);
  };

  const icon = 'X';

  return (
    <div className="app">
      <form>
        <Autocomplete
          label="Encuentra profesionales de confianza"
          placeholder="Qué necesitas..."
          value={query}
          onChange={handleChange}
          suggestions={suggestions}
          onSelectSuggestion={handleSelectSuggestion}
          icon={icon}
        />
      </form>
    </div>
  );
}

export default App;
