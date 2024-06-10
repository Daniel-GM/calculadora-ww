import React, { useState } from 'react'
import Select from "./Select"
import BtnCalcularXpPersonagem from './BtnCalcularXpPersonagem'

const CalcularXpPersonagem = () => {
  const [selectedOption, setSelectedOption] = useState(0)

  const options = [
    {value: "0",label: "1"},
    {value: "400",label: "2"},
    {value: "900",label: "3"},
    {value: "1500",label: "4"},
    {value: "2600",label: "5"},
    {value: "3800",label: "6"},
    {value: "5100",label: "7"},
    {value: "6500",label: "8"},
    {value: "8000",label: "9"},
    {value: "9600",label: "10"},

    {value: "11200",label: "11"},
    {value: "12850",label: "12"},
    {value: "14500",label: "13"},
    {value: "16200",label: "14"},
    {value: "17900",label: "15"},
    {value: "19600",label: "16"},
    {value: "21350",label: "17"},
    {value: "23100",label: "18"},
    {value: "24900",label: "19"},
    {value: "26700",label: "20"},
    
    {value: "29000",label: "21"},
    {value: "31400",label: "22"},
    {value: "33900",label: "23"},
    {value: "36400",label: "24"},
    {value: "38900",label: "25"},
    {value: "41600",label: "26"},
    {value: "44500",label: "27"},
    {value: "47500",label: "28"},
    {value: "50700",label: "29"},
    {value: "54100",label: "30"},

    {value: "60600",label: "31"},
    {value: "67300",label: "32"},
    {value: "74100",label: "33"},
    {value: "81300",label: "34"},
    {value: "88900",label: "35"},
    {value: "96900",label: "36"},
    {value: "105300",label: "37"},
    {value: "114300",label: "38"},
    {value: "123900",label: "39"},
    {value: "133900",label: "40"},

    {value: "144100",label: "41"},
    {value: "154500",label: "42"},
    {value: "165100",label: "43"},
    {value: "175900",label: "44"},
    {value: "187100",label: "45"},
    {value: "198700",label: "46"},
    {value: "210700",label: "47"},
    {value: "223100",label: "48"},
    {value: "235900",label: "49"},
    {value: "248900",label: "50"},

    {value: "262000",label: "51"},
    {value: "275300",label: "52"},
    {value: "288800",label: "53"},
    {value: "302500",label: "54"},
    {value: "316400",label: "55"},
    {value: "330500",label: "56"},
    {value: "344800",label: "57"},
    {value: "359300",label: "58"},
    {value: "374000",label: "59"},
    {value: "389700",label: "60"},

    {value: "411300",label: "61"},
    {value: "433200",label: "62"},
    {value: "455500",label: "63"},
    {value: "478500",label: "64"},
    {value: "502300",label: "65"},
    {value: "527000",label: "66"},
    {value: "553100",label: "67"},
    {value: "580600",label: "68"},
    {value: "610000",label: "69"},
    {value: "639400",label: "70"},

    {value: "671800",label: "71"},
    {value: "704600",label: "72"},
    {value: "738100",label: "73"},
    {value: "772600",label: "74"},
    {value: "808200",label: "75"},
    {value: "845400",label: "76"},
    {value: "884500",label: "77"},
    {value: "925800",label: "78"},
    {value: "969900",label: "79"},
    {value: "1017200",label: "80"},
  ]

  return (
    <div className="module-div">
      <label>Level atual</label>
      <Select options={options}/>
      
      <label>Xp atual</label>
      <input type="number" defaultValue={0} />
      
      <label>Crystal Solvent (resina)</label>
      <input type="number" defaultValue={0} />

      <label>Level previsto</label>
      <Select options={options}/>

      <div className='module-div' id="xp-extra">
        <label>XP extra por dia</label>
        <input type="number" defaultValue={0} />

        <label>Dias de xp extra</label>
        <input type="number" defaultValue={0} />
      </div>

      <BtnCalcularXpPersonagem />

      <label id="resultado-xp-total"></label>
      <label id="resultado-personagem"></label>
    </div>
  )
}

export default CalcularXpPersonagem
