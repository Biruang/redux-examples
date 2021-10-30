import React from "react";
import "./styled.css";
import { Item } from "../Item";
import {connect, ConnectedProps} from "react-redux";
import {TRootReducer} from "../../reducers";

type TProps = ConnectedProps<typeof connector>;

const List = (props: TProps) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={item.id}>
          <Item item={item} position={index + 1} />
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state: TRootReducer) => ({
  items: state.list.items
});

const connector = connect(mapStateToProps);

export default connector(List)
