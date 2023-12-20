import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer className="bg-primary mt-5" >
      <div style={{height:'300px'}}className='container w-100 mt-5'>
        <div className="footer-content d-flex justify-content-between">
          <div className="title w-25">
            <h3 style={{height:'50px',color:'white'}}  className='d-flex'> <i class="fa-solid fa-play fa-beat me-2" style={{height:'25px',color:'white'}}></i> Media Player</h3>
            <div className='d-flex flex-column '>
              <span style={{textAlign:'justify',color:'grey'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, ducimus placeat amet quaerat, necessitatibus. </span><br />
              <span style={{color:'grey'}}>Currently v1.0.0</span>
            </div>
          </div>
          <div className="links d-flex flex-column">
            <h3 style={{height:'50px',color:'white'}}>Links</h3>
            
              <Link to={'/'} style={{color:'grey'}} className='text-decoration-none' >Landing Page</Link>
              <Link to={'/home'} style={{color:'grey'}} className='text-decoration-none' >Home</Link>
              <Link to={'/history'} style={{color:'grey'}} className='text-decoration-none' >Watch History</Link>
            
          </div>
          <div className="guides  d-flex flex-column">
            <h3 style={{height:'50px',color:'white'}}>Guides</h3>
           
              <a style={{color:'grey'}} className='text-decoration-none' href="https://react.dev/" target='_blank'>React</a>
              <a style={{color:'grey'}} className='text-decoration-none' href="https://react-bootstrap.netlify.app/"  target='_blank'>React Bootstrap</a>
              <a style={{color:'grey'}} className='text-decoration-none' href="https://www.w3schools.com/react/react_router.asp"  target='_blank'>React Routing</a>
           
          </div>
          <div className="contact">
            <h3 style={{height:'50px',color:'white'}}>Contact Us</h3>
            <div className="d-flex">
              <input placeholder='Enter your mail' type="text" className="form-control border" />
              <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right "></i></button>
            </div>
            <div className="icons mt-3 d-flex justify-content-between">
             <i style={{height:'50px',color:'white'}} class="fa-solid fa-envelope fa-2x"></i>
             <i style={{height:'50px',color:'white'}} class="fa-brands fa-x-twitter fa-2x"></i>
             <i style={{height:'50px',color:'white'}} class="fa-brands fa-github fa-2x"></i>
             <i style={{height:'50px',color:'white'}} class="fa-brands fa-linkedin fa-2x"></i>
             <i style={{height:'50px',color:'white'}} class="fa-brands fa-facebook fa-2x"></i>
             <i style={{height:'50px',color:'white'}} class="fa-brands fa-instagram fa-2x"></i>
            </div>
          </div>
        </div>
        <p className='text-center mt-4'>CopyRight &copy; 2023 Media Player. Built using React</p>
      </div>
   </footer>
  )
}

export default Footer

