import React from 'react';
import './App.css';
import BeginnerForm from './BeginnerForm';
import Result from './Result';
import AmateurForm from './AmateurForm';
import ProForm from './ProForm';
import logo from './mouse wizard logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      filters: {},
      topMice: [],
    };
    this.handleFiltersChange = this.handleFiltersChange.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  handleFiltersChange(filters) {
    this.setState({ filters });
  }

  handleNextClick(filters) {
    this.setState({ filters });
    this.setState({ step: 4 });
  }

  handleBackClick() {
    this.setState({ step: 0 });
  }


  render() {
    const { step, filters, topMice } = this.state;

    return (
      <div className="App">
        {step === 0 && (
          <div class="form">
            <div class="heading">
            <img src={logo} alt="mouse wizard Logo" class="logo"/>
            <h1>The Ultimate Mouse Selection Tool</h1>
            <p>What's your level of expertise?</p>
            </div>
            <div class="button-selection">
            <button onClick={() => this.setState({ step: 1 })}>Beginner</button>
            <button onClick={() => this.setState({ step: 2 })}>Amateur</button>
            <button onClick={() => this.setState({ step: 3 })}>Pro</button>
            </div>
            <div class="step-indicator">
            <div class={"step" + (step === 0 ? " active" : "")}></div>
            <div class={"step" + (step === 1 || step === 2 || step === 3 ? " active" : "")}></div>
            <div class={"step" + (step === 4 ? " active" : "")}></div>
            </div>
          </div>
        )}
        {step === 1 && (
          <BeginnerForm
            steps={step}
            filters={filters}
            onChange={this.handleFiltersChange}
            onNextClick={this.handleNextClick}
            onBackClick={this.handleBackClick}
          />
        )}
        {step === 2 && (
          <AmateurForm
            steps={step}
            filters={filters}
            onChange={this.handleFiltersChange}
            onNextClick={this.handleNextClick}
            onBackClick={this.handleBackClick}
          />
        )}
        {step === 3 && (
          <ProForm
            steps={step}
            filters={filters}
            onChange={this.handleFiltersChange}
            onNextClick={this.handleNextClick}
            onBackClick={this.handleBackClick}
          />
        )}
        {step === 4 && (
          <Result
            steps={step}
            filters={filters}
            topMice={topMice}
          />
        )}
      </div>
    );
  }
}

export default App;





