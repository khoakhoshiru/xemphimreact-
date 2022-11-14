import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { imgSrc_jpg, name } = this.props.item;
    return (
      <div className="card p-2 mb-4">
        <img alt="" src={imgSrc_jpg} />
        <h3>{name}</h3>
        <button className="btn btn-info">Mặc thử</button>
      </div>
    );
  }
}

export default ProductItem;
