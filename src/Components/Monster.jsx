import React from 'react'
import { Link } from 'react-router-dom';

export default function Monster({monster}) {
  return (
    <div>
      <Link to={`/monsters/${monster.id}`}>
        <h1>{monster.name}</h1>
        <img src={monster.image} alt={monster.name}/>
      </Link>
    </div>
  )
}
