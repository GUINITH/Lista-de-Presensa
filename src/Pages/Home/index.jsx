import style from './index.module.css'

function Home() {

  return (
    <div className={style.container}>
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite seu nome" />
      <button type="button">Adicionar</button>
    </div>
  )
}

export default Home
