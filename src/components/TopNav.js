import React from "react";

function TopNav(props) {
  return (
    <div className="top-nav">
      <ul>
        <li><a href="#"
          onClick={() => props.changeCategory("headlights")}>Headlights</a>
        </li>
        <li><a href="#"
          onClick={() => props.changeCategory("tires")}>Tires</a>
        </li>
        <li><a href="#"
          onClick={() => props.changeCategory("bumpers")}>Bumpers</a>
        </li>
        <li><a href="#"
          onClick={() => props.changeCategory("audio")}>Audio Systems</a>
        </li>
        <div className="clear"> </div>
      </ul>
    </div>
  );
}

export default TopNav;