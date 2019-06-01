import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Title from '../about/Title';

// class Bio extends Components {
const BioModal = props => {
  const [dispalyBio, setDisplayBio] = useState(false);
  return (
    <Modal show={props.showBio} onHide={props.toggleBio} centered>
      <Modal.Header closeButton>
        <Modal.Title>Personal Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Hello!</h1>
        <p>My name is Guan Yang. </p>
        <Title />
        <p>I'm an IT Master graduates from CLU.</p>
        {dispalyBio ? (
          <div>
            <p>I'm a Web Developer architecting full-stack applications.</p>
            <p>
              I'm passionate about learning the latest technologies whether that
              is frontend or backend.
            </p>
            <p>Besides coding, I'm interested in game design.</p>
            <p>I also make data analysis using Python, Hadoop, R and SSIS.</p>
            <p>Feel free to look around my site and contact me!</p>
            <button
              className='btn btn-success'
              onClick={() => setDisplayBio(false)}
            >
              Show Less
            </button>
          </div>
        ) : (
          <div>
            <button
              className='btn btn-success'
              onClick={() => setDisplayBio(true)}
            >
              Read More...
            </button>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.toggleBio}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
// }

export default BioModal;
