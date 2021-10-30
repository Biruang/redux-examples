import React from "react";
import {TListItem} from "../../reducers/list";

interface IItem {
  item: TListItem;
  position: number;
}

export const Item: React.FC<IItem> = ({ item, position }) => {
  return (
    <>
      <div>{position}</div>

      <div>{item.name}</div>

      <div>{item.value}</div>
    </>
  );
};
