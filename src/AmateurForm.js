import React, { useState } from 'react';
import logo from './mouse wizard logo.png';

const AmateurForm = ({ steps, onBackClick, onNextClick }) => {
  const [hand, setHand] = useState('any hand');
  const [color, setColor] = useState('any color');
  const [price, setPrice] = useState('any price');
  const [size, setSize] = useState('any size');
  const [connection, setConnection] = useState('any connection');
  const [tracking, setTracking] = useState('any tracking');
  

  
  const handleSubmit = (event) => {
    event.preventDefault();
    onNextClick({hand, color, price, size, connection, tracking});
  }


  return (
    <form class="amateurform" onSubmit={handleSubmit}>
      <img src={logo} alt="mouse wizard Logo" class="logo" />
      <h2>Now Choose:</h2>
      <label>
      <h3>Preferred Hand:</h3>
        <div>
          <input
            type="radio"
            id="left"
            name="hand"
            value="left"
            checked={hand === "left"}
            onChange={(e) => setHand(e.target.value)}
          />
          <label htmlFor="left">Left</label>
        </div>
        <div>
          <input
            type="radio"
            id="right"
            name="hand"
            value="right"
            checked={hand === "right"}
            onChange={(e) => setHand(e.target.value)}
          />
          <label htmlFor="right">Right</label>
        </div>
        <div>
          <input
            type="radio"
            id="ambidextrous"
            name="hand"
            value="ambidextrous"
            checked={hand === "ambidextrous"}
            onChange={(e) => setHand(e.target.value)}
          />
          <label htmlFor="ambidextrous">Ambidextrous</label>
        </div>
        <div>
          <input
            type="radio"
            id="any hand"
            name="hand"
            value="any hand"
            checked={hand === "any hand"}
            onChange={(e) => setHand(e.target.value)}
          />
          <label htmlFor="any hand">Any</label> 
        </div>

      </label>
      <label>
      <h3>Preferred Color:</h3>
        <div>
          <input
            type="radio"
            id="red"
            name="color"
            value="red"
            checked={color === "red"}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor="red">Red</label>
        </div>
        <div>
          <input
            type="radio"
            id="green"
            name="color"
            value="green"
            checked={color === "green"}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor="green">Green</label>
        </div>
        <div>
          <input
            type="radio"
            id="black"
            name="color"
            value="black"
            checked={color === "black"}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor="black">Black</label>
        </div>
        <div>
          <input
            type="radio"
            id="white"
            name="color"
            value="white"
            checked={color === "white"}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor="white">White</label>
        </div>
        <div>
          <input
            type="radio"
            id="any color"
            name="color"
            value="any color"
            checked={color === "any color"}
            onChange={(e) => setColor(e.target.value)}
          />
          <label htmlFor="any color">Any</label> 
        </div>
      </label>
      <label>
       <h3>Price Range:</h3>
        <div>
          <input
            type="radio"
            id="under30"
            name="price"
            value="under30"
            checked={price === "under30"}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="under30">$0 - $30</label>
        </div>
        <div>
          <input
            type="radio"
            id="between30and50"
            name="price"
            value="between30and50"
            checked={price === "between30and50"}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="between30and50">$30 - $50</label>
        </div>
        <div>
          <input
            type="radio"
            id="between50and100"
            name="price"
            value="between50and100"
            checked={price === "between50and100"}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="between50and100">$50 - 100$</label>
        </div>
        <div>
          <input
            type="radio"
            id="above100"
            name="price"
            value="above100"
            checked={price === "above100"}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="above100">$100+</label>
        </div>
        <div>
          <input
            type="radio"
            id="any price"
            name="price"
            value="any price"
            checked={price === "any price"}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="any price">Any</label> 
        </div>
      </label>
      <label>
      <h3>Preferred Size:</h3>
        <div>
          <input
            type="radio"
            id="small"
            name="size"
            value="small"
            checked={size === "small"}
            onChange={(e) => setSize(e.target.value)}
          />
          <label htmlFor="small">Small</label>
        </div>
        <div>
          <input
            type="radio"
            id="medium"
            name="size"
            value="medium"
            checked={size === "medium"}
            onChange={(e) => setSize(e.target.value)}
          />
          <label htmlFor="medium">Medium</label>
        </div>
        <div>
          <input
            type="radio"
            id="large"
            name="size"
            value="large"
            checked={size === "large"}
            onChange={(e) => setSize(e.target.value)}
          />
          <label htmlFor="large">Large</label>
        </div>
        <div>
          <input
            type="radio"
            id="any size"
            name="size"
            value="any size"
            checked={size === "any size"}
            onChange={(e) => setSize(e.target.value)}
          />
          <label htmlFor="any size">Any</label> 
        </div>
      </label>
      <label>
      <h3>Connection Type:</h3>
        <div>
          <input
            type="radio"
            id="wired"
            name="connection"
            value="wired"
            checked={connection === "wired"}
            onChange={(e) => setConnection(e.target.value)}
          />
          <label htmlFor="wired">Wired</label>
        </div>
        <div>
          <input
            type="radio"
            id="wireless"
            name="connection"
            value="wireless"
            checked={connection === "wireless"}
            onChange={(e) => setConnection(e.target.value)}
          />
          <label htmlFor="wireless">Wireless</label>
        </div>
        <div>
          <input
            type="radio"
            id="any connection"
            name="connection"
            value="any connection"
            checked={connection === "any connection"}
            onChange={(e) => setConnection(e.target.value)}
          />
          <label htmlFor="any connection">Any</label> 
        </div>
      </label>
        <div class="bottom">
        <div class="step-indicator">
            <div class={"step" + (steps === 0 ? " active" : "")}></div>
            <div class={"step" + (steps === 1 || steps === 2 || steps === 3 ? " active" : "")}></div>
            <div class={"step" + (steps === 4 ? " active" : "")}></div>
        </div>
        <div class="back-next-button">
          <button class="back-button" type="button" onClick={onBackClick}>
            Back
          </button>
          <button class="next-button" type="submit">
            Next
          </button>
        </div>
        </div>
      
    </form>
  );
};

export default AmateurForm;