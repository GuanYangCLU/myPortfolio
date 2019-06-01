import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MyNavbar from './layout/MyNavbar';
import Projects from './projects/Projects';
import SocialsBox from './socials/SocialsBox';
import About from './about/About';
import SkillBox from './skill/SkillBox';
import Resume from './resume/Resume';
import NotFound from './PageNotFound';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <MyNavbar />
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/project' component={Projects} />
          <Route exact path='/skill' component={SkillBox} />
          <Route exact path='/resume' component={Resume} />
          <Route path='*' component={NotFound} />
        </Switch>
        <SocialsBox />
        <p>Copyright &copy; Guan Yang 2019 All Rights Reserved</p>
      </HashRouter>
    );
  }
}

export default App;
