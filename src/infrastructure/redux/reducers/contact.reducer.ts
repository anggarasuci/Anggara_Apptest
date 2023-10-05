import {ContactModel} from '../../../domain/models/contact.model';
import {ContactActionType} from '../actions/contact.action';

const initialState: ContactModel[] = [];

const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ContactActionType.SETS:
      return action.payload;
    case ContactActionType.SET:
      return state.push(action.payload);
    case ContactActionType.UPDATE:
      const result = state.map(item => {
        if (item.id === action.payload.id) {
          return {...item, ...action.payload};
        }
        return item;
      });
      return result;
    case ContactActionType.DELETE:
      return state.filter(item => item.id != action.payload);
    default:
      return state;
  }
};

export default contactReducer;
