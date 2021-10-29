import {Reducer} from "redux";

export type TListItem = {
  id: string,
  name: string,
  value: number
}

type TState = {
  items: TListItem[]
}

const initialState: TState = {
  items: []
}

export const listReducer: Reducer<TState> = (state = initialState, action) => {
  switch (action) {
    default: {
      return state
    }
  }
}
