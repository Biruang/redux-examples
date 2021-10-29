import React, {useState} from "react";
import {connect} from "react-redux";

export const List = () => {
  const [items, setItems] = useState()


  connect(
    (state, s) => {
    }
  )

  return(
    <ul>
      <li>
        <div>1</div>

        <div>name</div>

        <div>value</div>
      </li>
    </ul>
  )
}
