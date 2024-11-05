import style from './index.module.css'

import { Card } from '../../Components/Card/card'

function Home() {

  return (
    <div className={style.container}>
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite seu nome" />
      <button type="button">Adicionar</button>

      <Card name="Paula Souza" time="08:00:00" />
      <Card name='Diego Fernandes' time='09:00:00'/>
      <Card name='Rafaela Costa' time='12:00:00'/>
    </div>
  )
}

export default Home
