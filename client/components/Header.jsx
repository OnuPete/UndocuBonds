import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

let mql;

let styles = {
  linkStyle: {
    textDecoration: 'none', 
    width: '20%',
    color: '#222',
  },
  appStyle: {
    backgroundColor: '#55AABF',
    textAlign: 'center',
  }
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: null,
    }
  }

  render() {
    return(
      <div>
        <AppBar style={styles.appStyle} showMenuIconButton={this.state.isMobile} title={
          <div>
          <Link style={{width: '19%'}} to='/'><FlatButton hoverColor='white' style={styles.linkStyle} label='UndocuBonds'/></Link>
          <Link style={{width: '19%'}} to='/about'><FlatButton hoverColor='white' style={styles.linkStyle} label='About'/></Link>
          <Link style={{width: '19%'}} to='/state'><FlatButton hoverColor='white' style={styles.linkStyle} label='Find a bond'/></Link>
          <Link style={{width: '19%'}} to='/funds'><FlatButton hoverColor='white' style={styles.linkStyle} label='Community Funds'/></Link>
          <Link style={{width: '19%'}} to='/resources'><FlatButton hoverColor='white' style={styles.linkStyle} label='Resources'/></Link>
          </div>
        }>
        </AppBar>
      </div>
    )
  }
}

export default Header;
