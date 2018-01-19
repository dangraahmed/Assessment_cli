import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { CartService } from '../services/cart.service';
import { Cart } from '../actions/index';

@Injectable()
export class CartEffects {
    // @Effect() loadCartSlabs$: Observable<Action> = this.actions$
    //     .ofType(Cart.ActionTypes.LOAD_PRODUCT)
    //     .switchMap(() => this.cartService.getProduct())
    //     .map(payload => new Cart.CartSuccessfulAction(payload))
    //     .catch(() => Observable.of(new Cart.CartFailedAction()));

    @Effect()
    loadCart$: Observable<Action> = this.actions$
        .ofType(Cart.ActionTypes.LOAD_PRODUCT)
        .debounceTime(300)
        .map(toPayload)
        .switchMap(param => {
            return this.cartService.getProduct()
                .map(payload => {
                    return new Cart.CartSuccessfulAction(payload);
                })
                .catch((e) => {
                    return Observable.of(new Cart.CartFailedAction());
                });
        });

        // @Effect()
        // addToCart$: Observable<Action> = this.actions$
        //     .ofType(Cart.ActionTypes.ADD_TO_CART)
        //     .debounceTime(300)
        //     .map(toPayload)
        //     .switchMap(param => {
        //         return this.cartService.getProduct()
        //             .map(payload => {
        //                 return new Cart.AddToCartSuccessfulAction(payload);
        //             })
        //             .catch((e) => {
        //                 return Observable.of(new Cart.AddToCartFailedAction());
        //             });
        //     });

    constructor(
        private store: Store<any>,
        private actions$: Actions,
        private cartService: CartService) {

    }
}
