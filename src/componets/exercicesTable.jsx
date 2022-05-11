import React from 'react'

export default function ExercicesTable() {
  const listExerc = [
    "Esteira",
    "Alteres",
    "CrossOver",
    "Barras",
    "Remo",
    "Bicicleta"
  ];

  const tempoRep = ["Minutos", "Repetições"];
  return (
    <form>
      <label>
        <select>
        {listExerc.map(( ex ) => <option value={ ex }>{ex}</option>)};
        </select>
      </label>
      <label>
        <select>
        {tempoRep.map(( ex ) => <option value={ ex }>{ex}</option>)};
        </select>
      </label>
      <label>
        <input type="number" />
      </label>
    </form>
  )
}
