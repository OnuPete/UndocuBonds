import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper'

let states = [
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
]

class Find extends Component { 
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      currentState: '',
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

  render() {
    return(
      <div style={{display: 'flex'}}>
        <List style={{width: '15%', height: '840px', padding: 0, overflow: 'scroll'}}>
          {this.mapStates()}
        </List>
        <Paper zDepth={0} style={{width: '85%', paddingTop: '10px'}}>Lorem Ipsom cudle da too</Paper>
      </div>
    )
  }
}

export default Find;