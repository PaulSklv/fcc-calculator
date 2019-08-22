import React from "react";
import Display from "./Display";
import NumPad from "./NumPad";

const App = () => {
  return (
  <div className='container'>
    <div className='display'>
      <Display />
    </div>
    <div className='num-pad'>
      <NumPad />
    </div>
  </div>
  );
};

export default App;
