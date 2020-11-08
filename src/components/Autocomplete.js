function Autocomplete({
  label,
  placeholder,
  onChange,
  value,
  icon,
  suggestions,
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
      {suggestions && suggestions.map((suggestion) => <p>{suggestion}</p>)}
    </div>
  );
}

export default Autocomplete;
