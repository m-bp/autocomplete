import { useRef } from 'react';

function Autocomplete({
  label,
  placeholder,
  icon,
  value,
  suggestions,
  onChange,
  onSelectSuggestion,
}) {
  const listElement = useRef(null);

  const bottomSpace = 30;
  const listY = listElement.current?.getBoundingClientRect().y;
  const maxHeight = window.innerHeight - listY - bottomSpace || null;

  return (
    <div className="autocomplete">
      <label className="autocomplete__label" htmlFor="autocomplete">
        {label}
      </label>

      <div className="autocomplete__outer">
        <div className="autocomplete__inner">
          <input
            className="autocomplete__input"
            id="autocomplete"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {icon && <span className="autocomplete__icon">{icon}</span>}
        </div>

        {suggestions && (
          <ul
            className="autocomplete__suggestions suggestions"
            style={{ maxHeight }}
            ref={listElement}
          >
            {suggestions.map((suggestion) => (
              <li className="suggestions__item">
                <button
                  className="suggestions__inner"
                  onClick={() => onSelectSuggestion(suggestion)}
                  type="button"
                >
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Autocomplete;
