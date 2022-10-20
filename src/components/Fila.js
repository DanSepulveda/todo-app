const Fila = (props) => {
  const { nombre, completada, id } = props.tarea

  return (
    <div className={completada ? 'tarea completada' : 'tarea'}>
      <p>{nombre}</p>
      <p>{completada ? 'Completada' : 'No completada'}</p>
      <button onClick={() => props.cambiar(id)}>Cambiar</button>
    </div>
  )
}

export default Fila
