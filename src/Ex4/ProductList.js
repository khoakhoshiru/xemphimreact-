import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    return (
      <div className="row mt-3">
        {this.props.productList.map((item) => {
          return (
            <div key={item.id} className="col-4">
              <ProductItem item={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.product.products,
  };
};

export default connect(mapStateToProps)(ProductList);
