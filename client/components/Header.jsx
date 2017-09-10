import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

let mql;

let styles = {
  firstLinkStyle: {
    textDecoration: 'none',
    color: '#222',
    marginRight: '50%',
    marginLeft: '3%'
  },
  linkStyle: {
    textDecoration: 'none', 
    color: '#222',
    marginRight: '.5%'
  },
  appStyle: {
    backgroundColor: 'white',
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
          <Link to='/'><FlatButton hoverColor='none' labelStyle={{textTransform: 'none'}} style={styles.firstLinkStyle} label='UndocuBonds'/></Link>
          <Link to='/'><FlatButton hoverColor='none' labelStyle={{textTransform: 'none'}} style={styles.linkStyle} label='Home'/></Link>
          <Link to='/about'><FlatButton hoverColor='none' labelStyle={{textTransform: 'none'}} style={styles.linkStyle} label='About'/></Link>
          <Link to='/state'><FlatButton hoverColor='none' labelStyle={{textTransform: 'none'}} style={styles.linkStyle} label='Find a bond'/></Link>
          <Link to='/funds'><FlatButton hoverColor='none' labelStyle={{textTransform: 'none'}} style={styles.linkStyle} label='Community Funds'/></Link>
          <Link to='/resources'><FlatButton hoverColor='none' labelStyle={{textTransform: 'none'}} style={styles.linkStyle} label='Resources'/></Link>
          </div>
        }>
        </AppBar>
      </div>
    )
  }
}

export default Header;
