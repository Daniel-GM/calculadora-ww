const BtnCalcularXpPersonagem = () => {
  const calcularData = (dias) => {
    const data = document.querySelector("#data")
    const previsto = document.querySelectorAll(".module-div select")[1]
    const level = previsto.options[previsto.selectedIndex].textContent
    const result = new Date()
    result.setDate(result.getDate() + Math.ceil(dias))
    data.textContent = "Data prevista para o level " + level + " é " +formatDate(result)

  }

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const handleClick = () => {
    const resultado = document.querySelector("#resultado-personagem")
    const resultadoTotal = document.querySelector("#resultado-xp-total")
    const atual = parseInt(document.querySelectorAll(".module-div select")[0].value)
    const previsto = parseInt(document.querySelectorAll(".module-div select")[1].value)
    const xp = parseInt(document.querySelectorAll(".module-div input")[0].value)
    const quantidadeCrystal = parseInt(document.querySelectorAll(".module-div input")[1].value)
    const xpExtra = parseInt(document.querySelectorAll("#xp-extra input")[0].value)
    const diaExtra = parseInt(document.querySelectorAll("#xp-extra input")[1].value)
    const crystal = 450
    const xpDiario = 3800

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
      calcularData(dias)
    } else {
      alert("O seu nivel deve ser menor que o nivel previsto!")
    }
  }

  return (
    <button onClick={handleClick}>Calcular</button>
  )
}

export default BtnCalcularXpPersonagem
