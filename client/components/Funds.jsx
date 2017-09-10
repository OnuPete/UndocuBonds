import React, { Component } from 'react';
import * as text from './../assets/fundsInfo.json';
import FlatButton from 'material-ui/FlatButton';
import Donate from './Donate.jsx';

class Funds extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='animated fadeIn' style={{margin: '0 auto'}}>
      <div style={{marginLeft: '5%', paddingRight: '5%', paddingTop: '2%', width: '90%', height: '750px', overflow: 'scroll', color: 'black'}} >
        {text.headInfo} <br/><br/>
        <h2>Online</h2><hr/>
                <li>{text.online.Bullet1}</li>
                <li>{text.online.Bullet2}</li>
                <ul>{text.online.Bullet3}</ul>
                <ul>{text.online.Bullet4}</ul><br/><br/>
        <h2>Tips and Tricks</h2><hr/>
                         <li>{text.tipsAndTricks.Bullet1}</li>
                         <li>{text.tipsAndTricks.Bullet2}</li>
                         <li>{text.tipsAndTricks.Bullet3}</li>
                         <li>{text.tipsAndTricks.Bullet4}</li><br/><br/>
        <h2>Money Apps</h2><hr/>
                    <li>{text.moneyApps.Bullet1}</li>
                    <li>{text.moneyApps.Bullet2}</li>
                    <li>{text.moneyApps.Bullet3}</li><br/><br/>
        <h2>Community Funding</h2><hr/>
                    <li>{text.communityFunding.Bullet1}</li><br/><br/>
      </div>
      <Donate />
      </div>
    );
  }
}

export default Funds;
