import React from 'react'

import { Link } from 'react-router-dom'

function WatchHistory() {
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
            <tr>
              <td>1</td>
              <td>John Wick</td>
              <td><a href="https://www.youtube.com/watch?v=C0BMx-qxsP4&t=1s" target='_blank'>https://www.youtube.com/watch?v=C0BMx-qxsP4&t=1s</a></td>
              <td>13/12/2023</td>
              <td><button className='btn'><i className="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
          </tbody>
        
      </div>
    </>
  )
}

export default WatchHistory