import React, { Component } from "react";
import BlackCar from "../assets/img/black-car.jpg";
import RedCar from "../assets/img/red-car.jpg";
import SilverCar from "../assets/img/silver-car.jpg";
import SteelCar from "../assets/img/steel-car.jpg";

class Home extends Component {
  state = {
    carImage: SteelCar,
  };

  handleChangeColor = (img) => {
    this.setState({
      carImage: img,
    });
  };

  render() {
    return (
      <div>
        <img src={this.state.carImage} alt="" style={{ width: 500 }} />

        <h2>Pick color: </h2>
        <button
          onClick={() => {
            this.handleChangeColor(BlackCar);
          }}
        >
          Black
        </button>
        <button
          onClick={() => {
            this.handleChangeColor(RedCar);
          }}
        >
          Red
        </button>
        <button
          onClick={() => {
            this.handleChangeColor(SilverCar);
          }}
        >
          Silver
        </button>
        <button
          onClick={() => {
            this.handleChangeColor(SteelCar);
          }}
        >
          Steel
        </button>
      </div>
    );
  }
}

export default Home;
