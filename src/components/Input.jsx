const Input = ({ label, defaultValue, type }) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} defaultValue={defaultValue} />
    </>
  )
}

export default Input