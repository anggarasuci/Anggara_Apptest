import {ContactModel} from '../../../domain/models/contact.model';
import {ContactActionType} from '../actions/contact.action';

export interface ContactState {
  items: ContactModel[];
  selectedItem: ContactModel | null;
  isRefreshState: boolean;
}

export const initialState: ContactState = {
  items: [],
  selectedItem: null,
  isRefreshState: false,
};

const contactReducer = (state: ContactState = initialState, action: any) => {
  switch (action.type) {
    case ContactActionType.SETS:
      return {...state, items: action.payload};
    case ContactActionType.SET:
      return {...state, items: [...state.items, action.payload]};
    case ContactActionType.UPDATE:
      const updatedItems = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {...item, ...action.payload};
        }
        return item;
      });
      return {...state, items: updatedItems};
    case ContactActionType.DELETE:
      const filteredItems = state.items.filter(
        item => item.id !== action.payload,
      );
      return {...state, items: filteredItems};
    case ContactActionType.GET:
      const selectedItem = state.items.find(item => item.id === action.payload);
      return {...state, selectedItem};
    case ContactActionType.REFRESH:
      return {...state, isRefreshState: action.payload};
    default:
      return state;
  }
};

export default contactReducer;
