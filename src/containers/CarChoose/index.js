import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addCarType } from "../../actions";
import Choose from "../../components/Choose";

const mapStateToProps = state => {
  const carTypes = ["奔驰", "宝马"];
  return {
    selectedOption: state.carType,
    options: carTypes,
    title: '请选择车辆类型：'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select: id => {
      dispatch(addCarType(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Choose);
