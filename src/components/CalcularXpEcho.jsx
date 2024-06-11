import BtnCalcularXpEcho from "./BtnCalcularXpEcho"
import Input from "./Input"
import Select from "./Select"

const gerarOpcoes = () => {
  const levels = Array.from({ length: 26 }, (_, i) => i )
  const xpValues = [
    0, 400, 1000, 1900, 3000, 4400, 6100, 8100, 10500, 13300, 
    16500, 20100, 24200, 28800, 33900, 39600, 46000, 53100, 60900, 69600, 
    79100, 89600, 101100, 113700, 127500, 142600,
  ]

  return levels.map((level, index) => ({
    value: xpValues[index],
    label: level,
  }))
}

const CalcularXpEcho = () => {
    const options = gerarOpcoes()

  return (
    <div className="module-div" id="xp-echo">
      <Select label={"Level atual"} options={options} />
      <Input label={"Xp atual"} type={"number"} defaultValue={0} />
      <Select label={"Level esperado"} options={options} />

      <BtnCalcularXpEcho />

      <div className="module-div" id="result-echo">
        <label id="xp-echo-total"></label>
        <p>Recomendação</p>
        <label></label>
        <label></label>
        <label></label>
        <label></label>
        <label></label>
        <label></label>
      </div>
    </div>
  )
}

export default CalcularXpEcho