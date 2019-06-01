import React from 'react';
import PROJECTS from '../../data/projects';
import Project from './Project';
import banner1 from '../../assets/project1.png';
import banner2 from '../../assets/project2.png';
import banner3 from '../../assets/project3.png';
import banner4 from '../../assets/project4.png';
import btnBg from '../../assets/icons.png';
import btnBg2 from '../../assets/linkedin_icon.png';

function Btns() {
  return (
    <ul class='bcSign' id='j-bcSign'>
      <li class='ico cur'>
        <a href='javascript:;' />
      </li>
      <li class='ico cur'>
        <a href='javascript:;' />
      </li>
      <li class='ico cur'>
        <a href='javascript:;' />
      </li>
      <li class='ico cur'>
        <a href='javascript:;' />
      </li>
    </ul>
  );
}

function Imgs() {
  return (
    <ul class='bcImg' id='j-bcImg'>
      {/* <li>
        <a href='##'>
          <img src={banner4} alt='' />
          <span class='title'>Project4</span>
        </a>
      </li> */}
      <li>
        <a href='https://github.com/GuanYangCLU/Cars_Full_Stack_Dev_Test'>
          <img src={banner1} alt='' />
          <span class='title'>Project1</span>
        </a>
      </li>
      <li>
        <a href='https://github.com/GuanYangCLU/Cars_BackEnd'>
          <img src={banner2} alt='' />
          <span class='title'>Project2</span>
        </a>
      </li>
      <li>
        <a href='https://github.com/WAVinGS/WAVinGS'>
          <img src={banner3} alt='' />
          <span class='title'>Project3</span>
        </a>
      </li>
      <li>
        <a href='https://github.com/IT533/BigDataProject'>
          <img src={banner4} alt='' />
          <span class='title'>Project4</span>
        </a>
      </li>
      {/* <li>
        <a href='##'>
          <img src={banner1} alt='' />
          <span class='title'>Project1</span>
        </a>
      </li> */}
    </ul>
  );
}

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { iNow: 0, bCheck: true };
    this.handleMouseover = this.handleMouseover.bind(this);
    this.handleMouseout = this.handleMouseout.bind(this);
  }

  handleMouseover() {
    this.state.bCheck = false;
  }

  handleMouseout() {
    this.state.bCheck = true;
  }

  //
  componentDidMount() {
    this.timerID = setInterval(() => this.timer(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  timer() {
    if (this.state.bCheck) {
      if (this.state.iNow === 3) {
        this.state.iNow = 0;
      } else {
        this.state.iNow++;
      }
      this.iNowlistener();
    } else {
      return false;
    }
  }

  iNowlistener() {
    var btnStyle = {
      backgroundImage: 'url(' + { btnBg } + ') 0 0 / 16px 16px',
      backgroundPosition: '-855px -727px',
      // backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    };
    var btnStyle2 = {
      backgroundImage: 'url(' + { btnBg2 } + ') 0 0 / 16px 16px',
      backgroundPosition: '-855px -727px'
    };
    var aBtns = document.getElementsByClassName('ico');
    var aImgs = document.getElementById('j-bcImg');
    var aImgsLi = aImgs.getElementsByTagName('li');
    // aBtns[0].style.background = 'rgba(255,255,255,0.5)';
    aBtns[0].style.background = { btnBg };

    var len = aBtns.length;
    for (var i = 0; i < len; i++) {
      if (i === this.state.iNow) {
        aBtns[i].style = { btnStyle2 };
        // aBtns[i].style.background = 'rgba(255,255,255,0.5)';
        aImgsLi[i].style.display = 'inline';
      } else {
        aBtns[i].style.background = 'rgba(0,0,0,0.3)';
        // aBtns[i].style.backgroundImage = { btnBg2 };
        // aBtns[i].style = { btnStyle };
        aImgsLi[i].style.display = 'none';
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Main Projects</h2>

        <div class='banner' id='j-banner'>
          <div class='left bannerCnt' id='j-bannercnt'>
            <div
              id={this.props.idNames}
              onMouseOver={this.handleMouseover}
              onMouseOut={this.handleMouseout}
            >
              <Imgs />
              <Btns />
            </div>
          </div>
        </div>

        <div>
          {PROJECTS.map(PROJECT => {
            return <Project key={PROJECT.id} project={PROJECT} />;
          })}
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

// export default Projects;
