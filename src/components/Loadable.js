import React from "react";
import Loadable from "react-loadable";

const Loading = (props) => {
  return (
    <div>Loading...</div>
  );
};

export default function CustomLoadable(opts) {
  return Loadable(Object.assign({
    loading: Loading
  }, opts));
};