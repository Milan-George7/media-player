import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'

import { getHistoryAPI, removeHistoryAPI } from '../sevices/allAPI'


function WatchHistory() {
  const [history,setHistory] = useState([])
  useEffect(() => {
    getHistory()
  },[])


  const getHistory = async ()=>{
    //api call
    const result = await getHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API Failed");
      console.log(result.message);
    }
  }

  const removeHistoryItem = async (id)=>{
    await removeHistoryAPI(id)
    getHistory()
    
  }
  

  return (
    <>
     <div className="container mt-5 mb-5 d-flex justify-content-between">
      <h3>Watch History</h3>
      <Link to={'/home'}><i class="fa-solid fa-arrow-left"></i>Back to Home</Link>
     </div>
      <div className="table  mb-5 container shadow">
        
          <thead>
            <tr>
              <td>#</td>
              <td>Video Caption</td>
              <td>URL</td>
              <td>TimeStamp</td>
              <td><i className="fa-solid fa-ellipsis"></i></td>
            </tr>
          </thead>
          <tbody>
           {history?.length>0? history?.map((video,index)=>(
           <tr>
              <td>{index+1}</td>
              <td>{video?.caption}</td>
              <td><a href={video?.link} target='_blank'>{video?.link}</a></td>
              <td>{video?.timeStamp}</td>
              <td><button onClick={()=>removeHistoryItem(video?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
           )): 
           <p className='fw-bolder text-danger fs-4'>Your Watch History is Empty</p>
           }
            
           
          </tbody>
        
      </div>
    </>
  )
}

export default WatchHistory