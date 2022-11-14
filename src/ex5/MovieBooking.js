import React, { Component } from "react";
import ChairList from "./ChairList";
import Results from "./Results";

export default class MovieBooking extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center fw-bold my-5">
          Đặt vé xem phim cyberMoviez
        </h2>
        <div className="row">
          <div className="col-8 text-center">
            <div className="bg-black text-white mb-3 text-center fs-2">
              screen
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <ChairList />
            </div>
          </div>
          <div className="col-4">
            <Results />
          </div>
        </div>
      </div>
    );
  }
}
