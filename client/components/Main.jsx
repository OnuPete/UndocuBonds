import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home.jsx';
import Find from './Find.jsx';

class Main extends Component {
  render() {
    return( 
      <div>
        <Route exact path='/' component={Home} viewport={this.props.viewport}/>
        <Route path='/about' component={Home}/>
        <Route path='/state' component={Find}/>
        <Route path='/funds' component={Home}/>
        <Route path='/resources' component={Home}/>
      </div>
    )
  }
}

export default Main;
