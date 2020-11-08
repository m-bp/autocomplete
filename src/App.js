import { useEffect, useState } from 'react';
import Autocomplete from './components/Autocomplete';
import ErrorIcon from './components/ErrorIcon';
import LoadingIcon from './components/LoadingIcon';
import MagnifierIcon from './components/MagnifierIcon';
import inMemoryService from './services/inMemoryService';

const State = {
  LOADING: 1,
  READY: 2,
  NOT_FOUND: 3,
};

function App() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [state, setState] = useState(State.READY);

  useEffect(() => {
    // No point searching for nothing
    if (!query) {
      setSuggestions([]);
      return;
    }

    setState(State.LOADING);

    inMemoryService.search(query).then((results) => {
      setSuggestions(results);

      if (results.length) setState(State.READY);
      else setState(State.NOT_FOUND);
    });
  }, [query]);

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  const handleSelectSuggestion = (newQuery) => {
    setQuery(newQuery);
  };

  const icon = {
    [State.LOADING]: <LoadingIcon />,
    [State.READY]: <MagnifierIcon />,
    [State.NOT_FOUND]: <ErrorIcon />,
  }[state];

  return (
    <div className="app">
      <form autoComplete="off">
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
