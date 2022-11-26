import { useState } from 'react';
import Card from './components/card/card.js';
import './App.css'

function App() {
  const [price, setPrice] = useState(false);
  const handleChange = () => { 
    
    setPrice(!price); 
    
  };

  return (
    <div className="App">

      <div className="container">
        <div className="row">
          <div className="column">
            <div className="header">
              <h1 className="page-title">Our Pricing</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="switch-wrapper">
              Annually
              <label className="switch">
                <input type="checkbox" onChange={(e) => handleChange()} />
                <span className="slider round"></span>
              </label>
              Monthly
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="column">
            <Card className="card-secondary left" plan="Basic" price={price ? 19.99 : 199.99} storage="500 GB Storage" users="2 Users Allowed" sendable="Send up to 3 GB" />
          </div>
          <div className="column">
          <Card className="card-primary" plan="Professional" price={price ? 24.99 : 249.99} storage="1 TB Storage" users="5 Users Allowed" sendable="Send up to 10 GB" />
          </div>
          <div className="column">
          <Card className="card-secondary right" plan="Master" price={price ? 39.99 : 399.99} storage="2 TB Storage" users="10 Users Allowed" sendable="Send up to 20 GB" />
          </div>
        </div>
      </div>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  )
}

export default App
