import { useState, useId } from "react"
import "./CardEcho.css"
import DivEchoSelect from "./DivEchoSelect"
import DivSubStatus from "./DivSubStatus"

const CardEcho = ({ indexPai }) => {
  const idCard = useId();

  const [eficiencias, setEficiencias] = useState(Array(5).fill(0))

  const updateEficiencia = (index, value) => {
    const newEficiencias = [...eficiencias]
    newEficiencias[index] = value
    setEficiencias(newEficiencias)
  }

  const calculateScore = () => {
    const total = eficiencias.reduce((acc, val) => acc + val, 0)
    const average = total / eficiencias.length
    const clampedAverage = Math.max(0, Math.min(average, 100))
    return clampedAverage.toFixed(1)
  }

  return (
    <div className="cards-echo">
      <h4 className="score">{calculateScore()}</h4>
      <DivEchoSelect indexPai = {indexPai} />
      {eficiencias.map((_, index) => (
        <DivSubStatus key={index} index={index} updateEficiencia={updateEficiencia} indexPai = {indexPai} idCard={idCard}/>
      ))}
    </div>
  )
}

export default CardEcho
