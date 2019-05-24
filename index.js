import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Hero from './Hero';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Hero settings={this.state.settings} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
