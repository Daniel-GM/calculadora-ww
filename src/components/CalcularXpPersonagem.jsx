import React, { useState } from 'react'
import Select from "./Select"

const CalcularXpPersonagem = () => {
  const [selectedOption, setSelectedOption] = useState(0)

  const options = [
    {value: "0",label: "1"},
    {value: "400",label: "2"},
    {value: "500",label: "3"},
    {value: "600",label: "4"},
    {value: "1100",label: "5"},
    {value: "1200",label: "6"},
    {value: "1300",label: "7"},
    {value: "1400",label: "8"},
    {value: "1500",label: "9"},
    {value: "1600",label: "10"},

    {value: "1600",label: "11"},
    {value: "1650",label: "12"},
    {value: "1650",label: "13"},
    {value: "1700",label: "14"},
    {value: "1700",label: "15"},
    {value: "1700",label: "16"},
    {value: "1750",label: "17"},
    {value: "1750",label: "18"},
    {value: "1800",label: "19"},
    {value: "1800",label: "20"},
    
    {value: "2300",label: "21"},
    {value: "2400",label: "22"},
    {value: "2500",label: "23"},
    {value: "2500",label: "24"},
    {value: "2500",label: "25"},
    {value: "2700",label: "26"},
    {value: "2900",label: "27"},
    {value: "3000",label: "28"},
    {value: "3200",label: "29"},
    {value: "3400",label: "30"},

    {value: "6500",label: "31"},
    {value: "6700",label: "32"},
    {value: "6800",label: "33"},
    {value: "7200",label: "34"},
    {value: "7600",label: "35"},
    {value: "8000",label: "36"},
    {value: "8400",label: "37"},
    {value: "9000",label: "38"},
    {value: "9600",label: "39"},
    {value: "10000",label: "40"},

    {value: "10200",label: "41"},
    {value: "10400",label: "42"},
    {value: "10600",label: "43"},
    {value: "10800",label: "44"},
    {value: "11200",label: "45"},
    {value: "11600",label: "46"},
    {value: "12000",label: "47"},
    {value: "12400",label: "48"},
    {value: "12800",label: "49"},
    {value: "13000",label: "50"},

    {value: "13100",label: "51"},
    {value: "13300",label: "52"},
    {value: "13500",label: "53"},
    {value: "13700",label: "54"},
    {value: "13900",label: "55"},
    {value: "14100",label: "56"},
    {value: "14300",label: "57"},
    {value: "14500",label: "58"},
    {value: "14700",label: "59"},
    {value: "15700",label: "60"},

    {value: "21600",label: "61"},
    {value: "21900",label: "62"},
    {value: "22300",label: "63"},
    {value: "23000",label: "64"},
    {value: "23800",label: "65"},
    {value: "24700",label: "66"},
    {value: "26100",label: "67"},
    {value: "27500",label: "68"},
    {value: "29400",label: "69"},
    {value: "32400",label: "70"},

    {value: "32400",label: "71"},
    {value: "32800",label: "72"},
    {value: "33500",label: "73"},
    {value: "34500",label: "74"},
    {value: "35600",label: "75"},
    {value: "37200",label: "76"},
    {value: "39100",label: "77"},
    {value: "41300",label: "78"},
    {value: "44100",label: "79"},
    {value: "47300",label: "80"},
  ]

  const handleChange = (e) => {
    console.log(e)
    setSelectedOption(e.target.value)
  }

  return (
    <div className="module-div">
      <label htmlFor="xp-atual">Level atual</label>
      <Select options={options} handleChange={handleChange} />
      
      <label htmlFor="xp-atual">Xp atual</label>
      <input type="number" id="xp-atual" />

      <label htmlFor="xp-atual">Level previsto</label>
      <Select options={options} handleChange={handleChange} />
    </div>
  )
}

export default CalcularXpPersonagem
