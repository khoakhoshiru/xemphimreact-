import clsx from "clsx";
import { connect } from "react-redux";
import React, { Component } from "react";
import "./chair.css";

class Chair extends Component {
  render() {
    const { item, chairSelectedList, handleChair } = this.props;
    return (
      <div className="d-flex gap-3">
        <button
          className={clsx("chair", {
            booked: item.daDat,
            booking: chairSelectedList.find(ele => ele.soGhe === item.soGhe),
          })}
          disabled={item.daDat}
          onClick={() => {
            handleChair(item);
          }}
        >
          {item.soGhe}
        </button>
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return {
    chairSelectedList: state.chair.chairSelectedList,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleChair: chair => {
      dispatch({
        type: "CHANGE_CHAIR",
        payload: chair,
      });
    },
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(Chair);
