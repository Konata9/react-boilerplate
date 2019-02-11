import React from "react";
import Bundle from "./Bundle";

const Loading = () => <div>Loading...</div>;

const lazyLoad = (loadComponent) => (props) => (
  <Bundle load={loadComponent}>
    {(Comp) => (Comp ? <Comp {...props} /> : <Loading />)}
  </Bundle>
);
export default lazyLoad;
