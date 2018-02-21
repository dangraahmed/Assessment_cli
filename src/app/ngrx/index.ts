import { combineReducers } from '@ngrx/store';
import { ActionReducerMap } from '@ngrx/store';

import * as fromCart from '../index';

export interface IAppState {
  cart: fromCart.ICartState;
}

export const reducers: ActionReducerMap<IAppState> = {
  cart: fromCart.cartReducer,
};

// const rootReducer = combineReducers(reducers);

// export function AppReducer(state: any, action: any) {
//   return rootReducer(state, action);
// }

export function getProduct(state: IAppState) {
  return state.cart;
}
