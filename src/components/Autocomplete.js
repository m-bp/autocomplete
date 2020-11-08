function Autocomplete({
  label,
  placeholder,
  icon,
  value,
  suggestions,
  onChange,
  onSelectSuggestion,
}) {
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
          <ul className="autocomplete__suggestions suggestions">
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
