import React, { useState, useEffect } from "react";



export default function MonsterLink(props) {
  
 

  let { monsterpics, num, index, monsters } = props
  const [monster, setMonster] = useState(null)

  
  useEffect(() => {
    if (!monsters.length) {
      const localMonster = localStorage.getItem('monsters')
      setMonster(localMonster)
    } else {
      setMonster(monsters[index])
 }
  },[monsters, index])
    

  return (
    <div className="container">
      <h1>{`Monster Hunter World Elder Dragon ${num}`}</h1>
      <h2>{monster && monster.text}</h2>
      <img className="img" src={monsterpics} alt="You can't catch them!" />
      

  </div>
)
  



}
