import {Reducer} from "redux";
export const SET_LIST_ITEMS = 'SET_LIST_ITEMS';
export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';

export type TAddAction = {
  type: typeof ADD_LIST_ITEM,
  payload: TListItem
}

export type TSetAction = {
  type: typeof SET_LIST_ITEMS,
  payload: TListItem[]
}

export type TDeleteAction = {
  type: typeof DELETE_LIST_ITEM,
  payload: number
}

export type TListItem = {
  id: number,
  name: string,
  value: number
}

export type TListState = {
  items: TListItem[]
}

const initialState: TListState = {
  items: []
}

export const listReducer: Reducer<TListState, TSetAction | TDeleteAction | TAddAction> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST_ITEM: {
      if (!action.payload) return state;

      const newItems = [...state.items];
      newItems.push(action.payload);

      return {
        ...state,
        items: newItems,
      }
    }
    case SET_LIST_ITEMS: {
      if(!action.payload) return state;

      return {
        ...state,
        items: action.payload
      }
    }
    case DELETE_LIST_ITEM: {
      if(!action.payload) return state
      const newItems = state.items.filter(el => el.id !== action.payload)

      return {
        ...state,
        items: newItems
      }
    }
    default: {
      return state
    }
  }
}
