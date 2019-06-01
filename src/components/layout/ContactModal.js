import React from 'react';
import { Modal, ListGroup, Button } from 'react-bootstrap';
import Socials from '../socials/Socials';

const ContactModal = props => {
  return (
    <Modal show={props.showContact} onHide={props.toggleContact} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contact Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup.Item>Guan Yang</ListGroup.Item>
        <ListGroup.Item>yangguancroupies@gmail.com</ListGroup.Item>
        <ListGroup.Item>805-300-8150</ListGroup.Item>
        <ListGroup.Item>Thousand Oaks, CA</ListGroup.Item>
        <ListGroup.Item>
          <Socials />
        </ListGroup.Item>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.toggleContact}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;
