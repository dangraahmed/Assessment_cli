import { Action } from '@ngrx/store';
import { ICartState, IProduct, ICartProduct } from '../states/index';

export namespace Cart {

    export interface ICartActions {
        LOAD_PRODUCT: string;
        LOAD_PRODUCT_SUCCESSFUL: string;
        LOAD_PRODUCT_FAILED: string;

        ADD_TO_CART: string;
        REMOVE_TO_CART: string;
    }

    export const ActionTypes: ICartActions = {
        LOAD_PRODUCT: 'Cart Product Load',
        LOAD_PRODUCT_SUCCESSFUL: 'Cart Product Successful',
        LOAD_PRODUCT_FAILED: 'Cart Product Failed',

        ADD_TO_CART: 'Cart Add to cart',
        REMOVE_TO_CART: 'Cart Remove from cart',
    };

    export class CartAction implements Action {
        type = ActionTypes.LOAD_PRODUCT;
        payload: string = null;
    }

    export class CartSuccessfulAction implements Action {
        type = ActionTypes.LOAD_PRODUCT_SUCCESSFUL;
        constructor(public payload: object) { }
    }

    export class CartFailedAction implements Action {
        type = ActionTypes.LOAD_PRODUCT_FAILED;
        payload: string = null;
    }

    export class AddToCartAction implements Action {
        type = ActionTypes.ADD_TO_CART;
        constructor(public payload: IProduct) { }
    }

    export class RemoveFromCartAction implements Action {
        type = ActionTypes.REMOVE_TO_CART;
        constructor(public payload: ICartProduct) { }
    }

    export type Actions
        = CartAction
        | CartSuccessfulAction
        | CartFailedAction
        | AddToCartAction
        | RemoveFromCartAction;
}
