import React, { useState } from 'react';
import Projects from '../projects/Projects';

const Resume = () => {
  const [showProject, setShowProject] = useState(false);

  const toggleProject = () => {
    setShowProject(!showProject);
  };

  return (
    <div className='container resume'>
      <div className='section section__summary'>
        <h2 className='section__title'>Summary</h2>
        <p>
          Full-stack Web Developer with 1+ years experience in NodeJS, MongoDB,
          React and HTML/CSS. Also farmiliar with Python and Java
          object-oriented programing. Seeks position with a top Technology firm.
          Available to relocate. Free feel to visit my{' '}
          <a
            className='gitButton'
            href='https://github.com/GuanYangCLU'
            target='_blank'
            rel='noopener noreferrer'
          >
            Github
          </a>
          .
        </p>
      </div>

      <div className='section section__skill'>
        <h2 className='section__title'>Skill</h2>
        <ul>
          <li>
            <h3>Advanced: </h3>
            Python, NodeJS, React, JavaScript, Express, Redux, Restful
          </li>
          <li>
            <h3>Familiar: </h3>
            Java, MongoDB, Git, AWS, HTML/CSS, SQL, Unit Test
          </li>
          <li>
            <h3>Basic: </h3>
            Flask, Redis, PHP, Hadoop, CI/CD, C++
          </li>
        </ul>
      </div>

      <div className='section section__edu_exp_act'>
        <h2 className='section__title'>Education</h2>
        <h3>
          <span>California Lutheran University, Thousand Oaks, CA</span>
          <span className='duration'>Feb.2017 - May.2019</span>
        </h3>

        <ul>
          <li>Master of Science in Information Technology (GPA: 3.9)</li>
        </ul>

        <h3>
          <span>Nanjing University, Nanjing</span>
          <span className='duration'>Sep.2010 - Jul.2014</span>
        </h3>
        <ul>
          <li>Bachelor of Physics</li>
        </ul>
      </div>

      <div className='section section__edu_exp_act'>
        <h2 className='section__title'>Experience</h2>
        <h3>
          <span>Software Engineer Intern - Tap Series, Westlake, CA</span>
          <span className='duration'>Jul. 2018 — Oct. 2018</span>
        </h3>
        <ul>
          <li>
            Utilized PHP, MS SQL, js, and JQuery to re-build the old ASP backend
            of Student Registration System and test it.{' '}
          </li>
          <li>
            Utilized Python and Beautiful Soup 4 to make a crawler to gather and
            batch process data from customers’ website.{' '}
          </li>
          <li>
            Utilized PHP, MS SQL Server and SMTP protocol to build up login
            verification and password resetting.
          </li>
          <li>
            Built and tested online course website using AWS, JavaScript,
            jQuery, Bootstrap, CSS, and HTML.{' '}
          </li>
        </ul>
        <h3>
          <span>Laboratory Assistant - Nanjing University, Nanjing</span>
          <span className='duration'>Oct. 2013 — Sep. 2014</span>
        </h3>
        <ul>
          <li>
            Developed the simulation and statistic APIs for LAB’s Light
            attenuation measurement experiments via Geant4.
          </li>
          <li>
            Analyzed and concluded results with Root and Origin, and provided
            suggestions for further research.{' '}
          </li>
        </ul>
      </div>

      <div className='section section__edu_exp_act'>
        <h2 className='section__title'>Activity</h2>
        <h3>
          <span>SFSU Hackathon 2018, San Francisco</span>
          <span className='duration'>Mar. 2018</span>
        </h3>
        <ul>
          <li>Built a 2D game ‘Wavings’ with Pygames.</li>
        </ul>
        <h3>
          <span>Global Game Jam, Westlake Village</span>
          <span className='duration'>Jan. 2018</span>
        </h3>
        <ul>
          <li>
            Built a pixel game ‘High Five’ with Godot, using a python-like
            language GDScript
          </li>
          <li>Designed the rules of game and value settings</li>
        </ul>
      </div>
      <hr />

      <h2 className='section'>Project Experience</h2>
      <button
        className='btn btn-primary showProjectButton'
        onClick={toggleProject}
      >
        {showProject ? 'SHOW LESS' : 'SHOW MORE ...'}
      </button>
      {showProject ? <Projects /> : null}
      <hr />
    </div>
  );
};

export default Resume;
