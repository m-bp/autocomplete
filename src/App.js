import { useEffect, useState } from 'react';
import Autocomplete from './components/Autocomplete';
import ErrorIcon from './components/ErrorIcon';
import LoadingIcon from './components/LoadingIcon';
import MagnifierIcon from './components/MagnifierIcon';
import movieService from './services/movieService';

const State = {
  LOADING: 1,
  READY: 2,
  NOT_FOUND: 3,
};

function App() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [state, setState] = useState(State.READY);
  const [chosenOption, setChosenOption] = useState();

  useEffect(() => {
    // No point searching for nothing
    if (!query) {
      setSuggestions([]);
      return;
    }

    setState(State.LOADING);

    movieService.search(query).then((results) => {
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
    setChosenOption(newQuery);
  };

  const handleBackClick = () => {
    setChosenOption('');
    setQuery('');
  };

  const icon = {
    [State.LOADING]: <LoadingIcon />,
    [State.READY]: <MagnifierIcon />,
    [State.NOT_FOUND]: <ErrorIcon />,
  }[state];

  if (chosenOption) {
    return (
      <div className="app">
        <p>
          Has seleccionado: <em>{chosenOption}</em>
        </p>
        <button onClick={handleBackClick}>Go back</button>
      </div>
    );
  }

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
          renderSuggestion={(suggestion) => (
            <li
              className="suggestions__item"
              key={suggestion.imdbID || suggestion}
            >
              <button
                className="suggestions__inner"
                onClick={() => handleSelectSuggestion(suggestion.Title)}
                type="button"
              >
                {suggestion.Title || suggestion}
              </button>
            </li>
          )}
        />
      </form>
    </div>
  );
}

export default App;
