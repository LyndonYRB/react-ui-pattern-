import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MonsterDetail() {

  const [monster, setMonster] = useState({})
  const { id } = useParams()
  
  const getMonster = async () => {
    let data = await axios(`https://mhw-db.com/monsters/${id}`)

    localStorage.setItem('monsters', JSON.stringify(data.data))
    setMonster(data.data)
  }

  useEffect(() => {
    getMonster()
  }, [])


  return (
    <div>
      <h1>{monster.name}</h1>
      {monster.image && <img src={monster.image} alt={monster.name} />}
      <p>{monster.description}</p>
    </div>
  )
}
