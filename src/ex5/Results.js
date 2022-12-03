import { connect } from "react-redux";
import React, { Component } from "react";
import clsx from "clsx";

class Results extends Component {
  render() {
    const { chairSelectedList } = this.props;
    return (
      <div>
        <h3>your booking</h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <td>số ghế</td>
                <td>giá tiền</td>
              </tr>
            </thead>
            <tbody>
              {chairSelectedList.map(item => {
                return (
                  <tr key={item.soGhe}>
                    <td>{item.soGhe}</td>
                    <td>{item.gia.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="mt-5">
            total :{""}
            {chairSelectedList
              .reduce((total, item) => {
                return (total += item.gia);
              }, 0)
              .toLocaleString()}
            {""}
            vnd
          </div>
        </div>
        <button className="btn btn-primary">thanh toán</button>
      </div>
    );
  }
}

//tao ham lay ve
const mapStatetoProps = state => {
  return {
    chairSelectedList: state.chair.chairSelectedList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handle: chair => {
      dispatch({
        type: "PAY",
        payload: chair,
      });
    },
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(Results);
