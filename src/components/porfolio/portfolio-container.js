import React, { Component } from 'react';

import PortfolioItem from "./portfolio-item";

export default class App extends Component {
  constructor() {
    super();

    console.log("The container has rendered")
  }

  portfolioItems(){
    const data =["Quip", "Eventbrite", "Ministry Safe", "Swing life"];

    return data.map(item => {
      return <h1>{item}</h1>;
    })

  }

  render() {
    return (
      <div className='app'>
        <div>
            <h2>Portfolio Items Go Here Updated</h2>
          

          {this.portfolioItems()}

          
        </div>
      </div>
    );
  }
}
