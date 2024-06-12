import BtnCalcularWaveplate from "./BtnCalcularWaveplate"
import Input from "./Input"

const CalcularWaveplate = () => {
  return (
    <div className="module-div" id="calc-waveplate">
        <Input label={"Waveplate atual"} type={"number"} defaultValue={0}/>
        <BtnCalcularWaveplate />
        <label></label>
    </div>
  )
}

export default CalcularWaveplate