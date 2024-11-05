import { useState } from 'react'
import style from './index.module.css'

import { Card } from '../../Components/Card/card'

export default function Home() {
  const [nameUser, setNameUser] = useState('');
  const [students, setStudents] = useState([]);

  function handleAddStudent() {
    const newStudent = {
      nomeUsuario: nameUser,
      tempo: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  return (
    <div className={style.container}>
      <h1>Nome: {nameUser}</h1>
      <input type="text" placeholder="Digite seu nome" onChange={(e)=> setNameUser(e.target.value)} />
      <button type="button" onClick={handleAddStudent}>Adicionar</button>
      {students.length > 0 && students.map((student, index) => (
  <Card key={index} userName={student.nomeUsuario} timeUser={student.tempo} />
    ))}
    </div>
  )
}


