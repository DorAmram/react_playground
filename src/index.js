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
  render () {
    return 
    <button className="Square">
      {this.props.value}
    </button>
  }
}

// ####################################################

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
