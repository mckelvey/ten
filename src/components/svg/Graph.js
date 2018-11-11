import React from 'react';
// import PropTypes from 'prop-types';

class Graph extends React.PureComponent {

  constructor(props){
    super(props);
    this.handleGrab = this.handleGrab.bind(this);
  }

  handleGrab() {
    //
  }

  render() {
    return (
      <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
        <path fill="none" stroke="rebeccapurple" d="M 0,99 L 300,99 Z" />
      </svg>
    );
  }

}

Graph.propTypes = {
  // count: PropTypes.number.isRequired,
};

export default Graph;
