import { useState, useEffect } from 'react';

const BtnCalcularXpPersonagem = () => {
  const [loadedData, setLoadedData] = useState(null);

  const formatDate = (date) => {
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();

    return `${dia}/${mes}/${ano}`;
  };

  const calcularData = (dias) => {
    const data = document.querySelector("#data");
    const previsto = document.querySelectorAll(".module-div select")[1];
    const level = previsto.options[previsto.selectedIndex].textContent;
    const result = new Date();

    result.setDate(result.getDate() + Math.ceil(dias));
    data.textContent = `Data prevista para o level ${level} é ${formatDate(result)}`;
  };

  const handleClick = () => {
    const resultado = document.querySelector("#resultado-personagem");
    const resultadoTotal = document.querySelector("#resultado-xp-total");

    const atual = parseInt(document.querySelectorAll("#xp-personagem select")[0].value);
    const previsto = parseInt(document.querySelectorAll("#xp-personagem select")[1].value);
    const xp = parseInt(document.querySelectorAll("#xp-personagem input")[0].value);
    const quantidadeCrystal = parseInt(document.querySelectorAll("#xp-personagem input")[1].value);

    const xpExtra = parseInt(document.querySelectorAll("#xp-extra input")[0].value);
    const diaExtra = parseInt(document.querySelectorAll("#xp-extra input")[1].value);

    const xpCrystal = 450;
    const xpDiario = 3800;

    if (atual < previsto) {
      let xpNecessario = previsto - (atual + xp + (quantidadeCrystal * xpCrystal) + (xpExtra * diaExtra));
      let dias = xpNecessario / xpDiario;
      let xpMod = xpNecessario % xpDiario;

      resultadoTotal.textContent = "XP total: " + xpNecessario;

      if (xpMod > 0 && dias < 1) {
        resultado.textContent = xpMod + " XP";
      } else if (xpMod > 0) {
        resultado.textContent = Math.floor(dias) + " dias e " + xpMod + " XP";
      } else {
        resultado.textContent = Math.floor(dias) + " dias";
      }

      calcularData(dias);

      const storageCalc = {
        atual,
        previsto,
        xp,
        quantidadeCrystal,
        xpExtra,
        diaExtra,
        xpNecessario,
        dias: Math.floor(dias),
        xpMod,
        dataPrevista: formatDate(new Date(new Date().setDate(new Date().getDate() + Math.ceil(dias))))
      };

      localStorage.setItem('xpPersonagemData', JSON.stringify(storageCalc));
    } else {
      alert("O seu nivel deve ser menor que o nivel previsto!");
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem('xpPersonagemData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setLoadedData(parsedData);
      document.querySelectorAll("#xp-personagem select")[0].value = parsedData.atual;
      document.querySelectorAll("#xp-personagem select")[1].value = parsedData.previsto;
      document.querySelectorAll("#xp-personagem input")[0].value = parsedData.xp;
      document.querySelectorAll("#xp-personagem input")[1].value = parsedData.quantidadeCrystal;
      document.querySelectorAll("#xp-extra input")[0].value = parsedData.xpExtra;
      document.querySelectorAll("#xp-extra input")[1].value = parsedData.diaExtra;
      document.querySelector("#resultado-personagem").textContent = parsedData.dias > 0 ? `${parsedData.dias} dias e ${parsedData.xpMod} XP` : `${parsedData.xpMod} XP`;
      document.querySelector("#resultado-xp-total").textContent = "XP total: " + parsedData.xpNecessario;

      const levelPrevisto = document.querySelector('option[value="' + parsedData.previsto + '"]').text
      
      document.querySelector("#data").textContent = `Data prevista para o level ${levelPrevisto} é ${parsedData.dataPrevista}`;
    }
  }, []);

  return (
    <>
      <button onClick={handleClick}>Calcular</button>
    </>
  );
};

export default BtnCalcularXpPersonagem;
