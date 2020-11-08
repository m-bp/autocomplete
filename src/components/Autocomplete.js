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
      {suggestions &&
        suggestions.map((suggestion) => (
          <p>
            <button onClick={() => onSelectSuggestion(suggestion)}>
              {suggestion}
            </button>
          </p>
        ))}
    </div>
  );
}

export default Autocomplete;
