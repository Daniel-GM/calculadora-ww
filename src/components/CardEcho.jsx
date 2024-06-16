import { useState } from "react"
import "./CardEcho.css"
import DivEchoSelect from "./DivEchoSelect"
import DivSubStatus from "./DivSubStatus"

const CardEcho = () => {
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
      <DivEchoSelect />
      {eficiencias.map((_, index) => (
        <DivSubStatus key={index} index={index} updateEficiencia={updateEficiencia} />
      ))}
    </div>
  )
}

export default CardEcho
