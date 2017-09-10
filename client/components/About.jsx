import React, { Component } from 'react';
import { List } from 'material-ui/List';
import QAComponent from './QAComponent.jsx';

class About extends Component {
  constructor(props) {
    super(props);
    this.handleNestedListToggle = this.handleNestedListToggle.bind(this);
    this.state = {
      opens: [false, false, false, false, false, false, false]
    }
  }

  handleNestedListToggle(key) {
    const opens = [...this.state.opens];
    opens[key] = !opens[key]
    this.setState({opens});
  }

  render() {
    return(
      <div className='animated fadeIn' style={{marginLeft: '10%', marginTop: '2%', width: '80%'}}>
        <h2>About</h2><hr/>
        <p>UndocuBonds was created by a group of immigrant youth at Undocuhackathon to provide financial resources to undocumented immigrants. We believe no one should be separated from their families due to lack of money and legal resources.<br/><br/>
        UndocuBonds provides resources on bail bonds, strategies, knowledge and financial support. We encourage you to use our resources to your advantage!</p>

        <List>
          <QAComponent
            keyProp={0}
            open={this.state.opens[0]}
            handleNestedListToggle={()=>this.handleNestedListToggle(0)}
            question="What is a Bond?"
            answer="An Immigration Bond is an amount of money set by Immigration and Customs Enforcement or by an immigration judge." />
          <QAComponent
            keyProp={1}
            open={this.state.opens[1]}
            handleNestedListToggle={()=>this.handleNestedListToggle(1)}
            question="From how much can bonds range?"
            answer="$1,500- $20,000" />
          <QAComponent
            keyProp={2}
            open={this.state.opens[2]}
            handleNestedListToggle={()=>this.handleNestedListToggle(2)}
            question="Can bonds be lowered?"
            answer="You may petition for a bond to be lowered. The immigration judge determines the amount of a bond." />
          <QAComponent
            keyProp={3}
            open={this.state.opens[3]}
            handleNestedListToggle={()=>this.handleNestedListToggle(3)}
            question="Who qualifies for a bond?"
            answer="Someone who is not a flight risk and is not a threat to the community" />
          <QAComponent
            keyProp={4}
            open={this.state.opens[4]}
            handleNestedListToggle={()=>this.handleNestedListToggle(4)}
            question="What disqualifies someone from obtaining a bond?"
            answer="Drug crimes\nPast deportation orders" />
          <QAComponent
            keyProp={5}
            open={this.state.opens[5]}
            handleNestedListToggle={()=>this.handleNestedListToggle(5)}
            question="Is there different types of bonds?"
            answer="Yes,\nDelivery bond and voluntary departure bond,\nDelivery bond - makes sure that the detainee shows up to all immigration hearings. They can return to spend time with their family/friends and prepare for court hearings with an immigration lawyer.\nVoluntary departure bond –  Detainees are given the option to voluntarily leave the country at their own expense by a particular time period. The bond is refundable once the person has left the country, but will not be refunded if the person does not leave." />
          <QAComponent
            keyProp={6}
            open={this.state.opens[6]}
            handleNestedListToggle={()=>this.handleNestedListToggle(6)}
            question="How to have a successful bond hearing?"
            answer="Take  a lawyer\nTake your  family and friends to the bond hearing" />
        </List>
        <br/>
        <h2>Disclaimer</h2><hr/>
        <img src="undocubonds/undocubonds-disclaimer.png" alt="" style={{width: '100%'}}/>
      </div>
    )
  }
}

export default About;
