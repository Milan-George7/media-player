import React from 'react'
import {Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar className="bg-primary">
    <Container>
      <Navbar.Brand  style={{color:'white',fontSize:'25px'}}>
     <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
        <i class="fa-solid fa-play fa-beat me-3" style={{height:'30px'}}></i>
          Media Player
     </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header