import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'


function Home() {
  //state lifting for the data sharing of siblings Add and View
  const [uploadVideoResponse,setUploadVideoResponse] = useState({})
  const [dropResponse,setDropResponse]= useState([])
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between">
      <div className="add-video">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
      </div>
      <Link to={'/history'} style={{textDecoration:'none',color:'black',fontSize:'20px'}}>Watch History<i class="fa-solid fa-clock-rotate-left"></i></Link>
    </div>

    <div className="container-fluid w-100 mt-5 mb-5 row">
      <div className="all-videos col-lg-9">
        <h2 style={{height:'50px'}}>All Uploaded Videos</h2>
        <View uploadVideoResponse={uploadVideoResponse} setDropResponse={setDropResponse}/>
      </div>
      <div  className="category col-lg-3">
        <Category dropResponse={dropResponse}/>
      </div>
    </div>
    </>
  )
}

export default Home