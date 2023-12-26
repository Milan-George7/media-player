import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { getALLcategoryAPI, getAllVideoAPI, updateCategoryAPI } from '../sevices/allAPI'


function View({uploadVideoResponse,setDropResponse}) {
  const [deleteVideoResponse,setDeleteVideoResponse] = useState(false)
  const [allVideos,setAllVideos] = useState([])

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])

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

const dragOver =(e)=>{
  e.preventDefault()
}

const videoDropped = async (e)=>{
  const {videoId,categoryId} = JSON.parse(e.dataTransfer.getData("data"))
  console.log(videoId,categoryId);
  const {data} = await getALLcategoryAPI()
  const selectedCategory = data.find(item=>item.id==categoryId)
  let result = selectedCategory.allVideos.filter(video=>video.id!==videoId)
  console.log(result);
  let {id,categoryName} = selectedCategory
  let newCategory = {id,categoryName,allVideos:result}
  console.log(newCategory);
  const res = await updateCategoryAPI(categoryId,newCategory)
  setDropResponse(res)
}

  return (
    <>
      <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDropped(e)}>
       {
        allVideos?.length>0?allVideos.map(video=>(
        <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} video={video}/>
        </Col>
        )):<p className='fs-4 text-warning fw-bolder'>No Videos are uploaded yet.</p>
       }
      </Row>
    </>
  )
}

export default View