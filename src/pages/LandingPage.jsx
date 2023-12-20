import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='container '>
    <div className="row  align-items-center m-5">
      <div className="col-lg-5">
        <h3 style={{height:'50px'}}>Welcome to <span className='text-warning' >Media Player</span></h3>
      <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni neque, modi porro perspiciatis dolores magnam, quas, quisquam placeat cumque atque amet repellat aut voluptate ducimus obcaecati nam laboriosam nemo. Rem?</p>
      <Link to={'/home'} className="btn btn-info mt-5 fw-bolder rounded">Get Started</Link>
      </div>
      <div className="col"></div>
      <div className="col-lg-6">
        <img className="img-fluid" src="https://media0.giphy.com/media/FMwPcZYTTsJOwTFNYu/giphy.gif?cid=ecf05e47wtex377v1npl0mi0qfshuazplfb371drhxo77zft&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="no-image"  />
      </div>
    </div>
    <div className="features">
      <h3 style={{height:'50px'}} className="text-center">Features</h3>
      <div className="cards mt-5 d-flex justify-content-between">
        {/* card 1 */}
        <Card border="danger" style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media3.giphy.com/media/LESpNIDaNBUcRIPzng/200.webp?cid=ecf05e47oe16kqb9hxpms4d6k5lwf7fx3p5o57zpthykhk34&ep=v1_gifs_search&rid=200.webp&ct=g" />
      <Card.Body>
        <Card.Title style={{height:'20px'}}>Managing Videos</Card.Title>
        <Card.Text>
        User can upload,view and remove the videos
        </Card.Text>
      
      </Card.Body>
    </Card>

    {/* card 2 */}
    <Card border="success" style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media4.giphy.com/media/Z3epCn2T1JKDlld8LE/200w.webp?cid=ecf05e476u9bl5nwu2k13ong66p3eh7ix3hp1aqeurzrvsmk&ep=v1_gifs_search&rid=200w.webp&ct=g" />
      <Card.Body>
        <Card.Title style={{height:'20px'}}>Categorize Videos</Card.Title>
        <Card.Text>
        User can categorise videos according to their preference using drag and drop features
        </Card.Text>
      
      </Card.Body>
    </Card>

    {/* card 3 */}
    <Card border="info" style={{ width: '22rem' }}>
      <Card.Img width={'300px'} height={'300px'} variant="top" src="https://media1.giphy.com/media/igsgs9q3D32cOqTsCp/giphy.gif?cid=ecf05e47g90jbgon4a8841xjn0gf22y4suvy9bomqa9vslrn&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
      <Card.Body>
        <Card.Title style={{height:'20px'}}>Watch History</Card.Title>
        <Card.Text>
        Users are able to see the history of watched videos
        </Card.Text>
      
      </Card.Body>
    </Card>
      </div>
    </div>

    <div className="row mt-5 border border-dark rounded p-5">
      <div className="col-lg-3">
        <p style={{textAlign:'justify'}}><span className='fs-5 fw-bold'>Play Everything</span>: User can play any video according to their liking when ever they want,they can also upload,view and remove the videos</p>
        <p style={{textAlign:'justify'}}><span className='fs-5 fw-bold'>Categorize Videos</span>: User can categorise videos according to their preference using drag and drop features</p>
        <p style={{textAlign:'justify'}}><span className='fs-5 fw-bold'>Watch History</span>: Users are able to see the history of watched videos, they can also manage their watch history.</p>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-8"><iframe width="894" height="503" src="https://www.youtube.com/embed/QdBZY2fkU-0" title="Grand Theft Auto VI Trailer 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    </div>

    </div>
  )
}

export default LandingPage