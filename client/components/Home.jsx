import React, { Component } from 'react';
import './../styles/App.css'

class Home extends Component {
  componentDidMount() {
    console.log(this.props.viewport);
  }

  render() {
    return(
      <div id='home' style={{textAlign: 'center'}}>
        <div className='animated fadeInUp'>
        <p style={{margin: '0 auto', paddingTop: '8%', fontSize: '3em', color: 'white', display: 'inline-block', letterSpacing: '2px'}}>Undocu</p>
        <p style={{margin: '0 auto', paddingTop: '8%', fontSize: '3.4em', color: 'white', display: 'inline-block', letterSpacing: '2px'}}>Bonds</p>
        <hr width='25%'/>
        <p style={{color: 'white', letterSpacing: '2px'}}>A resource center to help your loved ones</p>
        </div>
      </div>
    )
  }
}

export default Home;