import React, { Component } from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import './../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   viewport: {
    //     width: null,
    //     height: null,
    //   }
    // }
  }

  // componentDidMount() {
  //   window.addEventListener('resize', this._resize_mixin_callback);
  // }

  // _resize_mixin_callback() {
  //   this.setState({
  //     viewport: {
  //       width: document.documentElement.clientWidth,
  //       height: document.documentElement.clientHeight
  //     }
  //   });
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this._resize_mixin_callback);
  // }

  render() {
    return(
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}

export default App;