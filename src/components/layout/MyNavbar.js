import React, { Component } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';
import InvestModal from './BioModal';
import LOGO from '../../assets/google-brands.svg';

class MyNavbar extends Component {
  state = {
    showContact: false,
    showInvestment: false
  };

  toggleContact = () => {
    this.setState({ showContact: !this.state.showContact });
  };

  toggleInvestment = () => {
    this.setState({ showInvestment: !this.state.showInvestment });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar className='sticky-top' bg='dark' variant='dark' expand='lg'>
          <Navbar.Brand href='#'>
            <img
              alt=''
              src={LOGO}
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}
          </Navbar.Brand>

          <Link to='/'>
            <Navbar.Brand>Guan Yang's Portfolio</Navbar.Brand>
          </Link>

          {/* <Form inline>
            <FormControl type='text' placeholder='Search' className='mr-sm-2' />
            <Button variant='outline-success'>Search</Button>
          </Form> */}

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Link className='nav-link' to='/'>
                HOME
              </Link>
              <Link className='nav-link' to='/skill'>
                SKILL
              </Link>
              <Link className='nav-link' to='/project'>
                PROJECT
              </Link>
              <Link className='nav-link' to='/resume'>
                Résumé
              </Link>
              <div>
                <Button
                  variant='info investButton'
                  onClick={this.toggleContact}
                >
                  Contact
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <ContactModal
          showContact={this.state.showContact}
          toggleContact={this.toggleContact}
        />
        <InvestModal
          showInvestment={this.state.showInvestment}
          toggleInvestment={this.toggleInvestment}
        />
      </React.Fragment>
    );
  }
}

export default MyNavbar;
