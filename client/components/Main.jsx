import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.jsx';
import Find from './Find.jsx';
import Funds from './Funds.jsx';
import About from './About.jsx';
import Resources from './Resources.jsx';

class Main extends Component {
  render() {
    return(
      <div>
        <Route exact path='/' component={Home} viewport={this.props.viewport}/>
        <Route path='/about' component={About}/>
        <Route path='/state' component={Find}/>
        <Route path='/funds' component={Funds}/>
        <Route path='/resources' component={Resources}/>
      </div>
    )
  }
}

export default Main;
