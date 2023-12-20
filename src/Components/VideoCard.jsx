import React, { useState } from 'react'
import { Card,Modal } from 'react-bootstrap'



function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
   <>
    <Card className='mt-5 mb-5' style={{width:'14rem'}}>
      <Card.Img onClick={handleShow} height={'200px'} variant="top" src="https://www.tallengestore.com/cdn/shop/products/JohnWick-KeanuReeves-HollywoodEnglishActionMoviePoster-3_032d5e45-69d3-45b2-9481-f5a8a100cf8c.jpg?v=1649071626" />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h6 style={{height:'29px'}}>Video Title</h6>
            <button  className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
          </Card.Title>
        </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='w-100' height="387" src="https://www.youtube.com/embed/C0BMx-qxsP4?autoplay=1" title="John Wick Official Trailer #1 (2014) - Keanu Reeves, Willem Dafoe Movie HD" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
      </Modal>
   </>
  )
}

export default VideoCard