
import React, { Component } from 'react';


export class Home extends Component{
  render(){
    console.log(this.props);
    return (
      <div>
       <p> "Im a new component" </p>
      </div>
    );
  };
};

export default Home;
