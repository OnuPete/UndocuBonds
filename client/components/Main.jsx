import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.jsx';
import Find from './Find.jsx';
import Funds from './Funds.jsx';
import About from './About.jsx';

class Main extends Component {
  render() {
    return(
      <div>
        <Route exact path='/' component={Home} viewport={this.props.viewport}/>
        <Route path='/about' component={About}/>
        <Route path='/state' component={Find}/>
        <Route path='/funds' component={Funds}/>
        <Route path='/resources' component={Home}/>
      </div>
    )
  }
}

export default Main;
