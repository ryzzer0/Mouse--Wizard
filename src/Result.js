import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './mouse wizard logo.png';
import loading from './loading.png';
import './loading.css';

function Result({ steps, filters }) {
  const [mice, setMice] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("filters = ", filters);
    axios.get('http://localhost:5000/mouse')
      .then(response => {
        const filteredMice = response.data.map(mouse => {
          let score = 0;
          console.log(filters?.hand);
          if (mouse?.hand.toLowerCase() === filters?.hand.toLowerCase()) {
            score += 0.2;
          }
          if (mouse?.color.toLowerCase() === filters?.color.toLowerCase()) {
            score += 0.1;
          }
          if (filters?.price === 'under30' && mouse?.price <= 30) {
            score += 0.3;
          } else if (filters?.price === 'between30and50' && mouse?.price > 30 && mouse?.price <= 50) {
            score += 0.3;
          } else if (filters?.price === 'between50and100' && mouse?.price > 50 && mouse?.price <= 100) {
            score += 0.3;
          } else if(filters?.price === 'above100' && mouse?.price > 100){
            score += 0.3;
          }
          if (mouse?.size.toLowerCase() === filters?.size.toLowerCase()){
            score += 0.1;
          }
          if(mouse?.connection.toLowerCase() === filters?.connection.toLowerCase()){
            score += 0.1;
          }
          if(mouse?.tracking.toLowerCase() === filters?.tracking.toLowerCase()){
            score += 0.2;
          }
          mouse.score = score;
          return mouse;
        });
        setIsLoading(false);
        console.log("filtered mice: ", filteredMice);
        setMice(filteredMice.sort((a, b) => b.score - a.score || a.price - b.price).slice(0, 3));
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [filters]);

  if (isLoading) {
    return <img src={loading} alt="Spinner" className="spinner"></img>;
  }

  return (
    <form className="result-form">
      <img src={logo} alt="mouse wizard Logo" class="logo" />
      <div className="result-container">
        <h2 className="result-title">Top 3 mice for you:</h2>
        <ul className="result-list">
          {mice.map(mouse => (
            <li key={mouse._id} className="result-item">
              <div className="result-image">
            <img src={mouse.image} alt={mouse.name} />
          </div>
          <div className="result-info">
            <div className="result-name">Name: {mouse.name}</div>
            <div className="result-price">Price: {mouse.price}</div>
            <div className="result-link">Amazon Link: <a href={mouse.link}>Buy now!</a></div>
          </div>
            </li>
          ))}
        </ul>
      </div>
      <div class="step-indicator">
            <div class={"step" + (steps === 0 ? " active" : "")}></div>
            <div class={"step" + (steps === 1 || steps === 2 || steps === 3 ? " active" : "")}></div>
            <div class={"step" + (steps === 4 ? " active" : "")}></div>
        </div>
    </form>
  );
}

export default Result;

