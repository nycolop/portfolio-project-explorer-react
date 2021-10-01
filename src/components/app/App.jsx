import React, { Fragment, Component } from 'react';
import './app.css';
import githubIco from '../../assets/github.svg';
import linkedinIco from '../../assets/linkedin.svg';

import projects from '../../utils/projects.json';
import { Button } from '../button/Button';
import { Project } from '../project/Project';

const primaryFilters = ['Featured', 'All'];
const firstFilters = ['React', 'Redux', 'JavaScript', 'CSS', 'HTML'];
const secondFilters = ['PostgreSQL', 'Node', 'Express', 'Bootstrap', 'jQuery', 'Sass'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'Featured'
    }
    this.changeFilter = this.changeFilter.bind(this);
  }

  changeFilter(mode) {
    this.setState({
      filter: mode
    })
  }

  render() {
    const filteredProjects = projects.map(project => <Project key={project.id} project={project} />).filter(project => {
      if (this.state.filter === 'All') return true;
      return project.props.project.tags.includes(this.state.filter)
    });

    return (
      <Fragment>
        <header>
          <h1>Nicolás López (nicogamy) Project Explorer</h1>
          <section style={{textAlign: 'center'}}>
            <a href='https://github.com/necogamy' target='_blank' rel='noreferrer' ><img src={githubIco} alt='github' /></a>
            <a href='https://www.linkedin.com/in/nicogamy' target='_blank' rel='noreferrer' ><img src={linkedinIco} alt='linkedin' /></a>
          </section>
        </header>
        <main>
          <section style={{textAlign: 'center'}}>
            <h3>Sort by</h3>
            <section>
              {
                primaryFilters.map(filter => <Button key={filter} filter={filter} onClick={this.changeFilter} />)
              }
            </section>
            <section>
              {
                firstFilters.map(filter => <Button key={filter} filter={filter} onClick={this.changeFilter} />)
              }
            </section>
            <section>
              {
                secondFilters.map(filter => <Button key={filter} filter={filter} onClick={this.changeFilter} />)
              }
            </section>
          </section>
  
          <section>
              {
                filteredProjects
              }
          </section>
        </main>
        <aside style={{textAlign: 'center'}}>
          <p>Total projects: {projects.length} | <span>Total filtered projects: {filteredProjects.length}</span></p>
          <a href='https://nicogamy-portfolio-react-web-app.netlify.app/' target='_blank' rel='noreferrer'>nicogamy.me</a>
          <a href='http://carnes.cc/projects/' target='_blank' rel='noreferrer' style={{display: 'block'}}>Inspired by</a>
          <p>Powered by <a href='https://create-react-app.dev/' rel='noreferrer' target='_blank'>React</a></p>
        </aside>
      </Fragment>
    );
  }
}

export default App;
