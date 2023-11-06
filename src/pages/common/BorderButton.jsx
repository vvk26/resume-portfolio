import React from "react";
import "./BorderButton.css"



const BorderButton = ({ children, ...rest }) => {
  return (
    <>
   <div ontouchstart="">
  <div class="button">
    <a href="#">Mobile First</a>
  </div>
</div>
    </>
  );
};

export default BorderButton;