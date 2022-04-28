import React from 'react'
import Monster from './Monster';

export default function AllDragons({ monsters }) {
  


  return (
    <div>
      <h1>Monster Hunter World Elder Dragons</h1>
      {
        monsters.map((monster) => (
          <Monster monster={monster}/>
        ))
      }
    </div>
  )
}
