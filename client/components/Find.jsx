import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import * as description from './../assets/stateInfo.json';

const states = [
'National',
'Alabama',
'Alaska',
'Arizona',
'Arkansas',
'California',
'Colorado',
'Connecticut',
'Delaware',
'Florida',
'Georgia',
'Hawaii',
'Idaho',
'Illinois',
'Indiana',
'Iowa',
'Kansas',
'Kentucky',
'Louisiana',
'Maine',
'Maryland',
'Massachusetts',
'Michigan',
'Minnesota',
'Mississippi',
'Missouri',
'Montana',
'Nebraska',
'Nevada',
'New Hampshire',
'New Jersey',
'New Mexico',
'New York',
'North Carolina',
'North Dakota',
'Ohio',
'Oklahoma',
'Oregon',
'Pennsylvania',
'Rhode Island',
'South Carolina',
'South Dakota',
'Tennessee',
'Texas',
'Utah',
'Vermont',
'Virginia',
'Washington',
'West Virginia',
'Wisconsin',
'Wyoming'
];

// const description = {
//   'National': ['Freedom Federal Bonding Agency',
//               'http://www.freedomfederalbondingagency.com/ ',
//               '6309 Skyline DriveHouston, TX 77057',
//               'Teléfono: (832) 831-5252'],
//   'Alabama': ['Freedom Bail Bonding Co., Inc',
//               'http://www.freedombailbonding.com/',
//               '10610 Main Street Fairfax, VA 22030',
//               'Número gratuito: 1-888-4017200 VA: (703) 691-4900 MD: (301) 588-9600'],
//   'California': 'We da Best',
//   'New York': 'cry cry all the time'
// }

class Find extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      currentState: 'National',
    }
  }

  handleClick(state) {
    this.setState({currentState: state});
  }

  mapStates() {
    return states.map((state, i) => {
      return (
        <ListItem style={{margin: '0 auto'}} primaryText={state} key={i} onClick={() => this.handleClick(state)} />
      )
    })
  }

  mapDescription() {
    return description[this.state.currentState].map((elem, i) => {
      return (
        <li key={i} style={styles.liStyle}>
          {elem.name} <br/>
          {elem.address} <br/>
          {elem.phone} <br/>
          <a href={elem.url}>{elem.url}</a><br/>
        </li>
      )
    })
  }

  render() {
    return(
      <div style={{display: 'flex'}}>
        <List className='animated fadeInLeft' style={{width: '15%', height: '840px', padding: 0, overflow: 'scroll'}}>
          {this.mapStates()}
        </List>
        <Paper className='animated fadeInUp' zDepth={0} style={styles.paperStyle}>
          <ul style={{listStyle: 'none'}}>{this.mapDescription()}</ul>
        </Paper>
      </div>
    )
  }
}

const styles = {
  paperStyle: {
    textAlign: 'center',
    width: '85%',
    paddingTop: '10px'
  }
}

export default Find;
