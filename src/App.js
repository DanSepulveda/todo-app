import './App.css'
import Fila from './components/Fila'
import { useState } from 'react'

function App() {
  console.log('componente app')
  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: 'Realizar informe',
      completada: false
    },
    {
      id: 2,
      nombre: 'Imprimir documentos',
      completada: true
    },
    {
      id: 3,
      nombre: 'Generar gráficos',
      completada: false
    }
  ])

  const cambiarEstado = (id) => {
    let nuevas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada
      }
      return tarea
    })
    setTareas(nuevas)
  }

  return (
    <div>
      {tareas.map((tarea) => (
        <Fila
          key={tarea.id}
          tarea={tarea}
          cambiar={cambiarEstado}
        />
      ))}
    </div>
  )
}

export default App
