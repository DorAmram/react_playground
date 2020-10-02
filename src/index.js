import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


class Board extends React.Component {
  renderSquare(i){
    return <Square value={i} />
  }
}

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render () {
    return 
    <button 
      className="Square" 
      onClick={() => this.setState({value: 'X'})}
    >
      {this.props.value}
    </button>
  }
}

// ####################################################

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
