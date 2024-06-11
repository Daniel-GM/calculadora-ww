import React, { useState } from 'react'
import BtnCalcularXpPersonagem from './BtnCalcularXpPersonagem'
import Select from "./Select"
import Input from './Input';

const gerarOpcoes = () => {
  const levels = Array.from({ length: 80 }, (_, i) => i + 1);
  const xpValues = [
    0, 400, 900, 1500, 2600, 3800, 5100, 6500, 8000, 9600,
    11200, 12850, 14500, 16200, 17900, 19600, 21350, 23100, 24900, 26700,
    29000, 31400, 33900, 36400, 38900, 41600, 44500, 47500, 50700, 54100,
    60600, 67300, 74100, 81300, 88900, 96900, 105300, 114300, 123900, 133900,
    144100, 154500, 165100, 175900, 187100, 198700, 210700, 223100, 235900, 248900,
    262000, 275300, 288800, 302500, 316400, 330500, 344800, 359300, 374000, 389700,
    411300, 433200, 455500, 478500, 502300, 527000, 553100, 580600, 610000, 639400,
    671800, 704600, 738100, 772600, 808200, 845400, 884500, 925800, 969900, 1017200
  ]

  return levels.map((level, index) => ({
    value: xpValues[index],
    label: level
  }))
}

const CalcularXpPersonagem = () => {
  const options = gerarOpcoes()

  return (
    <div className="module-div">
      <Select label="Level atual" options={options} />

      <Input label={"Xp atual"} type={"number"} defaultValue={0} />

      <Input label={"Crystal Solvent (resina)"} type={"number"} defaultValue={0} />

      <Select label="Level previsto" options={options} />

      <div className='module-div' id="xp-extra">
        <Input label={"XP extra por dia"} type={"number"} defaultValue={0} />
        <Input label={"Dias de xp extra"} type={"number"} defaultValue={0} />
      </div>

      <BtnCalcularXpPersonagem />

      <label id="resultado-xp-total"></label>
      <label id="resultado-personagem"></label>
    </div>
  )
}

export default CalcularXpPersonagem
