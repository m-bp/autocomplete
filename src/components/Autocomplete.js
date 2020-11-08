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
    <div>
      <label htmlFor="autocomplete">{label}</label>

      <div>
        <input
          id="autocomplete"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {icon && <span>{icon}</span>}
      </div>

      {suggestions && (
        <ul>
          {suggestions.map((suggestion) => (
            <li>
              <button
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
  );
}

export default Autocomplete;
