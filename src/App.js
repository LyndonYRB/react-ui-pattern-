import React, {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios'
import Navbar from './Components/Navbar.jsx';
import { monsterPics } from './Components/monsterpics.js';
import './App.css';
import AllDragons from './Components/AllDragons.jsx';
import MonsterDetail from './Components/MonsterDetail.jsx';
import background from "./Components/img/monster-hunter-world.jpeg"

function App() {
  const [monsters, setMonsters] = useState([])
  const [monsterImgs, setMonsterImgs] = useState(monsterPics)
  
  const getMonsters = async () => {
    let data = await axios(`https://mhw-db.com/monsters/`)
    
    let monstersWithImg = data.data.map((monster) => {
      for (let monsterImg of monsterImgs) {
        if (monsterImg.id === monster.id) {
          monster.image = monsterImg.image
          return monster
        }
      }
      return monster
    }).filter((monster) => {
      return monster.image
    })

    localStorage.setItem('monsters', JSON.stringify(monstersWithImg))
    setMonsters(monstersWithImg)
  }

  useEffect(() => {
    getMonsters()
  }, [])


  return (
    <div style={{
        backgroundImage:
      `url(${background})`}} className="App">
     
      <Navbar />
      <Routes>
        <Route path="/" element={<AllDragons monsters={monsters}/>}/>
        <Route path="/monsters/:id" element={<MonsterDetail />} />
      </Routes>
    </div>
  );
}

export default App;