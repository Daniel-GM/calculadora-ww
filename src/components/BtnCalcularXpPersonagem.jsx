const BtnCalcularXpPersonagem = () => {
  const handleClick = () => {
    const resultado = document.querySelector("#resultado-personagem")
    const resultadoTotal = document.querySelector("#resultado-xp-total")
    
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

    const xpExtra = parseInt(
      document.querySelectorAll("#xp-extra input")[0].value
    )
    const diaExtra = parseInt(
      document.querySelectorAll("#xp-extra input")[1].value
    )

    if (atual < previsto) {
      let xpNecessario = previsto - (atual + xp + (quantidadeCrystal * crystal) + (xpExtra * diaExtra))
      let dias = xpNecessario / xpDiario
      let xpMod = xpNecessario % xpDiario

      resultadoTotal.textContent = "XP total: " + xpNecessario

      if (xpMod > 0 && dias < 1) {
        resultado.textContent = xpMod + " XP"
      } else if (xpMod > 0) {
        resultado.textContent = Math.floor(dias) + " dias e " + xpMod + " XP"
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
