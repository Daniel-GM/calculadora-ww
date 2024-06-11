const BtnCalcularXpEcho = () => {

  const handleClick = () => {
    const levelAtual = parseInt(document.querySelectorAll("#xp-echo select")[0].value)
    const xpAtual = parseInt(document.querySelectorAll("#xp-echo input")[0].value)
    const levelEsperado = parseInt(document.querySelectorAll("#xp-echo select")[1].value)
    const resultEcho = document.querySelectorAll("#result-echo label")
    
    const xpNecessario = levelEsperado - (levelAtual + xpAtual)
    
    resultEcho[0].textContent = `XP necessario: ${xpNecessario}`
    
    
    
    let xpTotalNecessario = 0
    let recomendacao = Math.floor(xpNecessario/106950)
    resultEcho[5].textContent = `Echo +25: ${recomendacao}`
    xpTotalNecessario += recomendacao*106950
    
    recomendacao = xpNecessario%106950
    resultEcho[4].textContent = `Lendario: ${Math.floor(recomendacao/5000)}`
    xpTotalNecessario += Math.floor(recomendacao/5000)*5000
    
    recomendacao = recomendacao%5000
    resultEcho[3].textContent = `Epico: ${Math.floor(recomendacao/2000)}`
    xpTotalNecessario += Math.floor(recomendacao/2000)*2000
    
    recomendacao = recomendacao%2000
    resultEcho[2].textContent = `Raro: ${Math.floor(recomendacao/1000)}`
    xpTotalNecessario += Math.floor(recomendacao/1000)*1000
    
    recomendacao = recomendacao%1000
    resultEcho[1].textContent = `Comum: ${Math.ceil(recomendacao/500)}`
    xpTotalNecessario += Math.ceil(recomendacao/500)*500

    resultEcho[6].textContent = `XP total recomendado: ${xpTotalNecessario}`
    
  }

  return (
    <button onClick={handleClick}>Calcular</button>
  )
}

export default BtnCalcularXpEcho