import React, { useState } from "react";
import "./styled.css";
import {connect, ConnectedProps} from "react-redux";
import {ADD_LIST_ITEM} from "../../reducers/list";
import {TRootReducer} from "../../reducers";

type TProps = ConnectedProps<typeof connector>;

const Form = (props: TProps) => {
  const [name, setName] = useState<string>();
  const [value, setValue] = useState<number>();

  const onNameChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setName(ev.target.value);
  };

  const onValueChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(ev.target.value));
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    if (name && value) {
      props.dispatch({
        type: ADD_LIST_ITEM,
        payload: {
          id: props.items.length + 1,
          name: name,
          value: value,
        }
      })
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={name} onChange={onNameChange} />

      <input type="number" value={value} onChange={onValueChange} />

      <button type="submit">Add</button>
    </form>
  );
}

const mapStateToProps = (state: TRootReducer) => ({
  items: state.list.items
});

const connector = connect(mapStateToProps)

export default connector(Form)
