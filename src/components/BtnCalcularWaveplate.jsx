const CalcularWaveplate = (hora, minuto) => {
  const agora = new Date()
  
  const horaAtual = agora.getHours()
  const minutoAtual = agora.getMinutes()
  
  let minutoCalculado = minutoAtual + minuto
  let horaCalculada = horaAtual + hora

  if (minutoCalculado >= 60) {
    horaCalculada += Math.floor(minutoCalculado / 60)
    minutoCalculado = minutoCalculado % 60
  }

  horaCalculada = horaCalculada % 24

  const horaFormatada = horaCalculada.toString().padStart(2, '0')
  const minutoFormatado = minutoCalculado.toString().padStart(2, '0')

  return `Waveplate vai estar cheia às ${horaFormatada}:${minutoFormatado}`
}
  
const handleClick = () => {
  const label = document.querySelectorAll("#calc-waveplate label")[1]
  const waveplate = parseInt(document.querySelector("#calc-waveplate input").value)

  const calcWaveplate = 240 - waveplate
  const horas = Math.floor(calcWaveplate/10)
  const minutos = (calcWaveplate%10)/10*60

  label.textContent = CalcularWaveplate(horas, minutos)
}

const BtnCalcularWaveplate = () => {

  return (
    <button onClick={handleClick}>Calcular</button>
  )
}

export default BtnCalcularWaveplate