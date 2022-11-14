import { connect } from "react-redux";
import React, { Component } from "react";
import Chair from "./Chair";

class ChairList extends Component {
  render() {
    const { chairList } = this.props;
    return (
      <div className="d-flex flex-column  gap-3 ">
        {chairList.map(item => {
          return (
            <div
              key={item.hang}
              className="d-flex  justify-content-center gap-3"
            >
              <div className="align-items-center" style={{ width: "30px" }}>
                {item.hang}
              </div>
              <div className="d-flex gap-3">
                {item.danhSachGhe.map(chair => {
                  return <Chair key={chair.soGhe} item={chair} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStatetoProps = state => {
  return {
    chairList: state.chair.chairList,
  };
};

export default connect(mapStatetoProps)(ChairList);
