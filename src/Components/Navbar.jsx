import React from 'react';
import { Link} from 'react-router-dom'

export default function Navbar() {

  return (
    <header>
      <nav className='nav'>
        <Link className='link' to="/">All Elder Dragons</Link>        
      </nav>
   </header>
  )
}