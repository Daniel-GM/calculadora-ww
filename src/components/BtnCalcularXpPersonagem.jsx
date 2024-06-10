const BtnCalcularXpPersonagem = () => {
  const handleClick = () => {
    const resultado = document.querySelector("#resultado-personagem")
    
    const atual = parseInt(
      document.querySelectorAll(".module-div select")[0].value
    )
    const previsto = parseInt(
      document.querySelectorAll(".module-div select")[1].value
    )
    const xp = parseInt(
      document.querySelectorAll(".module-div input")[0].value
    )
    const quantidadeCrystal = parseInt(
      document.querySelectorAll(".module-div input")[1].value
    )
    const crystal = 450
    const xpDiario = 3800


    if (atual < previsto) {
      let xpNecessario = previsto - (atual + xp + (quantidadeCrystal * crystal))
      let dias = xpNecessario / xpDiario
      let xpExtra = xpNecessario % xpDiario

      if (xpExtra > 0 && dias < 1) {
        resultado.textContent = xpExtra + " XP"
      } else if (xpExtra > 0) {
        resultado.textContent = Math.floor(dias) + " dias e " + xpExtra + " XP"
      } else {
        resultado.textContent = Math.floor(dias) + " dias"
      }
    } else {
      alert("O seu nivel deve ser menor que o nivel previsto!")
    }
  }

  return (
    <button onClick={handleClick}>Calcular</button>
  )
}

export default BtnCalcularXpPersonagem
