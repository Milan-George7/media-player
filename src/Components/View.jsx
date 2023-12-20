import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getAllVideoAPI } from '../sevices/allAPI'


function View() {
  const [allVideos,setAllVideos] = useState([])
  useEffect(()=>{
    getAllUploadedVideos()
  },[])

  // Api call
  const getAllUploadedVideos = async ()=>{
    const result = await getAllVideoAPI()
    if(result.status===200){
      console.log(result);
      setAllVideos(result.data)
    }else{
      console.log("API Failed");
      setAllVideos([])
    }
  }




  return (
    <>
      <Row>
       {
        allVideos?.length>0?allVideos.map(video=>(
        <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard/>
        </Col>
        )):<p className='fs-4 text-warning fw-bolder'>No Videos are uploaded yet.</p>
       }
      </Row>
    </>
  )
}

export default View