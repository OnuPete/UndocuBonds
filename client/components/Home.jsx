import React, { Component } from 'react';
import './../styles/App.css';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Donate from './Donate.jsx';

class Home extends Component {
  componentDidMount() {
    console.log(this.props.viewport);
  }

  render() {
    return(
      <div id='home' style={styles.homeStyle}>
        <div className='animated fadeInUp'>
          <img src="undocubonds/undocubonds-color.png" alt=""/>
          <hr width='25%'/>
          <p style={{color: 'white', letterSpacing: '2px'}}>A resource center to help your loved ones</p>
          <Link to='/about'><RaisedButton label="Learn More" /></Link>
        </div>
        <Donate />
      </div>
    )
  }
}

const styles = {
  homeStyle: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default Home;
