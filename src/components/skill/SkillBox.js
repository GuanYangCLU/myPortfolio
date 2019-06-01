import React, { PureComponent } from 'react';
import Languages from './Languages';
import Tools from './Tools';
import { Button } from 'react-bootstrap';

class SkillBox extends PureComponent {
  state = {
    language: true,
    tool: false
  };

  showLanguage = () => {
    this.setState({ language: true, tool: false });
  };

  showTool = () => {
    this.setState({ tool: true, language: false });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.language ? <Languages /> : null}
        {this.state.tool ? <Tools /> : null}

        <Button
          style={{ backgroundColor: '#6a4c9c', borderColor: '#6a4c9c' }}
          className='toggleSkillButton' /*056325 */
          onClick={this.showLanguage}
          active={this.state.language}
        >
          Languages
        </Button>
        <Button
          style={{ backgroundColor: '#ffb11b', borderColor: '#005caf' }}
          className='toggleSkillButton' /* #0f5ba8 */
          onClick={this.showTool}
          active={this.state.tool}
        >
          Tools
        </Button>
        <hr />
      </React.Fragment>
    );
  }
}
export default SkillBox;
