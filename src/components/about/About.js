import React, { Component } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile from '../../assets/profile.jpg';
import Title from './Title';
import ContactModal from '../layout/ContactModal';
import BioModal from '../layout/BioModal';

class About extends Component {
  state = {
    // dispalyBio: false,
    showContact: false,
    showBio: false
  };

  // toggleDisplayBio = () => {
  //   this.setState({ dispalyBio: !this.state.dispalyBio });
  // };

  toggleContact = () => {
    this.setState({ showContact: !this.state.showContact });
  };

  toggleBio = () => {
    this.setState({ showBio: !this.state.showBio });
  };

  render() {
    return (
      <div>
        <div class='menu-container'>
          <div class='hex-wrapper'>
            {/* 1st row */}
            <div class='hex-row shift'>
              <div class='hexagon hexagon__b' id='nav-skill'>
                <Link
                  className='nav-link'
                  to='/skill'
                  style={{ color: 'rgba(0, 0, 0, 0.5)' }}
                >
                  Skill
                </Link>
                <div class='face1' />
                <div class='face2' />
              </div>
              {/* style={{ background: '#adc' }} */}
              <div class='hexagon' id='nav-work'>
                <Link
                  className='nav-link'
                  to='/project'
                  style={{ color: 'rgba(0, 0, 0, 0.5)' }}
                >
                  Project
                </Link>
                <div class='face1' />
                <div class='face2' />
              </div>
            </div>

            {/* 2nd row */}
            <div class='hex-row'>
              <div
                class='hexagon hexagon__b hexagon__hide'
                id='nav-about'
                onClick={this.toggleBio}
              >
                About
                <div class='face1' />
                <div class='face2' />
              </div>

              {/* Add avatar here, pay attention to css difference */}
              <div class='hexagon hexagon__c photo' id='nav-photo'>
                {/* <img src={profile} alt='profile' class='photo' /> */}
                <div class='face1' />
                <div class='face2' />
              </div>

              <div
                class='hexagon  hexagon__a'
                id='nav-contact'
                onClick={this.toggleContact}
              >
                Contact
                <div class='face1' />
                <div class='face2' />
              </div>
            </div>

            {/* 3rd row */}
            <div class='hex-row shift'>
              <div class='hexagon hexagon__b hexagon__bend' id='nav-resume'>
                <Link
                  className='nav-link'
                  to='/resume'
                  style={{ color: 'rgba(0, 0, 0, 0.5)' }}
                >
                  Résumé
                </Link>
                <div class='face1' />
                <div class='face2' />
              </div>

              <div class='hexagon hexagon__tail' id='nav-home'>
                <Link
                  className='nav-link'
                  to='/'
                  style={{ color: 'rgba(0, 0, 0, 0.5)' }}
                >
                  Home
                </Link>
                <div class='face1' />
                <div class='face2' />
              </div>
            </div>
          </div>
          <ContactModal
            showContact={this.state.showContact}
            toggleContact={this.toggleContact}
          />
          {this.state.showBio ? (
            <BioModal showBio={this.state.showBio} toggleBio={this.toggleBio} />
          ) : null}
        </div>

        <hr />
      </div>
    );
  }
}

export default About;
