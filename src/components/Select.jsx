const Select = ({ label, options }) => {
  return (
    <>
      <label>{label}</label>
      <select>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}

export default Select
