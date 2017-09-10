import React, { Component } from 'react';

class About extends Component {
  render() {
    return(
      <div className='animated fadeIn' style={{marginLeft: '10%', marginTop: '2%', width: '80%'}}>
        <h2>About</h2><hr/>
        <p>UndocuBonds was created by a group of immigrant youth at Undocuhackathon to provide financial resources to undocumented immigrants. We believe no one should be separated from their families due to lack of money and legal resources.<br/><br/>
        UndocuBonds provides resources on bail bonds, strategies, knowledge and financial support. We encourage you to use our resources to your advantage!</p>

        <h2>What is a Bond?</h2><hr/>
        An Immigration Bond is an amount of money set by Immigration and Customs Enforcement or by an immigration judge. The FULL amount must be paid. This ensures the detainees appearance FOR ALL REMOVAL PROCEEDINGS<br/>
        <h2>Disclaimer</h2><hr/>
        If you or a family member cannot post bond because it is too high, you may consider using a bail bondsmen.  Although this may be the only option to get a family member released from detention, there are many risks to consider if you choose to use a bail bondsman.
        <br/><li>
        Bail bondsmen charge a nonrefundable fee to post bail.  Some bondsmen will charge an additional fee for every year the money is not returned.  Bail bondsmen may ask for collateral and may report failure to pay to credit reporting agencies.
        </li><br/>
        <li>
        Immigration bail bondsmen must have a special type of license called a “special-casualty” license.  You may contact the New York State Insurance Department Licensing Authority, Licensing Services Bureau at (518) 474-6630 to inquire about a license about a particular bondsman.
        </li><br/>
        <li>
        An immigration bond is a contract between the person posting bond and ICE.  If you choose to use a bail bondsman, that contract exists between the bail bondsmen and ICE.
        </li><br/>
        <li>
        As part of the contract, ICE may contact the bail bondsmen to have the bonded noncitizen appear for a hearing, interview or removal/ departure.  ICE tells the bail bondsmen to do this by sending a “Notice to Obligor to Deliver Alien.”  You should have an understanding with the bail bondsmen about how s/he will communicate with you if s/he receives such a form!!!!!  This should be a written agreement!
        </li><br/>
        <h2>Can bonds be lowered? </h2><hr/>
        An immigration judge is able to lower the amount of a bond if he or she determines that the amount doesn’t meet the offense.
      </div>
    )
  }
}

export default About;
